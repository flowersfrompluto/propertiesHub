import { useEffect, useState } from "react";
function Blog() {
  const [posts, setPosts] = useState([]);
  const [postMsg, setPostMsg] = useState("");

  useEffect(() => {
    const fetchData = () => {
      setPostMsg("Please wait, Loading Data");

      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((resp) => resp.json())
        .then((data) => {
          setPosts(data);
          setPostMsg("");
        })
        .catch(() => {
          setPostMsg("Network Error");
        });
    };
    fetchData();
  }, []);

  return (
    <div className="pages">
      {posts.length !== 0 ? (
        <div className="posts_grid">
          {posts.map((post) => (
            <div className="posts_content" key={post.id}>
              <h4>{post.title}</h4>
              <p>{post.body}</p>
            </div>
          ))}
        </div>
      ) : (
        <div>{postMsg}</div>
      )}
    </div>
  );
}

export default Blog;
