export default function Home() {
  return (
    <>
      <p className="text-lg text-black mb-8">
        Photographer based in Copenhagen | Leica M11-P | Fine Art & Street Photography
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div>
          <img
            src="/images/Andelsbolig.jpg"
            alt="Andelsbolig"
            className="rounded-xl shadow"
          />
          <p className="mt-2 text-sm text-black">"Andelsbolig"</p>
        </div>
        <div>
          <img
            src="/images/track-field.jpg"
            alt="Track & Field"
            className="rounded-xl shadow"
          />
          <p className="mt-2 text-sm text-black">"Track & Field"</p>
        </div>
        <div>
          <img
            src="/images/Home.jpg"
            alt="Mølle Allé"
            className="rounded-xl shadow"
          />
          <p className="mt-2 text-sm text-black">"Mølle Allé"</p>
        </div>
      </div>
    </>
  );
}