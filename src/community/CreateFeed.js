// import { useState, useContext } from "react";
// import { DataContext } from "../contexts/DataContext";
// import { BsSend } from "react-icons/bs";

// function CreateFeed() {
//   const props = useContext(DataContext);
//   const [title, setTitle] = useState("");
//   const [descrp, setDescrp] = useState("");
//   const [imgUrl, setImgUrl] = useState("");
//   const loggedInUser = JSON.parse(sessionStorage.getItem("PandorasUser"));

//   const handleCreatePost = async (e) => {
//     e.preventDefault();
//     if (loggedInUser === null) {
//       alert("Please Login to your account to Create a post");
//     } else if (title === "") {
//       alert("Post Fields Required");
//     } else {
//       let post_obj = {
//         user_id: loggedInUser.id,
//         username: loggedInUser.first_name + " " + loggedInUser.last_name,
//         title: title,
//         description: descrp,
//         img: imgUrl,
//         likes: 0,
//         dislikes: 0,
//         comments: [],
//         date_created: new Date().toLocaleString(),
//       };
//       const resp = await fetch("http://localhost:5000/feeds", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(post_obj),
//       });
//       if (resp.ok) {
//         alert("Post Created Successfully");
//         setTitle("");
//         setDescrp("");
//         setImgUrl("");
//         const data = await resp.json();
//         props.setFeeds((prev) => [...prev, data]);
//       } else {
//         alert("There was a probem creating post");
//       }
//     }
//   };

//   return (
//     <div className="create_feed">
//       <form>
//         <div className="create_feed_header">
//           <p>Create Post</p>
//           <button onClick={handleCreatePost}>
//             <BsSend className="create_feed_icon" />
//           </button>
//         </div>
//         <div className="create_feed_content">
//           <input type="text" placeholder="What's on your Mind?..." value={title} onChange={(e) => setTitle((prev) => (prev = e.target.value))} />
//           <textarea placeholder="Description..(optional)" value={descrp} onChange={(e) => setDescrp(e.target.value)}></textarea>
//           <input type="text" placeholder="Image URL (optional)" value={imgUrl} onChange={(e) => setImgUrl(e.target.value)} />
//         </div>
//       </form>
//     </div>
//   );
// }
// export default CreateFeed;
