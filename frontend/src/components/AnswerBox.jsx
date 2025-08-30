import React from "react";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm"; // enables tables, lists, etc.

function AnswerBox({ answer }) {
  if (!answer) return null;

  return (
    <motion.div
      className="answer-box prose max-w-none" // Tailwind typography for nice formatting
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="text-xl font-bold mb-3">Response:</h2>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {answer}
      </ReactMarkdown>
    </motion.div>
  );
}

export default AnswerBox;
