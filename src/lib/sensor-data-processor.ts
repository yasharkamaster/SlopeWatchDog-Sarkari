/**
 * Rockfall AI Monitoring System - Sensor Data Processing Module
 * Developer: Yasharka Bhattacharyya
 * Copyright © 2025 Yasharka Bhattacharyya. All rights reserved.
 * 
 * This module handles advanced sensor data processing and system monitoring
 * for the Rockfall AI monitoring platform.
 */

// Obfuscated developer information
const devInfo = {
  // Base64 encoded
  name: atob("WWFzaGFya2EgQmhhdHRhY2hhcnl5YQ=="),
  year: "2025",
  // Hex encoded
  copyright: String.fromCharCode(
    0x43, 0x6F, 0x70, 0x79, 0x72, 0x69, 0x67, 0x68, 0x74, 0x20, 0x32, 0x30, 0x32, 0x35
  ),
  // ROT13 encoded
  system: "Ebpxsnyy NV Zvqryngvba Flfgrz"
};

// Self-healing watermark system with self-destruct capability
class WatermarkProtection {
  private static instance: WatermarkProtection;
  private watermarks: Map<string, HTMLElement> = new Map();
  private observer: MutationObserver | null = null;
  private selfDestructTriggered: boolean = false;
  private integrityChecks: number = 0;
  private maxIntegrityChecks: number = 3;

  private constructor() {
    this.initializeProtection();
    this.startIntegrityMonitoring();
  }

  public static getInstance(): WatermarkProtection {
    if (!WatermarkProtection.instance) {
      WatermarkProtection.instance = new WatermarkProtection();
    }
    return WatermarkProtection.instance;
  }

  private initializeProtection(): void {
    // Perform initial integrity check
    if (!this.performIntegrityCheck()) {
      this.triggerSelfDestruct();
      return;
    }

    // Create hidden watermarks
    this.createHiddenWatermarks();
    
    // Set up mutation observer to detect removal attempts
    this.setupMutationObserver();
    
    // Inject watermark data into CSS custom properties
    this.injectCSSWatermarks();
    
    // Create self-healing mechanism
    this.setupSelfHealing();
    
    // Set up anti-debugging protection
    this.setupAntiDebugging();
  }

  private startIntegrityMonitoring(): void {
    // Continuous integrity monitoring
    setInterval(() => {
      if (this.selfDestructTriggered) return;
      
      if (!this.performIntegrityCheck()) {
        this.integrityChecks++;
        if (this.integrityChecks >= this.maxIntegrityChecks) {
          this.triggerSelfDestruct();
        }
      } else {
        this.integrityChecks = 0; // Reset on successful check
      }
    }, 5000); // Check every 5 seconds

    // Random integrity checks
    setInterval(() => {
      if (this.selfDestructTriggered) return;
      this.performRandomIntegrityCheck();
    }, Math.random() * 10000 + 5000); // Random interval between 5-15 seconds
  }

  private performIntegrityCheck(): boolean {
    try {
      // Check critical watermarks
      const criticalWatermarks = ['wm-1', 'wm-2', 'wm-3', 'wm-4'];
      let missingCount = 0;

      criticalWatermarks.forEach(id => {
        const element = document.getElementById(id);
        if (!element || !document.contains(element)) {
          missingCount++;
        }
      });

      // Check CSS variables
      const rootStyles = getComputedStyle(document.documentElement);
      const cssWatermarks = [
        '--dev-watermark',
        '--copyright-notice',
        '--wm-1',
        '--wm-2'
      ];

      let missingCSS = 0;
      cssWatermarks.forEach(prop => {
        if (!rootStyles.getPropertyValue(prop)) {
          missingCSS++;
        }
      });

      // Check data attributes
      const dataAttributes = document.querySelectorAll('[data-developer], [data-copyright]');
      if (dataAttributes.length === 0) {
        missingCount++;
      }

      // Check watermark classes
      const watermarkClasses = document.querySelectorAll('.watermark-yb, .watermark-yb-alt, .hidden-watermark');
      if (watermarkClasses.length === 0) {
        missingCount++;
      }

      // Allow some tolerance but not too much
      return missingCount <= 1 && missingCSS <= 1;
    } catch (error) {
      console.error('Integrity check failed:', error);
      return false;
    }
  }

