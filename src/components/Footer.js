import logo from "../images/logo.png"
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";


function Footer() {
  return (
    <footer className="footer">
      <div className="footContent flex">
        <div className="footerLogo">
          <div>
            <Link to="/" className="foot-link">
              <img src={logo} alt="" />
            </Link>
          </div>
          <div>
            <p></p>
          </div>
          <div className="socials flex">
            <p><FaInstagram /></p>
            <p><FaFacebook /></p>
            <p><FaLinkedin /></p>
            <p><FaYoutube /></p>
          </div>
        </div>
        <div className="footerLinks flex">
          <div>
            <ul>
              <li className="linkHead">Navigation</li>
              <li>
                <Link to="/" className="foot-link">Home</Link>
              </li>
              <li>
                <Link to="/properties" className="foot-link">Properties</Link>
              </li>
              <li>
                <Link to="/agents" className="foot-link">Agent</Link>
              </li>
              <li>
                Blog
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="linkHead">Services</li>
              <li>Sales</li>
              <li>Mapping</li>
              <li>Commercial</li>
              <li>Real Estate</li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="linkHead">Contact Us</li>
              <li>
                <Link to="#" className="foot-link">contact@propertieshub.com</Link>
              </li>
              <li>
                <Link to="/properties" className="foot-link">+234 8012345678</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <div className="rights">
        <p>© 2024. All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer