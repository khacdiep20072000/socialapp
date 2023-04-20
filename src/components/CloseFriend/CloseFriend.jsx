import classNames from "classnames/bind";
import styles from "./CloseFriend.module.css";

const cx = classNames.bind(styles);

const CloseFriend = ({ user }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <li className={cx("friend")}>
      <img
        src={PF + user.profilePicture}
        alt="avatar"
        className={cx("avatar")}
      />
      <span className={cx("name")}>{user.username}</span>
    </li>
  );
};

export default CloseFriend;
