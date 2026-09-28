"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface LandingNavbarProps {
  isDark: boolean;
  onToggleDark: () => void;
}

export default function LandingNavbar({ isDark, onToggleDark }: LandingNavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "AI & ML", href: "#ai-ml" },
    { label: "Climate Risk", href: "#climate-risk" },
    { label: "SDG 13", href: "#sdg13" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--surface)]/90 backdrop-blur-xl border-b border-[var(--border)] shadow-lg"
          : "bg-transparent"
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group" aria-label="ClimateSense home">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center shadow-lg group-hover:shadow-green-500/25 transition-all duration-300">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-white">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="rgba(255,255,255,0.2)"/>
                <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z" fill="rgba(255,255,255,0.3)"/>
                <path d="M12 9a3 3 0 100 6 3 3 0 000-6z" fill="white"/>
                <path d="M12 2v2M12 20v2M2 12h2M20 12h2" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-base font-bold text-[var(--foreground)] tracking-tight">
                Climate<span className="text-green-500">Sense</span>
              </span>
              <span className="text-[9px] text-[var(--foreground-subtle)] font-medium tracking-wider uppercase">
                AI Climate Platform
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-[var(--foreground-muted)] hover:text-green-500 transition-colors duration-200 rounded-lg hover:bg-[var(--accent-muted)]"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            {/* Dark Mode Toggle */}
            <button
              onClick={onToggleDark}
              className="w-9 h-9 rounded-lg flex items-center justify-center text-[var(--foreground-muted)] hover:text-[var(--foreground)] hover:bg-[var(--surface-2)] transition-all duration-200"
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              id="dark-mode-toggle"
            >
              {isDark ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="5"/>
                  <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                </svg>
              )}
            </button>

            <Link
              href="/login"
              className="px-4 py-2 text-sm font-medium text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors duration-200"
            >
              Sign In
            </Link>
            <Link
              href="/register"
              id="get-started-nav"
              className="px-4 py-2 text-sm font-semibold bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-lg hover:from-green-400 hover:to-teal-400 transition-all duration-200 shadow-lg hover:shadow-green-500/25"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={onToggleDark}
              className="w-9 h-9 rounded-lg flex items-center justify-center text-[var(--foreground-muted)] hover:bg-[var(--surface-2)] transition-all duration-200"
              aria-label="Toggle dark mode"
            >
              {isDark ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="5"/>
                  <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                </svg>
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-9 h-9 rounded-lg flex items-center justify-center text-[var(--foreground-muted)] hover:bg-[var(--surface-2)] transition-all duration-200"
              aria-label="Toggle mobile menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12"/>
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 12h18M3 6h18M3 18h18"/>
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-[var(--border)] bg-[var(--surface)]/95 backdrop-blur-xl">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-4 py-2.5 text-sm font-medium text-[var(--foreground-muted)] hover:text-green-500 hover:bg-[var(--accent-muted)] rounded-lg transition-all duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex gap-2 px-4 pt-3 pb-1 mt-2 border-t border-[var(--border)]">
                <Link
                  href="/login"
                  className="flex-1 text-center px-4 py-2.5 text-sm font-medium border border-[var(--border)] text-[var(--foreground)] rounded-lg hover:bg-[var(--surface-2)] transition-all duration-200"
                >
                  Sign In
                </Link>
                <Link
                  href="/register"
                  className="flex-1 text-center px-4 py-2.5 text-sm font-semibold bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-lg hover:from-green-400 hover:to-teal-400 transition-all duration-200"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
