import React, { useState } from "react";
import { ArrowRight, Eye } from "lucide-react";

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
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="rounded-xl overflow-hidden shadow-lg">
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{
          background: `url(${imgUrl}) `,
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
        }}
      >
        <div className="overlay flex items-center justify-center absolute top-0 left-0 w-full h-full bg-[#011627] opacity-0 group-hover:opacity-80 transition-all duration-250">
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
        className="text-white rounded-b-xl bg-[#011627] py-6 px-4 block cursor-pointer"
        style={{ textDecoration: "none" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <h5 className="font-xl font-semibold mb-2">{title}</h5>
        <p style={{ whiteSpace: "pre-line" }} className="text-[#ADB7BE]">
          {description}
        </p>

        <span
          className={`flex items-center gap-2 font-medium tracking-wider transition-colors duration-300 ${
            isHovered ? "text-blue-400" : "text-white"
          }`}
        >
          <span className="relative">
            Les mer her
            <span
              className={`absolute left-0 -bottom-0.5 h-[2px] bg-blue-400 transition-all duration-300 ${
                isHovered ? "w-full" : "w-0"
              }`}
            />
          </span>

          <span
            className="inline-flex transition-transform duration-300"
            style={{
              transform: isHovered ? "translateX(6px)" : "translateX(0)",
            }}
          >
            <ArrowRight
              size={20}
              className={isHovered ? "text-blue-400" : "text-white"}
            />
          </span>
        </span>
      </a>
    </div>
  );
};

export default ProjectCard;
