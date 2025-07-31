import { useState } from "react";
import SearchBar from "./components/SearchBar";
import UserCard from "./components/UserCard";
import { searchUsers } from "./services/githubService";

function App() {
  const [user, setUser] = useState(null);

  const handleSearch = async (username) => {
    try {
      const data = await searchUsers(username);
      setUser(data);
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      alert("User not found!");
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>GitHub User Search</h1>
      <SearchBar onSearch={handleSearch} />
      {user && <UserCard user={user} />}
    </div>
  );
}

export default App;
