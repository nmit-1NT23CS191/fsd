import react, { useState } from "react";
function App() {
  const [text, setText] = useState("");
  return (
    <div>
      <h2>react form with text area</h2>
      <textarea
        value={text}
        onchange={(e) => setText(e.target.value)}
        placeholder="enter your text"
        rows="5"
        cols="30"
      />

      <h3>Updated value: </h3>
      <p>{text}</p>
    </div>
  );
}
export default App;