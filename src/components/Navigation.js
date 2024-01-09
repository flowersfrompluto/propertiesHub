import { Link } from "react-router-dom";
// import { BsBox2Heart, BsHouseHeart } from "react-icons/bs";
// import { useContext } from "react";
import { DataContext } from "../contexts/DataContext";


function Navigation() {
  // const { cart } = useContext(DataContext);
  return (
    <nav className="flex nav">
      <div>
        <ul className="nav_menu">
          <li className="logo">
            <Link to="/" className="nav-link">
              <img src="" alt="PropertiesHub Logo" />
            </Link>
          </li>
          <li>
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li>
            <Link to="/properties" className="nav-link">Properties</Link>
          </li>
          <li>
            <Link to="/agents" className="nav-link">Agents</Link>
          </li>
          <li>
            <Link to="/blog" className="nav-link">Blog</Link>
          </li>
        </ul>
      </div>
      <div>
        <ul className="nav_menu">
          <li>
            <Link to="/wishlist" className="nav-link">Wishlist</Link>
            {/* <Link to="/wishlist" className="nav-link">Wishlist <span><BsBox2Heart /></span></Link>
            <Link to="/wishlist" className="nav-link">Wishlist <span><BsHouseHeart /></span></Link> */}
          </li>
          <li>
            <Link to="/account" className="nav-link">
              <button>Sign In</button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
