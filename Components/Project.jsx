import { ArrowBigRight, ExternalLink, Github, GithubIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
const projects = [
  {
    id: 1,
    title: "Sneakify – E-commerce App",
    description:
      "Full-stack e-commerce application with product listing, dynamic product pages, shopping cart, wishlist, and checkout flow. Includes admin panel for managing products and orders.",
    image: "/projects/sneakify.png",
    tags: ["Next.js", "React", "TailwindCSS", "MongoDB", "SWR"],
    demoUrl: "https://sneakify-nu.vercel.app/",
    githubUrl: "https://github.com/Enayat-Ahmadi/sneakify",
  },
  {
    id: 2,
    title: "Money Manager App",
    description:
      "Full-stack finance tracker with authentication, CRUD operations for transactions, and user-specific data. Features include search, balance calculation, and image upload with Cloudinary.",
    image: "/projects/money-manager.png",
    tags: ["Next.js", "React", "MongoDB", "NextAuth", "Styled-Components"],
    demoUrl: "https://money-manager-liard-theta.vercel.app/login",
    githubUrl: "https://github.com/Enayat-Ahmadi/money-manager",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "Personal portfolio built with Next.js App Router and Tailwind CSS. Includes dark mode, animations, and responsive modern UI to showcase projects and skills.",
    image: "/projects/portfolio.png",
    tags: ["Next.js", "TailwindCSS", "React"],
    demoUrl: "https://portfolio-woad-nine-75.vercel.app/",
    githubUrl: "https://github.com/Enayat-Ahmadi/portfolio",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-3 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent Projects. Each project was carefully
          crafted with attention to detail, performance, and user experience
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 ">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <Link
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </Link>
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="https://github.com/Enayat-Ahmadi"
            target="_blank"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
          >
            Check my Github <ArrowBigRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
