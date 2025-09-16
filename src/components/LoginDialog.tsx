/**
 * Login Dialog Component
 * Developer: Yasharka Bhattacharyya
 * System: Rockfall AI Monitoring Platform
 * 
 * Proprietary component - All rights reserved to Yasharka Bhattacharyya
 */
import { useState } from "react";
import { Shield, Mail, Smartphone, Eye, EyeOff, ExternalLink, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

interface LoginDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const LoginDialog = ({ open, onOpenChange }: LoginDialogProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);

  const handleEmailLogin = () => {
    if (email) {
      setIsOtpSent(true);
    }
  };

  const handleOtpLogin = () => {
    // Handle OTP verification
    console.log("OTP Login:", otp);
  };

  const handleGoogleLogin = () => {
    console.log("Google Login");
  };

  const handleCollegeLogin = () => {
    console.log("College SSO Login");
  };

  const handleGuestDemo = () => {
    console.log("Guest Demo Access");
    onOpenChange(false);
  };

  const handleClose = () => {
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <div style={{ display: 'none' }} data-developer="Yasharka Bhattacharyya" data-copyright="© 2025 Yasharka Bhattacharyya. All rights reserved."></div>
      
      <DialogContent className="max-w-md mx-auto watermark-yb-alt micro-watermark">
        <DialogHeader className="text-center space-y-2">
          <div className="flex items-center justify-center gap-2">
            <Shield className="h-8 w-8 text-accent-info" />
            <DialogTitle className="text-2xl font-mono font-bold text-accent-info">
              ROCKFALL AI
            </DialogTitle>
          </div>
          <p className="text-sm text-muted-foreground font-mono">
            PREDICTIVE MONITORING SYSTEM
          </p>
        </DialogHeader>

        {/* Login Options */}
        <Tabs defaultValue="email" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="email">Email</TabsTrigger>
            <TabsTrigger value="otp">OTP</TabsTrigger>
            <TabsTrigger value="sso">SSO</TabsTrigger>
          </TabsList>

          {/* Email Login */}
          <TabsContent value="email" className="space-y-4">
            <Card className="border-accent-info/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-accent-info">
                  <Mail className="h-5 w-5" />
                  Email Login
                </CardTitle>
                <CardDescription>
                  Sign in with your registered email address
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border-accent-info/20 focus:border-accent-info"
                  />
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      className="border-accent-info/20 focus:border-accent-info pr-10"
                    />
                    <Button
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>
                <Button 
                  className="w-full bg-accent-info hover:bg-accent-info/90" 
                  onClick={handleEmailLogin}
                >
                  Sign In
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* OTP Login */}
          <TabsContent value="otp" className="space-y-4">
            <Card className="border-accent-warning/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-accent-warning">
                  <Smartphone className="h-5 w-5" />
                  OTP Login
                </CardTitle>
                <CardDescription>
                  Receive a one-time password on your mobile device
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {!isOtpSent ? (
                  <>
                    <Input
                      type="tel"
                      placeholder="Enter your mobile number"
                      className="border-accent-warning/20 focus:border-accent-warning"
                    />
                    <Button 
                      className="w-full bg-accent-warning hover:bg-accent-warning/90" 
                      onClick={() => setIsOtpSent(true)}
                    >
                      Send OTP
                    </Button>
                  </>
                ) : (
                  <>
                    <div className="text-center space-y-2">
                      <p className="text-sm text-muted-foreground">
                        OTP sent to your mobile device
                      </p>
                      <Input
                        type="text"
                        placeholder="Enter 6-digit OTP"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        maxLength={6}
                        className="border-accent-warning/20 focus:border-accent-warning"
                      />
                    </div>
                    <Button 
                      className="w-full bg-accent-warning hover:bg-accent-warning/90" 
                      onClick={handleOtpLogin}
                    >
                      Verify OTP
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full border-accent-warning/20 text-accent-warning hover:bg-accent-warning/10" 
                      onClick={() => setIsOtpSent(false)}
                    >
                      Resend OTP
                    </Button>
                  </>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* SSO Login */}
          <TabsContent value="sso" className="space-y-4">
            <Card className="border-accent-purple/20">
              <CardHeader>
                <CardTitle className="text-accent-purple">Single Sign-On</CardTitle>
                <CardDescription>
                  Sign in with your organization credentials
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button 
                  variant="outline" 
                  className="w-full justify-start border-accent-purple/20 text-accent-purple hover:bg-accent-purple/10" 
                  onClick={handleGoogleLogin}
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Sign in with Google
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start border-accent-purple/20 text-accent-purple hover:bg-accent-purple/10" 
                  onClick={handleCollegeLogin}
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  College SSO Login
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Guest Demo */}
        <Card className="border-dashed border-accent-success/20">
          <CardContent className="pt-6">
            <div className="text-center space-y-4">
              <div className="space-y-2">
                <h3 className="font-semibold text-accent-success">Guest Demo Access</h3>
                <p className="text-sm text-muted-foreground">
                  Explore the system with read-only access
                </p>
                <Badge variant="secondary" className="text-xs bg-accent-success/10 text-accent-success">
                  LIMITED FUNCTIONALITY
                </Badge>
              </div>
              <Button 
                variant="outline" 
                className="w-full border-accent-success/20 text-accent-success hover:bg-accent-success/10" 
                onClick={handleGuestDemo}
              >
                Enter Guest Demo
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center text-xs text-muted-foreground">
          <p>© 2024 Rockfall AI Monitoring System</p>
          <p className="mt-1">Secure • Reliable • Predictive</p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LoginDialog;
