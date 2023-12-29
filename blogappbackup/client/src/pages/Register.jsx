import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
function Register() {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: [e.target.value] }));
  };

  // console.log(inputs);
  // http://localhost:8800/api/
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8800/api/auth/register", inputs);
      // console.log("data", res.data);
      navigate('/login');
    } catch (err) {
      // console.log("error", err);
      setError(err.response.data);
    }
  };

  return (
    <div className="auth">
      <h1>Register</h1>
      <form action="">
        <input
          required
          type="text"
          placeholder="username"
          name="username"
          onChange={handleChange}
        />
        <input
          required
          type="email"
          placeholder="email"
          name="email"
          onChange={handleChange}
        />
        <input
          required
          type="password"
          placeholder="password"
          name="password"
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>click</button>
        {error && <p>{error}!</p>}
        <span>
          already have an account <Link to="/Login">Login</Link>{" "}
        </span>
      </form>
    </div>
  );
}
export default Register;
