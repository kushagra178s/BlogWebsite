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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8800/api/posts/${postId}`
        );
        setPost(res.data);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, [postId]);
    
  // Add a useEffect to log 'posts' whenever it changes
//   useEffect(() => {
//     // console.log("posts after set:", post.cat);
//     console.log("authcontext", AuthContext);
//  }, [post]);

  const handleDelete = async () => {
    try {
      const res = await axios.delete(
        `http://localhost:8800/api/posts/${postId}`
      );
      navigate("/");
    } catch (error) {
      console.log("error", error);
    }
  };

  const getText = (html) => {
    console.log(html);
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent; 
  };

  return (
    <div className="single">
      <div className="current-post">
        <div className="content">
          <img
            src={
              post?.img
                ? require(`../uploads/${post.img}`)
                : "https://placehold.co/600x400"
            }
            width="350px"
            alt=""
          />
        </div>

        <div className="user">
          {post.userImg && <img src={post.userImg} alt="" />}
          <div className="info">
            <h2>
              <em>{post.username}</em>
            </h2>
            <p>{moment(post.date).fromNow()}</p>
          </div>
          {currentUser?.username == post.username && (
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
          <h1><u>{post.title}</u></h1>
          <br />
          {/* <p>{getText(post.desc)}</p> */}
          <div dangerouslySetInnerHTML={{ __html: post.desc }} />
        </div>
      </div>
      <Menu post={post} />
    </div>
  );
}
export default Single;
