import React, { useEffect } from "react";

import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import { getCurrentUser } from "./services/api.js";
export const serverUrl = "http://localhost:8000";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "./redux/userSlice";
import History from "./pages/History.jsx";
import Notes from "./pages/Notes.jsx";
import Pricing from "./pages/Pricing.jsx";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await getCurrentUser();
        dispatch(setUser(user));
      } catch (error) {
        console.error("Failed to fetch user:", error);
      }
    };
    fetchUser();
  }, [dispatch]);

  const userData = useSelector((state) => state.user.userData);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={userData ? <Home /> : <Navigate to="/auth" replace />}
        />
        <Route
          path="/auth"
          element={userData ? <Navigate to="/" replace /> : <Auth />}
        />
      </Routes>
      <Routes>
        <Route
          path="/history"
          element={userData ? <History /> : <Navigate to="/auth" replace />}
        />
        <Route path="/notes" element={userData ? <Notes /> : <Auth />} />

        <Route path="/pricing" element={userData ? <Pricing /> : <Auth />} />
      </Routes>
    </>
  );
}

export default App;
