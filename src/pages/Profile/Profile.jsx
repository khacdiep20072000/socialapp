import classNames from "classnames/bind";
import styles from "./Profile.module.css";
import Topbar from "../../components/Topbar/Topbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Rightbar from "../../components/Rightbar/Rightbar";
import Feed from "../../components/Feed/Feed";
import Post3 from "../../assets/post/3.jpeg";
import Person7 from "../../assets/person/7.jpeg";

const cx = classNames.bind(styles);

const Profile = () => {
  return (
    <>
      <Topbar />
      <div className={cx("profile")}>
        <Sidebar />
        <div className={cx("right")}>
          <div className={cx("r-top")}>
            <div className={cx("cover")}>
              <img src={Post3} alt="post3" className={cx("coverImg")} />
            </div>

            <div className={cx("info")}>
              <img src={Person7} alt="person7" className={cx("userImg")} />
              <div className={cx("info-name")}>
                <h4 className={cx("name")}>Safak</h4>
                <span className={cx("desc")}>Hello...</span>
              </div>
            </div>
          </div>
          <div className={cx("r-bottom")}>
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
