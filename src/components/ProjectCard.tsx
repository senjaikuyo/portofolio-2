import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/data/projects";
import Image from "next/image";

interface Props {
  project: Project;
  onClick: () => void;
}

export default function ProjectCard({ project, onClick }: Props) {
  return (
    <div 
      className="group relative rounded-3xl overflow-hidden cursor-pointer"
      onClick={onClick}
    >
      <div className="aspect-[4/3] w-full overflow-hidden bg-text-dark/5">
        <Image
          src={project.image}
          alt={project.title}
          width={800}
          height={600}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-bg-dark/60 md:bg-bg-dark/80 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 md:p-8">
        <div className="translate-y-0 md:translate-y-8 group-hover:translate-y-0 opacity-100 md:opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col gap-4">
            <h3 className="text-2xl md:text-3xl font-bold text-text-light">{project.title}</h3>
            <div className="flex flex-wrap gap-2">
                {project.stack.slice(0,3).map(s => (
                <span key={s} className="text-xs px-3 py-1 border border-text-light/20 rounded-full text-text-light/80">
                    {s}
                </span>
                ))}
            </div>
            
            <div className="mt-2 md:mt-4 inline-flex items-center gap-2 text-accent-lime font-medium uppercase tracking-wider text-sm">
                View Project <ArrowUpRight size={18} />
            </div>
        </div>
      </div>
    </div>
  );
}
