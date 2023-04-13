import classNames from "classnames/bind";
import styles from "./Share.module.css";
import avatar from "../../assets/person/1.jpeg";
import { EmojiEmotions, Label, PermMedia, Room } from "@mui/icons-material";

const cx = classNames.bind(styles);

const Share = () => {
  return (
    <div className={cx("share")}>
      <div className={cx("wrapper")}>
        <div className={cx("top")}>
          <img className={cx("profileImg")} src={avatar} alt="avatar" />
          <input placeholder="What's in your mind?" className={cx("input")} />
        </div>
        <hr className={cx("hr")} />
        <div className={cx("bottom")}>
          <div className={cx("options")}>
            <div className={cx("option")}>
              <PermMedia htmlColor="tomato" className={cx("icon")} />
              <span className={cx("optionText")}>Photo or Video</span>
            </div>
            <div className={cx("option")}>
              <Label htmlColor="blue" className={cx("icon")} />
              <span className={cx("optionText")}>Tag</span>
            </div>
            <div className={cx("option")}>
              <Room htmlColor="green" className={cx("icon")} />
              <span className={cx("optionText")}>Location</span>
            </div>
            <div className={cx("option")}>
              <EmojiEmotions htmlColor="goldenrod" className={cx("icon")} />
              <span className={cx("optionText")}>Feelings</span>
            </div>
          </div>

          <button className={cx("button")}>Share</button>
        </div>
      </div>
    </div>
  );
};

export default Share;
