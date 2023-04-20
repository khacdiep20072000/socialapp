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
import { useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { format } from "timeago.js";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

const SERVER = "http://localhost:8800/api/";

const fetchUsers = (userId) => {
  return axios.get(`${SERVER}users?userId=${userId}`);
};

const Post = ({ post }) => {
  const [like, setLike] = useState(post.likes.length);
  const [isLike, setIsLike] = useState(false);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { isLoading, data } = useQuery(
    ["users", post.userId],
    () => fetchUsers(post.userId),
    {
      refetchOnWindowFocus: false,
    }
  );

  const likeHandler = () => {
    setLike(isLike ? like - 1 : like + 1);
    setIsLike(!isLike);
  };

  if (isLoading) return;

  return (
    <div className={cx("post")}>
      <div className={cx("wrapper")}>
        <div className={cx("top")}>
          <div className={cx("topLeft")}>
            <Link to={`/profile/${data.data.username}`}>
              <img
                src={
                  PF + data.data.profilePicture || PF + "person/noAvatar.png"
                }
                alt="avatar"
                className={cx("profileImg")}
              />
            </Link>
            <span className={cx("username")}>{data.data.username}</span>
            <span className={cx("date")}>{format(post.createdAt)}</span>
          </div>
          <div className={cx("topRight")}>
            <MoreVert />
          </div>
        </div>

        <div className={cx("center")}>
          <span className={cx("text")}>{post?.desc}</span>
          {post.img && (
            <img src={PF + post.img} alt="post" className={cx("postImg")} />
          )}
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
