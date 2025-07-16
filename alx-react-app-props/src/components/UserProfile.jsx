// src/components/UserProfile.jsx

const UserProfile = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Bio: {props.bio}</p>
    </div>
  );
};

export default UserProfile;
// This component displays user profile information.
// It takes props for name, age, and bio and renders them in a simple format.