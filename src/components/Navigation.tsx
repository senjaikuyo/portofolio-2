"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about-me" },
    { name: "Works", path: "/works" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "py-4" : "py-6"
        } px-6 md:px-12 flex justify-between items-center`}
      >
        <Link href="/" className="text-2xl font-black tracking-tighter mix-blend-difference text-white z-50">
          RASYA.
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-2 bg-text-dark/10 backdrop-blur-md px-2 py-2 rounded-full border border-text-dark/10 mix-blend-difference text-white">
          {links.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.path}
                href={link.path}
                className={`relative px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  isActive ? "text-text-dark" : "hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-accent-lime rounded-full -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Contact Button Desktop */}
        <div className="hidden md:block">
          <Link
            href="mailto:rasyazildan@example.com"
            className="px-6 py-3 rounded-full bg-text-dark text-bg-light font-medium btn-hover-fill mix-blend-difference border border-transparent hover:border-text-dark hover:text-text-dark inline-block transition-all"
          >
            Let&apos;s Talk
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden z-50 mix-blend-difference text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 bg-bg-dark text-text-light flex flex-col justify-center items-center gap-8"
          >
            {links.map((link, i) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
              >
                <Link
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-5xl font-black tracking-tighter uppercase ${
                    pathname === link.path ? "text-accent-lime" : "text-white hover:text-accent-lime transition-colors"
                  }`}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.5 }}
               className="mt-8"
            >
                <Link
                href="mailto:rasyazildan@example.com"
                className="px-8 py-4 rounded-full bg-accent-lime text-text-dark font-bold text-xl inline-block"
                onClick={() => setIsOpen(false)}
                >
                Let&apos;s Talk
                </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
