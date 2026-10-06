export default function TailwindFlexAndWidths() {
  return (
    <div>
      <h1 className="text-2xl font-bold underline">Tailwind Flex and Widths</h1>
      <h2 className="text-xl font-bold">Flex</h2>
      <div className="flex">
        <div className="bg-red-500">This is a red box</div>
        <div className="bg-green-500">This is a green box</div>
        <div className="bg-blue-500 flex-grow">This is a blue box</div>
      </div>
      <hr />
      <h2 className="text-xl font-bold">Widths</h2>
      <div className="w-full bg-green-500">This is a full width</div>
      <div className="w-1/2 bg-red-500">This is a 50% width</div>
      <div className="w-1/3 bg-green-500">This is a 33.33% width</div>
      <div className="w-1/4 bg-blue-500">This is a 25% width</div>
      <div className="w-1/5 bg-yellow-500">This is a 20% width</div>
      <div className="w-1/6 bg-purple-500">This is a 16.66% width</div>
      <div className="w-1/7 bg-orange-500">This is a 14.28% width</div>
      <div className="w-1/8 bg-pink-500">This is a 12.5% width</div>

      <h2 className="text-xl font-bold">Custom Widths</h2>
      <div className="w-[96px] bg-red-500">This is a 96px width</div>
      <div className="w-[128px] bg-green-500">This is a 128px width</div>
      <div className="w-[160px] bg-blue-500">This is a 160px width</div>
      <div className="w-[192px] bg-yellow-500">This is a 192px width</div>
      <div className="w-[224px] bg-purple-500">This is a 224px width</div>
      <div className="w-[256px] bg-orange-500">This is a 256px width</div>
      <div className="w-[288px] bg-pink-500">This is a 288px width</div>
    </div>
  );
}