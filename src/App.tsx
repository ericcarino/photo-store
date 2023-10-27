import { useState } from "react";
import "./App.css";
import Button from "./shared/button/Button";
import reactImg from "./assets/react.svg";

export default function App() {
  const buttons = ["One", "Two", "Three"];
  const [clickedButton, setClickedButton] = useState<string>();

  function handleClick(type: string) {
    console.log(`button clicked: ${type}`);
    setClickedButton(type);
  }

  return (
    <>
      <div>
        <img src={reactImg} />
      </div>
      {buttons.map((button) => (
        <Button
          key={button}
          isSelected={clickedButton === button}
          onClick={() => handleClick(button)}
        >
          {button}
        </Button>
      ))}
      <p>
        {!clickedButton ? (
          "Please click a button"
        ) : (
          <span>Section {clickedButton}</span>
        )}
      </p>
    </>
  );
}
