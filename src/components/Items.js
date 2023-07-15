export default function Items({ allItems, setAllItems }) {
  function togglePacked(id) {
    setAllItems((prev) => {
      return prev.map((obj) =>
        obj.id === id ? { ...obj, packed: !obj.packed } : obj
      );
    });
  }
  function deleteItem(id) {
    setAllItems((prev) => {
      return prev.filter((obj) => obj.id !== id);
    });
  }
  return (
    <div className="items">
      {allItems.map((obj) => (
        <div
          className={`itemContainer ${
            obj.packed === false ? "unpacked" : "packed"
          }`}
          style={{ backgroundColor: obj.packed === false ? "red" : "green" }}
        >
          <p>
            <span>{obj.itemAmount} of </span>
            {obj.itemDescription}
          </p>
          <div className="menuContainer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="2rem"
              viewBox="0 0 448 512"
              onClick={() => togglePacked(obj.id)}
            >
              <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="2rem"
              viewBox="0 0 448 512"
              onClick={() => deleteItem(obj.id)}
            >
              <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
            </svg>
          </div>
        </div>
      ))}
    </div>
  );
}
