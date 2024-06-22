import { useState } from "react";
import "./Calculator.scss";

const Calculator = () => {
  const [input, setInput] = useState("0");
  const [output, setOutput] = useState("0");
  const [isResult, setIsResult] = useState(false);

  const handleButtonClick = (value: any) => {
    if (value === "clear") {
      setInput("0");
      setOutput("0");
      setIsResult(false);
      return;
    }

    if (value === "=") {
      try {
        const result = eval(input);
        setOutput(result.toString());
        setInput(result.toString());
        setIsResult(true);
      } catch (error) {
        setOutput("Error");
      }
      return;
    }

    if (isResult && !isNaN(value)) {
      setInput(value);
      setOutput(value);
      setIsResult(false);
      return;
    }

    if (input === "0" && value === "0") return;

    if (input === "0" && value !== ".") {
      setInput(value);
      setOutput(value);
      return;
    }

    if (value === "." && input.includes(".")) return;

    setInput((prev) => prev + value);
    setOutput((prev) => prev + value);
  };

  return (
    <div className="calculator">
      <div id="display" className="calculator__display">
        {output}
      </div>
      <div className="calculator__buttons">
        <button id="clear" onClick={() => handleButtonClick("clear")}>
          AC
        </button>
        <button id="divide" onClick={() => handleButtonClick("/")}>
          /
        </button>
        <button id="multiply" onClick={() => handleButtonClick("*")}>
          *
        </button>
        <button id="subtract" onClick={() => handleButtonClick("-")}>
          -
        </button>
        <button id="add" onClick={() => handleButtonClick("+")}>
          +
        </button>
        <button id="equals" onClick={() => handleButtonClick("=")}>
          =
        </button>
        <button id="decimal" onClick={() => handleButtonClick(".")}>
          .
        </button>
        <button id="zero" onClick={() => handleButtonClick("0")}>
          0
        </button>
        <button id="one" onClick={() => handleButtonClick("1")}>
          1
        </button>
        <button id="two" onClick={() => handleButtonClick("2")}>
          2
        </button>
        <button id="three" onClick={() => handleButtonClick("3")}>
          3
        </button>
        <button id="four" onClick={() => handleButtonClick("4")}>
          4
        </button>
        <button id="five" onClick={() => handleButtonClick("5")}>
          5
        </button>
        <button id="six" onClick={() => handleButtonClick("6")}>
          6
        </button>
        <button id="seven" onClick={() => handleButtonClick("7")}>
          7
        </button>
        <button id="eight" onClick={() => handleButtonClick("8")}>
          8
        </button>
        <button id="nine" onClick={() => handleButtonClick("9")}>
          9
        </button>
      </div>
    </div>
  );
};

export default Calculator;
