// src/services/githubService.js
import axios from "axios";

const BASE_URL = "https://api.github.com";

// ✅ fetch a single user by username
export const fetchUserData = async ({ query, location, minRepos }) => {
  try {
    let searchQuery = query;
    if (location) searchQuery += `+location:${location}`;
    if (minRepos) searchQuery += `+repos:>=${minRepos}`;

    const response = await axios.get(
      `${BASE_URL}/search/users?q=${searchQuery}`
    );
    return response.data.items;
  } catch (error) {
    console.error("GitHub API error:", error);
    throw new Error("Error fetching data");
  }
};

// ✅ fetch user details by username
export const fetchUserDetails = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}`);
    return response.data;
  } catch (error) {
    console.error("GitHub API error:", error);
    throw new Error("Error fetching user details");
  }
};

// ✅ fetch user repositories by username
export const fetchUserRepos = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}/repos`);
    return response.data;
  } catch (error) {
    console.error("GitHub API error:", error);
    throw new Error("Error fetching user repositories");
  }
};

// ✅ fetch user followers by username
export const fetchUserFollowers = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}/followers`);
    return response.data;
  } catch (error) {
    console.error("GitHub API error:", error);
    throw new Error("Error fetching user followers");
  }
};
