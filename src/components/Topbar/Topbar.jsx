import classNames from "classnames/bind";
import { Chat, Notifications, Person, Search } from "@mui/icons-material";

import styles from "./Topbar.module.css";
import avatar from "../../assets/person/1.jpeg";

const cx = classNames.bind(styles);

const Topbar = () => {
  return (
    <div className={cx("container")}>
      <div className={cx("tb-left")}>
        <span className={cx("logo")}>Lamasocial</span>
      </div>

      <div className={cx("tb-center")}>
        <div className={cx("searchBar")}>
          <Search className={cx("searchIcon")} />
          <input
            type="text"
            placeholder="Search for friend, post or video"
            className={cx("searchInput")}
          />
        </div>
      </div>

      <div className={cx("tb-right")}>
        <div className={cx("links")}>
          <span className={cx("link")}>Home Page</span>
          <span className={cx("link")}>Time Line</span>
        </div>

        <div className={cx("icons")}>
          <div className={cx("icon")}>
            <Person />
            <span className={cx("iconBadge")}>1</span>
          </div>

          <div className={cx("icon")}>
            <Chat />
            <span className={cx("iconBadge")}>1</span>
          </div>

          <div className={cx("icon")}>
            <Notifications />
            <span className={cx("iconBadge")}>1</span>
          </div>
        </div>

        <img src={avatar} alt="avatar" className={cx("image")} />
      </div>
    </div>
  );
};

export default Topbar;
