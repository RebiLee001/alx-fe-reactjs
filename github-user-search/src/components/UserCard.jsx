function UserCard({ user }) {
  return (
    <div style={{ marginTop: "20px", border: "1px solid gray", padding: "15px", width: "300px" }}>
      <img src={user.avatar_url} alt={user.login} width="80" style={{ borderRadius: "50%" }} />
      <h2>{user.login}</h2>
      <p><a href={user.html_url} target="_blank" rel="noopener noreferrer">View Profile</a></p>
    </div>
  );
}

export default UserCard;
