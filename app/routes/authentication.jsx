import { useState } from "react";
import Login from "../components/Auth/Log";
import SignUp from "../components/Auth/SingUp";

export default function Authentication() {
  const [form, setForm] = useState(false);

  return (
    <div className="login-page">
      {form ? <SignUp /> : <Login />}
      <div className="change-form">
        {form ? "Not Newcomer" : "Newcomer"} ?
        <button onClick={() => setForm(!form)}>
          {form ? "Login" : " Sign Up"}
        </button>
      </div>
    </div>
  );
}
