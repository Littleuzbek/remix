import { useState } from "react";
import { redirect } from "@remix-run/node";
import { isLogged, login } from "../firebase";
import Login from "../components/Auth/Log";
// import SignUp from "../components/Auth/SingUp";
import { useActionData } from "@remix-run/react";

export const loader = async () => {
  const isUserLogged = await isLogged(); 
  if(isUserLogged){
    const uid = isUserLogged?.uid || isUserLogged?.currentUser.uid
    return redirect(`/user/${uid}/main`);
  }else{
    return null
  }
};

export const action = async ({ request }) => {
  const formData = await request.formData();

  const res = login(formData);

  if(res){
    return redirect(`/user/${res.user.uid}/main`);
  }else{
    throw new Response("Wrong email or password!",{ status: 401})
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
