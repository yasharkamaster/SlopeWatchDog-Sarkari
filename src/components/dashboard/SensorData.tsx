import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Thermometer, Droplets, Activity, Zap } from "lucide-react";
import sensorNetwork from "@/assets/sensor-network.jpg";

interface SensorReading {
  name: string;
  value: number;
  unit: string;
  max: number;
  status: "normal" | "warning" | "critical";
  icon: React.ComponentType<any>;
}

const sensorReadings: SensorReading[] = [
  { name: "TEMPERATURE", value: 23.4, unit: "°C", max: 40, status: "normal", icon: Thermometer },
  { name: "HUMIDITY", value: 67, unit: "%", max: 100, status: "normal", icon: Droplets },
  { name: "VIBRATION", value: 2.3, unit: "mm/s", max: 5, status: "warning", icon: Activity },
  { name: "PORE PRESSURE", value: 145, unit: "kPa", max: 200, status: "critical", icon: Zap }
];

export const SensorData = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "critical": return "text-status-critical";
      case "warning": return "text-status-warning";
      default: return "text-status-normal";
    }
  };

  const getProgressColor = (status: string) => {
    switch (status) {
      case "critical": return "bg-status-critical";
      case "warning": return "bg-status-warning";
      default: return "bg-status-normal";
    }
  };

  return (
    <Card className="p-4 bg-card border-border">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-mono font-bold text-sm uppercase tracking-wider">SENSOR NETWORK</h3>
        <div className="text-xs font-mono text-muted-foreground">
          LAST SYNC: 14:23:07
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <div className="space-y-3">
            {sensorReadings.map((sensor) => {
              const Icon = sensor.icon;
              const percentage = (sensor.value / sensor.max) * 100;
              
              return (
                <div key={sensor.name} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Icon className={`h-4 w-4 ${getStatusColor(sensor.status)}`} />
                      <span className="text-xs font-mono text-muted-foreground">{sensor.name}</span>
                    </div>
                    <span className={`text-sm font-mono font-bold ${getStatusColor(sensor.status)}`}>
                      {sensor.value} {sensor.unit}
                    </span>
                  </div>
                  <div className="relative">
                    <Progress value={percentage} className="h-2 bg-accent" />
                    <div 
                      className={`absolute top-0 left-0 h-2 ${getProgressColor(sensor.status)} transition-all duration-300`}
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        <div className="relative bg-black border border-border h-32 overflow-hidden">
          <img 
            src={sensorNetwork} 
            alt="Sensor network visualization" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center font-mono text-xs">
              <div className="text-data-high font-bold">47</div>
              <div className="text-muted-foreground">ACTIVE SENSORS</div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
        <div className="text-center">
          <p className="text-xs font-mono text-muted-foreground">ONLINE</p>
          <p className="text-lg font-mono font-bold text-status-normal">45/47</p>
        </div>
        <div className="text-center">
          <p className="text-xs font-mono text-muted-foreground">WARNINGS</p>
          <p className="text-lg font-mono font-bold text-status-warning">2</p>
        </div>
        <div className="text-center">
          <p className="text-xs font-mono text-muted-foreground">CRITICAL</p>
          <p className="text-lg font-mono font-bold text-status-critical">1</p>
        </div>
      </div>
    </Card>
  );
};