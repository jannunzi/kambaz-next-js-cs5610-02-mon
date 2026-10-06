export default function TailwindTypography() {
  return (
    <div>
      <h1 className="text-2xl font-bold underline">Tailwind Typography</h1>

      <h2 className="text-xl font-bold">Font Size</h2>
      <p className="text-xs">This is a extra small text</p>
      <p className="text-sm">This is a small text</p>
      <p className="text-base">This is a base text</p>
      <p className="text-lg">This is a large text</p>
      <p className="text-xl">This is a extra large text</p>
      <p className="text-2xl">This is a 2x large text</p>
      <p className="text-3xl">This is a 3x large text</p>
      <p className="text-4xl">This is a 4x large text</p>
      <p className="text-5xl">This is a 5x large text</p>
      <hr />

      <h2 className="text-xl font-bold">Font Weight</h2>
      <p className="font-thin">This is a thin text</p>
      <p className="font-extralight">This is a extra light text</p>
      <p className="font-light">This is a light text</p>
      <p className="font-normal">This is a normal text</p>
      <p className="font-medium">This is a medium text</p>
      <p className="font-semibold">This is a semi bold text</p>
      <p className="font-bold">This is a bold text</p>
      <p className="font-extrabold">This is a extra bold text</p>
      <p className="font-black">This is a black text</p>
      <hr />

      <h2 className="text-xl font-bold">Font Family</h2>
      <p className="font-sans">This is a sans font</p>
      <p className="font-serif">This is a serif font</p>
      <p className="font-mono">This is a mono font</p>
      <hr />
      <h2 className="text-xl font-bold">Font Style</h2>
      <p className="italic">This is a italic text</p>
      <p className="underline">This is a underline text</p>
      <p className="line-through">This is a line through text</p>
      <p className="overline">This is a overline text</p>
      <hr />
      <h2 className="text-xl font-bold">Font Variant</h2>
      <p className="normal-case">This is a normal case text</p>
      <p className="uppercase">This is a uppercase text</p>
      <p className="lowercase">This is a lowercase text</p>
      <p className="capitalize">This is a capitalize text</p>
    </div>
  );
}