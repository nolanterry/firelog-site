"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const NAV_LINKS = [
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/demo", label: "Demo" },
  { href: "/help", label: "Help" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100/80">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="FireLog" width={28} height={28} />
          <span className="font-bold text-lg text-gray-900">FireLog</span>
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <Link href="https://app.firelog.pro">Start Free Trial</Link>
          </Button>
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="size-5" />
          </button>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white/95 backdrop-blur-xl px-6 py-4 space-y-3">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-sm text-muted-foreground hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Button asChild size="sm" className="w-full">
            <Link href="https://app.firelog.pro">Start Free Trial</Link>
          </Button>
        </div>
      )}
    </nav>
  );
}
