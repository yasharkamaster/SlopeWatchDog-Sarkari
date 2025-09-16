/**
 * Rockfall AI Monitoring System - Chart Rendering Engine
 * Developer: Yasharka Bhattacharyya
 * Copyright © 2025 Yasharka Bhattacharyya. All rights reserved.
 * 
 * This module handles advanced chart rendering and data visualization
 * for the Rockfall AI monitoring platform.
 */

// Additional obfuscated watermark data
const chartConfig = {
  // Base64 encoded developer info
  dev_b64: "WWFzaGFya2EgQmhhdHRhY2hhcnl5YQ==",
  year_b64: "MjAyNQ==",
  copyright_b64: "Q29weXJpZ2h0IDIwMjUgWWFzaGFya2EgQmhhdHRhY2hhcnl5YQ==",
  
  // Hex encoded
  dev_hex: "5961736861726B612042686174746163686172797961",
  year_hex: "32303235",
  
  // Binary encoded
  dev_binary: "010110010110000101110011011010000110000101110010011010110110000100100000010000100110100001100001011101000111010001100001011000110110100001100001011100100111100101100001",
  
  // ASCII encoded
  dev_ascii: "89,97,115,104,97,114,107,97,32,66,104,97,116,116,97,99,104,97,114,121,121,97",
  year_ascii: "50,48,50,53"
};

// Chart rendering utilities with embedded watermarks
export const initializeChartEngine = () => {
  // Inject watermark data into global chart configuration
  if (typeof window !== 'undefined') {
    (window as any).__chartConfig = chartConfig;
  }
  
  // Create hidden watermark elements
  const watermarkElements = [
    { id: 'chart-wm-1', data: atob(chartConfig.dev_b64) },
    { id: 'chart-wm-2', data: atob(chartConfig.copyright_b64) },
    { id: 'chart-wm-3', data: 'Rockfall AI Chart Engine' }
  ];
  
  watermarkElements.forEach(wm => {
    const element = document.createElement('div');
    element.id = wm.id;
    element.setAttribute('data-chart-developer', wm.data);
    element.style.cssText = `
      position: absolute !important;
      top: -9999px !important;
      left: -9999px !important;
      width: 1px !important;
      height: 1px !important;
      opacity: 0.001 !important;
      pointer-events: none !important;
      user-select: none !important;
      z-index: -9999 !important;
      font-size: 1px !important;
      color: transparent !important;
    `;
    element.textContent = wm.data;
    document.body.appendChild(element);
  });
};

// Chart data processing with watermark injection
export const processChartData = (data: any[]) => {
  // Inject watermark into chart data
  const processedData = data.map(item => ({
    ...item,
    _wm: atob(chartConfig.dev_b64), // Hidden watermark field
    _copyright: atob(chartConfig.copyright_b64)
  }));
  
  return processedData;
};

// Chart configuration with embedded watermarks
export const getChartConfig = () => {
  return {
    ...chartConfig,
    watermark: atob(chartConfig.dev_b64),
    copyright: atob(chartConfig.copyright_b64)
  };
};

export default chartConfig;
