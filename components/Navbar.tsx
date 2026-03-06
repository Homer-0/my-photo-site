'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30" style={{ backgroundColor: "var(--bg)" }}>
      <nav className="px-10 py-6 flex items-center justify-between">
        {/* Logo: name in small-caps tracked serif */}
        <Link
          href="/"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 400,
            fontSize: "0.85rem",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "var(--ink)",
          }}
        >
          Manos Tzavidas
        </Link>

        {/* Nav links */}
        <div className="flex items-center gap-8">
          {[
            { href: "/chapters", label: "Chapters" },
            { href: "/journal",  label: "Journal"  },
            { href: "/about",    label: "About"    },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              style={{
                fontFamily: "'Geist', sans-serif",
                fontWeight: 300,
                fontSize: "0.82rem",
                letterSpacing: "0.08em",
                color: "var(--muted)",
              }}
            >
              {label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
