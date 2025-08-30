import React, { useState } from "react";

function QueryForm({ onSubmit }) {
  const [question, setQuestion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (question.trim()) {
      onSubmit(question);
      setQuestion("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="query-form">
      <input
        type="text"
        value={question}
        placeholder="✈️ Where do you want to travel?"
        onChange={(e) => setQuestion(e.target.value)}
      />
      <button type="submit">🚀 Ask</button>
    </form>
  );
}

export default QueryForm;
