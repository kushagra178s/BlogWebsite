import logo from '../images/logo.jpg'
import { Link } from 'react-router-dom';
function navbar() {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
            <img src={logo} alt="logo" />
        </div>
        <div className="links">
            <Link className='link' to="/?cat=art"><h6>art</h6></Link>
            <Link className='link' to="/?cat=art"><h6>science</h6></Link>
            <Link className='link' to="/?cat=art"><h6>technology</h6></Link>
            <Link className='link' to="/?cat=art"><h6>cinema</h6></Link>
            <Link className='link' to="/?cat=art"><h6>design</h6></Link>
            <Link className='link' to="/?cat=art"><h6>food</h6></Link>
            <span>john</span>
            <span>Logout</span>
            <span className='write'>
                <Link className='link' to="/write">Write</Link>
            </span>
        </div>
      </div>
    </div>
  );
}
export default navbar;
