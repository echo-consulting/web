import { ArrowRight } from 'lucide-react';

type ProjectDetailProps = {
  slug: string;
  title: string;
  desc: string;
  small_img: string;
  large_img: string;
  link: string;
};

export default function ProjectDetail({ title, desc, large_img, link }: ProjectDetailProps) {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-6 text-center">{title}</h1>

      <img
        src={large_img}
        alt={title}
        className="w-full max-w-2xl mx-auto mb-6 rounded shadow-lg"
      />

      <p className="text-lg leading-relaxed">{desc}</p>

      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex justify-center items-center gap-2 font-medium tracking-wider mt-5"
        >
          <span className="relative">
            <span className="transition-colors duration-300 group-hover:text-blue-400">
              Link til siden
            </span>
            <span className="absolute left-0 -bottom-0.5 h-[2px] bg-blue-400 transition-all duration-300 w-0 group-hover:w-full" />
          </span>

          <span className="inline-flex transition-transform duration-300 group-hover:translate-x-1">
            <ArrowRight
              className="transition-colors duration-300 group-hover:text-blue-400"
              size={24}
            />
          </span>
        </a>
      )}
    </div>
  );
}
