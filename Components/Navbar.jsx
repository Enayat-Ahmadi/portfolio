"use client";
import cn from "@/lib/utils";
import { MenuIcon, X } from "lucide-react";
import Link from "next/link";
import ThemeToggle from "@/Components/ThemeToggle";
import { useEffect, useState } from "react";
const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <nav
        className={cn(
          "fixed w-full z-50 transition-all duration-300",
          isScrolled
            ? "py-2 md:py-3 bg-background/80 backdrop-blur-md shadow-xs"
            : "py-3 md:py-5",
        )}
      >
        <div className="container flex items-center justify-between">
          <Link
            className="text-xl font-bold text-primary flex items-center "
            href="#hero"
          >
            <span className="relative z-10">
              <span className="text-glow text-foreground">Enayat </span>
              Portfolio
            </span>
          </Link>
          {/* Desktop Nav */}
          <div className="hidden md:flex gap-4">
            <div className="space-x-8">
              {navItems.map((item, key) => (
                <Link
                  key={key}
                  href={item.href}
                  className="text-foreground/80 hover:text-primary transition-colors duration-300"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div>
              <ThemeToggle />
            </div>
          </div>
          {/* Mobile Nav */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground z-60"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </nav>
      <div
        className={cn(
          "fixed inset-0 z-20 md:hidden bg-background/95 backdrop-blur-md transition-all duration-300",
          "flex items-center justify-center",
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        )}
      >
        <div className="flex flex-col items-center space-y-8 text-xl">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              {item.name}
            </Link>
          ))}
          <ThemeToggle className="p-2 rounded-full transition-colors duration-300" />
        </div>
      </div>
    </>
  );
}
