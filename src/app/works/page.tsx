"use client";

import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import ProjectCard from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";
import { projects, Project } from "@/data/projects";

type Category = "all" | "web" | "mobile" | "backend";

export default function Works() {
  const [filter, setFilter] = useState<Category>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projects.filter((p) => 
    filter === "all" ? true : p.category === filter
  );

  return (
    <div className="min-h-screen bg-bg-light pt-32 pb-32 selection:bg-accent-lime selection:text-text-dark">
      
      {/* HEADER */}
      <section className="px-6 md:px-12 mb-16 max-w-7xl mx-auto">
        <AnimatedSection>
          <h1 className="text-6xl md:text-[8vw] font-black tracking-tighter text-text-dark leading-none uppercase">
            SELECTED <br/> <span className="text-accent-lime drop-shadow-sm">WORKS.</span>
          </h1>
        </AnimatedSection>
      </section>

      {/* FILTER */}
      <section className="px-6 md:px-12 mb-16 max-w-7xl mx-auto">
        <AnimatedSection delay={0.2} className="flex flex-wrap gap-4">
            {(["all", "web", "mobile", "backend"] as Category[]).map(cat => (
                <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`px-8 py-3 rounded-full font-bold uppercase tracking-wider text-sm transition-all duration-300 ${
                        filter === cat 
                        ? "bg-text-dark text-accent-lime shadow-lg" 
                        : "border-2 border-text-dark text-text-dark hover:bg-text-dark/10"
                    }`}
                >
                    {cat}
                </button>
            ))}
        </AnimatedSection>
      </section>

      {/* GRID */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto min-h-[50vh]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {filteredProjects.map((project, idx) => (
              <AnimatedSection key={project.id} delay={idx * 0.1}>
                <ProjectCard project={project} onClick={() => setSelectedProject(project)} />
              </AnimatedSection>
            ))}
        </div>
        {filteredProjects.length === 0 && (
            <div className="text-center py-20 text-text-dark/50 text-2xl font-bold">
                No projects found in this category.
            </div>
        )}
      </section>

      <ProjectModal 
        project={selectedProject} 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />

    </div>
  );
}
