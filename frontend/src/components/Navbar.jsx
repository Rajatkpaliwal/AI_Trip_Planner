import React from "react";

function Navbar({ user, setUser, setAuthMode, setPage }) {
  return (
    <nav className="navbar">
      <h2>🌍 AI Trip Planner</h2>
      <div>
        {user ? (
          <>
            <button onClick={() => setPage("home")}>Home</button>
            <button onClick={() => setPage("my-queries")}>My Queries</button>
            <button onClick={() => setUser(null)}>Logout</button>
          </>
        ) : (
          <>
            <button onClick={() => setAuthMode("login")}>Login</button>
            <button onClick={() => setAuthMode("signup")}>Signup</button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
