"use client";

import Link from "next/link";

const footerLinks = {
  Platform: [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "AI & ML", href: "#ai-ml" },
    { label: "Climate Risk", href: "#climate-risk" },
    { label: "Dashboard", href: "/dashboard" },
  ],
  Resources: [
    { label: "Documentation", href: "#" },
    { label: "SDG 13", href: "#sdg13" },
    { label: "Emission Factors", href: "#" },
    { label: "Climate Data", href: "#" },
    { label: "Research", href: "#" },
  ],
  Company: [
    { label: "About", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Contact", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};

export default function LandingFooter() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)]" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center shadow-lg">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" fill="rgba(255,255,255,0.2)"/>
                  <path d="M12 8a4 4 0 100 8 4 4 0 000-8z" fill="rgba(255,255,255,0.3)"/>
                  <circle cx="12" cy="12" r="2" fill="white"/>
                </svg>
              </div>
              <div>
                <span className="text-base font-bold text-[var(--foreground)]">
                  Climate<span className="text-green-500">Sense</span>
                </span>
              </div>
            </Link>
            <p className="text-sm text-[var(--foreground-muted)] leading-relaxed max-w-sm mb-6">
              AI-powered climate impact, risk & action management platform. 
              Helping individuals and organizations measure, understand, predict, 
              and act on their climate impact.
            </p>
            
            {/* SDG Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--border)] bg-[var(--surface-2)]">
              <div className="w-4 h-4 rounded-full bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center">
                <span className="text-white text-[8px] font-bold">13</span>
              </div>
              <span className="text-xs font-medium text-[var(--foreground-muted)]">
                Supporting UN SDG 13 – Climate Action
              </span>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-xs font-semibold text-[var(--foreground)] uppercase tracking-wider mb-4">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-[var(--foreground-muted)] hover:text-green-500 transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--foreground-subtle)]">
            © 2024 ClimateSense. Built for UN SDG 13 – Climate Action. 
            <span className="ml-2 text-yellow-600 dark:text-yellow-400 font-medium">[College Major Project]</span>
          </p>
          <div className="flex items-center gap-1 text-xs text-[var(--foreground-subtle)]">
            <span>All carbon calculations are</span>
            <span className="badge-estimate mx-1">ESTIMATES</span>
            <span>based on publicly available emission factors.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
