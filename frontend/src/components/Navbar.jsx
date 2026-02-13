import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { serverUrl } from "../App";
import { setUser } from "../redux/userSlice";

function Navbar() {
  const { userData } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showCredits, setShowCredits] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  // Get first letter of user's name
  const getUserInitial = () => {
    if (userData?.name) {
      return userData.name.charAt(0).toUpperCase();
    }
    return "U";
  };

  // Handle Logout
  const handleLogout = async () => {
    try {
      await axios.get(`${serverUrl}/api/auth/logout`, {
        withCredentials: true,
      });
      dispatch(setUser(null));
      setShowProfile(false);
      console.log("Logged out successfully");
    } catch (error) {
      console.error("Logout failed:", error);
      dispatch(setUser(null));
    }
  };

  // Handle History Click
  const handleHistory = () => {
    setShowProfile(false);
    navigate("/history"); // Adjust route as needed
  };

  // Auto-close profile when credits dropdown opens
  const handleCreditsClick = () => {
    setShowCredits(!showCredits);
    setShowProfile(false);
  };

  // Auto-close credits when profile dropdown opens
  const handleProfileClick = () => {
    setShowProfile(!showProfile);
    setShowCredits(false);
  };

  return (
    <>
      <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-lg border-b border-gray-700">
        {/* Left side - Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <span className="text-2xl">📚</span>
          <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            ExamNotes AI
          </span>
        </div>

        {/* Right side - Credits + Avatar */}
        <div className="flex items-center gap-3 relative">
          {/* Credits Badge */}
          <motion.div
            className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full cursor-pointer hover:bg-white/15 hover:border-blue-400/50 hover:shadow-lg hover:shadow-blue-500/30 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <span className="text-xl drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]">
              💎
            </span>
            <span className="text-white font-semibold text-base tracking-wide">
              {userData?.credit ?? 50}
            </span>
          </motion.div>

          {/* Plus Button */}
          <motion.button
            onClick={handleCreditsClick}
            className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full text-white text-2xl font-bold shadow-lg shadow-blue-500/40 hover:shadow-blue-500/60 transition-shadow"
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9, rotate: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            +
          </motion.button>

          {/* User Avatar Circle */}
          <motion.div
            onClick={handleProfileClick}
            className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full text-white font-bold text-base cursor-pointer shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            {getUserInitial()}
          </motion.div>

          {/* Credits Dropdown */}
          <AnimatePresence>
            {showCredits && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute right-0 top-full mt-2 w-64 rounded-2xl bg-black/90 backdrop-blur-xl border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.7)] p-4 text-white"
              >
                <h4 className="font-semibold mb-2">Buy Credits</h4>
                <p className="text-sm text-gray-300 mb-4">
                  Use credits to generate AI notes, diagrams & PDFs.
                </p>
                <button
                  className="w-full py-2 rounded-lg bg-gradient-to-br from-white to-gray-200 text-black font-semibold hover:opacity-90 transition-opacity"
                  onClick={navigate("/pricing")}
                >
                  Buy More Credits
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Profile Dropdown */}
          <AnimatePresence>
            {showProfile && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute right-0 top-full mt-2 w-48 rounded-2xl bg-black/90 backdrop-blur-xl border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.7)] overflow-hidden text-white"
              >
                {/* History Button */}
                <button
                  onClick={handleHistory}
                  className="w-full px-4 py-3 text-left hover:bg-white/10 transition-all flex items-center gap-3"
                >
                  <span className="text-xl">📜</span>
                  <span className="font-medium">History</span>
                </button>

                {/* Divider */}
                <div className="border-t border-white/10"></div>

                {/* Logout Button */}
                <button
                  onClick={handleLogout}
                  className="w-full px-4 py-3 text-left hover:bg-red-500/20 text-red-400 transition-all flex items-center gap-3"
                >
                  <span className="text-xl">🚪</span>
                  <span className="font-medium">Logout</span>
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* Overlay - Click outside to close */}
      <AnimatePresence>
        {(showCredits || showProfile) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              setShowCredits(false);
              setShowProfile(false);
            }}
            className="fixed inset-0 bg-black/20 z-40"
          />
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
