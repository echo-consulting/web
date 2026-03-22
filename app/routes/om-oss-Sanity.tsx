// om-oss-sanity.tsx
import { client } from "../sanityClient";
import { createImageUrlBuilder } from "@sanity/image-url";
import ReactMarkdown from "react-markdown";
import { useEffect, useState } from "react";
import { Mail, Instagram, Linkedin, User } from "lucide-react";

type SanityImage = {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
};

const builder = createImageUrlBuilder(client);
function urlFor(source: SanityImage) {
  return builder.image(source);
}

interface Member {
  role: string;
  profile?: {
    _id: string;
    name: string;
    picture?: SanityImage;
  };
}

interface GroupData {
  name: string;
  description?: string;
  image?: SanityImage;
  socials?: {
    email?: string;
    instagram?: string;
    linkedin?: string;
  };
  members?: Member[];
}

export default function OmOssSanity() {
  const [data, setData] = useState<GroupData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client
      .fetch(`
      *[_type == "studentGroup" && slug.current == "consulting"][0]{
        name,
        description,
        image,
        socials,
        members[]{
          role,
          profile->{
            _id,
            name,
            picture
          }
        }
      }
    `)
      .then((res) => {
        setData(res);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="pt-32 text-center text-white">Laster innhold...</div>;
  if (!data) return <div className="pt-32 text-center text-white">Fant ikke gruppen</div>;

  return (
    <div className="relative z-10 pt-32 px-8 max-w-[900px] mx-auto text-white pb-20">
      {/* 1. HOVEDBILDE */}
      {data.image && (
        <div className="mb-12">
          <img
            src={urlFor(data.image).width(1200).auto("format").url()}
            alt={data.name}
            className="w-full rounded-xl shadow-2xl"
          />
        </div>
      )}

      <h1 className="text-5xl font-bold mb-8 tracking-tight">{data.name}</h1>

      {data.description && (
        <div className="prose prose-invert prose-lg max-w-none mb-16 opacity-90 text-gray-200">
          <ReactMarkdown>{data.description}</ReactMarkdown>
        </div>
      )}

      {/* 3. VÅRT TEAM */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-8 border-b border-gray-800 pb-4">Vårt Team</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {data.members?.map((member, idx) => (
            <div key={member.profile?._id || idx} className="flex flex-col items-center group">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden mb-4 border-2 border-gray-800 shadow-xl bg-gray-900 group-hover:border-blue-500 transition-colors duration-300">
                {member.profile?.picture ? (
                  <img
                    src={urlFor(member.profile.picture)
                      .width(400)
                      .height(400)
                      .fit("crop")
                      .auto("format")
                      .url()}
                    alt={`Portrett av ${member.profile.name}`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-500 bg-gray-800">
                    <User size={40} />
                  </div>
                )}
              </div>
              <p className="font-bold text-lg leading-tight group-hover:text-blue-400 transition-colors text-center">
                {member.profile?.name || "Navn mangler"}
              </p>
              <p className="text-gray-400 text-xs font-semibold uppercase mt-1 tracking-widest text-center">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. KONTAKT */}
      <section className="bg-[#011627] p-8 rounded-2xl border border-gray-800 shadow-inner">
        <h2 className="text-2xl font-bold mb-6 italic text-blue-400">Kontakt oss</h2>
        <div className="flex flex-wrap gap-8">
          {data.socials?.email && (
            <a
              href={`mailto:${data.socials.email}`}
              className="flex items-center gap-3 hover:text-blue-400 transition-all"
            >
              <Mail size={22} />
              <span className="font-medium">E-post</span>
            </a>
          )}
          {data.socials?.instagram && (
            <a
              href={data.socials.instagram}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 hover:text-pink-500 transition-all"
            >
              <Instagram size={22} />
              <span className="font-medium">Instagram</span>
            </a>
          )}
          {data.socials?.linkedin && (
            <a
              href={data.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 hover:text-blue-600 transition-all"
            >
              <Linkedin size={22} />
              <span className="font-medium">LinkedIn</span>
            </a>
          )}
        </div>
      </section>
    </div>
  );
}
