import { client } from "../sanityClient";
import createImageUrlBuilder from "@sanity/image-url";
import ReactMarkdown from "react-markdown";
import { useEffect, useState } from "react";
import { Mail, Instagram, Linkedin, Facebook, User } from "lucide-react";

//Sanity query: *[_type == "studentGroup" && slug.current == "consulting"][0]
const builder = createImageUrlBuilder(client);
function urlFor(source: any) {
  return builder.image(source);
}

interface Member {
  role: string;
  profile?: {
    _id: string;
    name: string;
    image?: {
      asset: {
        _ref: string;
        _type: "reference";
      };
      _type: "image";
    };
  };
}

export default function OmOssSanity() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client
      .fetch(`
      *[_type == "studentGroup" && slug.current == "consulting"][0]{
        name,
        description,
        image, // HENT KUN NAVNET PÅ FELTET (ikke {asset->})
        socials,
        members[]{
          role,
          profile->{
            _id,
            name,
            image // HENT KUN NAVNET PÅ FELTET HER OGSÅ
          }
        }
      }
    `)
      .then((res) => {
        console.log("Sjekk denne i console:", res.image); // Her skal du se _ref nå
        setData(res);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="pt-32 text-center text-white">Laster innhold...</div>;
  if (!data)
    return <div className="pt-32 text-center text-white">Fant ikke gruppen "consulting"</div>;

  return (
    <div className="relative z-10 pt-32 px-8 max-w-[900px] mx-auto text-white pb-20">
      {/* 1. HOVEDBILDE */}
      {data.image && (
        <div className="mb-4">
          {/* Denne linjen vil avsløre om URL-en faktisk blir laget */}
          <p className="text-[10px] text-gray-500 break-all">
            DEBUG URL: {urlFor(data.image).url()}
          </p>

          <img
            src={urlFor(data.image).width(1200).url()}
            alt={data.name}
            className="w-full rounded-xl shadow-2xl"
          />
        </div>
      )}

      {/* 2. TITTEL OG BESKRIVELSE */}
      <h1 className="text-5xl font-bold mb-8 tracking-tight">{data.name}</h1>

      {data.description && (
        <div className="prose prose-invert prose-lg max-w-none mb-16 opacity-90">
          <ReactMarkdown>{data.description}</ReactMarkdown>
        </div>
      )}

      {/* 3. VÅRT TEAM (Medlemmer med bilder) */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-8 border-b border-gray-800 pb-4">Vårt Team</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {data.members?.map((member: Member, idx: number) => (
            <div key={member.profile?._id || idx} className="flex flex-col items-center group">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden mb-4 border-2 border-gray-800 shadow-xl bg-[#011627]">
                {member.profile?.image ? (
                  <img
                    src={urlFor(member.profile.image)
                      .width(300)
                      .height(300)
                      .fit("crop")
                      .auto("format")
                      .url()}
                    alt={member.profile.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-500">
                    <User size={48} />
                  </div>
                )}
              </div>
              <p className="font-bold text-lg text-center">{member.profile?.name}</p>
              <p className="text-blue-400 text-sm font-medium uppercase tracking-tighter">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. KONTAKT & SOSIALE MEDIER (Med ikoner) */}
      <section className="bg-[#011627] p-8 rounded-2xl border border-gray-800 shadow-inner">
        <h2 className="text-2xl font-bold mb-6">Kontakt oss</h2>
        <div className="flex flex-wrap gap-8">
          {data.socials?.email && (
            <a
              href={`mailto:${data.socials.email}`}
              className="flex items-center gap-3 hover:text-blue-400 transition-all transform hover:-translate-y-1"
            >
              <div className="p-2 bg-blue-500/10 rounded-lg">
                <Mail size={22} className="text-blue-400" />
              </div>
              <span className="font-medium">E-post</span>
            </a>
          )}

          {data.socials?.instagram && (
            <a
              href={data.socials.instagram}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 hover:text-pink-500 transition-all transform hover:-translate-y-1"
            >
              <div className="p-2 bg-pink-500/10 rounded-lg">
                <Instagram size={22} className="text-pink-500" />
              </div>
              <span className="font-medium">Instagram</span>
            </a>
          )}

          {data.socials?.linkedin && (
            <a
              href={data.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 hover:text-blue-600 transition-all transform hover:-translate-y-1"
            >
              <div className="p-2 bg-blue-700/10 rounded-lg">
                <Linkedin size={22} className="text-blue-600" />
              </div>
              <span className="font-medium">LinkedIn</span>
            </a>
          )}

          {data.socials?.facebook && (
            <a
              href={data.socials.facebook}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 hover:text-blue-500 transition-all transform hover:-translate-y-1"
            >
              <div className="p-2 bg-blue-500/10 rounded-lg">
                <Facebook size={22} className="text-blue-500" />
              </div>
              <span className="font-medium">Facebook</span>
            </a>
          )}
        </div>
      </section>
    </div>
  );
}
