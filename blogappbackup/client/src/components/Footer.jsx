import logo from '../images/logo.jpg'
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <div className="Footer">
      <div className="container">
      <div className="logo">
            <img
              src="https://revenuearchitects.com/wp-content/uploads/2017/02/Blog_pic-450x255.png"
              alt="logo"
            />
          </div>
        <h2>made with react and mysql</h2>
      </div>
    </div>
  );
}
export default Footer;
