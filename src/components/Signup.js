import { useState } from "react";
import Button from "./Button";

function Signup() {
  const [uFname, setUfname] = useState("");
  const [uLname, setUlname] = useState("");
  const [uEmail, setUemail] = useState("");
  const [uPhone, setUphone] = useState("");
  const [uGender, setUgender] = useState("");
  const [uPassword, setUpassword] = useState("");
  const [checkValue, setCheckValue] = useState(false);

  const submitForm = async (e) => {
    e.preventDefault();
    if (uFname === "" || uLname === "" || uEmail === "" || uPhone === "" || uGender === "" || uPassword === "") {
      setCheckValue(true);
    } else {
      let user_obj = {
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
          setUfname("");
          setUlname("");
          setUemail("");
          setUgender("");
          setUphone("");
          setUpassword("");
        } else {
          alert("There was a problem with the Signup");
        }
      }
    }
  };

  return (
    <div className="signup_page">
      <div className="form_header">
        <h3>Signup</h3>
      </div>
      <form className="account_form">
        <div className="input-group">
          <div className="form-group">
            <label htmlFor="">First name</label>
            <input type="text" value={uFname} onChange={(e) => setUfname(e.target.value)} />
            {checkValue === true && uFname === "" ? <span>First name Required</span> : null}
          </div>
          <div className="form-group">
            <label htmlFor="">Last name</label>
            <input type="text" value={uLname} onChange={(e) => setUlname(e.target.value)} />
            {checkValue === true && uLname === "" ? <span>Last name Required</span> : null}
          </div>
          <div className="form-group">
            <label htmlFor="">Email</label>
            <input type="email" value={uEmail} onChange={(e) => setUemail(e.target.value)} />
            {checkValue === true && uEmail === "" ? <span>Email Required</span> : null}
          </div>
          <div className="form-group">
            <label htmlFor="">Phone</label>
            <input type="text" value={uPhone} onChange={(e) => setUphone(e.target.value)} />
            {checkValue === true && uPhone === "" ? <span>Phone Number Required</span> : null}
          </div>
          <div className="form-group">
            <label htmlFor="">Gender</label>
            <select value={uGender} onChange={(e) => setUgender(e.target.value)}>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            {checkValue === true && uGender === "" ? <span>Gender Required</span> : null}
          </div>
          <div className="form-group">
            <label htmlFor="">Password</label>
            <input type="password" value={uPassword} onChange={(e) => setUpassword(e.target.value)} />
            {checkValue === true && uPassword === "" ? <span>Password Required</span> : null}
          </div>
        </div>
        <Button title="Signup" btnBg="#6c6c6c" clickFunc={submitForm} />
      </form>
    </div>
  );
}

export default Signup;
