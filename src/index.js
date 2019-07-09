import React, { useRef } from "react";
import ReactDOM from "react-dom";
import useFileReader from "./useFileReader";
import "./styles.css";

function App() {
  const inputRef = useRef();
  const [src, onChange] = useFileReader(inputRef);

  console.log(src);

  return (
    <div className="App">
      <h1>
        Hello useFileReader{" "}
        <span role="img" aria-label=":wave:">
          👋
        </span>
      </h1>
      <p>
        Use input{" "}
        <span role="img" aria-label=":point down:">
          👇
        </span>{" "}
        to upload image to preview.
      </p>
      <input ref={inputRef} type="file" onChange={onChange} />
      <br />
      <img src={src} alt="" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
