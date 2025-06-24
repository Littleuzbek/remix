import { useRef, useState } from "react";
import { useNavigate } from "@remix-run/react";
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

  const signInUser = async (email, password) => {
    if (email !== "" && password !== "") {
      setLoader(true);
      signInWithEmailAndPassword(auth, email, password)
        .then(async (res) => {
          await getDoc(doc(db, "exko", "users", "users", res?.user?.uid)).then(
            (user) => {
              if (user?.data()) {
                dispatch(cartAction.setUser(user?.data()));
                dispatch(cartAction.setLogged(true));
                navigate(`/user/main`);
              }
            }
          );
        })
        .catch((err) => {
          console.log(err);
          setError("incorrect email or password!");
          setLoader(false);
        });
    } else {
      console.log("err");
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
