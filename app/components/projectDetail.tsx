import { ArrowRight } from 'lucide-react';
import { useState } from 'react';

type ProjectDetailProps = {
  slug: string;
  title: string;
  desc: string;
  small_img: string;
  large_img: string;
  link: string;
};

export default function ProjectDetail({ title, desc, large_img, link }: ProjectDetailProps) {
  const [isHovered, setHoveredCard] = useState(false);
  return (
    <div>
      <h1 className="text-4xl font-bold mb-6 text-center">{title}</h1>
      <img
        src={large_img}
        alt={title}
        className="w-full max-w-2xl mx-auto mb-6 rounded shadow-lg"
      />
      <p className="text-lg leading-relaxed">{desc}</p>
      {link != '' ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center items-center gap-2 font-medium tracking-wider mt-2 group"
          onMouseEnter={() => setHoveredCard(true)}
          onMouseLeave={() => setHoveredCard(false)}
        >
          <span className="relative mt-5">
            <span
              className={`transition-colors duration-300 ${
                isHovered ? 'text-blue-400' : 'text-white'
              }`}
            >
              Link til siden
            </span>
            <span
              className={`absolute left-0 -bottom-0.5 h-[2px] bg-blue-400 transition-all duration-300 ${
                isHovered ? 'w-full' : 'w-0'
              }`}
            />
          </span>
          <span
            className="inline-flex transition-transform duration-300 mt-5"
            style={{
              transform: isHovered ? 'translateX(6px)' : 'translateX(0)',
            }}
          >
            <ArrowRight size={24} className={isHovered ? 'text-blue-400' : 'text-white'} />
          </span>
        </a>
      ) : (
        <></>
      )}
    </div>
  );
}
