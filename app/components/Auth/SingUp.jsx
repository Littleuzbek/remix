import "./log.css";
import { useState, useRef } from "react";
import { useFetcher, useNavigate } from "@remix-run/react";
import { useDispatch } from "react-redux";
import { auth, db } from "../../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { Loader } from "lucide-react";

export default function SignUp() {
  const name = useRef();
  const email = useRef();
  const password = useRef();
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const fetcher = useFetcher();

  const signUpUser = (email, password, name) => {
    if (email !== "" && password !== "" && name !== "") {
      setLoader(true);
      createUserWithEmailAndPassword(auth, email, password)
        .then(async (res) => {
          if (res.user.uid) {
            await updateProfile(res.user, {
              displayName: name,
            });
            fetcher.submit(
              {
                newUserData: JSON.stringify(res.user),
                email: email,
                name: name,
              },
              { method: "post", action: "/authentication" }
            );
          }
        })
        .catch((err) => {
          setLoader(false);
          if (err?.code?.includes("weak")) {
            setError("password is too short");
          } else if (err?.code?.includes("in-use")) {
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
        EnterHandler();
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

      <button className="login-btn" type={loader ? "button" : "submit"}>
        {loader ? <Loader className="auth-loader" /> : "Sign Up"}
      </button>

      {error && <p>{error}</p>}
    </form>
  );
}
