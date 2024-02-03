import Button from "./Button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function UserSignup() {
  const navigate = useNavigate();
  const [uFname, setuFname] = useState("");
  const [uLname, setuLname] = useState("");
  const [uEmail, setuEmail] = useState("");
  const [uPhone, setUphone] = useState("");
  const [uPassword, setuPassword] = useState("");
  const [checkValue, setCheckValue] = useState(false);

  const submitForm = async (e) => {
    try {
      e.preventDefault();
      if (uFname === "" || uLname === "" || uEmail === "" || uPhone === "" || uPassword === "") {
        setCheckValue(true);
      } else {
        let user_obj = {
          first_name: uFname,
          last_name: uLname,
          email: uEmail,
          phone: uPhone,
          password: uPassword,
        };
        const res = await fetch("http://property.reworkstaging.name.ng/v1/users", {
          method: "Post",
          headers: {
            "content-type": "application/JSON"
          },
          body: JSON.stringify(user_obj)
        });
        const users = await res.json();
        console.log(users)
        navigate("/login")
      }
    } catch (error) {
      console.log(error);
    }

  };

  return (
    <div className="signup-container">
      <form className="signup-form">
        <h3 className="h3d" >User Sign Up</h3>
        <p className="h3dd">Create your account to get full access</p>

        <div className="form-group">
          <label className="balle">First Name</label>
          <input className="b-one" maxlength="25" type="text" placeholder="Enter First Name" value={uFname} onChange={(e) => setuFname(e.target.value)} />
          {checkValue === true && uFname === "" ? <span>First Name Required</span> : null}
        </div>

        <div className="form-group">
          <label className="balle">Last Name</label>
          <input className="b-one" maxlength="25" type="text" placeholder="Enter Last Name" value={uLname} onChange={(e) => setuLname(e.target.value)} />
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
          <label>Password</label>
          <input className="b-one" placeholder="Password" type="password" value={uPassword} onChange={(e) => setuPassword(e.target.value)} />
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

export default UserSignup;
