import "./log.css";
import { useState, useRef } from "react";
import { useNavigate } from "@remix-run/react";
import { useDispatch } from "react-redux";
import { auth, db } from "../../firebase";
import { cartAction } from "../../store/CartSlice";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { Loader } from "lucide-react";

export default function SignUp() {
  const name = useRef();
  const email = useRef();
  const password = useRef();
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signUpUser = (email, password, name) => {
    if (email !== "" && password !== "" && name !== "") {
      setLoader(true);
      createUserWithEmailAndPassword(auth, email, password)
        .then(async (res) => {
          await updateProfile(res?.user, {
            displayName: name,
          });
          await setDoc(doc(db, "exko", "users", "users", res?.user?.uid), {
            banned: false,
            birthDay: null,
            email: email,
            gender: null,
            isAdmin: false,
            name: name,
            number: null,
            surname: null,
            createdAt: serverTimestamp(),
          });

          dispatch(cartAction.setLogged(true));
          setLoader(false);
          navigate(`/user/${res?.user?.uid}/main`);
        })
        .catch((err) => {
          setLoader(false);
          if (err?.code.includes("weak")) {
            setError("password is too short");
          } else if (err?.code.includes("in-use")) {
            setError("email is already in use!");
          } else {
            setError("error happend, please try again later");
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
        EnterHandler()
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

      <button className="login-btn" onClick={() => loader ? "" : EnterHandler()}>
        {loader ? <Loader className="auth-loader" /> : "Sign Up"}
      </button>

      {error && <p>{error}</p>}
    </form>
  );
}