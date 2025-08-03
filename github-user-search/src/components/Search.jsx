import React, { useState } from "react";
import { fetchUserData } from "../services/githubService";

const Search = () => {
  const [query, setQuery] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [user, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setUsers([]);

    try {
      const results =await fetchUserData({query,
        location,
        minRepos: minRepos ? parseInt(minRepos) : 0,
      });
      setUsers(results);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <form onSubmit={handleSubmit} className="mb-4 space-y-2">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search GitHub Users"
          className="border p-2 w-full rounded"
          required
        />
        <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Filer by location (optional)"
        className="border p-2 w-full rounded"
        />
        <input
        type="number"
        value={minRepos}
        onChange={(e) => setMinRepos(e.target.value)}
        placeholder="Minimum repos (optional)"
        className="border p-2 w-full rounded"
        min="0"
        />
        <button 
        type="submit" 
        className="ml-2 bg-blue-500 text-white mt-2 px-4 py-1 rounded w-full"
        >
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">Looks like we can't find the user.</p>}
      {user && !error && (
        <div>
          <img src={user.avatar_url} alt={user.login} width={100} />
          <h2>{user.name || user.login}</h2>
          <p>{user.bio}</p>
          <a href={user.html_url} target="_blank" rel="noopener noreferrer">
            View GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;
