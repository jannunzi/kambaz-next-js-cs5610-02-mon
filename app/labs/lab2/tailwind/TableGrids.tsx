export default function TableGrids() {
  return (
    <div>
      <h1 className="text-2xl font-bold underline">Table Grids</h1>
      <h2 className="text-xl font-bold">Grid Columns</h2>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-red-500">This is a red box</div>
        <div className="bg-green-500">This is a green box</div>
        <div className="bg-blue-500">This is a blue box</div>
        <div className="bg-yellow-500">This is a yellow box</div>
        <div className="bg-purple-500">This is a purple box</div>
        <div className="bg-orange-500">This is a orange box</div>
        <div className="bg-pink-500">This is a pink box</div>
      </div>
      <hr />
      <h2 className="text-xl font-bold">Grid Columns with Widths</h2>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-red-500 w-[100px]">This is a red box</div>
        <div className="bg-green-500 w-[100px]">This is a green box</div>
        <div className="bg-blue-500 w-[100px]">This is a blue box</div>
        <div className="bg-yellow-500 w-[100px]">This is a red box</div>
        <div className="bg-orange-500 w-[100px]">This is a green box</div>
        <div className="bg-purple-500 w-[100px]">This is a blue box</div>
      </div>

      <h2 className="text-xl font-bold">Flex Grids Columns with Widths</h2>
      <div className="flex flex-wrap">
        <div className="bg-red-500 w-[100px] m-2">This is a red box</div>
        <div className="bg-green-500 w-[100px] m-2">This is a green box</div>
        <div className="bg-blue-500 w-[100px] m-2">This is a blue box</div>
        <div className="bg-yellow-500 w-[100px] m-2">This is a red box</div>
        <div className="bg-orange-500 w-[100px] m-2">This is a green box</div>
        <div className="bg-purple-500 w-[100px] m-2">This is a blue box</div>
      </div>

    </div>
  );
}