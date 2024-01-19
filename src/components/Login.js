import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import React from 'react'
import Button from "./Button";

function Login() {

  const navigate = useNavigate();
  const [uOption, setuOption] = useState("");
  const [uEmail, setUemail] = useState("");
  const [uPassword, setUpassword] = useState("");
  const [checkValue, setCheckValue] = useState(false);

  const submitForm = async (e) => {
    e.preventDefault();
    if (uEmail === "" || uPassword === "") {
      setCheckValue(true);
    } else {
      const resp = await fetch("http://localhost:5000/users");
      const users = await resp.json();
      const checkIfUserExists = users.find((user) => user.email === uEmail && user.password === uPassword && user.user_option === uOption);
      if (checkIfUserExists === undefined) {
        alert("Invalid Email or Password");
      } else if (uOption === "user") {
        sessionStorage.setItem("userLoggedIn", JSON.stringify(checkIfUserExists));
        navigate("/");
      } else if (uOption === "agent") {
        sessionStorage.setItem("userLoggedIn", JSON.stringify(checkIfUserExists));
        navigate("/");
      } else if (uOption === "merchant") {
        sessionStorage.setItem("userLoggedIn", JSON.stringify(checkIfUserExists));
        navigate("/");
      }
      // else {
      //   sessionStorage.setItem("userLoggedIn", JSON.stringify(checkIfUserExists));
      //   navigate("/");
      // }
    }
  };

  return (
    <div className="login-container">
      <form className="login-form">
        <h3 className="h3d" >Login</h3>
        <p className="h3dd">Enter login detail to get access</p>

        <div className="form-group">
          <label className="balle">Sign Up As</label>
          <select className="b-one" value={uOption} onChange={(e) => setuOption(e.target.value)}>
            <option value="" selected="true" disabled>Sign Up Option</option>
            <option value="user">User</option>
            <option value="agent">Agent</option>
            <option value="merchant">Merchant</option>
          </select>
          {checkValue === true && uOption === "" ? <span>Required</span> : null}
        </div>

        <div className="form-group">
          <label className="balle">Username Or Email Address</label>
          <input className="b-one" Name="usernameOrEmail"
            placeholder="Enter Username or Email" type="email" value={uEmail} onChange={(e) => setUemail(e.target.value)} />
          {checkValue === true && uEmail === "" ? <span>Email Required</span> : null}
        </div>

        <div className="form-group">
          <label>Password</label>
          <input className="b-two" placeholder="Enter Password" type="password" value={uPassword} onChange={(e) => setUpassword(e.target.value)} />
          {checkValue === true && uPassword === "" ? <span>Password Required</span> : null}
        </div>
        <div className="checkbox-group">
          <label For="keepLoggedIn">
            <span><input type="checkbox" name="keepLoggedIn" /></span> Keep me logged in</label>
          <span className="forgot-password">Forgot Password?</span>
        </div>
        <div className="lower">
          <p className="dont">Dont have an account? <Link to="/signup" className="linker">Sign Up here</Link></p>
          <Button title="Login" btnBg="#00AEFF" btnColor="white" border="none" clickFunc={submitForm}></Button>
        </div>
      </form>
    </div>
  );
}

export default Login;
