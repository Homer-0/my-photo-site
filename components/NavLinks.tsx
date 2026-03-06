"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = ["Home", "Chapters", "Journal", "About"] as const;

export default function NavLinks({ className }: { className?: string }) {
  const pathname = usePathname();

  return (
    <>
      {LINKS.map((label) => {
        const href = label === "Home" ? "/" : `/${label.toLowerCase()}`;
        const isActive =
          label === "Home"
            ? pathname === "/"
            : pathname.startsWith(`/${label.toLowerCase()}`);

        return (
          <Link
            key={label}
            href={href}
            className={`label transition-opacity hover:opacity-60 ${className ?? ""}`}
            style={{
              paddingBottom: "2px",
              borderBottom: isActive ? "1px solid currentColor" : "1px solid transparent",
            }}
          >
            {label}
          </Link>
        );
      })}
    </>
  );
}
