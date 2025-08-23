import React, { useState } from "react";

export default function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    if (!username) tempErrors.username = "Username is required";
    if (!email) tempErrors.email = "Email is required";
    if (!password) tempErrors.password = "Password is required";
    return tempErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log("Form submitted:", { username, email, password });
      alert("User registered successfully!");
      setUsername("");
      setEmail("");
      setPassword("");
      setErrors({});
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 p-4 max-w-sm mx-auto border rounded-lg"
    >
      <div>
        <label className="block mb-1">Username</label>
        <input
          type="text"
          name="username"
          value={username}     // ✅ controlled
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 w-full"
        />
        {errors.username && (
          <p className="text-red-500 text-sm">{errors.username}</p>
        )}
      </div>

      <div>
        <label className="block mb-1">Email</label>
        <input
          type="email"
          name="email"
          value={email}     // ✅ controlled
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 w-full"
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email}</p>
        )}
      </div>

      <div>
        <label className="block mb-1">Password</label>
        <input
          type="password"
          name="password"
          value={password}     // ✅ controlled
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 w-full"
        />
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password}</p>
        )}
      </div>

      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Register
      </button>
    </form>
  );
}