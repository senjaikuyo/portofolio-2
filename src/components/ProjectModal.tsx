"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github } from "lucide-react";
import { Project } from "@/data/projects";
import Image from "next/image";

interface Props {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: Props) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-bg-dark/80 backdrop-blur-md"
          />
          <motion.div
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-x-0 bottom-0 z-50 h-[90vh] md:h-[85vh] bg-bg-light rounded-t-[40px] md:rounded-t-[80px] overflow-hidden flex flex-col"
          >
            <div className="absolute top-6 right-6 md:top-10 md:right-10 z-10">
              <button
                onClick={onClose}
                className="p-4 bg-text-dark text-bg-light rounded-full hover:bg-accent-lime hover:text-text-dark transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 md:p-16 hide-scrollbar flex flex-col md:flex-row gap-8 md:gap-12 mt-8 md:mt-0">
                <div className="w-full md:w-1/2 flex flex-col gap-6 md:gap-8 pr-8 md:pr-0">
                    <h2 className="text-3xl md:text-6xl font-black tracking-tighter text-text-dark leading-none">
                        {project.title}
                    </h2>
                    
                    <div className="flex flex-wrap gap-2">
                        {project.stack.map(s => (
                        <span key={s} className="px-4 py-2 border border-text-dark/20 rounded-full font-medium text-text-dark text-sm">
                            {s}
                        </span>
                        ))}
                    </div>

                    <p className="text-xl text-text-dark/80 leading-relaxed font-medium">
                        {project.description}
                    </p>

                    <div className="flex gap-4 mt-auto pt-8">
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" 
                           className="flex-1 px-6 py-4 bg-text-dark text-bg-light rounded-full font-bold flex justify-center items-center gap-2 hover:bg-accent-lime hover:text-text-dark transition-all">
                            Live Demo <ExternalLink size={20} />
                        </a>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                           className="flex-1 px-6 py-4 border-2 border-text-dark text-text-dark rounded-full font-bold flex justify-center items-center gap-2 hover:bg-text-dark hover:text-bg-light transition-all">
                            Source Code <Github size={20} />
                        </a>
                    </div>
                </div>

                <div className="w-full md:w-1/2 rounded-[24px] md:rounded-[40px] overflow-hidden bg-text-dark/5 min-h-[300px] md:min-h-[400px] relative mt-4 md:mt-0">
                    <Image src={project.image} alt={project.title} fill className="object-cover" />
                </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
