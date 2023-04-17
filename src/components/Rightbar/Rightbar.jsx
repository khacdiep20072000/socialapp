import React from "react";
import classNames from "classnames/bind";
import styles from "./Rightbar.module.css";

import birthday from "../../assets/gift.png";
import ads from "../../assets/ad.png";
import { Users } from "../../dummyData";
import Online from "../Online/Online";

const cx = classNames.bind(styles);

const Rightbar = ({ profile }) => {
  const HomeRightbar = () => {
    return (
      <>
        <div className={cx("birthdayContainer")}>
          <img src={birthday} alt="birthday" className={cx("birthdayImg")} />
          <p className={cx("birthdayText")}>
            <span style={{ fontWeight: "bold" }}>Pola</span> and
            <span style={{ fontWeight: "bold" }}>3 other friends</span> have a
            birth day today
          </p>
        </div>
        <img className={cx("ads")} src={ads} alt="ads" />
        <h4 className={cx("title")}>Online Friends</h4>
        <ul className={cx("friendList")}>
          {Users.map((user) => (
            <Online key={user.id} user={user} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightBar = () => {
    return (
      <>
        <h4 className={cx("title")}>User information</h4>
        <div className={cx("info")}>
          <div className={cx("infoItem")}>
            <span className={cx("infoKey")}>City:</span>
            <span className={cx("infoValue")}>New York</span>
          </div>
          <div className={cx("infoItem")}>
            <span className={cx("infoKey")}>From:</span>
            <span className={cx("infoValue")}>Madrid</span>
          </div>
          <div className={cx("infoItem")}>
            <span className={cx("infoKey")}>Relationship:</span>
            <span className={cx("infoValue")}>Single</span>
          </div>
        </div>
        <h4 className={cx("title")}>User friends</h4>
        <div className={cx("followings")}>
          <div className={cx("following")}>
            <img
              src="assets/person/1.jpeg"
              alt=""
              className={cx("followingImg")}
            />
            <span className={cx("followingName")}>John Carter</span>
          </div>
          <div className={cx("following")}>
            <img
              src="assets/person/2.jpeg"
              alt=""
              className={cx("followingImg")}
            />
            <span className={cx("followingName")}>John Carter</span>
          </div>
          <div className={cx("following")}>
            <img
              src="assets/person/3.jpeg"
              alt=""
              className={cx("followingImg")}
            />
            <span className={cx("followingName")}>John Carter</span>
          </div>
          <div className={cx("following")}>
            <img
              src="assets/person/4.jpeg"
              alt=""
              className={cx("followingImg")}
            />
            <span className={cx("followingName")}>John Carter</span>
          </div>
          <div className={cx("following")}>
            <img
              src="assets/person/5.jpeg"
              alt=""
              className={cx("followingImg")}
            />
            <span className={cx("followingName")}>John Carter</span>
          </div>
          <div className={cx("following")}>
            <img
              src="assets/person/6.jpeg"
              alt=""
              className={cx("followingImg")}
            />
            <span className={cx("followingName")}>John Carter</span>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className={cx("rightBar")}>
      <div className={cx("wrapper")}>
        {profile ? <ProfileRightBar /> : <HomeRightbar />}
      </div>
    </div>
  );
};

export default Rightbar;
