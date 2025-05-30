import ThemeSwitcher from "@/components/ThemeSwitcher";

export default function About() {
  return (
    <div className="relative px-6 pt-10">
      <div className="fixed left-2 top-1/2 transform -translate-y-1/2 z-40">
        <ThemeSwitcher />
      </div>
      <h1 className="text-3xl font-bold mb-4">About Me</h1>
      <p className="text-gray-700 leading-relaxed">
        I'm Manos — a photographer based in Copenhagen.
        <br /><br />
        More to come.
      </p>
    </div>
  );
}