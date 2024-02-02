import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Login from "../components/Login";
function Account() {
  return (
    <div className="account_page">
      <Navigation />
      <div className="account_grid">
        <Login />
      </div>
      <Footer />
    </div>
  );
}
export default Account;
