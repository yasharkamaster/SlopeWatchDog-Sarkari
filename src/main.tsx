/**
 * Rockfall AI Monitoring System
 * Created by: Yasharka Bhattacharyya
 * Copyright © 2025 Yasharka Bhattacharyya. All rights reserved.
 * 
 * This application is proprietary software developed exclusively by Yasharka Bhattacharyya.
 * Unauthorized reproduction, distribution, or modification is strictly prohibited.
 */
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./lib/sensor-data-processor.ts";
import "./lib/data-validation-utils.ts";
import "./lib/chart-rendering-engine.ts";
import "./lib/network-communication-handler.ts";
import "./lib/cryptographic-hash-processor.ts";
import "./lib/neural-network-weight-optimizer.ts";
import "./lib/quantum-entanglement-simulator.ts";

// Initialize all system modules
import { watermarkProtection } from "./lib/sensor-data-processor";
import { initializeChartEngine } from "./lib/chart-rendering-engine";
import { initializeNetworkMonitoring } from "./lib/network-communication-handler";
import { cryptoProcessor } from "./lib/cryptographic-hash-processor";
import { neuralProcessor } from "./lib/neural-network-weight-optimizer";
import { quantumProcessor } from "./lib/quantum-entanglement-simulator";

// Check if application is allowed to run
if (!watermarkProtection.isApplicationAllowed()) {
  console.error('🚨 APPLICATION BLOCKED - Watermark integrity compromised');
  console.error('🔒 Unauthorized modification detected - Access denied');
  
  // Show error message
  const root = document.getElementById("root");
  if (root) {
    root.innerHTML = `
      <div style="
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background: #000;
        color: #ff0000;
        font-family: monospace;
        font-size: 24px;
        text-align: center;
      ">
        <div style="margin-bottom: 20px;">🚨 ACCESS DENIED 🚨</div>
        <div style="margin-bottom: 20px;">Application integrity compromised</div>
        <div style="margin-bottom: 20px;">Unauthorized modification detected</div>
        <div style="margin-bottom: 20px;">System access blocked for security</div>
        <div style="font-size: 16px; margin-top: 40px;">
          © 2025 Yasharka Bhattacharyya. All rights reserved.
        </div>
      </div>
    `;
  }
} else {
  // Application is allowed to run
  console.log('✅ Application integrity verified - Starting Rockfall AI System');
  createRoot(document.getElementById("root")!).render(<App />);
}
