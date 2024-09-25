import React, { useState } from "react";
import "./App.css";

const App = () => {
  // State to manage display, current value, previous value, and operator
  const [displayValue, setDisplayValue] = useState("0");
  const [previousValue, setPreviousValue] = useState(null);
  const [currentValue, setCurrentValue] = useState("0");
  const [operator, setOperator] = useState(null);

  // Handle number input
  const handleNumberClick = (value) => {
    if (currentValue === "0") {
      setCurrentValue(value);
      setDisplayValue(value);
    } else {
      setCurrentValue((prev) => prev + value);
      setDisplayValue((prev) => prev + value);
    }
  };

  // Handle operator input
  const handleOperatorClick = (operatorValue) => {
    if (currentValue !== null) {
      setPreviousValue(currentValue);
      setCurrentValue("0");
      setOperator(operatorValue);
      setDisplayValue(operatorValue);
    }
  };

  // Handle equal button click to perform calculation
  const handleEqualClick = () => {
    if (previousValue && operator && currentValue) {
      const prev = parseFloat(previousValue);
      const current = parseFloat(currentValue);
      let result;

      switch (operator) {
        case "+":
          result = prev + current;
          break;
        case "-":
          result = prev - current;
          break;
        case "*":
          result = prev * current;
          break;
        case "/":
          result = prev / current;
          break;
        default:
          return;
      }

      setDisplayValue(result.toString());
      setPreviousValue(null);
      setCurrentValue(result.toString());
      setOperator(null);
    }
  };

  // Handle clear button
  const handleClearClick = () => {
    setPreviousValue(null);
    setCurrentValue("0");
    setOperator(null);
    setDisplayValue("0");
  };

  // Handle sign toggle
  const handleToggleSignClick = () => {
    const toggledValue = (parseFloat(currentValue) * -1).toString();
    setCurrentValue(toggledValue);
    setDisplayValue(toggledValue);
  };

  // Handle decimal input
  const handleDecimalClick = () => {
    if (!currentValue.includes(".")) {
      setCurrentValue(currentValue + ".");
      setDisplayValue(currentValue + ".");
    }
  };

  // Handle percentage input
  const handlePercentageClick = () => {
    const percentValue = (parseFloat(currentValue) / 100).toString();
    setCurrentValue(percentValue);
    setDisplayValue(percentValue);
  };

  return (
    <div className="calculator">
      <h1
        style={{
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        Calculator App
      </h1>
      <div className="display">{displayValue}</div>
      <div className="buttons">
        <button className="btn" onClick={handleClearClick}>
          C
        </button>
        <button className="btn" onClick={handleToggleSignClick}>
          ±
        </button>
        <button className="btn" onClick={handlePercentageClick}>
          %
        </button>
        <button
          className="btn operator"
          onClick={() => handleOperatorClick("/")}
        >
          ÷
        </button>

        <button className="btn" onClick={() => handleNumberClick("7")}>
          7
        </button>
        <button className="btn" onClick={() => handleNumberClick("8")}>
          8
        </button>
        <button className="btn" onClick={() => handleNumberClick("9")}>
          9
        </button>
        <button
          className="btn operator"
          onClick={() => handleOperatorClick("*")}
        >
          ×
        </button>

        <button className="btn" onClick={() => handleNumberClick("4")}>
          4
        </button>
        <button className="btn" onClick={() => handleNumberClick("5")}>
          5
        </button>
        <button className="btn" onClick={() => handleNumberClick("6")}>
          6
        </button>
        <button
          className="btn operator"
          onClick={() => handleOperatorClick("-")}
        >
          −
        </button>

        <button className="btn" onClick={() => handleNumberClick("1")}>
          1
        </button>
        <button className="btn" onClick={() => handleNumberClick("2")}>
          2
        </button>
        <button className="btn" onClick={() => handleNumberClick("3")}>
          3
        </button>
        <button
          className="btn operator"
          onClick={() => handleOperatorClick("+")}
        >
          +
        </button>

        <button className="btn zero" onClick={() => handleNumberClick("0")}>
          0
        </button>
        <button className="btn" onClick={handleDecimalClick}>
          .
        </button>
        <button className="btn equal" onClick={handleEqualClick}>
          =
        </button>
      </div>
    </div>
  );
};

export default App;
