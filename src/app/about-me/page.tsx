"use client";

import AnimatedSection from "@/components/AnimatedSection";
import { timeline } from "@/data/experience";
import { skills } from "@/data/skills";
import Image from "next/image";

export default function AboutMe() {
  return (
    <div className="min-h-screen bg-bg-light pt-32 pb-20 selection:bg-accent-lime selection:text-text-dark">
      
      {/* HEADER SECTION */}
      <section className="px-6 md:px-12 mb-20 max-w-7xl mx-auto">
        <AnimatedSection>
            <h1 className="text-6xl md:text-[8vw] font-black tracking-tighter text-text-dark leading-none">
                ABOUT <span className="text-accent-lime drop-shadow-sm">ME.</span>
            </h1>
        </AnimatedSection>
      </section>

      {/* TWO COLUMN BIO */}
      <section className="px-6 md:px-12 mb-32 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16 items-start">
            <AnimatedSection className="w-full md:w-2/5" delay={0.2}>
                <div className="aspect-[4/5] rounded-[60px] overflow-hidden sticky top-32 bg-text-dark/5">
                    <Image src="https://picsum.photos/800/1000?random=11" alt="Rasya Zildan" fill className="object-cover" />
                </div>
            </AnimatedSection>

            <div className="w-full md:w-3/5 flex flex-col gap-12">
                <AnimatedSection delay={0.3}>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                        I am a developer who is passionate about creating <span className="text-accent-lime bg-text-dark px-2 rounded-lg">efficient</span> and <span className="text-accent-lime bg-text-dark px-2 rounded-lg">scalable</span> solutions.
                    </h2>
                    <p className="text-lg md:text-xl text-text-dark/80 leading-relaxed font-medium">
                        Since starting my journey as a developer, I&apos;ve worked on a variety of projects ranging from mobile applications to complex enterprise backends. I believe in writing clean, maintainable code and building products that actually solve problems. 
                    </p>
                </AnimatedSection>

                {/* STATS */}
                <AnimatedSection delay={0.4} className="grid grid-cols-2 gap-8 py-8 border-y-2 border-text-dark/10">
                    <div>
                        <h4 className="text-6xl font-black text-text-dark tracking-tighter mb-2">2+</h4>
                        <p className="text-text-dark/60 font-bold tracking-widest uppercase">Years Experience</p>
                    </div>
                    <div>
                        <h4 className="text-6xl font-black text-text-dark tracking-tighter mb-2">15+</h4>
                        <p className="text-text-dark/60 font-bold tracking-widest uppercase">Projects Completed</p>
                    </div>
                </AnimatedSection>

                {/* SKILLS */}
                <AnimatedSection delay={0.5}>
                    <h3 className="text-3xl font-black tracking-tighter mb-6">TECH STACK</h3>
                    <div className="flex flex-wrap gap-3">
                        {skills.map(skill => (
                            <span key={skill} className="px-5 py-3 rounded-full border-2 border-text-dark text-text-dark font-bold hover:bg-text-dark hover:text-accent-lime transition-all cursor-default">
                                {skill}
                            </span>
                        ))}
                    </div>
                </AnimatedSection>
            </div>
        </div>
      </section>

      {/* EXPERIENCE TIMELINE */}
      <section className="bg-bg-dark text-text-light py-32 px-6 md:px-12 rounded-[60px] md:rounded-[120px] mx-2 shadow-2xl">
         <div className="max-w-5xl mx-auto">
            <AnimatedSection>
                <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-20 text-center">MY JOURNEY</h2>
            </AnimatedSection>

            <div className="flex flex-col gap-12 relative">
                {/* Vertical Line */}
                <div className="absolute left-[39px] md:left-1/2 top-0 bottom-0 w-1 bg-text-light/10 md:-translate-x-1/2"></div>
                
                {timeline.map((item, index) => (
                    <AnimatedSection key={index} delay={index * 0.2}>
                       <div className={`flex flex-col md:flex-row items-start gap-8 md:gap-16 w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                            
                            <div className={`md:w-1/2 flex flex-col ${index % 2 === 0 ? 'md:items-start pl-24 md:pl-0' : 'md:items-end pr-0 md:pr-12 pl-24 md:pl-0'} text-left ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                                <h3 className="text-3xl font-black tracking-tight text-accent-lime mb-2">{item.title}</h3>
                                <h4 className="text-xl font-bold text-white mb-4">{item.subtitle}</h4>
                                <p className="text-text-light/70 text-lg leading-relaxed max-w-md">{item.description}</p>
                            </div>

                            {/* Center Dot */}
                            <div className="absolute left-6 md:left-1/2 w-8 h-8 rounded-full bg-accent-lime border-4 border-bg-dark md:-translate-x-1/2 shadow-[0_0_20px_rgba(202,232,58,0.5)] z-10 hidden md:block mt-2"></div>
                             {/* Mobile Dot */}
                             <div className="absolute left-6 w-8 h-8 rounded-full bg-accent-lime border-4 border-bg-dark shadow-[0_0_20px_rgba(202,232,58,0.5)] z-10 md:hidden top-0 mt-[6px]"></div>


                            <div className={`md:w-1/2 flex ${index % 2 === 0 ? 'justify-end pr-12' : 'justify-start pl-12'} hidden md:flex`}>
                                <span className="text-2xl font-black tracking-widest text-text-light/40 py-2">{item.year}</span>
                            </div>
                            
                            {/* Mobile Year */}
                            <div className="md:hidden pl-24 mt-2 mb-8">
                                <span className="text-xl font-bold tracking-wide text-text-light/50">{item.year}</span>
                            </div>

                       </div>
                    </AnimatedSection>
                ))}
            </div>
         </div>
      </section>

    </div>
  );
}
