// src/services/githubService.js
import axios from "axios";

const BASE_URL =
  import.meta.env.VITE_APP_GITHUB_API || "https://api.github.com";

export const fetchUserData = async ({ query, location, minRepos }) => {
  try {
    let searchQuery = query;
    if (location) searchQuery += `+location:${location}`;
    if (minRepos) searchQuery += `+repos:${minRepos}`;

    const response = await axios.get(
      `${BASE_URL}/search/users?q=${searchQuery}`
    );
    return response.data.items;
  } catch (error) {
    console.error("GitHub API error:", error);
    throw new Error("Error fetching data");
  }
};
