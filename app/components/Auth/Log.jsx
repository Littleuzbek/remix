import { useEffect, useRef, useState } from "react";
import { useFetcher, useNavigate } from "@remix-run/react";
import { useDispatch } from "react-redux";
import { doc, getDoc } from "firebase/firestore";
import { signInWithEmailAndPassword } from "firebase/auth";

import { cartAction } from "../../store/CartSlice";
import { auth, db } from "../../firebase";

import { Loader } from "lucide-react";

export default function Login() {
  const email = useRef();
  const password = useRef();
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const fetcher = useFetcher();

  const signInUser = async (email, password) => {
    if (email !== "" && password !== "") {
      setLoader(true);
      signInWithEmailAndPassword(auth, email, password)
        .then(async (res) => {
          if (res.user.uid) {
            fetcher.submit(
              {
                userId: res.user.uid,
                email: email,
                password: password,
              },
              { method: "post", action: "/authentication" }
            );
          }
        })
        .catch(() => {
          setLoader(false);
          setError("email or password is wrong!");
        });
    } else {
      setLoader(false);
      setError("Please enter requirements");
    }
  };

  const EnterHandler = (e) => {
    signInUser(email?.current?.value?.trim(), password?.current?.value?.trim());
  };

  return (
    <form
      className="login-form"
      onSubmit={(e) => {
        e.preventDefault();
        EnterHandler();
      }}
    >
      <h2>Login</h2>
      <div className="product-info">
        <p>Email</p>
        <input type="text" required ref={email} />
      </div>
      <div className="product-info">
        <p>Password</p>
        <input type="text" required ref={password} />
      </div>

      <button
        className="login-btn"
        onClick={() => (loader ? "" : EnterHandler())}
      >
        {loader ? <Loader className="auth-loader" /> : "Login"}
      </button>

      {error && <p>{error}</p>}
    </form>
  );
}
