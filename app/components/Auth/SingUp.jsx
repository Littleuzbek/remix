import { useNavigate } from "react-router";
import "./log.css";
import { useState, useRef } from "react";
import { auth, db } from "../../firebase";
import { useDispatch } from "react-redux";
import { cartAction } from "../../store/CartSlice";
import { createUserWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";

export default function SignUp() {
  const name = useRef();
  const email = useRef();
  const password = useRef();
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // signOut(auth);
  const signUpUser = (email, password, name) => {
    if (email !== "" && password !== "" && name !== "") {
      createUserWithEmailAndPassword(auth, email, password)
        .then(async (res) => {
          await updateProfile(res?.user, {
            displayName: name,
          });
          await setDoc(doc(db, "exko", "data", "users", res?.user?.uid), {
            banned: false,
            birthDay: null,
            email: email,
            gender: null,
            isAdmin: false,
            name: name,
            number: null,
            surname: null,
            createdAt: serverTimestamp()
          });

          dispatch(cartAction.setLogged(true));
        })
        .catch((err) => {
          if(err?.code.includes("weak")){
            setError("password is too short")
          }else{
            setError("error happened!");
          }
        });
    } else {
      console.log("err");
      setError("Please enter requirements");
    }
  };

  const EnterHandler = (e) => {
    signUpUser(
      email?.current?.value?.trim(),
      password?.current?.value?.trim(),
      name?.current?.value?.trim()
    );
  };

  return (
    <form
      className="signup-form"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <h2>Sign Up</h2>
      <div className="product-info">
        <p>Name</p>
        <input type="text" required ref={name} />
      </div>
      <div className="product-info">
        <p>Email</p>
        <input type="text" required ref={email} />
      </div>
      <div className="product-info">
        <p>Password</p>
        <input type="text" required ref={password} />
      </div>

      <button className="login-btn" onClick={() => EnterHandler()}>
        Sign Up
      </button>

      {error && <p>{error}</p>}
    </form>
  );
}
