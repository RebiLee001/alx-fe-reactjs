import axios from "axios";

const API_URL = import.meta.env.VITE_APP_GITHUB_API || "https://api.github.com";

export const searchUsers = async (username) => {
  try {
    const response = await axios.get(`${API_URL}/users/${username}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching GitHub user:", error);
    throw error;
  }
};
