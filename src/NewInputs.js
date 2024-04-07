import "./inputsStyle.css"
import { useState } from "react"
export function NewInputs() {
  const [values, setValues] = useState(
    {
      name: "",
      age: "",
      content: "",
      isStudent: false,
      option: "",
      status: "",
    }
  )
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      console.log(values);
    }
    }>
      <div className="card">
        <label htmlFor="input-1"><h4>Enter Your Name</h4></label>
        <input value={values.name} onChange={(e) => {
          setValues({ ...values, name: e.target.value })
        }} id="input-1" />
      </div>
      <div className="card">
        <label htmlFor="input-1"><h4>Enter Your Age</h4></label>
        <input value={values.age} onChange={(e) => {
          setValues({ ...values, age: e.target.value })
        }} type="number" id="input-1" />
      </div>

      <div className="card">
        <label htmlFor="input-3"><h4>About You</h4></label>
        <textarea value={values.content} onChange={(e) => {
          setValues({ ...values, content: e.target.value });
        }} > </textarea>
      </div>

      {/* 🙅🏻‍♀️🙅🏻‍♀️🙅🏻‍♀️🙅🏻‍♀️🙅🏻‍♀️🙅🏻‍♀️ Select 🙅🏻‍♀️🙅🏻‍♀️🙅🏻‍♀️🙅🏻‍♀️🙅🏻‍♀️🙅🏻‍♀️ */}
      <div className="card">
        <select value={values.option} onChange={(e) => {
          setValues({ ...values, option: e.target.value })
        }}>
          <option style={{ display: "none" }}>select option</option>
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
          <option>Option 4</option>
          <option>Option 5</option>
        </select>
      </div>

      {/* ⛔⛔⛔⛔⛔⛔⛔⛔⛔ Radio Button ⛔⛔⛔⛔⛔⛔⛔⛔⛔ */}
      <div>
        <div className="card">
          <label htmlFor="l-1">Student</label>
          <input value={"student"} onChange={(e) => {
            setValues({ ...values, status: e.target.value });
          }} id="l-1" name="status" type="radio" checked={values.status === "student"} />
        </div>
        <div className="card">
          <label htmlFor="l-2">Teacher</label>
          <input id="l-2" name="status" type="radio" value={"teacher"} onChange={(e) => {
            setValues({ ...values, status: e.target.value });
          }} />
        </div>
      </div>
      {/* ⛔⛔⛔⛔⛔⛔⛔⛔⛔ Radio Button ⛔⛔⛔⛔⛔⛔⛔⛔⛔ */}
      {/* ✅✅✅ Check Box ✅✅✅  */}
      <div className="card checkbox-card">
        <label htmlFor="input-4">Are you student</label>
        <input checked={values.isStudent} onChange={(e) => {
          setValues({ ...values, isStudent: e.target.checked })
        }} id="input-4" type="checkbox" />
      </div>

      {/* ✅✅✅ Check Box ✅✅✅  */}

      {/*⚡⚡⚡⚡⚡⚡⚡🙅🏻‍♀️🙅🏻‍♀️🙅🏻‍♀️🙅🏻‍♀️🙅🏻‍♀️🙅🏻‍♀️🙅🏻‍♀️🙅🏻‍♀️ Button 🙅🏻‍♀️🙅🏻‍♀️🙅🏻‍♀️🙅🏻‍♀️🙅🏻‍♀️🙅🏻‍♀️🙅🏻‍♀️🙅🏻‍♀️*/}
      <div>
        <button>Send Data</button>
      </div>
    </form>
  );
}