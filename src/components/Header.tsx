"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#inicio", label: "Início" },
    { href: "#programacao", label: "Programação" },
    { href: "#barracas", label: "Barracas" },
    { href: "#localizacao", label: "Localização" },
    { href: "#rifa", label: "Rifa" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-lg shadow-lg py-2"
          : "bg-transparent py-4"
      }`}
    >
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="#inicio" className="flex items-center space-x-3">
            <div className="w-12 h-12 relative">
              <Image
                src="/images/logo.jpg"
                alt="Logo Santa Luzia"
                width={48}
                height={48}
                className="rounded-full"
              />
            </div>
          </Link>

          <ul className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-display text-hunter-green hover:text-bittersweet-shimmer transition-colors duration-200 font-medium"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="#rifa" className="btn-primary text-sm">
                Participe da Rifa
              </Link>
            </li>
          </ul>

          <button
            className="lg:hidden p-2 text-hunter-green"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 bg-white rounded-lg shadow-lg">
            <ul className="space-y-2 px-4 py-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block py-2 font-display text-hunter-green hover:text-bittersweet-shimmer transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  href="#rifa"
                  className="btn-primary block text-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Participe da Rifa
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
