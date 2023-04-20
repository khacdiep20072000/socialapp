import classNames from "classnames/bind";
import styles from "./Login.module.css";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { loginCall } from "../../apiCalls";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import CircularProgress from "@mui/material/CircularProgress";

const cx = classNames.bind(styles);

const schema = yup.object({
  email: yup
    .string()
    .required("Email is require")
    .email("Please enter a valid email address"),
  // .matches(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Min length of password must be at least 6 characters")
    .max(30, "Max length of password must be at least 30 characters"),
});

const Login = () => {
  const form = useForm({
    resolver: yupResolver(schema),
  });

  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;
  const { user, isFetching, error, dispatch } = useContext(AuthContext);

  const onSubmit = (data) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    loginCall(data, dispatch);
  };

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
          <form
            className={cx("box")}
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            <input
              placeholder="Email"
              type="email"
              className={cx("input")}
              {...register("email")}
            />
            <p className={cx("error")}>{errors.email?.message}</p>

            <input
              placeholder="Password"
              type="password"
              className={cx("input")}
              {...register("password")}
            />
            <p className={cx("error")}>{errors.password?.message}</p>

            <button className={cx("button")} disabled={isFetching}>
              {isFetching ? (
                <CircularProgress style={{ color: "white" }} size={"20px"} />
              ) : (
                "Log In"
              )}
            </button>
            <span className={cx("forgot")}>Forgot Password?</span>
            <button className={cx("registerButton")}>
              Create a New Account
            </button>
          </form>
          <DevTool control={control} />
        </div>
      </div>
    </div>
  );
};

export default Login;
