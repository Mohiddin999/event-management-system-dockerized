import axios from "axios";
import { request, setAuthHeader } from "./axios_helper";

export const loginUser = async (username, password) => {
    const res = await request("POST","/login", {username, password});
    if(res.status != 200)
    {
        setAuthHeader(null);
        throw new Error("Unable to login");
    }

    setAuthHeader(res.data.token)
    const data = await res.data;
    return data;
};

export const logoutUser = async () => {
    const res = await axios.get("/user/logout");
     //const res = "hi";
     if (res.status !== 200) {
       throw new Error("Unable to log out ");
     }
     setAuthHeader(null)
     const data = await res.data;
     //return "hiii , how can";
     return data;
};


export const signupUser = async (
    name,
    username,
    email,
    password
  ) => {
    console.log(username)

    const res = await request("POST", "/register", { name, username, email, password });
    if (res.status !== 201) {
      setAuthHeader(null);
      console.log("new error encountered")
      throw new Error("Unable to Signup");
    }

    setAuthHeader(res.data.token)
    const data = await res.data;
    return data;
};
  