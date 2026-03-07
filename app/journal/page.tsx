export default function Journal() {
  return (
    <main className="px-6 sm:px-10 pt-4 pb-20 max-w-[800px]">
      <h1 className="font-display text-3xl sm:text-4xl mb-8" style={{ fontWeight: 400, color: "var(--ink)" }}>
        Journal
      </h1>
      {/* Empty state */}
      <p className="font-display italic" style={{ color: "var(--muted)", fontWeight: 300 }}>
        Nothing here yet. Come back soon.
      </p>
    </main>
  );
}
