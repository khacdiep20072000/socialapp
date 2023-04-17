import classNames from "classnames/bind";
import styles from "./Sidebar.module.css";
import {
  Bookmark,
  Chat,
  Event,
  Group,
  HelpOutline,
  PlayCircleFilledOutlined,
  RssFeed,
  School,
  WorkOutline,
} from "@mui/icons-material";
import { Users } from "../../dummyData";
import CloseFriend from "../CloseFriend/CloseFriend";

const cx = classNames.bind(styles);

const Sidebar = () => {
  return (
    <div className={cx("sideBar")}>
      <div className={cx("wrapper")}>
        <ul className={cx("list")}>
          <li className={cx("item")}>
            <RssFeed className={cx("icon")} />
            <span className={cx("text")}>Feed</span>
          </li>
          <li className={cx("item")}>
            <Chat className={cx("icon")} />
            <span className={cx("text")}>Chats</span>
          </li>
          <li className={cx("item")}>
            <PlayCircleFilledOutlined className={cx("icon")} />
            <span className={cx("text")}>Videos</span>
          </li>
          <li className={cx("item")}>
            <Group className={cx("icon")} />
            <span className={cx("text")}>Groups</span>
          </li>
          <li className={cx("item")}>
            <Bookmark className={cx("icon")} />
            <span className={cx("text")}>Bookmarks</span>
          </li>
          <li className={cx("item")}>
            <HelpOutline className={cx("icon")} />
            <span className={cx("text")}>Questions</span>
          </li>
          <li className={cx("item")}>
            <WorkOutline className={cx("icon")} />
            <span className={cx("text")}>Jobs</span>
          </li>
          <li className={cx("item")}>
            <Event className={cx("icon")} />
            <span className={cx("text")}>Events</span>
          </li>
          <li className={cx("item")}>
            <School className={cx("icon")} />
            <span className={cx("text")}>Courses</span>
          </li>
        </ul>

        <button className={cx("button")}>Show more</button>
        <hr className={cx("hr")} />
        <ul className={cx("friends")}>
          {Users.map((user) => (
            <CloseFriend key={user.id} user={user} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
