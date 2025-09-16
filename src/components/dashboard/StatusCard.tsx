import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface StatusCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  status: "critical" | "warning" | "normal" | "inactive";
  subtitle?: string;
}

export const StatusCard = ({ title, value, icon: Icon, status, subtitle }: StatusCardProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "critical": return "text-status-critical";
      case "warning": return "text-status-warning";
      case "normal": return "text-status-normal";
      case "inactive": return "text-status-inactive";
      default: return "text-status-normal";
    }
  };

  return (
    <Card className="p-4 bg-card border-border">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider">{title}</p>
          <p className={`text-2xl font-mono font-bold mt-1 ${getStatusColor(status)}`}>{value}</p>
          {subtitle && <p className="text-xs font-mono text-muted-foreground mt-1">{subtitle}</p>}
        </div>
        <Icon className={`h-5 w-5 ${getStatusColor(status)}`} />
      </div>
    </Card>
  );
};