import ProfilePage from './ProfilePage';
import UserContext from './UserContext';


function App() {
  const userData = { name: " Jane Jonathan",
    email: "jane.Jonthan@example.com"
  };

  return (
    <UserContext.Provider value={userData}>
      <ProfilePage />
      </UserContext.Provider>
  );
}

export default App;