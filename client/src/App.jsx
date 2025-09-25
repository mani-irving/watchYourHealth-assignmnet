import { useState } from "react";
import { Toaster } from "react-hot-toast";
import { Route, Routes, Navigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Signup from "./pages/Signup";

function App() {
  const { authUser } = useAuthContext();
  return (
    <div class="w-screen h-screen bg-gradient-to-r from-blue-950 via-blue-900  to-gray-800">
      <Toaster />
      <Routes>
        <Route
          path="/"
          element={authUser ? <Dashboard /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={!authUser ? <Login /> : <Navigate to="/" />}
        />
        <Route
          path="/signup"
          element={!authUser ? <Signup /> : <Navigate to="/login" />}
        />
      </Routes>
    </div>
  );
}

export default App;
