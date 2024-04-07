import "./inputsStyle.css"
import { useState } from "react"
export function MyInputs() {
  const [value, setValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  return (
    <div>
      <div className="card">
        <label htmlFor="input-1"><h4>Enter Your name</h4></label>
        <input value={value} onChange={(e) => {
          setValue(e.target.value);
        }} id="input-1" />
      </div>
      <div className="card">
        <label htmlFor="input-2"><h4>Enter Your email</h4></label>
        <input value={emailValue} onChange={(e) => { setEmailValue(e.target.value) }} id="input-2" />
      </div>

    </div>
  );
}

// <div className="card">
//  <label for="input-2"><h4>Enter Your name</h4></label>
//  <input id="input-2" />
//</div>
//<div className="card">
//  <label for="input-3"><h4>Enter Your name</h4></label>
//  <input id="input-3" />
//</div>