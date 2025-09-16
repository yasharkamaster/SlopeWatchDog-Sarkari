/**
 * Layout Component
 * Developer: Yasharka Bhattacharyya
 * System: Rockfall AI Monitoring Platform
 * 
 * Proprietary component - All rights reserved to Yasharka Bhattacharyya © 2025
 */
import { useState } from "react";
import Sidebar from "./Sidebar";

interface LayoutProps {
  children: React.ReactNode;
  showSidebar?: boolean;
}

const Layout = ({ children, showSidebar = true }: LayoutProps) => {
  return (
    <div 
      className="flex min-h-screen bg-background watermark-yb-alt obfuscated-wm-2 stego-wm binary-wm self-healing-wm"
      data-wm2="Q29weXJpZ2h0IDIwMjUgWWFzaGFya2EgQmhhdHRhY2hhcnl5YQ=="
      data-dev="5961736861726B612042686174746163686172797961"
      data-year="32303235"
    >
      <div style={{ display: 'none' }} data-developer="Yasharka Bhattacharyya" data-copyright="© 2025 Yasharka Bhattacharyya. All rights reserved."></div>
      
      {/* Sidebar */}
      {showSidebar && (
        <div className="w-64 flex-shrink-0">
          <Sidebar />
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 min-h-screen">
        {children}
      </div>
    </div>
  );
};

export default Layout;
