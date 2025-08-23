import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome! Try navigating:</p>
      <ul>
        <li><Link to="/profile/details">Go to Profile (Protected)</Link></li>
        <li><Link to="/blog/1">Read Blog Post 1</Link></li>
        <li><Link to="/blog/42">Read Blog Post 42</Link></li>
      </ul>
    </div>
  );
}
