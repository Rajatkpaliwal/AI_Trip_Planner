import React, { useEffect, useState } from "react";
import { getMyQueries } from "../api";

function MyQueries({ user }) {
  const [queries, setQueries] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const limit = 5; // queries per page

  useEffect(() => {
    if (!user) return;

    const fetchQueries = async () => {
      setLoading(true);
      try {
        const data = await getMyQueries(user.token, page, limit);
        setQueries(data.queries || []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchQueries();
  }, [user, page]);

  return (
    <div>
      <h2>📝 My Queries</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {queries.map((q) => (
            <li key={q._id}>
              <strong>Q:</strong> {q.question} <br />
              <strong>A:</strong> {q.answer}
            </li>
          ))}
        </ul>
      )}

      {/* Pagination */}
      <div className="pagination">
        <button onClick={() => setPage((p) => Math.max(p - 1, 1))} disabled={page === 1}>
          ◀ Prev
        </button>
        <span> Page {page} </span>
        <button onClick={() => setPage((p) => p + 1)}>Next ▶</button>
      </div>
    </div>
  );
}

export default MyQueries;
