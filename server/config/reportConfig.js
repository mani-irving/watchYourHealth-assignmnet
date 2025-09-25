// config/reportConfig.js
export const reportConfigs = {
  // Health & Fitness Assessment Configuration
  as_hr_02: {
    title: "Health & Fitness Assessment Report",
    sections: [
      {
        id: "overview",
        title: "Assessment Overview",
        fields: [
          {
            label: "Overall Health Score",
            path: "accuracy",
            unit: "%",
            classification: {
              ranges: [
                { min: 80, max: 100, label: "Excellent", color: "#10B981" },
                { min: 60, max: 79, label: "Good", color: "#F59E0B" },
                { min: 40, max: 59, label: "Fair", color: "#EF4444" },
                { min: 0, max: 39, label: "Poor", color: "#DC2626" },
              ],
            },
          },
          {
            label: "Assessment Duration",
            path: "timeElapsed",
            unit: "seconds",
          },
          {
            label: "Gender",
            path: "gender",
            transform: "capitalize",
          },
        ],
      },
      {
        id: "vitals",
        title: "Key Body Vitals",
        fields: [
          {
            label: "Heart Rate",
            path: "vitalsMap.vitals.heart_rate",
            unit: "bpm",
            classification: {
              ranges: [
                { min: 60, max: 100, label: "Normal", color: "#10B981" },
                { min: 50, max: 59, label: "Low Normal", color: "#F59E0B" },
                { min: 101, max: 120, label: "Elevated", color: "#EF4444" },
              ],
            },
          },
          {
            label: "Blood Pressure Systolic",
            path: "vitalsMap.vitals.bp_sys",
            unit: "mmHg",
            classification: {
              ranges: [
                { min: 90, max: 119, label: "Normal", color: "#10B981" },
                { min: 120, max: 139, label: "Elevated", color: "#F59E0B" },
                { min: 140, max: 180, label: "High", color: "#EF4444" },
              ],
            },
          },
          {
            label: "Blood Pressure Diastolic",
            path: "vitalsMap.vitals.bp_dia",
            unit: "mmHg",
            classification: {
              ranges: [
                { min: 60, max: 79, label: "Normal", color: "#10B981" },
                { min: 80, max: 89, label: "Elevated", color: "#F59E0B" },
                { min: 90, max: 120, label: "High", color: "#EF4444" },
              ],
            },
          },
          {
            label: "Oxygen Saturation",
            path: "vitalsMap.vitals.oxy_sat_prcnt",
            unit: "%",
          },
          {
            label: "Respiratory Rate",
            path: "vitalsMap.vitals.resp_rate",
            unit: "/min",
          },
        ],
      },
      {
        id: "heart_health",
        title: "Heart Health",
        fields: [
          {
            label: "Wellness Score",
            path: "vitalsMap.wellness_score",
            unit: "/100",
            classification: {
              ranges: [
                { min: 80, max: 100, label: "Excellent", color: "#10B981" },
                { min: 60, max: 79, label: "Good", color: "#F59E0B" },
                { min: 40, max: 59, label: "Fair", color: "#EF4444" },
              ],
            },
          },
          {
            label: "Health Risk Score",
            path: "vitalsMap.health_risk_score",
            unit: "points",
          },
          {
            label: "VO2 Max",
            path: "vitalsMap.metadata.physiological_scores.vo2max",
            unit: "ml/kg/min",
          },
          {
            label: "HRV (RMSSD)",
            path: "vitalsMap.metadata.heart_scores.rmssd",
            unit: "ms",
          },
          {
            label: "Stress Index",
            path: "vitalsMap.metadata.heart_scores.stress_index",
            unit: "",
          },
        ],
      },
      {
        id: "fitness",
        title: "Fitness Levels",
        fields: [
          {
            label: "Cardiovascular Endurance",
            path: "exercises[?(@.id==235)].setList[0].time",
            unit: "seconds",
            description: "Time spent on jog test",
          },
          {
            label: "Squat Performance",
            path: "exercises[?(@.id==259)].correctReps",
            unit: "reps",
          },
          {
            label: "Flexibility Score",
            path: "exercises[?(@.id==281)].setList[0].additionalFields[?(@.fieldName=='Distance')].fieldValue",
            unit: "cm",
          },
        ],
      },
      {
        id: "body_composition",
        title: "Body Composition",
        fields: [
          {
            label: "BMI",
            path: "bodyCompositionData.BMI",
            unit: "kg/m²",
            classification: {
              ranges: [
                { min: 18.5, max: 24.9, label: "Normal", color: "#10B981" },
                { min: 25, max: 29.9, label: "Overweight", color: "#F59E0B" },
                { min: 30, max: 40, label: "Obese", color: "#EF4444" },
              ],
            },
          },
          {
            label: "Body Fat Percentage",
            path: "bodyCompositionData.BFC",
            unit: "%",
          },
          {
            label: "Muscle Mass",
            path: "bodyCompositionData.LM",
            unit: "kg",
          },
          {
            label: "BMR",
            path: "bodyCompositionData.BMR",
            unit: "calories/day",
          },
        ],
      },
      {
        id: "posture",
        title: "Posture Analysis",
        fields: [
          {
            label: "Frontal View Score",
            path: "exercises[?(@.id==73)].analysisScore",
            unit: "/100",
          },
          {
            label: "Side View Score",
            path: "exercises[?(@.id==74)].analysisScore",
            unit: "/100",
          },
        ],
        customContent: {
          type: "analysis_tips",
          dataPath: "exercises[?(@.id==73 || @.id==74)]",
        },
      },
    ],
  },

  // Cardiac Assessment Configuration
  as_card_01: {
    title: "Cardiac Assessment Report",
    sections: [
      {
        id: "overview",
        title: "Assessment Overview",
        fields: [
          {
            label: "Overall Assessment Score",
            path: "accuracy",
            unit: "%",
            classification: {
              ranges: [
                { min: 80, max: 100, label: "Excellent", color: "#10B981" },
                { min: 60, max: 79, label: "Good", color: "#F59E0B" },
                { min: 40, max: 59, label: "Fair", color: "#EF4444" },
                { min: 0, max: 39, label: "Poor", color: "#DC2626" },
              ],
            },
          },
          {
            label: "Assessment Duration",
            path: "timeElapsed",
            unit: "seconds",
          },
        ],
      },
      {
        id: "vitals",
        title: "Key Body Vitals",
        fields: [
          {
            label: "Heart Rate",
            path: "vitalsMap.vitals.heart_rate",
            unit: "bpm",
            classification: {
              ranges: [
                { min: 60, max: 100, label: "Normal", color: "#10B981" },
                { min: 50, max: 59, label: "Low Normal", color: "#F59E0B" },
                { min: 101, max: 120, label: "Elevated", color: "#EF4444" },
              ],
            },
          },
          {
            label: "Blood Pressure",
            path: "vitalsMap.vitals.bp_sys",
            secondaryPath: "vitalsMap.vitals.bp_dia",
            unit: "mmHg",
            format: "systolic/diastolic",
          },
          {
            label: "Oxygen Saturation",
            path: "vitalsMap.vitals.oxy_sat_prcnt",
            unit: "%",
          },
        ],
      },
      {
        id: "cardiovascular",
        title: "Cardiovascular Endurance",
        fields: [
          {
            label: "Cardiac Output",
            path: "vitalsMap.metadata.cardiovascular.cardiac_out",
            unit: "L/min",
          },
          {
            label: "Mean Arterial Pressure",
            path: "vitalsMap.metadata.cardiovascular.map",
            unit: "mmHg",
          },
          {
            label: "Heart Rate Variability",
            path: "vitalsMap.metadata.heart_scores.rmssd",
            unit: "ms",
          },
          {
            label: "Exercise Performance",
            path: "exercises[?(@.id==235)].setList[0].time",
            unit: "seconds",
            description: "Cardiovascular test duration",
          },
        ],
      },
      {
        id: "body_composition",
        title: "Body Composition",
        fields: [
          {
            label: "BMI",
            path: "bodyCompositionData.BMI",
            unit: "kg/m²",
            classification: {
              ranges: [
                { min: 18.5, max: 24.9, label: "Normal", color: "#10B981" },
                { min: 25, max: 29.9, label: "Overweight", color: "#F59E0B" },
                { min: 30, max: 40, label: "Obese", color: "#EF4444" },
              ],
            },
          },
          {
            label: "Body Fat Percentage",
            path: "bodyCompositionData.BFC",
            unit: "%",
          },
          {
            label: "Lean Mass",
            path: "bodyCompositionData.LM",
            unit: "kg",
          },
        ],
      },
    ],
  },
};

