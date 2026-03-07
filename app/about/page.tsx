export default function About() {
  return (
    <main className="px-6 sm:px-10 pt-4 pb-20 max-w-[680px]">
      <h1 className="font-display text-3xl sm:text-4xl mb-8" style={{ fontWeight: 400, color: "var(--ink)" }}>
        About
      </h1>
      <div className="font-display space-y-5 text-base leading-relaxed" style={{ color: "var(--ink)", fontWeight: 300 }}>
        <p>
          I&apos;m Manos — a photographer based in Copenhagen.
        </p>
        <p>
          More to come.
        </p>
      </div>
    </main>
  );
}
