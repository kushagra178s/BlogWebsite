import { Link } from "react-router-dom";
import Menu from "../components/Menu";
function single() {
  return (
    <div className="single">
      <div className="current-post">
        <div className="content">
          <img src="https://picsum.photos/200" alt="" />
        </div>

        <div className="user">
          <img src="https://picsum.photos/200" alt="" />
          <div className="info">
            <h2>John</h2>
            <p>posted 2 days ago.</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/2541/2541991.png?ga=GA1.1.985558126.1672679171"
                alt=""
              />
            </Link>
            <Link>
              <img
                src="https://blog.absoluteitad.com/hs-fs/hubfs/Does%20The%20Recycle%20Bin%20Actually%20Delete%20Your%20Data.png?width=1076&name=Does%20The%20Recycle%20Bin%20Actually%20Delete%20Your%20Data.png"
                alt=""
              />
            </Link>
          </div>
        </div>
        <div className="post-content">
          <h1>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus ea consequuntur saepe praesentium doloribus dolor.
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui eum
            possimus temporibus asperiores consequuntur ullam dolor, veritatis
            facere totam nam, corporis quibusdam facilis eveniet magni!
            <br />
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            voluptas nam reiciendis distinctio! Officia assumenda mollitia dicta
            maiores voluptatibus praesentium, rerum sit aliquam illo incidunt
            quaerat! Cupiditate iusto laudantium blanditiis.
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            ducimus cupiditate soluta inventore possimus sunt accusantium,
            obcaecati est odio vel quia numquam tenetur id facilis quis,
            perspiciatis distinctio, dolor recusandae.
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
            veritatis inventore esse sed eaque saepe nesciunt quasi possimus
            rerum non et, quam repudiandae quidem qui iure, illum fuga cum
            voluptas?
            <br />
          </p>
        </div>
      </div>
      <Menu />
    </div>
  );
}
export default single;