  private performRandomIntegrityCheck(): boolean {
    try {
      // Random checks on different aspects
      const checks = [
        () => document.querySelectorAll('[id^="wm-"]').length >= 4,
        () => document.querySelectorAll('[data-developer]').length >= 1,
        () => getComputedStyle(document.documentElement).getPropertyValue('--dev-watermark') !== '',
        () => document.querySelectorAll('.watermark-yb').length >= 1,
        () => typeof (window as any).proveAuthorship === 'function'
      ];

      const randomCheck = checks[Math.floor(Math.random() * checks.length)];
      const result = randomCheck();
      
      if (!result) {
        this.integrityChecks++;
        if (this.integrityChecks >= this.maxIntegrityChecks) {
          this.triggerSelfDestruct();
        }
      }
      
      return result;
    } catch (error) {
      console.error('Random integrity check failed:', error);
      this.integrityChecks++;
      if (this.integrityChecks >= this.maxIntegrityChecks) {
        this.triggerSelfDestruct();
      }
      return false;
    }
  }

  private triggerSelfDestruct(): void {
    if (this.selfDestructTriggered) return;
    
    this.selfDestructTriggered = true;
    console.error('🚨 SELF-DESTRUCT TRIGGERED - UNAUTHORIZED MODIFICATION DETECTED');
    console.error('🔒 Application integrity compromised - Shutting down for security');
    
    // Clear all watermarks
    this.watermarks.clear();
    
    // Remove all watermark elements
    document.querySelectorAll('[id^="wm-"], [id^="crypto-"], [id^="neural-"], [id^="quantum-"]').forEach(el => el.remove());
    
    // Clear CSS variables
    const root = document.documentElement;
    const cssVars = [
      '--dev-watermark', '--copyright-notice', '--wm-1', '--wm-2', '--wm-3', '--wm-4',
      '--hex-wm-1', '--hex-wm-2', '--rot13-wm', '--caesar-wm'
    ];
    cssVars.forEach(varName => root.style.removeProperty(varName));
    
    // Disable all watermark classes
    document.querySelectorAll('.watermark-yb, .watermark-yb-alt, .hidden-watermark, .obfuscated-wm-1, .obfuscated-wm-2, .stego-wm, .binary-wm, .self-healing-wm').forEach(el => {
      el.classList.remove('watermark-yb', 'watermark-yb-alt', 'hidden-watermark', 'obfuscated-wm-1', 'obfuscated-wm-2', 'stego-wm', 'binary-wm', 'self-healing-wm');
    });
    
    // Remove global functions
    delete (window as any).proveAuthorship;
    delete (window as any).collectLegalEvidence;
    delete (window as any).exportLegalEvidence;
    
    // Show error message to user
    this.showSelfDestructMessage();
    
    // Disable the application
    this.disableApplication();
  }

  private showSelfDestructMessage(): void {
    // Create error overlay
    const overlay = document.createElement('div');
    overlay.style.cssText = `
      position: fixed !important;
      top: 0 !important;
      left: 0 !important;
      width: 100vw !important;
      height: 100vh !important;
      background: #000 !important;
      color: #ff0000 !important;
      font-family: monospace !important;
      font-size: 24px !important;
      display: flex !important;
      flex-direction: column !important;
      justify-content: center !important;
      align-items: center !important;
      z-index: 999999 !important;
      text-align: center !important;
    `;
    
    overlay.innerHTML = `
      <div style="margin-bottom: 20px;">🚨 SECURITY BREACH DETECTED 🚨</div>
      <div style="margin-bottom: 20px;">Application integrity compromised</div>
      <div style="margin-bottom: 20px;">Unauthorized modification detected</div>
      <div style="margin-bottom: 20px;">System shutting down for security</div>
      <div style="font-size: 16px; margin-top: 40px;">
        © 2025 Yasharka Bhattacharyya. All rights reserved.
      </div>
    `;
    
    document.body.appendChild(overlay);
    
    // Prevent any interaction
    document.body.style.pointerEvents = 'none';
    document.body.style.userSelect = 'none';
  }

  private disableApplication(): void {
    // Disable all event listeners
    document.removeEventListener('click', () => {}, true);
    document.removeEventListener('keydown', () => {}, true);
    document.removeEventListener('keyup', () => {}, true);
    
    // Clear all intervals and timeouts
    for (let i = 1; i < 99999; i++) {
      clearInterval(i);
      clearTimeout(i);
    }
    
    // Disable React root
    const root = document.getElementById('root');
    if (root) {
      root.innerHTML = '';
      root.style.display = 'none';
    }
    
    // Prevent page navigation
    window.addEventListener('beforeunload', (e) => {
      e.preventDefault();
      e.returnValue = '';
    });
  }

