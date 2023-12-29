import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
function Menu(props) {
  const [posts, setPosts] = useState([]);
  const cat = useLocation();
  useEffect(() => {
    const fetchData = async () => {
       // console.log("props", props);
      try {
        const res = await axios.get(`http://localhost:8800/api/posts/${props.cat}`);
        // Set the fetched data directly to the 'posts' state
        setPosts(res.data);
        //  // console.log("posts", posts); // Log the data to verify it's coming correctly
      } catch (error) {
         // console.log('error', error);
      }
    };
    fetchData();
  }, []);


  // Add a useEffect to log 'posts' whenever it changes
  useEffect(() => {
     // console.log("posts after set:", posts);
  }, [posts]);

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
    return (
        <div className="menu">
            <h1>other posts u may like</h1>
            {posts.map(function(post){
                const imagesrc = `../upload/${post?.img}`;
                return (
                    <div className="post" key={post.id}>
                        <img src={imagesrc} alt="" />
                        <h2>{post.title}</h2>
                        <button>Read More</button>
                    </div>
                )
            })}
        </div>
    )
}
export default Menu ;