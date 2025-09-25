// routes/report.js
import express from "express";
import puppeteer from "puppeteer";
import path from "path";
import fs from "fs";
import { assessmentData } from "../data/data.js";
import { renderHtmlReport } from "../config/reportConfig.js";

const router = express.Router();

// Ensure reports directory exists
const reportsDir = path.resolve("reports");
if (!fs.existsSync(reportsDir)) {
  fs.mkdirSync(reportsDir, { recursive: true });
}

router.post("/generate", async (req, res) => {
  const { sessionId } = req.body;

  if (!sessionId) {
    return res.status(400).json({
      message: "Session ID is required",
      success: false,
    });
  }

  console.log(`Generating report for session: ${sessionId}`);

  try {
    // Find assessment session
    const session = assessmentData.find((s) => s.session_id === sessionId);

    if (!session) {
      return res.status(404).json({
        message: "Session not found",
        success: false,
        sessionId,
      });
    }

    console.log(
      `Found session data for assessment type: ${session.assessment_id}`
    );

    // Generate HTML content using the configuration system
    let htmlContent;
    try {
      htmlContent = renderHtmlReport(session);
    } catch (configError) {
      console.error("Configuration error:", configError.message);
      return res.status(400).json({
        message: `Configuration error: ${configError.message}`,
        success: false,
        sessionId,
        assessmentId: session.assessment_id,
      });
    }

    // Generate PDF using Puppeteer
    console.log("Launching browser for PDF generation...");
    const browser = await puppeteer.launch({
      headless: true, // use true instead of "new"
      args: [
        "--no-sandbox",
        "--disable-setuid-sandbox",
        "--disable-dev-shm-usage",
      ],
    });

    const page = await browser.newPage();

    // Set HTML content
    await page.setContent(htmlContent, { waitUntil: "domcontentloaded" });

    // Wait a bit to ensure fonts/images are rendered
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Generate filename
    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
    const filename = `${sessionId}_${session.assessment_id}_${timestamp}.pdf`;
    const pdfPath = path.resolve(reportsDir, filename);

    // Generate PDF
    await page.pdf({
      path: pdfPath,
      format: "A4",
      printBackground: true,
      margin: {
        top: "20mm",
        right: "15mm",
        bottom: "20mm",
        left: "15mm",
      },
    });

    await browser.close();

    console.log(`PDF generated successfully: ${pdfPath}`);

    // Verify file was created
    if (!fs.existsSync(pdfPath)) {
      throw new Error("PDF file was not created");
    }

    const fileSize = fs.statSync(pdfPath).size;
    console.log(`PDF file size: ${fileSize} bytes`);
    const publicUrl = `${req.protocol}://${req.get(
      "host"
    )}/reports/${filename}`;

    res.json({
      message: "Report generated successfully",
      success: true,
      sessionId,
      assessmentId: session.assessment_id,
      pdfPath: publicUrl,
      filename: filename,
      fileSize: fileSize,
      generatedAt: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Error generating report:", error);
    res.status(500).json({
      message: "Failed to generate report",
      success: false,
      error: error.message,
      sessionId,
    });
  }
});

// Optional: Add a test endpoint to preview HTML without generating PDF
router.get("/preview/:sessionId", (req, res) => {
  const { sessionId } = req.params;

  const session = assessmentData.find((s) => s.session_id === sessionId);

  if (!session) {
    return res.status(404).json({
      message: "Session not found",
      success: false,
      sessionId,
    });
  }

  try {
    const htmlContent = renderHtmlReport(session);
    res.setHeader("Content-Type", "text/html");
    res.send(htmlContent);
  } catch (error) {
    console.error("Error generating HTML preview:", error);
    res.status(500).json({
      message: "Failed to generate HTML preview",
      success: false,
      error: error.message,
      sessionId,
    });
  }
});

// Endpoint to list available sessions for testing
router.get("/sessions", (req, res) => {
  const sessions = assessmentData.map((session) => ({
    session_id: session.session_id,
    assessment_id: session.assessment_id,
    accuracy: session.accuracy,
    timestamp: session.timestamp,
    timeElapsed: session.timeElapsed,
  }));

  res.json({
    message: "Available sessions",
    success: true,
    count: sessions.length,
    sessions,
  });
});

// Endpoint to get configuration for a specific assessment type
router.get("/config/:assessmentId", async (req, res) => {
  const { assessmentId } = req.params;

  try {
    // Import the config to check if it exists
    const { reportConfigs } = await import("../config/reportConfig.js");
    const config = reportConfigs[assessmentId];

    if (!config) {
      return res.status(404).json({
        message: `No configuration found for assessment ID: ${assessmentId}`,
        success: false,
        assessmentId,
      });
    }

    res.json({
      message: "Configuration found",
      success: true,
      assessmentId,
      config,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error loading configuration",
      success: false,
      error: error.message,
      assessmentId,
    });
  }
});

export default router;
