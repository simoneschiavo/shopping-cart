export default function AddToBag() {
  return (
    <div className="mt-auto flex justify-between gap-4 text-sm">
      <input
        type="number"
        name="quantity"
        id="quantity"
        placeholder={1}
        min={1}
        className="w-16 border border-gray-500 px-2 py-1"
      />
      <button className="basis-3/4 bg-blue-700 text-white px-6 py-2 uppercase">
        Add to bag
      </button>
    </div>
  );
}
