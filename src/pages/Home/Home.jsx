import React from "react";
import Topbar from "../../components/Topbar/Topbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import classNames from "classnames/bind";
import styles from "./Home.module.css";
import Feed from "../../components/Feed/Feed";
import Rightbar from "../../components/Rightbar/Rightbar";

const cx = classNames.bind(styles);

const Home = () => {
  return (
    <>
      <Topbar />
      <div className={cx("container")}>
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </>
  );
};

export default Home;
