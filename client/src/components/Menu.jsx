import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
function Menu(props) {
  const [posts, setPosts] = useState([]);
  const cat = useLocation();

  const fetchData = async () => {
      // console.log("props = ", props);
    try {
      // const res = await axios.get(`http://localhost:8800/api/posts${category}`);
      const res = await axios.get(`http://localhost:8800/api/posts?cat=${props.post.cat}`);
      // console.log("menu link = ", `http://localhost:8800/api/posts?cat=${cat}`);

      // Set the fetched data directly to the 'posts' state
      setPosts(res.data);
      //  // console.log("posts", posts); // Log the data to verify it's coming correctly
    } catch (error) {
        console.log('error', error);
    }
  };


  // Add a useEffect to log 'posts' whenever it changes
  useEffect(() => { 
    fetchData();
  }, [props]);

    return (
        <div className="menu">
            <h2><em>Other Posts u may like</em></h2>
            {posts.map(function(post){
                const imagesrc = `../uploads/${post.img}`;
                return (
                    <div className="post" key={post.id}>
                        <hr />
                        <img src={post?.img ? require(`../uploads/${post.img}`): "https://placehold.co/600x400"} width="350px" alt="" />
                        <h2>{post.title}</h2>
                        <Link className="link" to={`/post/${post.id}`} state={{ cat : !cat?"art":cat }}>
                                <button style={{ width: "100%" }}><h2>Read More</h2></button>
                        </Link>

                        <hr />
                    </div>
                )
            })}
        </div>
    )
}
export default Menu ;