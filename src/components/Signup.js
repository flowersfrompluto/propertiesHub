import Button from "./Button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Signup() {
  const navigate = useNavigate();
  const [uOption, setuOption] = useState("");
  const [uFname, setuFname] = useState("");
  const [uLname, setuLname] = useState("");
  const [uEmail, setuEmail] = useState("");
  const [uPhone, setUphone] = useState("");
  const [uGender, setUgender] = useState("");
  const [uPassword, setuPassword] = useState("");
  const [checkValue, setCheckValue] = useState(false);

  const submitForm = async (e) => {
    e.preventDefault();
    if (uOption === "" || uFname === "" || uLname === "" || uEmail === "" || uPhone === "" || uGender === "" || uPassword === "") {
      setCheckValue(true);
    } else {
      let user_obj = {
        user_option: uOption,
        first_name: uFname,
        last_name: uLname,
        email: uEmail,
        phone: uPhone,
        gender: uGender,
        password: uPassword,
      };
      const resp = await fetch("http://localhost:5000/users");
      const users = await resp.json();
      const checkIfUserExists = users.find((user) => user.email === uEmail);
      if (checkIfUserExists !== undefined) {
        alert("Email already Registered, Login into your account with your email");
      } else {
        const registerUser = await fetch("http://localhost:5000/users", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(user_obj),
        });
        if (registerUser.ok) {
          alert("Signup Successfull");
          setuFname("");
          setuLname("");
          setuEmail("");
          setuPassword("");
          setUphone("");

          sessionStorage.setItem("userLoggedIn", JSON.stringify(checkIfUserExists));
          navigate("/login");
        } else {
          alert("There was a problem with the Signup");
        }
      }
    }
  };

  return (
    <div className="signup-container">
      <form className="signup-form">
        <h3 className="h3d" >Sign Up</h3>
        <p className="h3dd">Create your account to get full access</p>

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
          <label className="balle">First Name</label>
          <input className="b-one" type="text" placeholder="Enter First Name" value={uFname} onChange={(e) => setuFname(e.target.value)} />
          {checkValue === true && uFname === "" ? <span>First Name Required</span> : null}
        </div>

        <div className="form-group">
          <label className="balle">Last Name</label>
          <input className="b-one" type="text" placeholder="Enter Last Name" value={uLname} onChange={(e) => setuLname(e.target.value)} />
          {checkValue === true && uLname === "" ? <span>Last Name Required</span> : null}
        </div>

        <div className="form-group">
          <label className="balley">Email Address</label>
          <input className="b-one" type="text" placeholder="Enter Email Address" value={uEmail} onChange={(e) => setuEmail(e.target.value)} />
          {checkValue === true && uEmail === "" ? <span>Email Required</span> : null}
        </div>

        <div className="form-group">
          <label>Phone Number</label>
          <input className="b-one" type="number" placeholder="Enter Phone Number" value={uPhone} onChange={(e) => setUphone(e.target.value)} />
          {checkValue === true && uPhone === "" ? <span>Phone Number Required</span> : null}
        </div>

        <div className="form-group">
          <label htmlFor="">Gender</label>
          <select className="b-one" value={uGender} onChange={(e) => setUgender(e.target.value)}>
            <option value="" selected="true" disabled >Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Others</option>
          </select>
          {checkValue === true && uGender === "" ? <span>Gender Required</span> : null}
        </div>

        <div className="form-group">
          <label>Password</label>
          <input className="b-twoo" placeholder="Password" type="password" value={uPassword} onChange={(e) => setuPassword(e.target.value)} />
          {checkValue === true && uPassword === "" ? <span>Password Required</span> : null}
        </div>

        <div className="lower">
          <p className="dont">Already have an account? <Link to="/login" className="linker">Login Here</Link></p>
          <Button title="Sign Up" btnBg="#00AEFF" btnColor="white" border="none" clickFunc={submitForm}></Button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
