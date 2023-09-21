import logo from '../images/logo.jpg'
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <div className="Footer">
      <div className="container">
        <div className="logo">
            <img src={logo} alt="logo" />
        </div>
        <h2>made with react and mysql</h2>
      </div>
    </div>
  );
}
export default Footer;
