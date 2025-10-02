import { ArrowRight } from "lucide-react";

type ProjectDetailProps = {
  slug: string;
  title: string;
  desc: string;
  small_img: string;
  large_img: string;
  link: string;
};

export default function ProjectDetail({
  title,
  desc,
  large_img,
  link,
}: ProjectDetailProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start p-8 text-white">
      <h1 className="text-4xl font-bold mb-6">{title}</h1>
      <img
        src={large_img}
        alt={title}
        className="w-full max-w-2xl mx-auto mb-6 rounded shadow-lg"
      />
      <p className="text-lg leading-relaxed">{desc}</p>
      {link != "" ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center items-center gap-2 font-medium tracking-wider mt-2 group"
        >
          Link til siden{" "}
          <span className="inline-flex transition-transform duration-300 group-hover:translate-x-1.5">
            <ArrowRight size={24} />
          </span>
        </a>
      ) : (
        <></>
      )}
    </div>
  );
}