// Utility functions for data extraction
export const dataUtils = {
  // Extract value using JSON path
  extractValue: (data, path) => {
    if (!path) return null;

    // Handle JSONPath-like queries for arrays
    if (path.includes("[?(@.")) {
      return dataUtils.extractComplexPath(data, path);
    }

    // Handle simple dot notation
    return path.split(".").reduce((obj, key) => {
      return obj && obj[key] !== undefined ? obj[key] : null;
    }, data);
  },

  // Handle complex JSONPath queries
  extractComplexPath: (data, path) => {
    try {
      // Simple implementation for the specific patterns in our config
      if (path.includes("exercises[?(@.id==")) {
        const match = path.match(/exercises\[\?\(@\.id==(\d+)\)\](.+)/);
        if (match) {
          const [, id, remainingPath] = match;
          const exercise = data.exercises?.find((ex) => ex.id == id);
          if (exercise && remainingPath) {
            return dataUtils.extractValue(exercise, remainingPath.substring(1)); // Remove leading dot
          }
          return exercise;
        }
      }
      return null;
    } catch (error) {
      console.error("Error extracting complex path:", error);
      return null;
    }
  },

  // Get classification for a value
  getClassification: (value, ranges) => {
    if (!ranges || value === null || value === undefined) return null;

    const numValue = parseFloat(value);
    if (isNaN(numValue)) return null;

    return ranges.find(
      (range) => numValue >= range.min && numValue <= range.max
    );
  },

  // Transform value based on transform type
  transformValue: (value, transform) => {
    if (!value || !transform) return value;

    switch (transform) {
      case "capitalize":
        return (
          value.toString().charAt(0).toUpperCase() + value.toString().slice(1)
        );
      case "uppercase":
        return value.toString().toUpperCase();
      case "lowercase":
        return value.toString().toLowerCase();
      default:
        return value;
    }
  },

  // Format value with unit
  formatValue: (value, unit, format, secondaryValue = null) => {
    if (value === null || value === undefined) return "N/A";

    if (format === "systolic/diastolic" && secondaryValue) {
      return `${value}/${secondaryValue} ${unit}`;
    }

    return `${value}${unit ? " " + unit : ""}`;
  },
};

