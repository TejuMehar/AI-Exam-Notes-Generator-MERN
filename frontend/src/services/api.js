import axios from "axios";
import { serverUrl } from "../App.jsx";

// Fetches the current user from the backend and returns the user data.
export const getCurrentUser = async () => {
  const result = await axios.get(`${serverUrl}/api/user/currentuser`, {
    withCredentials: true,
  });
  return result.data;
};
