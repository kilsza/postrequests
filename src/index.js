import React from "react";
import { render } from "react-dom";
import Shop from "./Shop.js";
import "./index.css";

function App() {
  return (
    <>
      <div className="">
        <Shop />
      </div>
    </>
  );
}

render(<App />, document.querySelector("#root"));
