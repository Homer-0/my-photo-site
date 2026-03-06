export default function Contact() {
  return (
    <main className="px-6 sm:px-10 pt-12 pb-20 max-w-[680px]">
      <h1 className="font-display italic text-5xl sm:text-6xl mb-10" style={{ color: "var(--ink)" }}>
        Contact
      </h1>
      <div className="space-y-4">
        <div style={{ borderBottom: "1px solid var(--border)", paddingBottom: "1rem" }}>
          <p className="label mb-1">Email</p>
          <a
            href="mailto:hello@yourdomain.com"
            className="text-base transition-opacity hover:opacity-60"
            style={{ color: "var(--ink)" }}
          >
            hello@yourdomain.com
          </a>
        </div>
        <div style={{ borderBottom: "1px solid var(--border)", paddingBottom: "1rem" }}>
          <p className="label mb-1">Instagram</p>
          <a
            href="https://instagram.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base transition-opacity hover:opacity-60"
            style={{ color: "var(--ink)" }}
          >
            @yourhandle
          </a>
        </div>
      </div>
    </main>
  );
}