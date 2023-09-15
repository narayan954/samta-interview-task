import { useState } from "react";

export default function App() {
  const [text, setText] = useState("");
  const [options, setOptions] = useState(["default"]);

  function handleclick() {
    let newOpt = [...options, text];
    text && setOptions(newOpt);
    setText("");
  }
  return (
    <div className="App">
      <input
        onChange={(e) => setText(e.target.value)}
        type="text"
        value={text}
        placeholder="enter option"
      />
      <button onClick={handleclick}>add option</button>
      <br />
      <select>
        {options?.map((opt, ind) => (
          <option key={ind}>{opt}</option>
        ))}
      </select>
    </div>
  );
}
