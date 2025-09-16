/**
 * Navigation Sidebar Component
 * Developer: Yasharka Bhattacharyya
 * System: Rockfall AI Monitoring Platform
 * 
 * Proprietary component - All rights reserved to Yasharka Bhattacharyya
 */
import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { 
  Shield, 
  Map, 
  MapPin, 
  Camera, 
  TrendingUp, 
  AlertTriangle, 
  FileText, 
  Settings, 
  BarChart3, 
  HelpCircle,
  LogIn,
  User,
  Menu,
  X,
  ChevronRight,
  ChevronDown,
  Home,
  Activity,
  Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import LoginDialog from "./LoginDialog";

const Sidebar = () => {
  const [expandedSections, setExpandedSections] = useState<string[]>(["monitoring", "analysis"]);
  const [loginDialogOpen, setLoginDialogOpen] = useState(false);
  const location = useLocation();

  const navigationSections = [
    {
      id: "main",
      title: "Main",
      items: [
        { path: "/", label: "Home", icon: Home },
        { path: "/dashboard", label: "Dashboard", icon: Shield },
        { path: "/login", label: "Login", icon: LogIn },
      ]
    },
    {
      id: "monitoring",
      title: "Monitoring",
      items: [
        { path: "/risk-map", label: "Risk Map", icon: Map },
        { path: "/risk-visualisation-map", label: "3D Visualization", icon: MapPin },
        { path: "/live-footage", label: "Live Footage", icon: Camera },
        { path: "/alerts", label: "Alerts", icon: AlertTriangle },
      ]
    },
    {
      id: "analysis",
      title: "Analysis & Reports",
      items: [
        { path: "/predictions", label: "Predictions", icon: TrendingUp },
        { path: "/analytics", label: "Analytics", icon: BarChart3 },
        { path: "/reports", label: "Reports", icon: FileText },
      ]
    },
    {
      id: "system",
      title: "System",
      items: [
        { path: "/settings", label: "Settings", icon: Settings },
        { path: "/help", label: "Help & Support", icon: HelpCircle },
      ]
    }
  ];

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div 
      className="flex flex-col h-screen bg-card border-r border-border watermark-yb watermark-yb-alt hidden-watermark obfuscated-wm-1 obfuscated-wm-2 stego-wm binary-wm self-healing-wm"
      data-wm1="WWFzaGFya2EgQmhhdHRhY2hhcnl5YQ=="
      data-wm2="Q29weXJpZ2h0IDIwMjUgWWFzaGFya2EgQmhhdHRhY2hhcnl5YQ=="
      data-dev="5961736861726B612042686174746163686172797961"
      data-year="32303235"
      data-copyright="436F707972696768742032303235205961736861726B612042686174746163686172797961"
    >
      <div style={{ display: 'none' }} data-developer="Yasharka Bhattacharyya" data-copyright="© 2025 Yasharka Bhattacharyya. All rights reserved."></div>
      
      {/* Header */}
      <div className="flex items-center gap-2 p-4 border-b border-accent-info/20 bg-accent-info/5">
        <Shield className="h-6 w-6 text-accent-info" />
        <span className="font-mono font-bold text-lg text-accent-info">ROCKFALL AI</span>
      </div>

      {/* Navigation Sections */}
      <div className="flex-1 overflow-y-auto p-2 space-y-1 scrollbar-hide">
        {navigationSections.map((section) => (
          <div key={section.id}>
            {/* Section Header */}
            <Collapsible
              open={expandedSections.includes(section.id)}
              onOpenChange={() => toggleSection(section.id)}
            >
              <CollapsibleTrigger asChild>
                <Button
                  variant="ghost"
                  className="w-full justify-between p-2 h-8 text-xs font-mono text-muted-foreground hover:text-foreground"
                >
                  <span className="uppercase tracking-wider">{section.title}</span>
                  {expandedSections.includes(section.id) ? (
                    <ChevronDown className="h-3 w-3" />
                  ) : (
                    <ChevronRight className="h-3 w-3" />
                  )}
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent className="space-y-1">
                {section.items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      className={({ isActive: linkIsActive }) =>
                        cn(
                          "flex items-center gap-3 px-3 py-2 text-sm font-mono transition-colors rounded-md",
                          linkIsActive || isActive(item.path)
                            ? "bg-accent text-accent-foreground"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted"
                        )
                      }
                    >
                      <Icon className="h-4 w-4 flex-shrink-0" />
                      <span className="truncate">{item.label}</span>
                    </NavLink>
                  );
                })}
              </CollapsibleContent>
            </Collapsible>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-border">
        <div className="space-y-2">
          {/* System Status */}
          <div className="p-2 bg-accent-success/10 border border-accent-success/20 rounded">
            <div className="flex items-center gap-2 mb-1">
              <Activity className="h-3 w-3 text-accent-success" />
              <span className="text-xs font-mono font-bold text-accent-success">SYSTEM STATUS</span>
            </div>
            <div className="text-xs font-mono text-muted-foreground">
              <div className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 bg-accent-success rounded-full animate-pulse"></div>
                <span>All Systems Operational</span>
              </div>
            </div>
          </div>

          {/* User Profile */}
          <div className="flex items-center gap-2 p-2 bg-muted border border-border rounded">
            <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
              <User className="h-3 w-3 text-primary-foreground" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-xs font-mono font-bold truncate">Admin User</div>
              <div className="text-xs font-mono text-muted-foreground truncate">admin@rockfall-ai.com</div>
            </div>
          </div>
          
          {/* Login Button */}
          <Button 
            variant="outline" 
            size="sm" 
            className="w-full border-accent-info/20 text-accent-info hover:bg-accent-info/10"
            onClick={() => setLoginDialogOpen(true)}
          >
            <LogIn className="h-3 w-3 mr-2" />
            Login / Switch User
          </Button>
        </div>
      </div>
      
      {/* Login Dialog */}
      <LoginDialog 
        open={loginDialogOpen} 
        onOpenChange={setLoginDialogOpen} 
      />
    </div>
  );
};

export default Sidebar;
