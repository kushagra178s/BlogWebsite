import React from "react";
import { Link, useNavigate } from "react-router-dom";
function Login() {
  const [inputs, setInputs] = useState({
    username: "",
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
      const res = await axios.post(
        "http://localhost:8800/api/auth/login",
        inputs
      );
      // console.log("data", res.data);
      navigate("/");
    } catch (err) {
      // console.log("error", err);
      setError(err.response.data);
    }
  };

  return (
    <div className="auth">
      <h1>Login</h1>
      <form action="">
        <input
          type="text"
          placeholder="username"
          name="username"
          onChange={handleChange}
        />
        <input
          type="password "
          placeholder="password"
          name="password"
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>click</button>
        {error && <p>{error}!</p>}
        <span>
          dont have an account <Link to="/register">Register</Link>{" "}
        </span>
      </form>
    </div>
  );
}
export default Login;
