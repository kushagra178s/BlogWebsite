import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import NothingToShow from "./NothingToShow";
function Home() {
  const [posts, setPosts] = useState([]);
  const cat = useLocation().search;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:8800/api/posts${cat}`);
        // console.log("link = ", `http://localhost:8800/api/posts${cat}`);
        // Set the fetched data directly to the 'posts' state
        setPosts(res.data);
        // console.log("posts", posts); // Log the data to verify it's coming correctly
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, [cat]);

  // Add a useEffect to log 'posts' whenever it changes
  // useEffect(() => {
  //   console.log("posts after set:", posts.length);
  // }, [posts]);

  
  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent;
  };

  // Fetch dark mode setting from localStorage
  // const storedDarkMode = JSON.parse(localStorage.getItem("darkmode"));
  // const [darkMode, setDarkMode] = useState(storedDarkMode);

  // useEffect(() => {
  //   // Update dark mode state
  //   setDarkMode(storedDarkMode);
  // }, [storedDarkMode]);

  return (
    <div className="home">
      <div className="posts">
        {posts.length == 0 ? (
          <NothingToShow/>
        ) : (
          posts.map(function (post) {
            return (
              <div className="post" key={post.id}>
                <>
                  <div className="img">
                    <img
                      src={
                        post?.img
                          ? require(`../uploads/${post.img}`)
                          : "https://placehold.co/800x400"
                      }
                      alt=""
                    />
                  </div>
                  <div className="content">
                    <Link
                      className="link"
                      to={`/post/${post.id}`}
                      state={{ cat: cat }}
                    >
                      <h1 style={{ color: "black" }}>
                        <em>{post.title}</em>
                      </h1>
                    </Link>
                    <br />
                    <h2>
                      {getText(post.desc).split(" ").slice(0, 55).join(" ")}
                      .....
                    </h2>
                    <Link
                      className="link"
                      to={`/post/${post.id}`}
                      state={{ cat: cat }}
                    >
                      <button style={{ width: "100%" }}>
                        <h2>Read More</h2>
                      </button>
                    </Link>
                  </div>
                </>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
export default Home;
