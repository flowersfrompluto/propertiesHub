// import { BsPeople, BsPersonCheck, BsPerson, BsPersonX } from "react-icons/bs";
// import { Link } from "react-router-dom";
// function Profile() {
//   const loggedInUser = JSON.parse(sessionStorage.getItem("PandorasUser"));

//   return (
//     <div className="profile">
//       {loggedInUser !== null ? (
//         <div>
//           <div className="profile_icon_container">
//             <BsPerson className="profile_icon" />
//             <h2>
//               {loggedInUser.first_name} {loggedInUser.last_name}
//             </h2>
//           </div>
//           <div className="profile_content">
//             <p>{loggedInUser.gender}</p>
//             <p>{loggedInUser.email}</p>
//             <div className="profile_followers">
//               <span>Followers: </span>
//               <BsPeople className="profile_following_icon" />
//               <h5>0</h5>
//             </div>
//             <div className="profile_following">
//               <span>Following: </span>
//               <BsPersonCheck className="profile_following_icon" />
//               <h5>0</h5>
//             </div>
//             <p>Reservations: 0</p>
//             <p>Posts Created: 0</p>
//             <p>Likes: 0</p>
//           </div>
//         </div>
//       ) : (
//         <div className="profile_login_container">
//           <BsPersonX className="profile_icon" />
//           <Link to="/account" className="profile_login_link">
//             Login
//           </Link>
//         </div>
//       )}
//     </div>
//   );
// }
// export default Profile;
