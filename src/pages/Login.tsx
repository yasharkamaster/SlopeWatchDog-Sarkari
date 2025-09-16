import { useState } from "react";
import Layout from "@/components/Layout";
import LoginDialog from "@/components/LoginDialog";
import { Button } from "@/components/ui/button";
import { Shield, LogIn } from "lucide-react";

const Login = () => {
  const [loginDialogOpen, setLoginDialogOpen] = useState(true);

  return (
    <Layout showSidebar={false}>
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="text-center space-y-6">
          {/* Header */}
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-2">
              <Shield className="h-12 w-12 text-accent-info" />
              <h1 className="text-4xl font-mono font-bold text-accent-info">ROCKFALL AI</h1>
            </div>
            <p className="text-lg text-muted-foreground font-mono">
              PREDICTIVE MONITORING SYSTEM
            </p>
            <p className="text-sm text-muted-foreground max-w-md mx-auto">
              Advanced rockfall detection and prediction system for enhanced safety and monitoring
            </p>
          </div>

          {/* Login Button */}
          <div className="space-y-4">
            <Button 
              size="lg" 
              className="bg-accent-info hover:bg-accent-info/90 text-lg px-8 py-6"
              onClick={() => setLoginDialogOpen(true)}
            >
              <LogIn className="h-5 w-5 mr-2" />
              Access System
            </Button>
            
            <p className="text-xs text-muted-foreground">
              Click to open login dialog
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto mt-12">
            <div className="p-4 border border-accent-info/20 bg-accent-info/5 rounded-lg">
              <h3 className="font-mono font-bold text-sm text-accent-info mb-2">REAL-TIME MONITORING</h3>
              <p className="text-xs text-muted-foreground">Continuous sensor data analysis and risk assessment</p>
            </div>
            <div className="p-4 border border-accent-success/20 bg-accent-success/5 rounded-lg">
              <h3 className="font-mono font-bold text-sm text-accent-success mb-2">AI PREDICTIONS</h3>
              <p className="text-xs text-muted-foreground">Machine learning models for accurate rockfall forecasting</p>
            </div>
            <div className="p-4 border border-accent-warning/20 bg-accent-warning/5 rounded-lg">
              <h3 className="font-mono font-bold text-sm text-accent-warning mb-2">EARLY WARNING</h3>
              <p className="text-xs text-muted-foreground">Immediate alerts and evacuation protocols</p>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center text-xs text-muted-foreground mt-12">
            <p>© 2024 Rockfall AI Monitoring System</p>
            <p className="mt-1">Secure • Reliable • Predictive</p>
          </div>
        </div>

        {/* Login Dialog */}
        <LoginDialog 
          open={loginDialogOpen} 
          onOpenChange={setLoginDialogOpen} 
        />
      </div>
    </Layout>
  );
};

export default Login;
