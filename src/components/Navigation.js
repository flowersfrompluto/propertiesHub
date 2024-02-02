import { Link } from "react-router-dom";
import logo from "../images/logo.png"
import Button from "./Button";


function Navigation() {
  return (
    <nav className="flex nav">
      <div>
        <ul className="nav_menu">
          <li className="logo">
            <Link to="/" className="nav-link">
              <img src={logo} alt="PropertiesHub Logo" />
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
        </ul>
      </div>
      <div>
        <ul className="nav_menu">
          <li>
            <Link to="/login" className="nav-link">
              <Button title="Sign In" btnBg="#00AEFF" btnColor="white" classN="navSignIn" border="1px solid #00AEFF"></Button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