// Main render function
export const renderHtmlReport = (sessionData) => {
  const assessmentId = sessionData.assessment_id;
  const config = reportConfigs[assessmentId];

  if (!config) {
    throw new Error(
      `No configuration found for assessment ID: ${assessmentId}`
    );
  }

  const renderSection = (section) => {
    const fieldsHtml = section.fields
      .map((field) => {
        const value = dataUtils.extractValue(sessionData, field.path);
        const secondaryValue = field.secondaryPath
          ? dataUtils.extractValue(sessionData, field.secondaryPath)
          : null;

        const transformedValue = dataUtils.transformValue(
          value,
          field.transform
        );
        const formattedValue = dataUtils.formatValue(
          transformedValue,
          field.unit,
          field.format,
          secondaryValue
        );

        const classification = field.classification
          ? dataUtils.getClassification(value, field.classification.ranges)
          : null;

        return `
        <div class="field-row">
          <div class="field-label">${field.label}:</div>
          <div class="field-value">
            <span class="value ${
              classification
                ? `status-${classification.label.toLowerCase()}`
                : ""
            }"
                  ${
                    classification
                      ? `style="color: ${classification.color}"`
                      : ""
                  }>
              ${formattedValue}
            </span>
            ${
              classification
                ? `<span class="classification">(${classification.label})</span>`
                : ""
            }
            ${
              field.description
                ? `<div class="field-description">${field.description}</div>`
                : ""
            }
          </div>
        </div>
      `;
      })
      .join("");

    // Handle custom content (like posture analysis tips)
    let customContentHtml = "";
    if (section.customContent?.type === "analysis_tips") {
      const analysisData = dataUtils.extractValue(
        sessionData,
        section.customContent.dataPath
      );
      if (Array.isArray(analysisData)) {
        customContentHtml = `
          <div class="custom-content">
            ${analysisData
              .map((item) => {
                if (item.analysisList || item.tipsList) {
                  return `
                  <div class="analysis-item">
                    <h4>${item.name}</h4>
                    ${
                      item.analysisList
                        ? `
                      <div class="analysis-points">
                        <strong>Analysis:</strong>
                        <ul>
                          ${item.analysisList
                            .map((point) => `<li>${point}</li>`)
                            .join("")}
                        </ul>
                      </div>
                    `
                        : ""
                    }
                    ${
                      item.tipsList
                        ? `
                      <div class="tips-points">
                        <strong>Recommendations:</strong>
                        <ul>
                          ${item.tipsList
                            .map((tip) => `<li>${tip}</li>`)
                            .join("")}
                        </ul>
                      </div>
                    `
                        : ""
                    }
                  </div>
                `;
                }
                return "";
              })
              .join("")}
          </div>
        `;
      }
    }

    return `
      <section class="report-section">
        <h2 class="section-title">${section.title}</h2>
        <div class="section-content">
          ${fieldsHtml}
          ${customContentHtml}
        </div>
      </section>
    `;
  };

  const sectionsHtml = config.sections.map(renderSection).join("");

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${config.title}</title>
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            
            body {
                font-family: 'Arial', sans-serif;
                line-height: 1.6;
                color: #333;
                background: #f8f9fa;
            }
            
            .report-container {
                max-width: 800px;
                margin: 0 auto;
                background: white;
                padding: 40px;
                box-shadow: 0 0 20px rgba(0,0,0,0.1);
            }
            
            .report-header {
                text-align: center;
                margin-bottom: 40px;
                padding-bottom: 20px;
                border-bottom: 3px solid #007bff;
            }
            
            .report-title {
                font-size: 28px;
                font-weight: bold;
                color: #007bff;
                margin-bottom: 10px;
            }
            
            .report-meta {
                color: #666;
                font-size: 14px;
            }
            
            .report-section {
                margin-bottom: 35px;
                border: 1px solid #e9ecef;
                border-radius: 8px;
                overflow: hidden;
            }
            
            .section-title {
                background: linear-gradient(135deg, #007bff, #0056b3);
                color: white;
                padding: 15px 20px;
                font-size: 18px;
                font-weight: 600;
                margin: 0;
            }
            
            .section-content {
                padding: 20px;
            }
            
            .field-row {
                display: flex;
                justify-content: space-between;
                align-items: flex-start;
                padding: 12px 0;
                border-bottom: 1px solid #f0f0f0;
            }
            
            .field-row:last-child {
                border-bottom: none;
            }
            
            .field-label {
                font-weight: 600;
                color: #495057;
                flex: 1;
                min-width: 200px;
            }
            
            .field-value {
                flex: 1;
                text-align: right;
            }
            
            .value {
                font-weight: bold;
                font-size: 16px;
            }
            
            .classification {
                font-size: 12px;
                margin-left: 8px;
                opacity: 0.8;
            }
            
            .field-description {
                font-size: 12px;
                color: #666;
                font-style: italic;
                margin-top: 4px;
            }
            
            .status-excellent { color: #10B981 !important; }
            .status-good { color: #F59E0B !important; }
            .status-fair { color: #EF4444 !important; }
            .status-poor { color: #DC2626 !important; }
            .status-normal { color: #10B981 !important; }
            .status-elevated { color: #F59E0B !important; }
            .status-high { color: #EF4444 !important; }
            .status-overweight { color: #F59E0B !important; }
            .status-obese { color: #EF4444 !important; }
            
            .custom-content {
                margin-top: 20px;
                padding-top: 20px;
                border-top: 1px solid #e9ecef;
            }
            
            .analysis-item {
                margin-bottom: 20px;
                padding: 15px;
                background: #f8f9fa;
                border-radius: 6px;
            }
            
            .analysis-item h4 {
                color: #007bff;
                margin-bottom: 10px;
            }
            
            .analysis-points, .tips-points {
                margin-bottom: 15px;
            }
            
            .analysis-points ul, .tips-points ul {
                margin-left: 20px;
            }
            
            .analysis-points li, .tips-points li {
                margin-bottom: 5px;
                color: #555;
            }
            
            @media print {
                body {
                    background: white;
                }
                .report-container {
                    box-shadow: none;
                    max-width: 100%;
                    margin: 0;
                    padding: 20px;
                }
            }
        </style>
    </head>
    <body>
        <div class="report-container">
            <div class="report-header">
                <h1 class="report-title">${config.title}</h1>
                <div class="report-meta">
                    Session ID: ${sessionData.session_id} | 
                    Generated: ${new Date().toLocaleString()} |
                    Assessment ID: ${sessionData.assessment_id}
                </div>
            </div>
            ${sectionsHtml}
        </div>
    </body>
    </html>
  `;
};
