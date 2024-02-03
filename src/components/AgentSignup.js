import Button from "./Button";
import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { GlobalContext } from "../context/context";

function AgentSignup() {
  const navigate = useNavigate();
  const {currentUser} = useContext(GlobalContext)
  const [uFname, setuFname] = useState("");
  const [uLname, setuLname] = useState("");
  const [uCompany, setuCompany] = useState("");
  const [uEmail, setuEmail] = useState("");
  const [uPhone, setUphone] = useState("");
  const [uPassword, setuPassword] = useState("");
  const [checkValue, setCheckValue] = useState(false);

  const submitForm = async (e) => {
    e.preventDefault();
    console.log(currentUser?.data?.token)
    try {
      if (uFname === "" || uLname === "" || uCompany === "" || uEmail === "" || uPhone === "" || uPassword === "") {
        return setCheckValue(true);
      } 
      let agent_obj = {
        full_name: uFname + " " + uLname,
        company: uCompany,
        email: uEmail,
        phone: uPhone,
        password: uPassword,
      }
      const res = await fetch ("http://property.reworkstaging.name.ng/v1/agents",{
        method: "POST",
        headers:{
          "content-type": "application/JSON",
          "Authorization": `Bearer ${currentUser?.data?.token}`
        },
        body: JSON.stringify(agent_obj)
      })
      const data = await res.json()
      console.log(data)
      navigate("/login")
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className="signup-container">
      <form className="signup-form">
        <h3 className="h3d" >Agent Sign Up</h3>
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

export default AgentSignup;
