export default function Journal() {
  return (
    <main className="px-6 sm:px-10 pt-12 pb-20 max-w-[800px]">
      <div className="mb-10">
        <h1 className="font-display italic text-5xl sm:text-6xl" style={{ color: "var(--ink)" }}>
          Journal
        </h1>
        <div className="mt-4" style={{ borderBottom: "1px solid var(--border)" }} />
      </div>

      {/* Empty state */}
      <p className="italic text-center py-20" style={{ color: "var(--muted)", fontFamily: "'Geist', sans-serif", fontWeight: 300 }}>
        Nothing here yet. Come back soon.
      </p>
    </main>
  );
}
