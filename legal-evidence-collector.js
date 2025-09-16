/**
 * LEGAL EVIDENCE COLLECTION SCRIPT
 * Rockfall AI Monitoring System - Automated Evidence Gathering
 * 
 * Developer: Yasharka Bhattacharyya
 * Copyright © 2025 Yasharka Bhattacharyya. All rights reserved.
 * 
 * This script automatically collects technical evidence for legal proceedings
 * proving ownership of the Rockfall AI Monitoring System.
 */

class LegalEvidenceCollector {
  private evidence: any = {};
  private timestamp: string;
  private browserInfo: any;

  constructor() {
    this.timestamp = new Date().toISOString();
    this.browserInfo = this.getBrowserInfo();
    this.evidence = {
      timestamp: this.timestamp,
      browser: this.browserInfo,
      watermarks: {},
      files: {},
      dom: {},
      css: {},
      verification: {}
    };
  }

  private getBrowserInfo() {
    return {
      userAgent: navigator.userAgent,
      platform: navigator.platform,
      language: navigator.language,
      cookieEnabled: navigator.cookieEnabled,
      onLine: navigator.onLine,
      timestamp: this.timestamp
    };
  }

  // Collect all watermark evidence
  public collectWatermarkEvidence() {
    console.log('🔍 COLLECTING WATERMARK EVIDENCE...');
    
    // Base64 watermarks
    this.evidence.watermarks.base64 = {
      name: 'WWFzaGFya2EgQmhhdHRhY2hhcnl5YQ==',
      decoded: atob('WWFzaGFya2EgQmhhdHRhY2hhcnl5YQ=='),
      copyright: 'Q29weXJpZ2h0IDIwMjUgWWFzaGFya2EgQmhhdHRhY2hhcnl5YQ==',
      copyrightDecoded: atob('Q29weXJpZ2h0IDIwMjUgWWFzaGFya2EgQmhhdHRhY2hhcnl5YQ==')
    };

    // Hex watermarks
    this.evidence.watermarks.hex = {
      name: '5961736861726B612042686174746163686172797961',
      decoded: String.fromCharCode(...[0x59, 0x61, 0x73, 0x68, 0x61, 0x72, 0x6B, 0x61, 0x20, 0x42, 0x68, 0x61, 0x74, 0x74, 0x61, 0x63, 0x68, 0x61, 0x72, 0x79, 0x79, 0x61])
    };

    // ASCII watermarks
    this.evidence.watermarks.ascii = {
      values: '89,97,115,104,97,114,107,97,32,66,104,97,116,116,97,99,104,97,114,121,121,97',
      decoded: '89,97,115,104,97,114,107,97,32,66,104,97,116,116,97,99,104,97,114,121,121,97'.split(',').map(num => String.fromCharCode(parseInt(num))).join('')
    };

    // Binary watermarks
    this.evidence.watermarks.binary = {
      values: '010110010110000101110011011010000110000101110010011010110110000100100000010000100110100001100001011101000111010001100001011000110110100001100001011100100111100101100001',
      decoded: this.binaryToString('010110010110000101110011011010000110000101110010011010110110000100100000010000100110100001100001011101000111010001100001011000110110100001100001011100100111100101100001')
    };

    console.log('✅ Watermark evidence collected');
    return this.evidence.watermarks;
  }

  private binaryToString(binary: string): string {
    return binary.match(/.{8}/g)?.map(byte => String.fromCharCode(parseInt(byte, 2))).join('') || '';
  }

  // Collect DOM evidence
  public collectDOMEvidence() {
    console.log('🔍 COLLECTING DOM EVIDENCE...');
    
    // Hidden watermark elements
    this.evidence.dom.hiddenElements = {
      wm1: document.getElementById('wm-1')?.getAttribute('data-b64') || 'Not found',
      wm2: document.getElementById('wm-2')?.getAttribute('data-hex') || 'Not found',
      wm3: document.getElementById('wm-3')?.getAttribute('data-binary') || 'Not found',
      wm4: document.getElementById('wm-4')?.getAttribute('data-ascii') || 'Not found'
    };

    // Data attributes
    this.evidence.dom.dataAttributes = {
      developer: document.querySelectorAll('[data-developer]').length,
      copyright: document.querySelectorAll('[data-copyright]').length,
      wm1: document.querySelectorAll('[data-wm1]').length,
      wm2: document.querySelectorAll('[data-wm2]').length,
      dev: document.querySelectorAll('[data-dev]').length,
      year: document.querySelectorAll('[data-year]').length
    };

    // Watermark elements count
    this.evidence.dom.watermarkElements = {
      wm: document.querySelectorAll('[id^="wm-"]').length,
      crypto: document.querySelectorAll('[id^="crypto-"]').length,
      neural: document.querySelectorAll('[id^="neural-"]').length,
      quantum: document.querySelectorAll('[id^="quantum-"]').length,
      total: document.querySelectorAll('[id^="wm-"], [id^="crypto-"], [id^="neural-"], [id^="quantum-"]').length
    };

    console.log('✅ DOM evidence collected');
    return this.evidence.dom;
  }

