import Post from "../models/Post";
import "./PostInList.css";

interface Props {
  post: Post;
}

const PostinList = ({ post }: Props) => {
  return (
    <li className="PostinList">
      <p>Title {post.title}</p>
      <p>Thought {post.thought}</p>
    </li>
  );
};

export default PostinList;
