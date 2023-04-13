import classNames from "classnames/bind";
import styles from "./Feed.module.css";
import Share from "../Share/Share";
import Post from "../Post/Post";

const cx = classNames.bind(styles);

const Feed = () => {
  return (
    <div className={cx("feed")}>
      <div className={cx("wrapper")}>
        <Share />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default Feed;
