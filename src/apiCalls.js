import axios from "axios";

export const loginCall = async (userCredential, dispatch) => {
  dispatch({ type: "LOGIN_START" });
  try {
    const res = await axios.post("/auth/login", userCredential);
    dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
  } catch (err) {
    dispatch({ type: "LOGIN_FAIL", payload: err });
  }
};

// const fetchUsers = (user) => {
//   console.log(user);
//   return axios.post(`${SERVER}auth/login`, user);
// };

// export const loginCall = (userCredentials, dispatch) => {
//   dispatch({ type: "LOGIN_START" });
//   const { isError, isSuccess, data, error } = useQuery(
//     ["user", userCredentials],
//     () => fetchUsers(userCredentials),
//     {
//       refetchOnWindowFocus: false,
//     }
//   );
//   isSuccess && dispatch({ type: "LOGIN_SUCCESS", payload: data.data });
//   isError && dispatch({ type: "LOGIN_FAIL", payload: error });
// };
