import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import React from 'react'
import Button from "./Button";

function Login() {

  const navigate = useNavigate();
  const [uEmail, setUemail] = useState("");
  const [uPassword, setUpassword] = useState("");
  const [checkValue, setCheckValue] = useState(false);

  const submitForm = async (e) => {
    e.preventDefault();
    if (uEmail === "" || uPassword === "") {
      setCheckValue(true);
    } else {
      const resp = await fetch("http://property.reworkstaging.name.ng/v1/users");
      const users = await resp.json();
      const checkIfUserExists = users.find((user) => user.email === uEmail && user.password === uPassword)
      // const checkIfUserExists = users.find((user) => user.email === uEmail && user.password === uPassword);
      if (checkIfUserExists === undefined) {
        alert("Invalid Email or Password");
      } else {
        sessionStorage.setItem("token", JSON.stringify(checkIfUserExists));
        navigate("/");
      }
    }
  };

  return (
    <div className="login-container">
      <form className="login-form">
        <h3 className="h3d" >Login</h3>
        <p className="h3dd">Enter login detail to get access</p>

        <div className="form-group">
          <label className="balle">Email Address</label>
          <input className="b-one" Name="usernameOrEmail"
            placeholder="Enter Email" type="email" value={uEmail} onChange={(e) => setUemail(e.target.value)} />
          {checkValue === true && uEmail === "" ? <span>Email Required</span> : null}
        </div>

        <div className="form-group">
          <label>Password</label>
          <input className="b-one" placeholder="Enter Password" type="password" value={uPassword} onChange={(e) => setUpassword(e.target.value)} />
          {checkValue === true && uPassword === "" ? <span>Password Required</span> : null}
        </div>
        <div className="checkbox-group">
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
