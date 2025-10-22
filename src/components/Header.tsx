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

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { href: "#inicio", label: "Início" },
    { href: "#programacao", label: "Programação" },
    { href: "#barracas", label: "Barracas" },
    { href: "#galeria", label: "Galeria" },
    { href: "#localizacao", label: "Localização" },
    { href: "#bingo", label: "Bingo" },
  ];

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 backdrop-blur-lg shadow-lg py-2"
            : "bg-transparent py-4"
        }`}
      >
        <nav className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link href="#inicio" className="flex items-center space-x-4">
              <div className="w-16 h-16 relative">
                <Image
                  src="/images/santa.png"
                  alt="Logo Santa Luzia"
                  width={64}
                  height={64}
                  className="rounded-full"
                  priority
                />
              </div>
              <div>
                <span className="block font-display text-hunter-green text-lg leading-tight">
                  Capela
                </span>
                <span className="block font-display text-hunter-green text-xl font-bold leading-tight">
                  Santa Luzia
                </span>
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
                <Link href="#bingo" className="btn-primary text-sm">
                  Participe do Bingo
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <button
        className="lg:hidden fixed top-5 right-4 p-2 text-hunter-green z-50"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Abrir menu"
        aria-expanded={isMobileMenuOpen}
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

      <div
        className={`lg:hidden fixed inset-0 z-40 transition-opacity duration-300 ease-in-out ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/50"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        ></div>

        <div
          className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg p-6 transform transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ul className="space-y-4 pt-16">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block py-2 font-display text-hunter-green hover:text-bittersweet-shimmer transition-colors duration-200 text-lg"
                  onClick={handleLinkClick}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-4">
              <Link
                href="#bingo"
                className="btn-primary block text-center"
                onClick={handleLinkClick}
              >
                Participe do Bingo
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}