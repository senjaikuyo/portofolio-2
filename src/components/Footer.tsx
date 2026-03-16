import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-bg-dark text-text-light pt-24 pb-12 px-6 md:px-12 overflow-hidden relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12 border-b border-text-light/20 pb-12">
        
        <div className="max-w-md">
          <h3 className="text-3xl md:text-5xl font-black tracking-tighter mb-6 leading-tight">
            HAVE AN IDEA?<br/>
            <span className="text-accent-lime">LET&apos;S BUILD IT.</span>
          </h3>
          <p className="text-muted text-lg mb-8">
            I&apos;m currently available for freelance work. If you have a project that you want to get started, think you need my help with something, then get in touch.
          </p>
          <Link
            href="mailto:rasyazildan@example.com"
            className="inline-flex items-center gap-2 text-xl font-bold hover:text-accent-lime transition-colors group"
          >
            hello@rasyazildan.my.id
            <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>

        <div className="flex gap-12">
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-lg mb-2">Navigation</h4>
            <Link href="/" className="text-muted hover:text-white transition-colors">Home</Link>
            <Link href="/about-me" className="text-muted hover:text-white transition-colors">About</Link>
            <Link href="/works" className="text-muted hover:text-white transition-colors">Works</Link>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-lg mb-2">Socials</h4>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-white transition-colors">GitHub</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-white transition-colors">LinkedIn</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-white transition-colors">Instagram</a>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-muted">© {new Date().getFullYear()} Rasya Zildan. All rights reserved.</p>
        <p className="text-muted flex items-center gap-2">
          Designed with <span className="text-accent-lime">♥</span> by Rasya
        </p>
      </div>

      {/* Massive Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center opacity-[0.03] pointer-events-none select-none overflow-hidden flex justify-center">
        <h1 className="text-[20vw] font-black tracking-tighter leading-none whitespace-nowrap">
          RASYA ZILDAN
        </h1>
      </div>
    </footer>
  );
}
