import { useState } from "react";
import "./App.css";
import Keypad from "./components/Keypad";
import Result from "./components/Result";

function App() {
  const [result, setResult] = useState("");

  const handleKeys = (key) => {
    if (key === "=") {
      //calculates the result
      calculateResult();
    } else if (key === "AC") {
      // reset the result
      setResult("");
    } else if (key === "CE") {
      // delete last element
      let answer = result.slice(0, -1);
      setResult(answer);
    } else {
      let answer = result + key;
      setResult(answer);
    }
  };

  const calculateResult = () => {
    setResult(eval(result));
  };
  return (
    <div className="App">
      <h1>Calculator</h1>
      <Result result={result} />
      <Keypad handleClick={handleKeys} />
      {/*1. Create a keypad component so that on click of that key we get the desired result
      2. create a result component where we get to get to see the result
       */}
    </div>
  );
}

export default App;
