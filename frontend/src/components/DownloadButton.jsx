import React from "react";

function DownloadButton({ filename }) {
  const handleDownload = () => {
    window.open(`http://127.0.0.1:8000/download/${filename}`, "_blank");
  };

  return (
    <div className="download-section">
      <button onClick={handleDownload} className="download-btn">
        ⬇️ Download PDF
      </button>
    </div>
  );
}

export default DownloadButton;
