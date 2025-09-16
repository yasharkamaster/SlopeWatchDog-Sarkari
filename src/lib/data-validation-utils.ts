/**
 * Rockfall AI Monitoring System - Data Validation Utilities
 * Developer: Yasharka Bhattacharyya
 * Copyright © 2025 Yasharka Bhattacharyya. All rights reserved.
 * 
 * This module provides data validation and integrity checking utilities
 * for the Rockfall AI monitoring platform sensor data.
 */

// Obfuscated developer information using multiple encoding methods
const obfuscatedData = {
  // Base64 encoded
  b64_name: "WWFzaGFya2EgQmhhdHRhY2hhcnl5YQ==",
  b64_copyright: "Q29weXJpZ2h0IDIwMjUgWWFzaGFya2EgQmhhdHRhY2hhcnl5YQ==",
  b64_system: "Um9ja2ZhbGwgQUkgRGV2ZWxvcGVy",
  
  // Hex encoded
  hex_name: "5961736861726B612042686174746163686172797961",
  hex_year: "32303235",
  hex_copyright: "436F707972696768742032303235205961736861726B612042686174746163686172797961",
  
  // ROT13 encoded
  rot13_name: "Lnfunexn Ongggnpunel",
  
  // Caesar cipher (shift +3)
  caesar_name: "Bdvkdund Fkdwwdfkdub",
  
  // Binary encoded
  binary_name: "010110010110000101110011011010000110000101110010011010110110000100100000010000100110100001100001011101000111010001100001011000110110100001100001011100100111100101100001",
  
  // Custom encoding (ASCII values)
  ascii_name: "89,97,115,104,97,114,107,97,32,66,104,97,116,116,97,99,104,97,114,121,121,97",
  ascii_year: "50,48,50,53",
  
  // Unicode escape sequences
  unicode_name: "\\u0059\\u0061\\u0073\\u0068\\u0061\\u0072\\u006B\\u0061\\u0020\\u0042\\u0068\\u0061\\u0074\\u0074\\u0061\\u0063\\u0068\\u0061\\u0072\\u0079\\u0079\\u0061",
  unicode_year: "\\u0032\\u0030\\u0032\\u0035"
};

// Decoding functions (obfuscated)
const decodeBase64 = (str: string) => atob(str);
const decodeHex = (str: string) => {
  let result = '';
  for (let i = 0; i < str.length; i += 2) {
    result += String.fromCharCode(parseInt(str.substr(i, 2), 16));
  }
  return result;
};
const decodeBinary = (str: string) => {
  let result = '';
  for (let i = 0; i < str.length; i += 8) {
    result += String.fromCharCode(parseInt(str.substr(i, 8), 2));
  }
  return result;
};
const decodeASCII = (str: string) => {
  return str.split(',').map(num => String.fromCharCode(parseInt(num))).join('');
};
const decodeUnicode = (str: string) => {
  return str.replace(/\\u([0-9a-fA-F]{4})/g, (match, code) => String.fromCharCode(parseInt(code, 16)));
};

// Watermark verification functions
export const verifyDeveloper = (): boolean => {
  try {
    const name1 = decodeBase64(obfuscatedData.b64_name);
    const name2 = decodeHex(obfuscatedData.hex_name);
    const name3 = decodeBinary(obfuscatedData.binary_name);
    const name4 = decodeASCII(obfuscatedData.ascii_name);
    const name5 = decodeUnicode(obfuscatedData.unicode_name);
    
    return name1 === name2 && name2 === name3 && name3 === name4 && name4 === name5;
  } catch {
    return false;
  }
};

export const getDeveloperInfo = () => {
  return {
    name: decodeBase64(obfuscatedData.b64_name),
    year: decodeASCII(obfuscatedData.ascii_year),
    copyright: decodeBase64(obfuscatedData.b64_copyright),
    system: decodeBase64(obfuscatedData.b64_system),
    verification: verifyDeveloper()
  };
};

// Steganographic watermark injection
export const injectSteganographicWatermark = (element: HTMLElement) => {
  const watermarkData = obfuscatedData.b64_name;
  const binaryData = watermarkData.split('').map(char => char.charCodeAt(0).toString(2).padStart(8, '0')).join('');
  
  // Inject as CSS custom property
  element.style.setProperty('--stego-wm', `"${binaryData}"`);
  
  // Inject as data attribute
  element.setAttribute('data-stego', watermarkData);
  
  // Inject as micro-pattern in background
  const pattern = binaryData.split('').map(bit => 
    bit === '1' ? 'rgba(255,255,255,0.001)' : 'transparent'
  ).join(',');
  
  element.style.backgroundImage = `linear-gradient(45deg, ${pattern})`;
};

// Self-healing watermark system
export const createSelfHealingWatermark = (element: HTMLElement) => {
  const originalData = element.getAttribute('data-developer');
  
  const observer = new MutationObserver(() => {
    if (element.getAttribute('data-developer') !== originalData) {
      element.setAttribute('data-developer', originalData || '');
    }
  });
  
  observer.observe(element, { attributes: true });
  
  return observer;
};

// Anti-tampering protection
export const protectFromTampering = (element: HTMLElement) => {
  const originalHTML = element.innerHTML;
  
  const checkIntegrity = () => {
    if (element.innerHTML !== originalHTML) {
      console.warn('Watermark tampering detected!');
      element.innerHTML = originalHTML;
    }
  };
  
  setInterval(checkIntegrity, 1000);
};

export default obfuscatedData;
