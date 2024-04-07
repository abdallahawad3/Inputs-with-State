import "./inputsStyle.css"
import { useState } from "react"
export function MyForm() {
  const [value, setValue] = useState({
    email: "",
    name: "",
    password: ""
  });
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      console.log(value);
    }}>
      <div className="card">
        <label htmlFor="input-1"><h4>Enter Your Email</h4></label>
        <input value={value.email} onChange={(e) => {
          setValue({ ...value, email: e.target.value });// انسخ كل العناصر وغير ال email only

          // const newEmail = { ...value };
          // newEmail.email = e.target.value;
          // setValue(newEmail);
          // setValue(
          //   { email: e.target.value, name: value.name, password: value.password }
          // )
        }}
          id="input-1" />
      </div>

      <div className="card">
        <label htmlFor="input-2"><h4>Enter Your name</h4></label>
        <input value={value.name} onChange={(e) => {

          setValue({ ...value, name: e.target.value }); // Same logic

          // const newName = { ...value };
          // newName.name = e.target.value;
          // setValue(newName);
          // setValue(
          //   {
          //     name: e.target.value,
          //     email: value.email,
          //     password: value.password
          //   })
        }} id="input-2" />
      </div>
      <div>
        <div className="card">
          <label htmlFor="input-3"><h4>Enter Your password</h4></label>
          <input value={value.password} onChange={(e) => {

            setValue({ ...value, password: e.target.value });

            // const newPassword = { ...value };
            // newPassword.password = e.target.value;
            // setValue(newPassword);
            // setValue({password: e.target.value, email: value.email, name: value.name })
          }} type="password" id="input-3" />
        </div>
        <div>
        </div>
        <button>Send Data</button>
      </div>
    </form>
  );
}