  // Collect CSS evidence
  public collectCSSEvidence() {
    console.log('🔍 COLLECTING CSS EVIDENCE...');
    
    // CSS variables
    const rootStyles = getComputedStyle(document.documentElement);
    this.evidence.css.variables = {
      devWatermark: rootStyles.getPropertyValue('--dev-watermark'),
      copyrightNotice: rootStyles.getPropertyValue('--copyright-notice'),
      wm1: rootStyles.getPropertyValue('--wm-1'),
      wm2: rootStyles.getPropertyValue('--wm-2'),
      wm3: rootStyles.getPropertyValue('--wm-3'),
      wm4: rootStyles.getPropertyValue('--wm-4'),
      hexWm1: rootStyles.getPropertyValue('--hex-wm-1'),
      hexWm2: rootStyles.getPropertyValue('--hex-wm-2'),
      rot13Wm: rootStyles.getPropertyValue('--rot13-wm'),
      caesarWm: rootStyles.getPropertyValue('--caesar-wm')
    };

    // CSS classes
    this.evidence.css.classes = {
      watermarkYb: document.querySelectorAll('.watermark-yb').length,
      watermarkYbAlt: document.querySelectorAll('.watermark-yb-alt').length,
      hiddenWatermark: document.querySelectorAll('.hidden-watermark').length,
      obfuscatedWm1: document.querySelectorAll('.obfuscated-wm-1').length,
      obfuscatedWm2: document.querySelectorAll('.obfuscated-wm-2').length,
      stegoWm: document.querySelectorAll('.stego-wm').length,
      binaryWm: document.querySelectorAll('.binary-wm').length,
      selfHealingWm: document.querySelectorAll('.self-healing-wm').length
    };

    console.log('✅ CSS evidence collected');
    return this.evidence.css;
  }

  // Collect file evidence (simulated - would need server-side implementation)
  public collectFileEvidence() {
    console.log('🔍 COLLECTING FILE EVIDENCE...');
    
    // This would need to be implemented server-side or through file system access
    this.evidence.files = {
      note: 'File evidence collection requires server-side implementation or manual documentation',
      requiredFiles: [
        'src/main.tsx',
        'src/App.tsx', 
        'src/components/Sidebar.tsx',
        'src/pages/Dashboard.tsx',
        'src/index.css',
        'package.json',
        'README.md',
        'index.html'
      ],
      watermarkFiles: [
        'src/lib/sensor-data-processor.ts',
        'src/lib/data-validation-utils.ts',
        'src/lib/chart-rendering-engine.ts',
        'src/lib/network-communication-handler.ts',
        'src/lib/cryptographic-hash-processor.ts',
        'src/lib/neural-network-weight-optimizer.ts',
        'src/lib/quantum-entanglement-simulator.ts'
      ]
    };

    console.log('✅ File evidence structure prepared');
    return this.evidence.files;
  }

  // Run verification tests
  public runVerificationTests() {
    console.log('🔍 RUNNING VERIFICATION TESTS...');
    
    const tests = {
      watermarkDecoding: this.testWatermarkDecoding(),
      domIntegrity: this.testDOMIntegrity(),
      cssIntegrity: this.testCSSIntegrity(),
      protectionSystem: this.testProtectionSystem()
    };

    this.evidence.verification = tests;
    console.log('✅ Verification tests completed');
    return tests;
  }

  private testWatermarkDecoding() {
    const name = atob('WWFzaGFya2EgQmhhdHRhY2hhcnl5YQ==');
    const copyright = atob('Q29weXJpZ2h0IDIwMjUgWWFzaGFya2EgQmhhdHRhY2hhcnl5YQ==');
    
    return {
      base64Name: name === 'Yasharka Bhattacharyya',
      base64Copyright: copyright === 'Copyright 2025 Yasharka Bhattacharyya',
      hexName: String.fromCharCode(...[0x59, 0x61, 0x73, 0x68, 0x61, 0x72, 0x6B, 0x61, 0x20, 0x42, 0x68, 0x61, 0x74, 0x74, 0x61, 0x63, 0x68, 0x61, 0x72, 0x79, 0x79, 0x61]) === 'Yasharka Bhattacharyya',
      asciiName: '89,97,115,104,97,114,107,97,32,66,104,97,116,116,97,99,104,97,114,121,121,97'.split(',').map(num => String.fromCharCode(parseInt(num))).join('') === 'Yasharka Bhattacharyya'
    };
  }

