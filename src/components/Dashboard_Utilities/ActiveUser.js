import React from "react";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { MdAdminPanelSettings } from "react-icons/md";
import { useNavigate } from "react-router-dom";


const ActiveUser = (props) => {
const navigate = useNavigate()
  const { userImage, userName, userEmail } = props;

  return (
    <div className="logged_in_user">
      <div className="userImage">{userImage}</div>
      <h3>{userName}</h3>
      <p>{userEmail}</p>

      <div className="log_out">

        <div className="log_out_btn" onClick={()=>{navigate("/")}}>  <RiLogoutCircleRLine size={20} className="icon"/> Log Out </div>

        <div className="profile_btn" title="Account settings">  <MdAdminPanelSettings size={20} className="icon"/>  </div>
      </div>

    </div>
  );
};

export default ActiveUser;
