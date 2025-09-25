import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import Navbar from "../components/Navbar";

export default function Dashboard() {
  const [sessionId, setSessionId] = useState("");
  const [loading, setLoading] = useState(false);
  const [reportLink, setReportLink] = useState(null);

  const generateReport = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/report/generate", {
        sessionId,
      });
      toast.success("Report generated successfully");
      setReportLink(response.data.pdfPath); // Assuming backend returns link
    } catch (err) {
      toast.error("Failed to generate report");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen w-screen bg-gradient-to-r from-blue-950 via-blue-900  to-gray-800 flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Dashboard Content */}
      <div className="flex-grow flex items-center justify-center">
        <div className="w-full max-w-lg p-8 rounded-2xl shadow-2xl bg-white/10 backdrop-blur-xl border border-white/20">
          <h1 className="text-3xl font-bold text-center text-white mb-2">
            Dashboard
          </h1>
          <p className="text-center text-gray-200 text-sm mb-6">
            Generate assessment reports
          </p>

          <div className="mb-4">
            <label
              htmlFor="sessionId"
              className="block text-sm text-gray-200 mb-1"
            >
              Enter Session ID
            </label>
            <input
              id="sessionId"
              type="text"
              value={sessionId}
              onChange={(e) => setSessionId(e.target.value)}
              placeholder="e.g. session_001"
              className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:bg-white/30 transition"
            />
          </div>

          <button
            onClick={generateReport}
            disabled={loading || !sessionId}
            className="w-full py-3 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold hover:shadow-lg hover:scale-[1.02] transition disabled:opacity-50"
          >
            {loading ? "Generating..." : "Generate Report"}
          </button>

          {reportLink && (
            <div className="mt-6 text-center">
              <p className="text-gray-200 mb-2">Your report is ready:</p>
              <a
                href={reportLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-400 hover:text-pink-500 font-medium underline"
              >
                View Report
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
