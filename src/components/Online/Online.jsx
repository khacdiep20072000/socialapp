import classNames from "classnames/bind";
import styles from "./Online.module.css";

const cx = classNames.bind(styles);

const Online = ({ user }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <li className={cx("friend")}>
      <div className={cx("profileImgContainer")}>
        <img
          src={PF + user.profilePicture}
          alt="person1"
          className={cx("profileImg")}
        />
        <span className={cx("online")}></span>
      </div>
      <span className={cx("username")}>{user.username}</span>
    </li>
  );
};

export default Online;
