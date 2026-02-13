import { useNavigate } from "react-router-dom";
import React from "react";
import { motion } from "framer-motion";

function Footer() {
  const navigate = useNavigate();
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Logo + About */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            ExamNotes AI
          </h2>

          <p className="text-gray-400 text-sm leading-relaxed">
            Generate smart exam notes, diagrams, and PDFs using AI. Study
            faster. Learn smarter.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h3 className="font-semibold mb-4">Quick Links</h3>

          <ul className="space-y-2 text-gray-400 text-sm">
            <li
              className="hover:text-white cursor-pointer"
              onClick={() => navigate("/")}
            >
              Home
            </li>
            <li
              className="hover:text-white cursor-pointer"
              onClick={() => navigate("/notes")}
            >
              Notes
            </li>
            <li className="hover:text-white cursor-pointer">Dashboard</li>
            <li
              className="hover:text-white cursor-pointer"
              onClick={() => navigate("/history")}
            >
              History
            </li>
          </ul>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="font-semibold mb-4">Features</h3>

          <ul className="space-y-2 text-gray-400 text-sm">
            <li>📕 Exam Notes</li>
            <li>📊 Diagrams</li>
            <li>📄 PDF Download</li>
            <li>🧠 AI Generator</li>
          </ul>
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="font-semibold mb-4">Contact</h3>

          <ul className="space-y-2 text-gray-400 text-sm">
            <li>📧 support@examnotesai.com</li>
            <li>📞 +91 7447746247</li>
            <li>📍 Maharashtra, India</li>
          </ul>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="border-t border-white/10 py-6 text-center text-gray-400 text-sm"
      >
        © {new Date().getFullYear()} ExamNotes AI. All Rights Reserved.
        <br />
        Built with ❤️ using React & AI
      </motion.div>
    </footer>
  );
}

export default Footer;
