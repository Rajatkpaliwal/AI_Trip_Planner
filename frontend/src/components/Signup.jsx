// src/components/Signup.jsx
import React, { useState } from "react";
import { signup } from "../api";  // use the signup function from api.js

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const data = await signup(email, password);
      if (data && data.access_token) {
        alert("Signup successful! Please log in.");
      } else {
        alert("Signup failed: " + (data.detail || "Unknown error"));
      }
    } catch (err) {
      console.error(err);
      alert("Signup failed due to network error");
    }
  };

  return (
    <form onSubmit={handleSignup} id="signup" className="form-box">
      <h2>Signup</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Signup</button>
    </form>
  );
}
