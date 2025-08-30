import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import QueryForm from "./components/QueryForm";
import AnswerBox from "./components/AnswerBox";
import Loader from "./components/Loader";
import DownloadButton from "./components/DownloadButton";
import MyQueries from "./components/MyQueries";
import { sendQuery } from "./api";

function App() {
  const [answer, setAnswer] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [pdfFile, setPdfFile] = useState("");
  const [authMode, setAuthMode] = useState("login");
  const [page, setPage] = useState("home"); // "home" | "my-queries"

  const handleQuery = async (question) => {
    if (!user) {
      setAnswer("❌ Please login first.");
      return;
    }

    setLoading(true);
    setAnswer("");
    setPdfFile("");
    try {
      const data = await sendQuery(question, user.token);
      setAnswer(data.answer || "No answer found.");
      if (data.filename) {
        setPdfFile(data.filename);
      }
    } catch (error) {
      setAnswer("❌ Error: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <Navbar user={user} setUser={setUser} setAuthMode={setAuthMode} setPage={setPage} />

      {!user ? (
        <div className="auth-container">
          {authMode === "login" ? (
            <Login setUser={setUser} switchMode={() => setAuthMode("signup")} />
          ) : (
            <Signup setUser={setUser} switchMode={() => setAuthMode("login")} />
          )}
        </div>
      ) : (
        <>
          {page === "home" && (
            <>
              <h1>🌍 AI Trip Planner</h1>
              <QueryForm onSubmit={handleQuery} />
              {loading ? (
                <Loader />
              ) : (
                <>
                  <AnswerBox answer={answer} />
                  {pdfFile && <DownloadButton filename={pdfFile} />}
                </>
              )}
            </>
          )}

          {page === "my-queries" && <MyQueries user={user} />}
        </>
      )}
    </div>
  );
}

export default App;
