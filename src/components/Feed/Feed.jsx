import classNames from "classnames/bind";
import styles from "./Feed.module.css";
import Share from "../Share/Share";
import Post from "../Post/Post";
import { Posts } from "../../dummyData.js";

const cx = classNames.bind(styles);

const Feed = () => {
  return (
    <div className={cx("feed")}>
      <div className={cx("wrapper")}>
        <Share />
        {Posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
