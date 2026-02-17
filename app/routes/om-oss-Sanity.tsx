import { client } from "../sanityClient";

export default async function OmOssPage() {
  // Vi henter hele dokumentet med alle felt (...)
  const data = await client.fetch(`
    *[_type == "studentGroup" && slug.current == "consulting"][0]
  `);

  // Sjekk om vi i det hele tatt får svar
  if (!data) {
    return (
      <div style={{ padding: "2rem", color: "red" }}>
        Kunne ikke koble til Sanity eller fant ikke dokumentet.
      </div>
    );
  }

  return (
    <div
      style={{
        padding: "2rem",
        maxWidth: "800px",
        margin: "0 auto",
        color: "white",
        background: "#010F1B",
      }}
    >
      {/* 1. Viser tittelen */}
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>{data.title}</h1>

      {/* 2. Enkel rendering av tekstblokker (Portable Text manuelt) */}
      <div style={{ lineHeight: "1.6" }}>
        {data.content?.map((block: any, index: number) => {
          // Sanity lagrer vanligvis tekst i 'children'-arrayet til en blokk
          if (block._type === "block" && block.children) {
            const text = block.children.map((child: any) => child.text).join("");
            return (
              <p key={index} style={{ marginBottom: "1.2rem" }}>
                {text}
              </p>
            );
          }
          return null;
        })}
      </div>

      <hr style={{ margin: "2rem 0", opacity: 0.2 }} />

      {/* 3. DEBUG: Viser alt som ligger i Sanity-dokumentet som tekst */}
      <div
        style={{ background: "#011627", padding: "1rem", borderRadius: "8px", fontSize: "0.8rem" }}
      >
        <p style={{ color: "#ADB7BE", marginBottom: "0.5rem" }}>
          // Rådata fra Sanity (Alt innhold):
        </p>
        <pre style={{ overflowX: "auto" }}>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </div>
  );
}
