import classNames from "classnames/bind";
import styles from "./Post.module.css";
import heart from "../../assets/heart.png";
import likeIcon from "../../assets/like.png";
import {
  ChatBubbleOutline,
  IosShare,
  MoreVert,
  ThumbUp,
  ThumbUpOffAlt,
} from "@mui/icons-material";
import { Users } from "../../dummyData";
import { useState } from "react";

const cx = classNames.bind(styles);

const Post = ({ post }) => {
  const [like, setLike] = useState(post.like);
  const [isLike, setIsLike] = useState(false);

  const likeHandler = () => {
    setLike(isLike ? like - 1 : like + 1);
    setIsLike(!isLike);
  };

  return (
    <div className={cx("post")}>
      <div className={cx("wrapper")}>
        <div className={cx("top")}>
          <div className={cx("topLeft")}>
            <img
              src={
                Users.filter((user) => user.id === post.userId)[0]
                  .profilePicture
              }
              alt="avatar"
              className={cx("profileImg")}
            />
            <span className={cx("username")}>
              {Users.filter((user) => user.id === post.userId)[0].username}
            </span>
            <span className={cx("date")}>{post.date}</span>
          </div>
          <div className={cx("topRight")}>
            <MoreVert />
          </div>
        </div>

        <div className={cx("center")}>
          <span className={cx("text")}>{post?.desc}</span>
          <img src={post.photo} alt="post" className={cx("postImg")} />
        </div>

        <div className={cx("bottom")}>
          <div className={cx("b-t")}>
            <div className={cx("b-left")}>
              <img src={likeIcon} alt="likeIcon" className={cx("b-icon")} />
              <img src={heart} alt="heartIcon" className={cx("b-icon")} />
              <span className={cx("likeCount")}>{like} people like it</span>
            </div>
            <div className={cx("b-right")}>
              <span className={cx("commentText")}>{post.comment} comments</span>
            </div>
          </div>
          <hr className={cx("hr")} />
          <div className={cx("b-b")}>
            <div
              className={cx("bt-post", isLike ? "liked" : "")}
              onClick={likeHandler}
            >
              {isLike ? (
                <ThumbUp className={cx("bt-like")} />
              ) : (
                <ThumbUpOffAlt className={cx("bt-like")} />
              )}
              <span className={cx("bt-title")}>Like</span>
            </div>
            <div className={cx("bt-post")}>
              <ChatBubbleOutline className={cx("bt-like")} />
              <span className={cx("bt-title")}>Comment</span>
            </div>
            <div className={cx("bt-post")}>
              <IosShare className={cx("bt-like")} />
              <span className={cx("bt-title")}>Share</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
