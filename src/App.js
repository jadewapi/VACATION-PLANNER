import Logo from "./components/Logo";
import Form from "./components/Form";
import Items from "./components/Items";
import Status from "./components/Status";
import ProgressBar from "./components/ProgressBar";
import { useState } from "react";

export default function App() {
  const [allItems, setAllItems] = useState([]);
  const packedItemsAmount = allItems.filter(
    (obj) => obj.packed === true
  ).length;
  console.log(allItems);
  return (
    <>
      <Logo />
      <Form setAllItems={setAllItems} />
      <Items allItems={allItems} setAllItems={setAllItems} />
      <Status allItems={allItems} packedItemsAmount={packedItemsAmount} />
      <ProgressBar allItems={allItems} packedItemsAmount={packedItemsAmount} />
    </>
  );
}
