import { useState } from "react";

export default function Form(e) {
  const [itemDescription, setItemDescription] = useState("");
  return (
    <>
      <div className="formContainer" onSubmit>
        <form action="">
          <label>How many do you need for your trip?</label>
          <div className="inputContainer">
            <select>
              {}
              <option value="1">1</option>
            </select>
            <input
              type="text"
              placeholder="item name"
              value={itemDescription}
              onChange={() => setItemDescription((yeet) => e.target.value)}
            />
            <button>add</button>
          </div>
        </form>
      </div>
      n
    </>
  );
}
