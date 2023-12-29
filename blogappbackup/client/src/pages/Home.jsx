import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
function Home() {
  const [posts, setPosts] = useState([]);
  const cat = useLocation().search;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:8800/api/posts${cat}`);
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
  //   console.log("posts after set:", posts);
  // }, [posts]);

  const data = [
    // {
    //   id: 1,
    //   title:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, nisi!",
    //   desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga repellat maiores repudiandae nisi, consequatur neque sequi corporis qui ab veritatis sapiente natus. Asperiores, odit in!",
    //   img: "https://picsum.photos/200",
    // },
    // {
    //   id: 2,
    //   title:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, nisi!",
    //   desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga repellat maiores repudiandae nisi, consequatur neque sequi corporis qui ab veritatis sapiente natus. Asperiores, odit in!",
    //   img: "https://picsum.photos/200",
    // },
    // {
    //   id: 3,
    //   title:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, nisi!",
    //   desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga repellat maiores repudiandae nisi, consequatur neque sequi corporis qui ab veritatis sapiente natus. Asperiores, odit in!",
    //   img: "https://picsum.photos/200",
    // },
    // {
    //   id: 4,
    //   title:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, nisi!",
    //   desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga repellat maiores repudiandae nisi, consequatur neque sequi corporis qui ab veritatis sapiente natus. Asperiores, odit in!",
    //   img: "https://picsum.photos/200",
    // },
    // {
    //   id: 5,
    //   title:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, nisi!",
    //   desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga repellat maiores repudiandae nisi, consequatur neque sequi corporis qui ab veritatis sapiente natus. Asperiores, odit in!",
    //   img: "https://picsum.photos/200",
    // },
  ];

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent;
  }

  return (
    <div className="home">
      <div className="posts">
        {posts.map(function (post) {
          const imagesrc = `../upload/${post?.img}`;
          console.log(imagesrc);
          return (
            <div className="post" key={post.id}>
                <>
                  <div className="img">
                    <img src={imagesrc} alt="" />
                  </div>
                  <div className="content">
                    <Link
                      className="link"
                      to={`/post/${post.id}`}
                      state={{ cat: cat }}
                    >
                      <h1 style={{ color: "white" }}>{post.title}</h1>
                    </Link>
                    <p>{getText(post.desc)}</p>
                    <button>Read More</button>
                  </div>
                </>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Home;
