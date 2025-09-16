/**
 * Dashboard Page Component
 * Developer: Yasharka Bhattacharyya
 * System: Rockfall AI Monitoring Platform
 * 
 * Proprietary component - All rights reserved to Yasharka Bhattacharyya
 */
import { StatusCard } from "@/components/dashboard/StatusCard";
import { RiskMap } from "@/components/dashboard/RiskMap";
import { AlertPanel } from "@/components/dashboard/AlertPanel";
import { SensorData } from "@/components/dashboard/SensorData";
import Layout from "@/components/Layout";
import { Shield, TrendingUp, MapPin, Activity, Zap, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";

const Dashboard = () => {
  return (
    <Layout>
      <div style={{ display: 'none' }} data-developer="Yasharka Bhattacharyya" data-copyright="© 2025 Yasharka Bhattacharyya. All rights reserved."></div>
      
      <div 
        className="p-6 space-y-6 watermark-yb hidden-watermark obfuscated-wm-1 stego-wm binary-wm self-healing-wm"
        data-wm1="WWFzaGFya2EgQmhhdHRhY2hhcnl5YQ=="
        data-dev="5961736861726B612042686174746163686172797961"
        data-year="32303235"
      >
        {/* Status Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="relative overflow-hidden rounded-lg border border-accent-danger/20 bg-accent-danger/10">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-danger/20 to-transparent"></div>
            <div className="relative p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-mono text-muted-foreground">RISK LEVEL</p>
                  <p className="text-2xl font-mono font-bold text-accent-danger">HIGH</p>
                  <p className="text-xs font-mono text-muted-foreground">Sector 7-A</p>
                </div>
                <Shield className="h-8 w-8 text-accent-danger" />
              </div>
            </div>
          </div>
          
          <div className="relative overflow-hidden rounded-lg border border-accent-warning/20 bg-accent-warning/10">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-warning/20 to-transparent"></div>
            <div className="relative p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-mono text-muted-foreground">ACTIVE ZONES</p>
                  <p className="text-2xl font-mono font-bold text-accent-warning">3</p>
                  <p className="text-xs font-mono text-muted-foreground">Monitoring</p>
                </div>
                <MapPin className="h-8 w-8 text-accent-warning" />
              </div>
            </div>
          </div>
          
          <div className="relative overflow-hidden rounded-lg border border-accent-success/20 bg-accent-success/10">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-success/20 to-transparent"></div>
            <div className="relative p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-mono text-muted-foreground">PREDICTION ACCURACY</p>
                  <p className="text-2xl font-mono font-bold text-accent-success">94.2%</p>
                  <p className="text-xs font-mono text-muted-foreground">ML Model Performance</p>
                </div>
                <TrendingUp className="h-8 w-8 text-accent-success" />
              </div>
            </div>
          </div>
          
          <div className="relative overflow-hidden rounded-lg border border-accent-info/20 bg-accent-info/10">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-info/20 to-transparent"></div>
            <div className="relative p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-mono text-muted-foreground">SENSOR NETWORK</p>
                  <p className="text-2xl font-mono font-bold text-accent-info">45/47</p>
                  <p className="text-xs font-mono text-muted-foreground">Online</p>
                </div>
                <Activity className="h-8 w-8 text-accent-info" />
              </div>
            </div>
          </div>
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
            <h3 className="font-mono font-bold text-sm uppercase tracking-wider mb-4 text-accent-purple">
              PREDICTION ENGINE STATUS
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-accent-success/10 border border-accent-success/20 rounded-lg">
                <div className="flex items-center gap-3">
                  <Zap className="h-5 w-5 text-accent-success" />
                  <div>
                    <p className="font-mono text-sm">ML Model Processing</p>
                    <p className="font-mono text-xs text-muted-foreground">Analyzing 2.4M data points</p>
                  </div>
                </div>
                <div className="h-2 w-2 bg-accent-success rounded-full animate-pulse"></div>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-accent-warning/10 border border-accent-warning/20 rounded-lg">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-accent-warning" />
                  <div>
                    <p className="font-mono text-sm">Next Prediction Cycle</p>
                    <p className="font-mono text-xs text-muted-foreground">In 4 minutes 23 seconds</p>
                  </div>
                </div>
                <div className="font-mono text-sm text-accent-warning">04:23</div>
              </div>
              
              <div className="p-4 bg-accent-danger/10 border border-accent-danger/20 rounded-lg">
                <div className="text-center">
                  <p className="font-mono text-2xl font-bold text-accent-danger">73%</p>
                  <p className="font-mono text-xs text-muted-foreground uppercase">
                    Rockfall Probability (Sector 7-A)
                  </p>
                  <p className="font-mono text-xs text-accent-danger mt-1 font-bold">
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

export default Dashboard;
