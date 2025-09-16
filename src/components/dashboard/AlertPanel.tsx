import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Clock, MapPin, X } from "lucide-react";

interface Alert {
  id: string;
  severity: "critical" | "warning" | "info";
  message: string;
  location: string;
  timestamp: string;
}

const mockAlerts: Alert[] = [
  {
    id: "1",
    severity: "critical",
    message: "Displacement threshold exceeded in Sector 7-A",
    location: "45.2851°N, 67.8401°W",
    timestamp: "14:18:33"
  },
  {
    id: "2",
    severity: "warning",
    message: "Increased strain detected on slope face",
    location: "45.2843°N, 67.8388°W",
    timestamp: "14:15:22"
  },
  {
    id: "3",
    severity: "info",
    message: "Sensor calibration completed successfully",
    location: "45.2839°N, 67.8395°W",
    timestamp: "14:12:45"
  }
];

export const AlertPanel = () => {
  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case "critical": return <AlertTriangle className="h-4 w-4 text-status-critical" />;
      case "warning": return <AlertTriangle className="h-4 w-4 text-status-warning" />;
      default: return <AlertTriangle className="h-4 w-4 text-status-normal" />;
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "critical": return "border-l-status-critical";
      case "warning": return "border-l-status-warning";
      default: return "border-l-status-normal";
    }
  };

  return (
    <Card className="p-4 bg-card border-border">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-mono font-bold text-sm uppercase tracking-wider">ACTIVE ALERTS</h3>
        <Button variant="outline" size="sm" className="text-xs font-mono">
          VIEW ALL
        </Button>
      </div>
      
      <div className="space-y-3">
        {mockAlerts.map((alert) => (
          <div
            key={alert.id}
            className={`p-3 bg-muted border-l-4 ${getSeverityColor(alert.severity)} flex items-start justify-between`}
          >
            <div className="flex items-start gap-3 flex-1">
              {getSeverityIcon(alert.severity)}
              <div className="flex-1">
                <p className="text-sm font-mono text-foreground">{alert.message}</p>
                <div className="flex items-center gap-4 mt-2 text-xs font-mono text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    <span>{alert.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span>{alert.timestamp}</span>
                  </div>
                </div>
              </div>
            </div>
            <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
              <X className="h-3 w-3" />
            </Button>
          </div>
        ))}
      </div>
      
      <div className="mt-4 p-3 bg-accent border border-border">
        <div className="flex items-center gap-2 text-sm font-mono">
          <div className="h-2 w-2 bg-status-critical animate-pulse"></div>
          <span className="text-status-critical">1 CRITICAL ALERT REQUIRES IMMEDIATE ACTION</span>
        </div>
      </div>
    </Card>
  );
};