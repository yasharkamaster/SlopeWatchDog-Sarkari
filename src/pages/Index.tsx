import { StatusCard } from "@/components/dashboard/StatusCard";
import { RiskMap } from "@/components/dashboard/RiskMap";
import { AlertPanel } from "@/components/dashboard/AlertPanel";
import { SensorData } from "@/components/dashboard/SensorData";
import Layout from "@/components/Layout";
import { Shield, TrendingUp, MapPin, Activity, Zap, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";

const Index = () => {
  return (
    <Layout>
      <div className="p-6 space-y-6">
        {/* Status Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatusCard
            title="Risk Level"
            value="HIGH"
            icon={Shield}
            status="critical"
            subtitle="Sector 7-A"
          />
          <StatusCard
            title="Active Zones"
            value="3"
            icon={MapPin}
            status="warning"
            subtitle="Monitoring"
          />
          <StatusCard
            title="Prediction Accuracy"
            value="94.2%"
            icon={TrendingUp}
            status="normal"
            subtitle="ML Model Performance"
          />
          <StatusCard
            title="Sensor Network"
            value="45/47"
            icon={Activity}
            status="normal"
            subtitle="Online"
          />
        </div>

        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Risk Map - Takes up 2 columns */}
          <div className="lg:col-span-2">
            <RiskMap />
          </div>
          
          {/* Sensor Data */}
          <div>
            <SensorData />
          </div>
        </div>

        {/* Alerts and Analytics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Alert Panel */}
          <AlertPanel />
          
          {/* Real-time Analytics */}
          <Card className="p-4 bg-card border-border">
            <h3 className="font-mono font-bold text-sm uppercase tracking-wider mb-4">
              PREDICTION ENGINE STATUS
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-muted border border-border">
                <div className="flex items-center gap-3">
                  <Zap className="h-5 w-5 text-status-normal" />
                  <div>
                    <p className="font-mono text-sm">ML Model Processing</p>
                    <p className="font-mono text-xs text-muted-foreground">Analyzing 2.4M data points</p>
                  </div>
                </div>
                <div className="h-2 w-2 bg-success rounded-full animate-pulse"></div>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-muted border border-border">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-status-warning" />
                  <div>
                    <p className="font-mono text-sm">Next Prediction Cycle</p>
                    <p className="font-mono text-xs text-muted-foreground">In 4 minutes 23 seconds</p>
                  </div>
                </div>
                <div className="font-mono text-sm text-data-high">04:23</div>
              </div>
              
              <div className="p-4 bg-accent border border-border">
                <div className="text-center">
                  <p className="font-mono text-2xl font-bold text-status-critical">73%</p>
                  <p className="font-mono text-xs text-muted-foreground uppercase">
                    Rockfall Probability (Sector 7-A)
                  </p>
                  <p className="font-mono text-xs text-status-critical mt-1">
                    EVACUATE PERSONNEL IMMEDIATELY
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Index;