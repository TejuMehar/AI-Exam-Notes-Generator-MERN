import React from "react";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen overflow-hidden bg-white text-black">
      <Navbar />
      {/* top */}
      <section className="max-w-7xl mx-auto px-8 pt-32 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* LEFT SIDE - TEXT */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            whileHover={{ rotateX: 6, rotateY: -6 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <motion.h1
              className="text-5xl lg:text-7xl font-bold leading-tight
        bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"
              whileHover={{ y: -4 }}
              style={{
                transform: "translateZ(40px)",
                textShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
              }}
            >
              Create Smart <br /> AI Notes In Seconds
            </motion.h1>

            <motion.p
              whileHover={{ y: -2 }}
              className="mt-6 text-lg text-gray-600"
              style={{
                transform: "translateZ(40px)",
                textShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
              }}
            >
              Generate exam-focused notes with AI, flow diagrams, and
              revision-ready content faster and smarter.
              <br /> Save Time.
            </motion.p>

            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(139, 92, 246, 0.2)",
              }}
              whileTap={{ scale: 0.98 }}
              className="mt-8 group relative px-8 py-4 bg-white
        border-2 border-gray-200 rounded-xl font-semibold
        text-gray-700 shadow-sm hover:border-gray-300
        hover:shadow-md transition-all overflow-hidden"
              onClick={() => navigate("/notes")}
            >
              Get Started
            </motion.button>
          </motion.div>
        </div>

        {/* RIGHT SIDE - IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex justify-center"
        >
          <img
            src="https://formfees.com/wp-content/uploads/2025/03/AI-as-an-Exam-Proctoring.webp" // Put your image in public folder
            alt="AI Notes"
            className="w-full max-w-md rounded-2xl shadow-xl"
          />
        </motion.div>
      </section>

      {/* bottom  */}
      {/* bottom */}
      <section className="max-w-7xl mx-auto px-8 py-24">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
          Powerful Features 🚀
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Exam Notes */}
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="p-6 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-600
      text-white shadow-lg"
          >
            <div className="text-4xl mb-4">📕</div>

            <h3 className="text-xl font-bold mb-2">Exam Notes</h3>

            <p className="text-sm opacity-90 leading-relaxed">
              Get high-quality, exam-focused notes that are concise, clear, and
              revision-ready.
            </p>
          </motion.div>

          {/* AI + Diagrams */}
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="p-6 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500
      text-white shadow-lg"
          >
            <div className="text-4xl mb-4">🧠</div>

            <h3 className="text-xl font-bold mb-2">AI & Diagrams</h3>

            <p className="text-sm opacity-90 leading-relaxed">
              Generate smart content, flowcharts, and diagrams for easy
              understanding.
            </p>
          </motion.div>

          {/* PDF Download */}
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="p-6 rounded-2xl bg-gradient-to-r from-green-500 to-teal-600
      text-white shadow-lg"
          >
            <div className="text-4xl mb-4">📄</div>

            <h3 className="text-xl font-bold mb-2">PDF Download</h3>

            <p className="text-sm opacity-90 leading-relaxed">
              Download your notes and diagrams as clean, well-formatted PDFs
              anytime.
            </p>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
