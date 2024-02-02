import Button from "./Button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function AgentSignup() {
  const navigate = useNavigate();
  const [uFname, setuFname] = useState("");
  const [uLname, setuLname] = useState("");
  const [uCompany, setuCompany] = useState("");
  const [uEmail, setuEmail] = useState("");
  const [uPhone, setUphone] = useState("");
  const [uPassword, setuPassword] = useState("");
  const [checkValue, setCheckValue] = useState(false);

  const submitForm = async (e) => {
    e.preventDefault();
    if (uFname === "" || uLname === "" || uCompany === "" || uEmail === "" || uPhone === "" || uPassword === "") {
      setCheckValue(true);
    } else {
      let user_obj = {
        full_name: uFname + " " + uLname,
        company: uCompany,
        email: uEmail,
        phone: uPhone,
        password: uPassword,
      };
      const resp = await fetch("http://property.reworkstaging.name.ng/v1/users");
      const users = await resp.json();
      console.log(users)

      const checkIfUserExists = users.find((user_obj) => user_obj.email === uEmail);
      if (checkIfUserExists !== undefined) {
        alert("Email already Registered, Login into your account with your email");
      } else {
        const registerUser = await fetch("http://property.reworkstaging.name.ng/v1/users",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "authorization": "bearer <token>"
            },
            body: JSON.stringify(user_obj),
          }).then(res => res.json())
          .then(res => {
            console.log(res)
          })
        if (registerUser.ok) {
          alert("Signup Successfull");
          setuFname("");
          setuLname("");
          setuCompany("");
          setuEmail("");
          setUphone("");
          setuPassword("");

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
        <h3 className="h3d" >Agent Sign Up</h3>
        <p className="h3dd">Create your account to get full access</p>

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
          <label className="balle">Company Name</label>
          <input className="b-one" type="text" placeholder="Enter Company Name" value={uCompany} onChange={(e) => setuCompany(e.target.value)} />
          {checkValue === true && uCompany === "" ? <span>Company Name Required</span> : null}
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

export default AgentSignup;
