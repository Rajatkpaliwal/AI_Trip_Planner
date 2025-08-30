// src/components/Login.jsx
import React, { useState } from "react";
import { login } from "../api";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await login(email, password); // use new login function

      if (res.access_token) {
        localStorage.setItem("token", res.access_token);
        onLogin({ email });
      } else {
        // handle API error message
        alert(res.detail || "Login failed!");
      }
    } catch (err) {
      console.error(err);
      alert("Login failed due to a network or server error!");
    }
  };

  return (
    <form onSubmit={handleLogin} id="login" className="form-box">
      <h2>Login</h2>
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
      <button type="submit">Login</button>
    </form>
  );
}
