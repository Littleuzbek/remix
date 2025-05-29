import { Form } from "@remix-run/react";

export default function Login({ data }) {
  return (
    <Form method="post" className="login-form">
      <h2>Login</h2>
      <div className="product-info">
        <p>Email</p>
        <input type="text" required name="email" pattern="\S+.*" />
      </div>
      <div className="product-info">
        <p>Password</p>
        <input type="text" required name="password" pattern="\S+.*" />
      </div>

      <button className="login-btn">Login</button>

      {data?.error && <p>{data?.error}</p>}
    </Form>
  );
}
