// src/components/UserProfile.jsx
import { useContext } from 'react';
import { UserContext } from '../UserContext';

function UserProfile() {
const UserData = useContext(UserContext);

  return (
    <div>
      <h2>{UserData.name}</h2>
      <p>Age: {UserData.age}</p>
      <p>Bio: {UserData.bio}</p>
      <p>Email: {UserData.email}</p>
      <p>Location: {UserData.location}</p>
    </div>
  );
};

export default UserProfile;
// This component displays user profile information.
// It takes props for name, age, and bio and renders them in a simple format.