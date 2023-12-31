import { useContext } from "react";
import logo from "../images/logo.jpg";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";
function Navbar() {
  const { currentUser, logout } = useContext(AuthContext);
  // console.log()
  return (
    <div className="navbar">
      <div className="container">
        <Link to="/">
          <div className="logo">
            <img
              src="https://revenuearchitects.com/wp-content/uploads/2017/02/Blog_pic-450x255.png"
              alt="logo"
            />
          </div>
        </Link>
        <div className="links">
          <Link className="link" to="/?cat=art">
            <h6>Art</h6>
          </Link>
          <Link className="link" to="/?cat=science">
            <h6>Science</h6>
          </Link>
          <Link className="link" to="/?cat=art">
            <h6>Technology</h6>
          </Link>
          <Link className="link" to="/?cat=art">
            <h6>Cinema</h6>
          </Link>
          <Link className="link" to="/?cat=art">
            <h6>Design</h6>
          </Link>
          <Link className="link" to="/?cat=art">
            <h6>Food</h6>
          </Link>
          <h6>{currentUser?.username}</h6>
          {currentUser ? (
            <span onClick={logout}>Logout</span>
          ) : (
            <Link className="link" to="/login">
              Login
            </Link>
          )}
          <span className="write">
            <Link className="link" to="/write">
              <h6>Write</h6>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
