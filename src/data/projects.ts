export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  stack: string[];
  category: "web" | "mobile" | "backend";
  demoUrl: string;
  githubUrl: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "v-ex-system",
    title: "Virtual Exhibition (V-EX) System",
    description: "Platform galeri virtual interaktif untuk pameran karya mahasiswa Polibatam dengan sistem RBAC yang kompleks.",
    image: "https://picsum.photos/1200/800?random=1",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "MySQL"],
    category: "web",
    demoUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: "kaswarga-app",
    title: "KasWarga Management App",
    description: "Aplikasi manajemen keuangan warga end-to-end dengan sistem autentikasi mandiri dan hashing password.",
    image: "https://picsum.photos/1200/800?random=2",
    stack: ["PHP", "MySQL", "Bootstrap", "Git"],
    category: "web",
    demoUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: "ihsg-screener",
    title: "IHSG Stock Screener",
    description: "Skrip penyaring data fundamental untuk menganalisis emiten di pasar saham Indonesia berbasis analisis kuantitatif.",
    image: "https://picsum.photos/1200/800?random=3",
    stack: ["Python", "Pandas", "Data Analysis"],
    category: "backend",
    demoUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: "cryptography-affine",
    title: "Affine Cipher Tool",
    description: "Implementasi algoritma kriptografi klasik Affine Cipher untuk enkripsi dan dekripsi pesan teks.",
    image: "https://picsum.photos/1200/800?random=4",
    stack: ["JavaScript", "Algorithm", "Security"],
    category: "web",
    demoUrl: "#",
    githubUrl: "#",
  },
];

