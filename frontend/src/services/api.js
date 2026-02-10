import axios from "axios";
import { serverUrl } from "../App";

const getCurrentUser = async (req, res) => {
  try {
    const result = await axios.get(serverUrl + "/api/user/currentuser", {
      withCredentials: true,
    });
    console.log("Current User:", result.data);
  } catch (error) {
    console.error("Error fetching current user:", error);
  }
};

export default getCurrentUser;
