import dp from "../img/dp.jpg";
import { MdDashboardCustomize } from "react-icons/md";
import { Link } from "react-router-dom";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { RiCalendarTodoLine } from "react-icons/ri";
import { FaBuildingUser } from "react-icons/fa6";
import { FaUserTie } from "react-icons/fa";
import { LiaComments } from "react-icons/lia";
import Navigation from "../components/Dashboard_Utilities/Navigation";
import ActiveUser from "../components/Dashboard_Utilities/ActiveUser";
import { BsHouseHeart } from "react-icons/bs";
import TenantDashboardPage from "../components/Tenant_Component/TenantDashboardPage";



const TenantLayout = () => {
  return (
    <div className="page">
      <div className="dashboard_container">

        <aside>
          <div className="navigation_bar">
            <ul className="nav-menu">
              <li className="nav-list">
                {" "}
                <Link to="/" className="nav-link">
                  {" "}
                  <Navigation
                    linkIcon={<MdDashboardCustomize size={30} />}
                    linkName="Dashboard"
                  />{" "}
                </Link>{" "}
              </li>
              <li className="nav-list">
                {" "}
                <Link to="/" className="nav-link">
                  {" "}
                  <Navigation
                    linkIcon={<HiOutlineBuildingOffice2 size={30} />}
                    linkName="My Property"
                  />{" "}
                </Link>{" "}
              </li>
              <li className="nav-list">
                {" "}
                <Link to="/" className="nav-link">
                  {" "}
                  <Navigation
                    linkIcon={<RiCalendarTodoLine size={30} />}
                    linkName="Appointment"
                  />{" "}
                </Link>{" "}
              </li>
              <li className="nav-list">
                {" "}
                <Link to="/" className="nav-link">
                  {" "}
                  <Navigation
                    linkIcon={<FaBuildingUser size={30} />}
                    linkName="Tenant"
                  />{" "}
                </Link>{" "}
              </li>
              <li className="nav-list">
                {" "}
                <Link to="/" className="nav-link">
                  {" "}
                  <Navigation
                    linkIcon={<FaUserTie size={30} />}
                    linkName="Agent"
                  />{" "}
                </Link>{" "}
              </li>
              <li className="nav-list">
                {" "}
                <Link to="/" className="nav-link">
                  {" "}
                  <Navigation
                    linkIcon={<LiaComments size={30} />}
                    linkName="Review"
                  />{" "}
                </Link>{" "}
              </li>
              <li className="nav-list">
                {" "}
                <Link to="/" className="nav-link">
                  {" "}
                  <Navigation
                    linkIcon={<BsHouseHeart size={30} />}
                    linkName="Wishlist"
                  />{" "}
                </Link>{" "}
              </li>
            </ul>

            <ActiveUser
              userName="Aminu Musa"
              userEmail="aminumusa669@gmail.com"
              userImage={<img src={dp} />}
            />
          </div>
        </aside>

        <main>
            <TenantDashboardPage/>
        </main>
      </div>
    </div>
  );
};

export default TenantLayout;
