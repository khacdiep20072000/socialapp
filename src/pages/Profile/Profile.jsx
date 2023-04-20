import classNames from "classnames/bind";
import styles from "./Profile.module.css";
import Topbar from "../../components/Topbar/Topbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Rightbar from "../../components/Rightbar/Rightbar";
import Feed from "../../components/Feed/Feed";

import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";

const cx = classNames.bind(styles);

const Profile = () => {
  const { username } = useParams();

  const SERVER = "http://localhost:8800/api/";
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const fetchUsers = (username) => {
    return axios.get(`${SERVER}users?username=${username}`);
  };
  const { isLoading, data } = useQuery(
    ["users", username],
    () => fetchUsers(username),
    {
      refetchOnWindowFocus: false,
    }
  );

  if (isLoading) return;
  const { data: user } = data;
  return (
    <>
      <Topbar />
      <div className={cx("profile")}>
        <Sidebar />
        <div className={cx("right")}>
          <div className={cx("r-top")}>
            <div className={cx("cover")}>
              <img
                src={PF + user.coverPicture}
                alt="post3"
                className={cx("coverImg")}
              />
            </div>

            <div className={cx("info")}>
              <img
                src={PF + user.profilePicture}
                alt="person7"
                className={cx("userImg")}
              />
              <div className={cx("info-name")}>
                <h4 className={cx("name")}>{user.username}</h4>
                <span className={cx("desc")}>{user.desc}</span>
              </div>
            </div>
          </div>
          <div className={cx("r-bottom")}>
            <Feed username={username} />
            <Rightbar user={user} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