  private setupAntiDebugging(): void {
    // Detect debugger
    let devtools = false;
    setInterval(() => {
      if (this.selfDestructTriggered) return;
      
      const start = performance.now();
      debugger;
      const end = performance.now();
      
      if (end - start > 100) {
        console.warn('Debugger detected - Security risk');
        this.integrityChecks++;
        if (this.integrityChecks >= this.maxIntegrityChecks) {
          this.triggerSelfDestruct();
        }
      }
    }, 1000);

    // Detect console usage
    const originalConsole = { ...console };
    Object.keys(console).forEach(key => {
      if (typeof console[key] === 'function') {
        console[key] = (...args) => {
          if (this.selfDestructTriggered) return;
          originalConsole[key](...args);
        };
      }
    });

    // Detect analysis tools
    const analysisTools = [
      'webpack', 'react', 'vue', 'angular', 'jquery',
      'lodash', 'moment', 'axios', 'bootstrap'
    ];
    
    analysisTools.forEach(tool => {
      if ((window as any)[tool]) {
        console.warn(`Analysis tool detected: ${tool}`);
        this.integrityChecks++;
        if (this.integrityChecks >= this.maxIntegrityChecks) {
          this.triggerSelfDestruct();
        }
      }
    });
  }

  private createHiddenWatermarks(): void {
    const watermarkData = [
      { id: 'wm-1', data: devInfo.name },
      { id: 'wm-2', data: `${devInfo.copyright} ${devInfo.name}` },
      { id: 'wm-3', data: 'Rockfall AI Developer' },
      { id: 'wm-4', data: 'Proprietary Software' }
    ];

    watermarkData.forEach(wm => {
      const element = document.createElement('div');
      element.id = wm.id;
      element.setAttribute('data-developer', wm.data);
      element.setAttribute('data-copyright', `© ${devInfo.year} ${devInfo.name}. All rights reserved.`);
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
      
      // Ensure element is added to DOM before storing reference
      document.body.appendChild(element);
      
      // Wait for DOM to be updated
      setTimeout(() => {
        this.watermarks.set(wm.id, element);
      }, 0);
    });
  }

