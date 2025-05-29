import { useState } from "react";
import { json, redirect } from "@remix-run/node";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../firebase";
import Login from "../components/Login/Log";
// import SignUp from "../components/Login/SingUp";
import { useActionData } from "@remix-run/react";

export const loader = async () => {
  if (!auth?.currentUser?.email) {
    return null;
  }
  return redirect(`/user/${auth.currentUser.uid}`);
};

export const action = async ({ request }) => {
  const formData = await request.formData();

  const email = formData.get("email");
  const password = formData.get("password");

  if (email.trim() === "" || password.trim() === "") {
    return json({ error: "Please fill out the form" }, { status: 400 });
  }

  try {
    const res = await signInWithEmailAndPassword(auth, email, password);

    const encodedURL = encodeURIComponent(res.user.uid)
    return redirect(`/user/${encodedURL}`);
  } catch (err) {
    console.log("login error", err);
    return json({ error: "Wrong email or password!" }, { status: 401 });
  }
};

export default function Authentication() {
  const [form, setForm] = useState(false);
  const userData = useActionData();
  return (
    <div className="login-page">
      {/* {form ? <SignUp /> : <Login data={userData} />} */}
      <Login data={userData} />
      <div className="change-form">
        {form ? "Not Newcomer" : "Newcomer"} ?
        <button onClick={() => setForm(!form)}>
          {form ? "Login" : " Sign Up"}
        </button>
      </div>
    </div>
  );
}
