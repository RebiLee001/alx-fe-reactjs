// src/components/UserProfile.jsx

const UserProfile = (props) => {
  return (
    <div style={{ border: '1px solid gray', padding: '10px', margin: '10px', 
    borderRadius: '5px' }}>
  <h2 style={{ color: 'blue', fontSize: '24px' }}>{props.name}</h2>
  <p>Age: <span style={{ fontWeight: 'bold' }}>{props.age}</span></p>
  <p style={{ fontStyle: 'italic' }}>Bio: {props.bio}</p>
</div>
  );
};

export default UserProfile;
// This component displays user profile information.
// It takes props for name, age, and bio and renders them in a simple format.