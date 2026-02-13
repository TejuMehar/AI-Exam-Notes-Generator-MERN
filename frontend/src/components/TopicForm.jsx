import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";

function TopicForm({ setResult, setLoading, loading, setError }) {
  const [topic, setTopic] = useState("");
  const [classLevel, setClassLevel] = useState("");
  const [examType, setExamType] = useState("");
  const [rivisionMode, setRevisionMode] = useState(false);
  const [includeDiagrams, setIncludeDiagrams] = useState(false);
  const [includeChart, setIncludeChart] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-2xl bg-gradient-to-br from-black/90 via-black/80 to-black/90 
    blackdrop-blur-2xl border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.75)]
    p-8 space-y-6 text-white"
    >
      {/* To take topic  */}
      <input
        type="text"
        className="w-full p-3 rounded-lg bg-white/10 backdrop-blur-lg border border-white/20 placeholder-gray-400 text-white focus:outeline-none 
   focus: ring-2 focus:ring-white/30 "
        placeholder="Enter Topics (e.g: Web Developement)"
        onChange={(e) => setTopic(e.target.value)}
        value={topic}
      />
      {/* To take Class value */}
      <input
        type="text"
        className="w-full p-3 rounded-lg bg-white/10 backdrop-blur-lg border border-white/20 placeholder-gray-400 text-white focus:outeline-none 
   focus: ring-2 focus:ring-white/30 "
        placeholder="Class /Level (e.g Class 12th)"
        onChange={(e) => setClassLevel(e.target.value)}
        value={classLevel}
      />
      {/* take Exam Type */}
      <input
        type="text"
        className="w-full p-3 rounded-lg bg-white/10 backdrop-blur-lg border border-white/20 placeholder-gray-400 text-white focus:outeline-none 
   focus: ring-2 focus:ring-white/30 "
        placeholder="Exam Type (e.g: CBSC, JEE, NEET)"
        onChange={(e) => setExamType(e.target.value)}
        value={examType}
      />

      <div className="flex flex-col md:flex-row gap-6 ">
        <Toggle
          label="Revision Mode"
          checked={rivisionMode}
          onChange={() => setRevisionMode(!rivisionMode)}
        />
        <Toggle
          label="Include Diagrams"
          checked={includeDiagrams}
          onChange={() => setIncludeDiagrams(!includeDiagrams)}
        />
        <Toggle
          label="Include Charts"
          checked={includeChart}
          onChange={() => setIncludeChart(!includeChart)}
        />
      </div>

      <motion.button
      whileHover={!loading ? {scale: 1.05,y: -2} : {}}
      whileTap={!loading ? {scale: 0.95} : {}}
      disabled={loading}

      className="w-full mt-4 py-3 rounded-xl font-semibold flex items-center justify-center gap-3 transition bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? "Generating Notes..." : "Generate Notes"}
      </motion.button>
    </motion.div>
  );
}
function Toggle({ label, checked, onChange }) {
  return (
    <div
      className="flex items-center gap-4 cursor-pointer select-none"
      onClick={() => onChange(!checked)}
    >
      <motion.div
        animate={{
          background: checked
            ? "rgba(34,197,94,0.35)"
            : "rgba(255,255,255,0.15)",
        }}
        className="relative w-12 h-6 rounded-full border border-white/20 backdrop-blur-lg"
      >
        <motion.div
          layout
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          className="absolute top-0.5 h-5 w-5 rounded-full bg-white"
          style={{ left: checked ? "1.6rem" : "0.25rem" }}
        />
      </motion.div>

      <span
        className={`text-sm transition-colors ${
          checked ? "text-green-300" : "text-gray-300"
        }`}
      >
        {label}
      </span>
    </div>
  );
}

export default TopicForm;
