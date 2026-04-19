"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Products", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Blogs", href: "#" },
  { label: "FAQs", href: "#" },
  { label: "Documentation", href: "#" },
  { label: "Careers", href: "#" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const sentinel = document.getElementById("nav-sentinel");
    if (!sentinel) return;
    const observer = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setHidden(y > lastY && y > 80);
      lastY = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        hidden ? "-translate-y-full" : "translate-y-0",
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-xpay-border shadow-sm"
          : "bg-white/40 backdrop-blur-md border-b border-white/20 2xl:bg-transparent 2xl:backdrop-blur-none 2xl:border-transparent"
      )}
    >
      <nav className="max-w-[1200px] mx-auto px-6 h-[72px] flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center flex-shrink-0">
          <XPayLogo />
        </Link>

        {/* Desktop: nav links + CTAs */}
        <div className="hidden lg:flex items-center gap-8 flex-1 ml-8">
          <ul className="flex items-center gap-1 flex-1">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="px-3.5 py-2 text-sm font-medium text-xpay-text hover:text-black transition-colors rounded-lg hover:bg-gray-50"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="md">
              Talk to us
            </Button>
            <Button variant="primary" size="md">
              Get started
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3.5 h-3.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </Button>
          </div>
        </div>

        {/* Mobile: hamburger only */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-xpay-text transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-xpay-border px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="px-3 py-2.5 text-sm font-medium text-xpay-muted hover:text-xpay-text transition-colors rounded-lg hover:bg-gray-50"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex flex-col gap-2 mt-3 pt-3 border-t border-xpay-border">
            <Button variant="outline" size="md" className="w-full justify-center">
              Talk to us
            </Button>
            <Button variant="primary" size="md" className="w-full justify-center">
              Get started →
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

function XPayLogo() {
  return (
    <Image
      src="/assets/Xpay-logo.svg"
      alt="xPay"
      width={101}
      height={24}
      priority
      className="h-[24px] w-auto"
    />
  );
}
