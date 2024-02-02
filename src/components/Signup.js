import Button from "./Button";
import { Link, Outlet } from "react-router-dom";
import Footer from "../components/Footer";

function Signup() {

  return (
<>
<div className="signup-main">
      <div className="signUpHead">
        {/* <h1>Create Account</h1> */}
      </div>

      <div className="signupBody flex">
        
        <div className="signUpBtn">
          <div className="signupTxt">
            <p>Click to select account type</p>
          </div>
          <div>
            <Link to="/signup/useraccount" className="nav-link">
              <Button title="Sign up as User" btnBg="#004274" btnColor="white" classN="userChange" border="none"></Button>
            </Link>
          </div>

          <div>
            <Link to="/signup/agentaccount" className="nav-link">
              <Button title="Sign up as Agent" btnBg="#004274" btnColor="white" classN="userChange" border="none"></Button>
            </Link>
          </div>
        </div>

        <div className="signUpForms">
          <Outlet />
        </div>

      </div>
    </div>
<Footer/>
</>
  );
}

export default Signup;
