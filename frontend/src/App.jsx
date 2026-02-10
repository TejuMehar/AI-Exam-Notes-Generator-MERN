import React, { use, useEffect } from "react";

import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import { get } from "mongoose";
import getCurrentUser from "./services/api.js";
export const serverUrl = "http://localhost:8000";

function App() {
  useEffect(() => {
    getCurrentUser();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </>
  );
}

export default App;
