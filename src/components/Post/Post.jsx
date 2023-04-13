import classNames from "classnames/bind";
import styles from "./Post.module.css";
import avatar from "../../assets/person/1.jpeg";
import heart from "../../assets/heart.png";
import like from "../../assets/like.png";
import { MoreVert } from "@mui/icons-material";

const cx = classNames.bind(styles);

const Post = () => {
  return (
    <div className={cx("post")}>
      <div className={cx("wrapper")}>
        <div className={cx("top")}>
          <div className={cx("topLeft")}>
            <img src={avatar} alt="avatar" className={cx("profileImg")} />
            <span className={cx("username")}>Jon</span>
            <span className={cx("date")}>5 mins ago</span>
          </div>
          <div className={cx("topRight")}>
            <MoreVert />
          </div>
        </div>

        <div className={cx("center")}>
          <span className={cx("text")}>Hello....</span>
          <img src={avatar} alt="post" className={cx("postImg")} />
        </div>

        <div className={cx("bottom")}>
          <div className={cx("b-left")}>
            <img src={like} alt="likeIcon" className={cx("b-icon")} />
            <img src={heart} alt="heartIcon" className={cx("b-icon")} />
            <span className={cx("likeCount")}>7.9k people</span>
          </div>
          <div className={cx("b-right")}>
            <span className={cx("commentText")}>1.7k comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
