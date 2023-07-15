export default function Status({ allItems, packedItemsAmount }) {
  return (
    <div className="status">
      <p>
        You have {allItems.length} items on the list, and you have packed{" "}
        {packedItemsAmount} items so far.
      </p>
    </div>
  );
}
