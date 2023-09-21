import React from "react";
import { Link, useNavigate } from "react-router-dom";
function Register() {
  const navigate = useNavigate();
  return (
    <div className="auth">
      <h1>Register</h1>
      <form action="">
        <input required type="text" placeholder="username" />
        <input required type="email" placeholder="email" />
        <input required type="password " placeholder="password" />
        <button
          onClick={() => {
            navigate("/home", {
              state: { param1: "from Register", param2: "to home" },
            });
          }}
        >
          click
        </button>
        <p>this is an error!</p>
        <span>
          already have an account <Link to="/Login">Login</Link>{" "}
        </span>
      </form>
    </div>
  );
}
export default Register;