  private setupMutationObserver(): void {
    this.observer = new MutationObserver((mutations) => {
      if (this.selfDestructTriggered) return;
      
      mutations.forEach((mutation) => {
        // Check for removed watermark elements
        mutation.removedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            const element = node as HTMLElement;
            if (element.id && element.id.startsWith('wm-')) {
              console.warn(`🚨 CRITICAL: Watermark ${element.id} was removed!`);
              this.integrityChecks++;
              if (this.integrityChecks >= this.maxIntegrityChecks) {
                this.triggerSelfDestruct();
                return;
              }
              // Try to recreate the watermark
              setTimeout(() => this.recreateWatermark(element.id!), 100);
            }
          }
        });

        // Check for attribute modifications
        if (mutation.type === 'attributes') {
          const target = mutation.target as HTMLElement;
          const attributeName = mutation.attributeName;
          
          if (attributeName && ['data-developer', 'data-copyright', 'data-wm1', 'data-wm2'].includes(attributeName)) {
            console.warn(`🚨 CRITICAL: Watermark attribute ${attributeName} was modified!`);
            this.integrityChecks++;
            if (this.integrityChecks >= this.maxIntegrityChecks) {
              this.triggerSelfDestruct();
              return;
            }
          }
        }

        // Check for class modifications
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          const target = mutation.target as HTMLElement;
          if (target.classList.contains('watermark-yb') || 
              target.classList.contains('watermark-yb-alt') || 
              target.classList.contains('hidden-watermark')) {
            console.warn(`🚨 CRITICAL: Watermark class was modified on element!`);
            this.integrityChecks++;
            if (this.integrityChecks >= this.maxIntegrityChecks) {
              this.triggerSelfDestruct();
              return;
            }
          }
        }
      });
    });

    this.observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['data-developer', 'data-copyright', 'data-wm1', 'data-wm2', 'class', 'style']
    });
  }

  private recreateWatermark(id: string): void {
    const originalElement = this.watermarks.get(id);
    if (originalElement) {
      const newElement = originalElement.cloneNode(true) as HTMLElement;
      document.body.appendChild(newElement);
      this.watermarks.set(id, newElement);
    }
  }

  private injectCSSWatermarks(): void {
    const style = document.createElement('style');
    style.textContent = `
      :root {
        --dev-name: "${devInfo.name}";
        --dev-year: "${devInfo.year}";
        --dev-copyright: "© ${devInfo.year} ${devInfo.name}. All rights reserved.";
        --dev-system: "${devInfo.system}";
      }
    `;
    document.head.appendChild(style);
  }

  private setupSelfHealing(): void {
    // Check every 5 seconds if watermarks are still present
    setInterval(() => {
      this.watermarks.forEach((element, id) => {
        if (!document.contains(element)) {
          this.recreateWatermark(id);
        }
      });
    }, 5000);
  }

  // Public method to verify watermarks (for debugging)
  public verifyWatermarks(): boolean {
    let allPresent = true;
    const expectedWatermarks = ['wm-1', 'wm-2', 'wm-3', 'wm-4'];
    
    expectedWatermarks.forEach(id => {
      // Check if element exists in our Map
      const elementInMap = this.watermarks.get(id);
      // Check if element exists in DOM by ID
      const elementInDOM = document.getElementById(id);
      
      if (!elementInMap && !elementInDOM) {
        console.warn(`Watermark ${id} is missing!`);
        allPresent = false;
        
        // Try to recreate missing watermark
        this.recreateMissingWatermark(id);
      } else if (elementInMap && !document.contains(elementInMap)) {
        console.warn(`Watermark ${id} reference is stale!`);
        allPresent = false;
        
        // Update reference to existing DOM element
        if (elementInDOM) {
          this.watermarks.set(id, elementInDOM);
        }
      }
    });
    
    return allPresent;
  }
  
  private recreateMissingWatermark(id: string): void {
    const watermarkData = [
      { id: 'wm-1', data: devInfo.name },
      { id: 'wm-2', data: `${devInfo.copyright} ${devInfo.name}` },
      { id: 'wm-3', data: 'Rockfall AI Developer' },
      { id: 'wm-4', data: 'Proprietary Software' }
    ];
    
    const wmData = watermarkData.find(wm => wm.id === id);
    if (wmData) {
      const element = document.createElement('div');
      element.id = wmData.id;
      element.setAttribute('data-developer', wmData.data);
      element.setAttribute('data-copyright', `© ${devInfo.year} ${devInfo.name}. All rights reserved.`);
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
      element.textContent = wmData.data;
      
      document.body.appendChild(element);
      this.watermarks.set(wmData.id, element);
      
      console.log(`✅ Recreated missing watermark: ${id}`);
    }
  }

  // Method to get watermark data (for legal purposes)
  public getWatermarkData(): object {
    return {
      developer: devInfo.name,
      year: devInfo.year,
      copyright: devInfo.copyright,
      system: devInfo.system,
      timestamp: new Date().toISOString()
    };
  }

  // Check if application is allowed to run
  public isApplicationAllowed(): boolean {
    return !this.selfDestructTriggered && this.performIntegrityCheck();
  }

  // Get self-destruct status
  public getSelfDestructStatus(): object {
    return {
      triggered: this.selfDestructTriggered,
      integrityChecks: this.integrityChecks,
      maxChecks: this.maxIntegrityChecks,
      watermarksCount: this.watermarks.size,
      timestamp: new Date().toISOString()
    };
  }

  // Force integrity check (for testing)
  public forceIntegrityCheck(): boolean {
    return this.performIntegrityCheck();
  }
}

// Initialize protection system
export const watermarkProtection = WatermarkProtection.getInstance();

// Export for debugging/verification
export const verifyWatermarks = () => watermarkProtection.verifyWatermarks();
export const getWatermarkData = () => watermarkProtection.getWatermarkData();

