import React from "react";
import { Link, useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  return (
    <div className="auth">
      <h1>Login</h1>
      <form action="">
        <input type="text" placeholder="username" />
        <input type="password " placeholder="password" />
        <button
          onClick={() => {
            navigate("/home", {
              state: { param1: "from login", param2: "to home" },
            });
          }}
        >
          click
        </button>
        <p>this is an error!</p>
        <span>
          dont have an account <Link to="/register">Register</Link>{" "}
        </span>
      </form>
    </div>
  );
}
export default Login;
