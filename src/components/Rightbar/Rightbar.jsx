import React from "react";
import classNames from "classnames/bind";
import styles from "./Rightbar.module.css";

const cx = classNames.bind(styles);

const Rightbar = () => {
  return <div className={cx("rightBar")}>Rightbar</div>;
};

export default Rightbar;
