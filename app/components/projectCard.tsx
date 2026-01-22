import { ArrowRight, Eye } from 'lucide-react';

type ProjectCardProps = {
  imgUrl: string;
  title: string;
  description: string;
  previewUrl: string;
  prosjektSide: string;
};

const ProjectCard = ({
  imgUrl,
  title,
  description,
  previewUrl,
  prosjektSide,
}: ProjectCardProps) => {
  return (
    <div className="rounded-xl overflow-hidden shadow-lg flex flex-col h-full bg-[#010F1B]">
      <div
        className="h-52 md:h-60 rounded-t-xl relative group py-3"
        style={{
          background: `url(${imgUrl}) no-repeat center center `,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundOrigin: 'content-box',
        }}
      >
        <div className="overlay flex items-center justify-center absolute inset-0 bg-[#011627] opacity-0 group-hover:opacity-80 transition-all duration-250 rounded-t-xl">
          <a
            href={previewUrl}
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white flex items-center justify-center"
          >
            <Eye className="h-10 w-10 text-[#ADB7BE] hover:text-white" />
          </a>
        </div>
      </div>
      <a
        href={prosjektSide}
        className="text-white rounded-b-xl bg-[#011627] py-6 px-4 flex flex-col justify-between flex-grow cursor-pointer group"
        style={{ textDecoration: 'none' }}
      >
        <h5 className="font-xl font-semibold mb-2">{title}</h5>
        <p style={{ whiteSpace: 'pre-line' }} className="text-[#ADB7BE] mb-4">
          {description}
        </p>
        <span className="flex items-center gap-2 font-medium tracking-wider transition-colors duration-300 text-white group-hover:text-blue-400">
          <span className="relative">
            Les mer her
            <span className="absolute left-0 -bottom-0.5 h-[2px] bg-blue-400 transition-all duration-300 w-+ group-hover:w-full" />
          </span>
          <span className="inline-flex transition-transform duration-300 translate-none group-hover:translate-x-(6px)">
            <ArrowRight size={20} className="text-white group-hover:text-blue-400" />
          </span>
        </span>
      </a>
    </div>
  );
};

export default ProjectCard;
