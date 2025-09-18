"use client";

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: "#about", label: "Hakkımızda" },
  { href: "#manifesto", label: "Manifesto" },
  { href: "#services", label: "Hizmetler" },
  { href: "#portfolio", label: "Portfolyo" },
  { href: "#team", label: "Takım" },
  { href: "#contact", label: "İletişim" },
];

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      scrolled ? 'bg-background/80 backdrop-blur-lg border-b border-border/20' : 'bg-transparent'
    )}>
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <a href="#" className="text-2xl font-bold text-foreground">Bit3Tech</a>
        <nav className="hidden md:flex gap-8">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} className="text-md font-medium text-muted-foreground hover:text-foreground transition-colors">
              {link.label}
            </a>
          ))}
        </nav>
        {/* Mobile menu can be added here later */}
      </div>
    </header>
  );
};
