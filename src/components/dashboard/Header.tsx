import { AlertTriangle, Activity, Shield, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="border-b border-border bg-card p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Shield className="h-8 w-8" />
            <div>
              <h1 className="text-xl font-mono font-bold tracking-wider">ROCKFALL AI</h1>
              <p className="text-xs text-muted-foreground font-mono">PREDICTIVE MONITORING SYSTEM</p>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 text-sm font-mono">
            <div className="h-2 w-2 bg-success rounded-full animate-pulse"></div>
            <span className="text-status-normal">SYSTEM OPERATIONAL</span>
          </div>
          <Button variant="ghost" size="sm">
            <Settings className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};