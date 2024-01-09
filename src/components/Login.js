import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
      const resp = await fetch("http://localhost:5000/users");
      const users = await resp.json();
      const checkIfUserExists = users.find((user) => user.email === uEmail && user.password === uPassword);
      if (checkIfUserExists === undefined) {
        alert("Invalid Email or Password");
      } else {
        sessionStorage.setItem("PandorasUser", JSON.stringify(checkIfUserExists));
        navigate("/");
      }
    }
  };

  return (
    <div className="login_page">
      <div className="form_header">
        <h3>Login</h3>
      </div>
      <form className="account_form">
        <div className="form-group">
          <label htmlFor="">Email</label>
          <input type="email" value={uEmail} onChange={(e) => setUemail(e.target.value)} />
          {checkValue === true && uEmail === "" ? <span>Email Required</span> : null}
        </div>
        <div className="form-group">
          <label htmlFor="">Password</label>
          <input type="password" value={uPassword} onChange={(e) => setUpassword(e.target.value)} />
          {checkValue === true && uPassword === "" ? <span>Password Required</span> : null}
        </div>
        <Button title="Login" btnBg="#6c6c6c" clickFunc={submitForm} />
      </form>
    </div>
  );
}

export default Login;
