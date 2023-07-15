export default function ProgressBar({ allItems, packedItemsAmount }) {
  const ratio = Math.trunc((packedItemsAmount / allItems.length) * 100);
  return (
    <div className="progressBar">
      <div className="fillIn" style={{ width: `${ratio}%` }}>
        <p>{isNaN(ratio) ? "0" : ratio}% of all items packed</p>
      </div>
    </div>
  );
}
