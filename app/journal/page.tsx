import ThemeSwitcher from "@/components/ThemeSwitcher";
export default function Journal() {
  return (
    <div className="relative px-6 pt-10">
      <div className="fixed left-2 top-1/2 transform -translate-y-1/2 z-40 hidden sm:block">
  <ThemeSwitcher />
</div>
      <h1 className="text-3xl font-bold mb-4">Journal</h1>
      <p className="text-gray-700 leading-relaxed">
        Journal entries and reflections will appear here soon.
      </p>
    </div>
  );
}