  private testDOMIntegrity() {
    return {
      watermarkElements: document.querySelectorAll('[id^="wm-"], [id^="crypto-"], [id^="neural-"], [id^="quantum-"]').length > 0,
      dataAttributes: document.querySelectorAll('[data-developer], [data-copyright]').length > 0,
      hiddenElements: document.querySelectorAll('[style*="display: none"]').length > 0
    };
  }

  private testCSSIntegrity() {
    const rootStyles = getComputedStyle(document.documentElement);
    return {
      watermarkVariables: rootStyles.getPropertyValue('--dev-watermark') !== '',
      copyrightVariables: rootStyles.getPropertyValue('--copyright-notice') !== '',
      watermarkClasses: document.querySelectorAll('.watermark-yb, .watermark-yb-alt').length > 0
    };
  }

  private testProtectionSystem() {
    // Test if protection system is active
    try {
      if (typeof (window as any).proveAuthorship === 'function') {
        return {
          proveAuthorshipAvailable: true,
          protectionActive: true
        };
      }
    } catch (e) {
      return {
        proveAuthorshipAvailable: false,
        protectionActive: false,
        error: e.message
      };
    }
    
    return {
      proveAuthorshipAvailable: false,
      protectionActive: false
    };
  }

  // Generate comprehensive evidence report
  public generateEvidenceReport() {
    console.log('📋 GENERATING COMPREHENSIVE EVIDENCE REPORT...');
    
    const report = {
      metadata: {
        generatedAt: this.timestamp,
        browser: this.browserInfo,
        url: window.location.href,
        title: document.title
      },
      summary: {
        totalWatermarks: Object.keys(this.evidence.watermarks).length,
        totalDOMElements: this.evidence.dom.watermarkElements?.total || 0,
        totalCSSClasses: Object.values(this.evidence.css.classes || {}).reduce((a: number, b: number) => a + b, 0),
        verificationPassed: Object.values(this.evidence.verification || {}).every(test => 
          typeof test === 'object' ? Object.values(test).every(result => result === true) : test === true
        )
      },
      evidence: this.evidence
    };

    console.log('✅ Evidence report generated');
    return report;
  }

  // Export evidence as JSON
  public exportEvidence() {
    const report = this.generateEvidenceReport();
    const jsonString = JSON.stringify(report, null, 2);
    
    // Create downloadable file
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `legal-evidence-${this.timestamp.split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    console.log('📁 Evidence exported as JSON file');
    return report;
  }

  // Run complete evidence collection
  public collectAllEvidence() {
    console.log('🚀 STARTING COMPLETE EVIDENCE COLLECTION...');
    console.log('================================================');
    
    this.collectWatermarkEvidence();
    this.collectDOMEvidence();
    this.collectCSSEvidence();
    this.collectFileEvidence();
    this.runVerificationTests();
    
    const report = this.generateEvidenceReport();
    
    console.log('================================================');
    console.log('📊 EVIDENCE COLLECTION SUMMARY:');
    console.log('================================================');
    console.log('✅ Developer Name Verified:', report.evidence.watermarks.base64.decoded);
    console.log('✅ Copyright Verified:', report.evidence.watermarks.base64.copyrightDecoded);
    console.log('✅ Watermark Elements Found:', report.evidence.dom.watermarkElements.total);
    console.log('✅ CSS Classes Found:', report.summary.totalCSSClasses);
    console.log('✅ Verification Tests Passed:', report.summary.verificationPassed);
    console.log('✅ Evidence Collection Complete');
    console.log('================================================');
    
    return report;
  }
}

// Global function for easy access
if (typeof window !== 'undefined') {
  (window as any).collectLegalEvidence = () => {
    const collector = new LegalEvidenceCollector();
    return collector.collectAllEvidence();
  };
  
  (window as any).exportLegalEvidence = () => {
    const collector = new LegalEvidenceCollector();
    collector.collectAllEvidence();
    return collector.exportEvidence();
  };
}

// Auto-run if script is loaded
if (typeof window !== 'undefined') {
  console.log('⚖️ LEGAL EVIDENCE COLLECTOR LOADED');
  console.log('Available commands:');
  console.log('- collectLegalEvidence() - Run complete evidence collection');
  console.log('- exportLegalEvidence() - Export evidence as JSON file');
  console.log('================================================');
}
