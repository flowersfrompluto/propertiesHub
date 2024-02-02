// import Navigation from "../components/Navigation";
// import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Button from "../components/Button";

function Blog() {

  return (
    <div className="pages">
      {/* <Navigation /> */}
      <div className="blog">
        <div class="comingSoon">
          <h1>Coming Soon...</h1>
          <p>Go to Homepage</p>
          <div class="info">
            <Link to="/" className="blogLink">
              <Button title="Home" btnBg="#00AEFF" btnColor="white" classN="navSignIn" border="1px solid #00AEFF"></Button>
            </Link>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default Blog;
