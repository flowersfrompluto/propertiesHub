// import { useContext } from "react";
// import { BsHandThumbsUp, BsHandThumbsDown, BsChatRightDots } from "react-icons/bs";
// import { FaRegUser } from "react-icons/fa6";
// import { DataContext } from "../contexts/DataContext";

// function Feeds() {
//   const props = useContext(DataContext);
//   const allFeeds = props.feeds;
//   return (
//     <div className="feeds_container">
//       {allFeeds.length !== 0 ? (
//         allFeeds.map((feed) => (
//           <div className="single_feed" key={feed.id}>
//             <div className="single_feed_header">
//               <FaRegUser className="single_feed_profile_icon" />
//               <p>{feed.username} .</p>
//               <p>{feed.date_created}</p>
//             </div>
//             <h3>{feed.title}</h3>
//             {feed.img ? (
//               <div className="single_feed_img">
//                 <img src={feed.img} alt="Jollof Rice" />
//               </div>
//             ) : null}
//             {feed.description ? <p>{feed.description}</p> : null}
//             <div className="single_feed_footer">
//               <button className="single_feed_likes">
//                 <BsHandThumbsUp />
//                 <span>{feed.likes}</span>
//               </button>
//               <button className="single_feed_dislikes">
//                 <BsHandThumbsDown />
//                 <span>{feed.dislikes}</span>
//               </button>
//               <button className="single_feed_comments">
//                 <BsChatRightDots />
//                 <span>{feed.comments.length}</span>
//               </button>
//             </div>
//           </div>
//         ))
//       ) : (
//         <div className="no_feed_container">
//           <h2>No Feed Yet..</h2>
//         </div>
//       )}
//     </div>
//   );
// }
// export default Feeds;
