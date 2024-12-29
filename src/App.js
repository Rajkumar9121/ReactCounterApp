import { useState } from "react";
import "./styles.css";

export default function App() {
  const [value, setValue] = useState(0);
  return (
    <div className="App">
      <h1>Counter App</h1>
      <h2>{value}</h2>
      <div className="button-group">
        <button
          className="increase"
          onClick={() => {
            setValue(value + 1);
          }}
        >
          Increase
        </button>
        <button
          className="reset"
          onClick={() => {
            setValue(0);
          }}
        >
          Reset
        </button>
        <button
          className="decrease"
          onClick={() => {
            setValue(value - 1);
          }}
        >
          Decrease
        </button>
      </div>
    </div>
  );
}
