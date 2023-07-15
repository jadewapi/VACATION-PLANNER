import Logo from "./components/Logo";
import Form from "./components/Form";
import Items from "./components/Items";
import Status from "./components/Status";
import ProgressBar from "./components/ProgressBar";
import { useState } from "react";

export default function App() {
  const [allItems, setAllItems] = useState([]);
  console.log(allItems);
  return (
    <>
      <Logo />
      <Form setAllItems={setAllItems} />
      <Items allItems={allItems} />
      <Status />
      <ProgressBar />
    </>
  );
}
