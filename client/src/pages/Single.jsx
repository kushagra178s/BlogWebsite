import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Menu from "../components/Menu";
import moment from "moment";
import { AuthContext } from "../context/authContext";
function Single() {
  const [post, setPost] = useState([]);
  const location = useLocation();
  const cat = useLocation().search;

  const postId = useLocation().pathname.split("/")[2];

  const { currentUser } = useContext(AuthContext);

  const navigate = useNavigate();

  //  // console.log("currentuser", currentUser);
  useEffect(() => {
   // console.log("location", location.state.cat);
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8800/api/posts/${postId}`
        );
        // Set the fetched data directly to the 'post' state
        setPost(res.data);
        //  // console.log("post", post); // Log the data to verify it's coming correctly
      } catch (error) {
         // console.log("error", error);
      }
    };
    fetchData();
  }, [postId]);
  const handleDelete = async () => {
    try {
      const res = await axios.delete(
        `http://localhost:8800/api/posts/${postId}`
      );
      // Set the fetched data directly to the 'post' state
      navigate("/");
      //  // console.log("post", post); // Log the data to verify it's coming correctly
    } catch (error) {
       // console.log("error", error);
    }
  };
  // client\public\upload\1696014267894Screenshot (1).png
  const imagesrc = `../upload/${post?.img}`;
  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent;
  }  

  return (
    <div className="single">
      <div className="current-post">
        <div className="content">
          {/* <h1>{imagesrc}</h1> */}
          <img src = {imagesrc} alt="" />
        </div>

        <div className="user">
          {post.userImg && <img src={post.userImg} alt="" />}
          <div className="info">
            <h2>{post.username}</h2>
            <p>{moment(post.date).fromNow()}</p>
          </div>
          {currentUser.username == post.username && (
            <div className="edit">
              <Link to={`/write?edit=2`} state={post}>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2541/2541991.png?ga=GA1.1.985558126.1672679171"
                  alt=""
                />
              </Link>
              <Link>
                <img
                  onClick={handleDelete}
                  src="https://blog.absoluteitad.com/hs-fs/hubfs/Does%20The%20Recycle%20Bin%20Actually%20Delete%20Your%20Data.png?width=1076&name=Does%20The%20Recycle%20Bin%20Actually%20Delete%20Your%20Data.png"
                  alt=""
                />
              </Link>
            </div>
          )}
        </div>
        <div className="post-content">
          <h1>{post.title}</h1>
          <p>{getText(post.desc)}</p>
        </div>
      </div>
      <Menu cat={location.state.cat}/>
    </div>
  );
}
export default Single;
