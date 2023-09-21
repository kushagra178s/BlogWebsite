import { Link } from "react-router-dom";
function Home() {

  const data = [
    {
      id: 1,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, nisi!",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga repellat maiores repudiandae nisi, consequatur neque sequi corporis qui ab veritatis sapiente natus. Asperiores, odit in!",
      img: "https://picsum.photos/200",
    },
    {
      id: 2,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, nisi!",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga repellat maiores repudiandae nisi, consequatur neque sequi corporis qui ab veritatis sapiente natus. Asperiores, odit in!",
      img: "https://picsum.photos/200",
    },
    {
      id: 3,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, nisi!",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga repellat maiores repudiandae nisi, consequatur neque sequi corporis qui ab veritatis sapiente natus. Asperiores, odit in!",
      img: "https://picsum.photos/200",
    },
    {
      id: 4,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, nisi!",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga repellat maiores repudiandae nisi, consequatur neque sequi corporis qui ab veritatis sapiente natus. Asperiores, odit in!",
      img: "https://picsum.photos/200",
    },
    {
      id: 5,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, nisi!",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga repellat maiores repudiandae nisi, consequatur neque sequi corporis qui ab veritatis sapiente natus. Asperiores, odit in!",
      img: "https://picsum.photos/200",
    },
  ];

  return (
    <div className="home">
      <div className="posts">
        {data.map(function (post) {
          return (
            <div className="post" key={post.id}>
              {post.id % 2 != 0 ? (
                <>
                  <div className="img">
                    <img src={post.img} alt="" />
                  </div>
                  <div className="content">
                    <Link className="link" to={`/post/${post.id}`}>
                      <h1 style={{color:'white'}}>{post.title}</h1>
                    </Link>
                    <p>{post.desc}</p>
                    <button>Read More</button>
                  </div>
                </>
              ) : (
                <>
                  <div className="content">
                    <Link className="link" to={`/post/${post.id}`}>
                      <h1 style={{color:'white'}}>{post.title}</h1>
                    </Link>
                    <p>{post.desc}</p>
                    <button>Read More</button>
                  </div>
                  <div className="img">
                    <img src={post.img} alt="" />
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Home;
