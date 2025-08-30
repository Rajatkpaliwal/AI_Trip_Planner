import React from "react";
import { motion } from "framer-motion";

function Loader() {
  return (
    <div className="flex items-center justify-center min-h-[100px]">
      <motion.div
        className="w-8 h-8 rounded-full border-4 border-gray-300 border-t-blue-500"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
      />
    </div>
  );
}

export default Loader;
