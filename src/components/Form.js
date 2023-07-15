import { useState } from "react";

export default function Form({ setAllItems }) {
  const [itemDescription, setItemDescription] = useState("");
  const [itemAmount, setItemAmount] = useState(1);

  function formSubmit(e) {
    e.preventDefault();

    if (!itemDescription) return;

    const newItem = {
      itemDescription,
      itemAmount,
      packed: false,
      id: Date.now(),
    };
    setItemAmount(1);
    setItemDescription("");
    setAllItems((prevArray) => [...prevArray, newItem]);
  }

  return (
    <>
      <div className="formContainer" onSubmit={formSubmit}>
        <form action="">
          <label>How many do you need for your trip?</label>
          <div className="inputContainer">
            <select
              value={itemAmount}
              onChange={(e) => setItemAmount(e.target.value)}
            >
              {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
                <option value={num} key={num}>
                  {num}
                </option>
              ))}
            </select>
            <input
              type="text"
              placeholder="item name"
              value={itemDescription}
              onChange={(e) => setItemDescription(e.target.value)}
            />
            <button>add</button>
          </div>
        </form>
      </div>
    </>
  );
}
