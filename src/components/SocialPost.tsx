import { useState } from "react";
import Post from "../models/Post";
import PostinList from "./PostInList";
import "./SocialPost.css";

const SocialPost = () => {
  const [posts, setposts] = useState<Post[]>([
    {
      title: "Krishna",
      thought: "Learning React",
    },
    {
      title: "Mitch",
      thought: "Learning React and Food",
    },
    {
      title: "Garrett",
      thought: "Learning React",
    },
  ]);

  return (
    <div className="SocialPost">
      <h1>My Thoughts</h1>
      <button>New Thought</button>
      <ul>
        {posts.map((item, i) => (
          <PostinList key={i} post={item} />
        ))}
      </ul>
    </div>
  );
};

export default SocialPost;
