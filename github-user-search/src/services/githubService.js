import axios from "axios";

const API_BASE = "https://api.github.com/users";

export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${API_BASE}/${username}`);
    return response.data;
    // eslint-disable-next-line no-unused-vars
  } catch (error) {
    throw new Error("User not found");
  }
};

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

const BASE_URL =
  import.meta.env.VITE_APP_GITHUB_API || "https://api.github.com";

export const fetchAdvancedUserData = async (username, location, minRepos) => {
  let query = "";

  if (username) query += `${username}+`;
  if (location) query += `location:${location}+`;
  if (minRepos) query += `repos:>=${minRepos}`;

  try {
    const response = await axios.get(`${BASE_URL}/search/users?q=${query}`);
    return response.data;
    // eslint-disable-next-line no-unused-vars
  } catch (error) {
    throw new Error("Error fetching data");
  }
};

export const fetchPaginatedUsers = async (query, page = 1, perPage = 10) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/search/users?q=${query}&page=${page}&per_page=${perPage}`
    );
    return response.data;
    // eslint-disable-next-line no-unused-vars
  } catch (error) {
    throw new Error("Error fetching paginated users");
  }
};
