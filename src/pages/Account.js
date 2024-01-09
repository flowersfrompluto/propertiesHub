import Login from "../components/Login";
import Signup from "../components/Signup";
function Account() {
  return (
    <div className="account_page">
      <h3 className="account_header">Account</h3>
      <div className="account_grid">
        <Signup />
        <Login />
      </div>
    </div>
  );
}
export default Account;
