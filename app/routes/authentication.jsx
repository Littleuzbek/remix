import { useState } from "react";
import Login from "../components/Auth/Log";
import SignUp from "../components/Auth/SingUp";
import { login, signUp } from "../utils";

export async function action({ request }) {
  const formData = await request.formData();
  const newUserData = formData.get("newUserData");

  if(newUserData){
    const singUpData = await signUp(formData);
    return singUpData;
  }else{
    const loginData = await login(formData);
    return loginData;
  }
}

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
