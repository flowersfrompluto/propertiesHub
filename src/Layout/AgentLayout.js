import dp from "../images/dp.jpg";
import { MdDashboardCustomize } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { RiCalendarTodoLine } from "react-icons/ri";
import { FaBuildingUser } from "react-icons/fa6";
import { FaUserTie } from "react-icons/fa";
import { LiaComments } from "react-icons/lia";
import Admin_Navigation from "../components/Dashboard_Utilities/Admin_Navigation";
import ActiveUser from "../components/Dashboard_Utilities/ActiveUser";
import { BsHouseHeart } from "react-icons/bs";
import AgentDashboardPage from "../components/Agent_Component/AgentDashboardPage";
import Properties from "../components/Agent_Component/Properties";

const AgentLayout = () => {
  return (
    <div className="page">
      <div className="dashboard_container">
        <aside>
          <div className="Admin_Navigation_bar">
            <ul className="nav-menu">
              <li className="nav-list">
                <NavLink to="dashboard" className="nav-NavLink">
                  <Admin_Navigation
                    NavLinkIcon={<MdDashboardCustomize size={30} />}
                    NavLinkName="Dashboard"
                  />
                </NavLink>{" "}
              </li>

              <li className="nav-list">
                <NavLink to="agentproperty" className="nav-NavLink">
                  <Admin_Navigation
                    NavLinkIcon={<HiOutlineBuildingOffice2 size={30} />}
                    NavLinkName="My Property"
                  />
                </NavLink>
              </li>

              <li className="nav-list">
                <NavLink to="agent-appointment" className="nav-NavLink">
                  <Admin_Navigation
                    NavLinkIcon={<RiCalendarTodoLine size={30} />}
                    NavLinkName="Appointment"
                  />
                </NavLink>
              </li>

              <li className="nav-list">
                <NavLink to="agent-tenant" className="nav-NavLink">
                  <Admin_Navigation
                    NavLinkIcon={<FaBuildingUser size={30} />}
                    NavLinkName="Tenant"
                  />
                </NavLink>
              </li>

              <li className="nav-list">
                <NavLink to="agent-list" className="nav-NavLink">
                  <Admin_Navigation
                    NavLinkIcon={<FaUserTie size={30} />}
                    NavLinkName="Agent"
                  />
                </NavLink>
              </li>

              <li className="nav-list">
                <NavLink to="property-review" className="nav-NavLink">
                  <Admin_Navigation
                    NavLinkIcon={<LiaComments size={30} />}
                    NavLinkName="Review"
                  />
                </NavLink>
              </li>

              <li className="nav-list">
                <NavLink to="wish-list-admin" className="nav-NavLink">
                  <Admin_Navigation
                    NavLinkIcon={<BsHouseHeart size={30} />}
                    NavLinkName="Wishlist"
                  />
                </NavLink>
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
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AgentLayout;
