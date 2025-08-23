// src/components/TestingComponent.jsx
import React, { useState } from "react";

export default function TestingComponent() {
  const [text, setText] = useState("");
  const [submitted, setSubmitted] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(text);
    setText("");
  };

  return (
    <div data-testid="testing-component">
      <h2>Testing Component</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type something"
          value={text}
          onChange={(e) => setText(e.target.value)}
          data-testid="input-field"
        />
        <button type="submit" data-testid="submit-btn">Submit</button>
      </form>
      {submitted && <p data-testid="submitted-text">You submitted: {submitted}</p>}
    </div>
  );
}