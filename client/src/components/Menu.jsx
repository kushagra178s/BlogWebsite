import React from "react";

function Menu() {

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
        <div className="menu">
            <h1>other posts u may like</h1>
            {data.map(function(post){
                return (
                    <div className="post" id={post.id}>
                        <img src={post.img} alt="" />
                        <h2>{post.title}</h2>
                        <button>Read More</button>
                    </div>
                )
            })}
        </div>
    )
}
export default Menu ;