import { NavLink } from "react-router-dom";
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
  User
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigationItems = [
  { path: "/login", label: "Login", icon: LogIn },
  { path: "/dashboard", label: "Dashboard", icon: Shield },
  { path: "/risk-map", label: "Risk Map", icon: Map },
  { path: "/risk-visualisation-map", label: "3D Visualization", icon: MapPin },
  { path: "/live-footage", label: "Live Footage", icon: Camera },
  { path: "/predictions", label: "Predictions", icon: TrendingUp },
  { path: "/alerts", label: "Alerts", icon: AlertTriangle },
  { path: "/reports", label: "Reports", icon: FileText },
  { path: "/settings", label: "Settings", icon: Settings },
  { path: "/analytics", label: "Analytics", icon: BarChart3 },
  { path: "/help", label: "Help", icon: HelpCircle },
];

export const Navigation = () => {
  return (
    <nav className="border-b border-border bg-card">
      <div className="flex items-center justify-between px-4 py-2">
        <div className="flex items-center gap-2">
          <Shield className="h-6 w-6" />
          <span className="font-mono font-bold text-lg">ROCKFALL AI</span>
        </div>
        
        <div className="flex items-center gap-1">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  cn(
                    "flex items-center gap-2 px-3 py-2 text-sm font-mono transition-colors hover:bg-muted rounded-md",
                    isActive ? "bg-accent text-accent-foreground" : "text-muted-foreground hover:text-foreground"
                  )
                }
              >
                <Icon className="h-4 w-4" />
                <span className="hidden sm:inline">{item.label}</span>
              </NavLink>
            );
          })}
        </div>
        
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm">
            <User className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </nav>
  );
};
