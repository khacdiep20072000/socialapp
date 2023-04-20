import classNames from "classnames/bind";
import { useQuery } from "react-query";
import axios from "axios";

import styles from "./Feed.module.css";
import Share from "../Share/Share";
import Post from "../Post/Post";

const cx = classNames.bind(styles);

const Feed = ({ username }) => {
  let user = "643e975c58feb48af2dc67d8";
  if (username) {
    user = username;
  }

  const SERVER = "http://localhost:8800/api/";

  const fetchPosts = (userId) => {
    return axios.get(`${SERVER}posts/timeline/${userId}`);
  };

  const fetchUserPosts = (username) => {
    return axios.get(`${SERVER}posts/profile/${username}`);
  };

  const { isLoading, data } = useQuery(
    ["posts", user],
    username ? () => fetchUserPosts(user) : () => fetchPosts(user),
    {
      refetchOnWindowFocus: false,
    }
  );
  if (isLoading) return;

  return (
    <div className={cx("feed")}>
      <div className={cx("wrapper")}>
        <Share />
        {data && data.data.map((post) => <Post key={post._id} post={post} />)}
      </div>
    </div>
  );
};

export default Feed;
