const API_URL = process.env.REACT_APP_API_URL || "http://127.0.0.1:8000";

// Register new user
export async function signup(email, password) {
  const response = await fetch(`${API_URL}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  return await response.json();
}

// Login user
export async function login(email, password) {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  return await response.json();
}

// Send user query
export async function sendQuery(question, token) {
  const response = await fetch(`${API_URL}/query`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ question }),
  });
  return await response.json();
}

// Download PDF
export function downloadPDF(filename) {
  window.open(`${API_URL}/download/${filename}`, "_blank");
}

// Fetch user queries with pagination
export async function getMyQueries(token, page = 1, limit = 5) {
  const skip = (page - 1) * limit;
  const response = await fetch(`${API_URL}/queries/my-queries?skip=${skip}&limit=${limit}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return await response.json();
}