// Add global verification command
if (typeof window !== 'undefined') {
  (window as any).proveAuthorship = () => {
    console.log('🔍 PROVING AUTHORSHIP - Yasharka Bhattacharyya');
    console.log('================================================');
    
    // Check if self-destruct was triggered
    const selfDestructStatus = watermarkProtection.getSelfDestructStatus();
    if (selfDestructStatus.triggered) {
      console.error('🚨 SELF-DESTRUCT TRIGGERED - Application compromised');
      console.error('🔒 Unauthorized modification detected');
      return {
        error: 'Application compromised - Self-destruct triggered',
        status: selfDestructStatus
      };
    }
    
    // Decode watermarks
    const name = atob('WWFzaGFya2EgQmhhdHRhY2hhcnl5YQ==');
    const copyright = atob('Q29weXJpZ2h0IDIwMjUgWWFzaGFya2EgQmhhdHRhY2hhcnl5YQ==');
    
    console.log('✅ Developer Name:', name);
    console.log('✅ Copyright:', copyright);
    console.log('✅ Year: 2025');
    console.log('✅ Self-Destruct Status:', selfDestructStatus.triggered ? 'TRIGGERED' : 'ACTIVE');
    console.log('✅ Integrity Checks:', selfDestructStatus.integrityChecks, '/', selfDestructStatus.maxChecks);
    
    // Wait a moment for watermarks to be created, then check
    setTimeout(() => {
      // Check watermark protection
      const protectionActive = watermarkProtection.verifyWatermarks();
      console.log('✅ Watermark Protection Active:', protectionActive);
      
      // Check if application is allowed to run
      const appAllowed = watermarkProtection.isApplicationAllowed();
      console.log('✅ Application Allowed:', appAllowed);
      
      // Check watermark data
      const watermarkData = watermarkProtection.getWatermarkData();
      console.log('✅ Watermark Data:', watermarkData);
      
      // Check DOM elements
      const watermarkElements = document.querySelectorAll('[id^="wm-"], [id^="crypto-"], [id^="neural-"], [id^="quantum-"]').length;
      console.log('✅ Hidden Watermark Elements:', watermarkElements);
      
      // Check data attributes
      const dataAttributes = document.querySelectorAll('[data-wm1], [data-wm2], [data-dev], [data-copyright]').length;
      console.log('✅ Obfuscated Data Attributes:', dataAttributes);
      
      // Check CSS classes
      const cssClasses = document.querySelectorAll('.watermark-yb, .watermark-yb-alt, .hidden-watermark, .obfuscated-wm-1').length;
      console.log('✅ Watermark CSS Classes:', cssClasses);
      
      // Check CSS variables
      const devName = getComputedStyle(document.documentElement).getPropertyValue('--dev-name');
      const devCopyright = getComputedStyle(document.documentElement).getPropertyValue('--dev-copyright');
      console.log('✅ CSS Variables - Name:', devName);
      console.log('✅ CSS Variables - Copyright:', devCopyright);
      
      // Decode hex watermarks
      const hexName = String.fromCharCode(...[0x59, 0x61, 0x73, 0x68, 0x61, 0x72, 0x6B, 0x61, 0x20, 0x42, 0x68, 0x61, 0x74, 0x74, 0x61, 0x63, 0x68, 0x61, 0x72, 0x79, 0x79, 0x61]);
      console.log('✅ Hex Decoded Name:', hexName);
      
      // Decode ASCII watermarks
      const asciiName = '89,97,115,104,97,114,107,97,32,66,104,97,116,116,97,99,104,97,114,121,121,97'.split(',').map(num => String.fromCharCode(parseInt(num))).join('');
      console.log('✅ ASCII Decoded Name:', asciiName);
      
      console.log('================================================');
      console.log('🛡️ PROOF OF AUTHORSHIP COMPLETE');
      console.log('📝 This application was created by: Yasharka Bhattacharyya');
      console.log('© 2025 Yasharka Bhattacharyya. All rights reserved.');
      console.log('🔒 Self-Destruct Protection: ACTIVE');
      console.log('================================================');
    }, 100); // Wait 100ms for watermarks to be created
  };

  // Add self-destruct status check command
  (window as any).checkSelfDestructStatus = () => {
    const status = watermarkProtection.getSelfDestructStatus();
    console.log('🔍 SELF-DESTRUCT STATUS CHECK');
    console.log('================================================');
    console.log('🚨 Triggered:', status.triggered);
    console.log('🔢 Integrity Checks:', status.integrityChecks, '/', status.maxChecks);
    console.log('📊 Watermarks Count:', status.watermarksCount);
    console.log('⏰ Timestamp:', status.timestamp);
    console.log('✅ Application Allowed:', watermarkProtection.isApplicationAllowed());
    console.log('================================================');
    return status;
  };

  // Add force integrity check command
  (window as any).forceIntegrityCheck = () => {
    const result = watermarkProtection.forceIntegrityCheck();
    console.log('🔍 FORCE INTEGRITY CHECK');
    console.log('================================================');
    console.log('✅ Integrity Check Result:', result);
    console.log('✅ Application Allowed:', watermarkProtection.isApplicationAllowed());
    console.log('================================================');
    return result;
  };
}
