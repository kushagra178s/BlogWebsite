import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";
function Navbar() {
  const { currentUser, logout } = useContext(AuthContext);
  // console.log()
  // const [darkMode, setDarkMode] = useState(false);
  // useEffect(()=>{
  //   localStorage.setItem("darkmode", JSON.stringify(darkMode));
  // },[darkMode])
  
  return (
    <div className="navbar">
      <div className="container">
        <div className="links">
        <Link to="/">
          <div className="logo">
            <h1 style={{color:"black"}}>InfoBlogs</h1>
          </div>
        </Link>
        {/* <button className="darkmode" onClick={()=>setDarkMode(darkMode=="white"?"black":"white")}>🌗</button> */}
        </div>
        <div className="links">
          <Link className="link" to="/?cat=art">
            <h6>Art</h6>
          </Link>
          <Link className="link" to="/?cat=science">
            <h6>Science</h6>
          </Link>
          <Link className="link" to="/?cat=technology">
            <h6>Technology</h6>
          </Link>
          <Link className="link" to="/?cat=cinema">
            <h6>Cinema</h6>
          </Link>
          <Link className="link" to="/?cat=design">
            <h6>Design</h6>
          </Link>
          <Link className="link" to="/?cat=food">
            <h6>Food</h6>
          </Link>
          {currentUser ? (
            <div className="user-info">
              <h2 >
                {currentUser?.username}
                <p onClick={logout} className="write">
                Logout
              </p>
              </h2>
              
            </div>
          ) : (
            <Link className="link write" to="/login" >
              Login
            </Link>
          )}
          {currentUser ? (
            <span className="write">
              <Link className="link" to="/write">
                <h6>Write</h6>
              </Link>
            </span>
          ) : (
            <h2>Login to write a blog</h2>
          )}
        </div>
      </div>
    </div>
  );
}
export default Navbar;
