"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import Button from "@/components/Button";
import ProjectCard from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";
import { projects, Project } from "@/data/projects";
import { ArrowDownRight, Layers, Smartphone, Database } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen bg-bg-light selection:bg-accent-lime selection:text-text-dark">
      
      {/* HERO SECTION */}
      <section className="relative min-h-screen pt-32 pb-40 md:pb-20 px-6 md:px-12 flex flex-col justify-center overflow-hidden">
        <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center gap-12 z-10">
          
          <div className="w-full md:w-3/5 flex flex-col gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            >
              <h2 className="text-xl md:text-2xl font-bold uppercase tracking-widest text-text-dark/60 mb-2">Hi! i&apos;m Rasya</h2>
              <h1 className="text-6xl md:text-[7vw] font-black tracking-tighter leading-[0.9] text-text-dark">
                FULL-STACK <br/> DEVELOPER
              </h1>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg md:text-2xl max-w-xl text-text-dark/80 font-medium leading-relaxed mt-4"
            >
              I build digital experiences that are fast, accessible, and visually compelling. Based in Malang, ID.
            </motion.p>
            
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.6, duration: 0.5 }}
               className="flex flex-wrap gap-4 mt-8"
            >
              <Button href="/works" variant="primary">SEE MY WORKS</Button>
              <Button href="/about-me" variant="outline">MORE ABOUT ME</Button>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            className="w-full md:w-2/5 flex justify-center md:justify-end"
          >
            <div className="relative w-full max-w-[280px] aspect-[3/4] md:max-w-none md:w-[400px] md:h-[500px] rounded-[80px] md:rounded-[100px] overflow-hidden border-2 border-text-dark bg-text-dark/5 mx-auto">
              <Image 
                src="https://picsum.photos/800/1000?random=10" 
                alt="Rasya Zildan Avatar" 
                fill 
                className="object-cover" 
                priority
              />
            </div>
          </motion.div>
        </div>

        {/* Decorative Grid Background */}
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{ backgroundImage: "radial-gradient(#1e1e1e 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      </section>


      {/* INTRO SECTION (Dark Theme) */}
      <section className="relative bg-bg-dark text-text-light pt-32 pb-32 px-6 md:px-12 rounded-t-[60px] md:rounded-t-[120px] -mt-20 z-20">
        <AnimatedSection className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-start">
          <div className="md:w-1/3">
             <h2 className="text-4xl font-black tracking-tighter">WHO AM I?</h2>
          </div>
          <div className="md:w-2/3">
            <p className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
              I specialize in developing Software applications and scalable backends that help businesses grow and operate efficiently.
            </p>
          </div>
        </AnimatedSection>
      </section>

      {/* MARQUEE SECTION */}
      <section className="bg-accent-lime text-text-dark py-8 overflow-hidden transform -rotate-2 -mx-4 my-12 shadow-2xl">
        <div className="flex whitespace-nowrap">
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
            className="flex items-center gap-8 text-5xl md:text-7xl font-black tracking-tighter"
          >
            {[...Array(4)].map((_, i) => (
              <span key={i} className="flex items-center gap-8 mx-4">
                SOFTWARE ENGINEER <ArrowDownRight size={48} /> MOBILE DEVELOPER <ArrowDownRight size={48} /> 
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* WHAT I DO SECTION (Light Theme) */}
      <section className="py-32 px-6 md:px-12 bg-bg-light">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-text-dark mb-16">WHAT I DO</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "FRONTEND", desc: "Building responsive, accessible, and high-performance user interfaces.", icon: <Layers size={48}/> },
              { title: "BACKEND", desc: "Designing robust APIs, database schemas, and scalable server architectures.", icon: <Database size={48}/> },
              { title: "MOBILE", desc: "Creating cross-platform mobile applications that deliver native-like experiences.", icon: <Smartphone size={48}/> }
            ].map((service, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.2} className="h-full">
                <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-sm border border-text-dark/5 hover:-translate-y-2 transition-transform duration-300 h-full flex flex-col">
                  <div className="text-accent-lime mb-8">
                    {service.icon}
                  </div>
                  <h3 className="text-3xl font-black tracking-tighter text-text-dark mb-4">{service.title}</h3>
                  <p className="text-text-dark/70 font-medium text-lg mt-auto">{service.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED WORKS SECTION (Dark Theme) */}
      <section className="bg-bg-dark text-text-light py-24 md:py-32 px-6 md:px-12 rounded-[40px] md:rounded-[120px] mx-4 md:mx-8 gap-y-12 mb-32">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
            <AnimatedSection>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter">SELECTED WORKS</h2>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <Link href="/works" className="text-xl font-bold uppercase tracking-widest text-accent-lime border-b-2 border-accent-lime pb-1 hover:text-white hover:border-white transition-colors">
                View All Projects
              </Link>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {projects.filter(p => p.featured).slice(0, 4).map((project, idx) => (
              <AnimatedSection key={project.id} delay={idx * 0.1}>
                <ProjectCard project={project} onClick={() => setSelectedProject(project)} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <ProjectModal 
        project={selectedProject} 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />

    </div>
  );
}
