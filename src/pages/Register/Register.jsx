import classNames from "classnames/bind";
import styles from "./Register.module.css";

const cx = classNames.bind(styles);

const Login = () => {
  return (
    <div className={cx("login")}>
      <div className={cx("wrapper")}>
        <div className={cx("left")}>
          <h3 className={cx("logo")}>Lama Social</h3>
          <span className={cx("desc")}>
            Connect with friends and the world around you on Lamasocial.
          </span>
        </div>
        <div className={cx("right")}>
          <div className={cx("box")}>
            <input placeholder="Username" className={cx("input")} />
            <input placeholder="Email" className={cx("input")} />
            <input placeholder="Password" className={cx("input")} />
            <input placeholder="Password Again" className={cx("input")} />
            <button className={cx("button")}>Sign Up</button>
            <button className={cx("registerButton")}>Log into Account</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
