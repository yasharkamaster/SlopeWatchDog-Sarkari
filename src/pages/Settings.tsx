import { useState } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  Settings, 
  Database, 
  Bell, 
  Users, 
  Shield, 
  Wifi,
  Save,
  RefreshCw,
  AlertTriangle,
  CheckCircle,
  XCircle
} from "lucide-react";

const SettingsPage = () => {
  const [dataSourceConfig, setDataSourceConfig] = useState({
    sensorEndpoint: "https://api.rockfall-ai.com/sensors",
    updateInterval: "30",
    retryAttempts: "3",
    timeout: "5000"
  });

  const [alertThresholds, setAlertThresholds] = useState({
    highRisk: "70",
    mediumRisk: "40",
    lowRisk: "20",
    rainfallThreshold: "50",
    temperatureThreshold: "35",
    strainThreshold: "0.003"
  });

  const [notificationSettings, setNotificationSettings] = useState({
    emailAlerts: true,
    smsAlerts: false,
    pushNotifications: true,
    webhookEnabled: false,
    webhookUrl: ""
  });

  const [users] = useState([
    { id: "user-1", name: "John Smith", email: "john@company.com", role: "admin", status: "active" },
    { id: "user-2", name: "Sarah Johnson", email: "sarah@company.com", role: "operator", status: "active" },
    { id: "user-3", name: "Mike Wilson", email: "mike@company.com", role: "viewer", status: "inactive" },
    { id: "user-4", name: "Lisa Brown", email: "lisa@company.com", role: "analyst", status: "active" }
  ]);

  const [systemStatus, setSystemStatus] = useState({
    database: "connected",
    sensors: "connected", 
    mlModel: "running",
    api: "operational"
  });

  const handleSaveDataSource = () => {
    console.log("Saving data source config:", dataSourceConfig);
  };

  const handleSaveAlertThresholds = () => {
    console.log("Saving alert thresholds:", alertThresholds);
  };

  const handleSaveNotifications = () => {
    console.log("Saving notification settings:", notificationSettings);
  };

  const handleTestConnection = () => {
    console.log("Testing data source connection...");
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "connected":
      case "running":
      case "operational":
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case "disconnected":
      case "stopped":
      case "error":
        return <XCircle className="h-4 w-4 text-red-500" />;
      default:
        return <AlertTriangle className="h-4 w-4 text-yellow-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "connected":
      case "running":
      case "operational":
        return "default";
      case "disconnected":
      case "stopped":
      case "error":
        return "destructive";
      default:
        return "secondary";
    }
  };

  return (
    <Layout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-mono font-bold">SETTINGS</h1>
            <p className="text-sm text-muted-foreground font-mono">
              System configuration and user management
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <RefreshCw className="h-4 w-4 mr-2" />
              Refresh Status
            </Button>
          </div>
        </div>

        {/* System Status */}
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-mono flex items-center gap-2">
              <Shield className="h-4 w-4" />
              SYSTEM STATUS
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="flex items-center gap-3 p-3 bg-muted border border-border rounded">
                {getStatusIcon(systemStatus.database)}
                <div>
                  <p className="font-mono text-sm font-bold">Database</p>
                  <Badge variant={getStatusColor(systemStatus.database)} className="text-xs">
                    {systemStatus.database.toUpperCase()}
                  </Badge>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 bg-muted border border-border rounded">
                {getStatusIcon(systemStatus.sensors)}
                <div>
                  <p className="font-mono text-sm font-bold">Sensors</p>
                  <Badge variant={getStatusColor(systemStatus.sensors)} className="text-xs">
                    {systemStatus.sensors.toUpperCase()}
                  </Badge>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 bg-muted border border-border rounded">
                {getStatusIcon(systemStatus.mlModel)}
                <div>
                  <p className="font-mono text-sm font-bold">ML Model</p>
                  <Badge variant={getStatusColor(systemStatus.mlModel)} className="text-xs">
                    {systemStatus.mlModel.toUpperCase()}
                  </Badge>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 bg-muted border border-border rounded">
                {getStatusIcon(systemStatus.api)}
                <div>
                  <p className="font-mono text-sm font-bold">API</p>
                  <Badge variant={getStatusColor(systemStatus.api)} className="text-xs">
                    {systemStatus.api.toUpperCase()}
                  </Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Settings Tabs */}
        <Tabs defaultValue="datasource" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="datasource">Data Source</TabsTrigger>
            <TabsTrigger value="thresholds">Alert Thresholds</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="users">User Management</TabsTrigger>
          </TabsList>

          {/* Data Source Configuration */}
          <TabsContent value="datasource" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-mono flex items-center gap-2">
                  <Database className="h-4 w-4" />
                  DATA SOURCE CONFIGURATION
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="sensorEndpoint" className="text-sm font-mono">Sensor Endpoint URL</Label>
                    <Input
                      id="sensorEndpoint"
                      value={dataSourceConfig.sensorEndpoint}
                      onChange={(e) => setDataSourceConfig(prev => ({ ...prev, sensorEndpoint: e.target.value }))}
                      placeholder="https://api.rockfall-ai.com/sensors"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="updateInterval" className="text-sm font-mono">Update Interval (seconds)</Label>
                    <Input
                      id="updateInterval"
                      value={dataSourceConfig.updateInterval}
                      onChange={(e) => setDataSourceConfig(prev => ({ ...prev, updateInterval: e.target.value }))}
                      placeholder="30"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="retryAttempts" className="text-sm font-mono">Retry Attempts</Label>
                    <Input
                      id="retryAttempts"
                      value={dataSourceConfig.retryAttempts}
                      onChange={(e) => setDataSourceConfig(prev => ({ ...prev, retryAttempts: e.target.value }))}
                      placeholder="3"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="timeout" className="text-sm font-mono">Timeout (ms)</Label>
                    <Input
                      id="timeout"
                      value={dataSourceConfig.timeout}
                      onChange={(e) => setDataSourceConfig(prev => ({ ...prev, timeout: e.target.value }))}
                      placeholder="5000"
                    />
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button onClick={handleSaveDataSource}>
                    <Save className="h-4 w-4 mr-2" />
                    Save Configuration
                  </Button>
                  <Button variant="outline" onClick={handleTestConnection}>
                    <Wifi className="h-4 w-4 mr-2" />
                    Test Connection
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Alert Thresholds */}
          <TabsContent value="thresholds" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-mono flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4" />
                  ALERT THRESHOLDS & NOTIFICATION PREFERENCES
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="highRisk" className="text-sm font-mono">High Risk Threshold (%)</Label>
                    <Input
                      id="highRisk"
                      value={alertThresholds.highRisk}
                      onChange={(e) => setAlertThresholds(prev => ({ ...prev, highRisk: e.target.value }))}
                      placeholder="70"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="mediumRisk" className="text-sm font-mono">Medium Risk Threshold (%)</Label>
                    <Input
                      id="mediumRisk"
                      value={alertThresholds.mediumRisk}
                      onChange={(e) => setAlertThresholds(prev => ({ ...prev, mediumRisk: e.target.value }))}
                      placeholder="40"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="lowRisk" className="text-sm font-mono">Low Risk Threshold (%)</Label>
                    <Input
                      id="lowRisk"
                      value={alertThresholds.lowRisk}
                      onChange={(e) => setAlertThresholds(prev => ({ ...prev, lowRisk: e.target.value }))}
                      placeholder="20"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="rainfallThreshold" className="text-sm font-mono">Rainfall Threshold (mm)</Label>
                    <Input
                      id="rainfallThreshold"
                      value={alertThresholds.rainfallThreshold}
                      onChange={(e) => setAlertThresholds(prev => ({ ...prev, rainfallThreshold: e.target.value }))}
                      placeholder="50"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="temperatureThreshold" className="text-sm font-mono">Temperature Threshold (°C)</Label>
                    <Input
                      id="temperatureThreshold"
                      value={alertThresholds.temperatureThreshold}
                      onChange={(e) => setAlertThresholds(prev => ({ ...prev, temperatureThreshold: e.target.value }))}
                      placeholder="35"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="strainThreshold" className="text-sm font-mono">Strain Threshold (mm/m)</Label>
                    <Input
                      id="strainThreshold"
                      value={alertThresholds.strainThreshold}
                      onChange={(e) => setAlertThresholds(prev => ({ ...prev, strainThreshold: e.target.value }))}
                      placeholder="0.003"
                    />
                  </div>
                </div>
                
                <Button onClick={handleSaveAlertThresholds}>
                  <Save className="h-4 w-4 mr-2" />
                  Save Thresholds
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Notifications */}
          <TabsContent value="notifications" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-mono flex items-center gap-2">
                  <Bell className="h-4 w-4" />
                  NOTIFICATION SETTINGS
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-sm font-mono">Email Alerts</Label>
                      <p className="text-xs text-muted-foreground font-mono">Receive alerts via email</p>
                    </div>
                    <Switch
                      checked={notificationSettings.emailAlerts}
                      onCheckedChange={(checked) => setNotificationSettings(prev => ({ ...prev, emailAlerts: checked }))}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-sm font-mono">SMS Alerts</Label>
                      <p className="text-xs text-muted-foreground font-mono">Receive alerts via SMS</p>
                    </div>
                    <Switch
                      checked={notificationSettings.smsAlerts}
                      onCheckedChange={(checked) => setNotificationSettings(prev => ({ ...prev, smsAlerts: checked }))}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-sm font-mono">Push Notifications</Label>
                      <p className="text-xs text-muted-foreground font-mono">Receive browser push notifications</p>
                    </div>
                    <Switch
                      checked={notificationSettings.pushNotifications}
                      onCheckedChange={(checked) => setNotificationSettings(prev => ({ ...prev, pushNotifications: checked }))}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-sm font-mono">Webhook Integration</Label>
                      <p className="text-xs text-muted-foreground font-mono">Send alerts to external webhook</p>
                    </div>
                    <Switch
                      checked={notificationSettings.webhookEnabled}
                      onCheckedChange={(checked) => setNotificationSettings(prev => ({ ...prev, webhookEnabled: checked }))}
                    />
                  </div>
                  
                  {notificationSettings.webhookEnabled && (
                    <div className="space-y-2">
                      <Label htmlFor="webhookUrl" className="text-sm font-mono">Webhook URL</Label>
                      <Input
                        id="webhookUrl"
                        value={notificationSettings.webhookUrl}
                        onChange={(e) => setNotificationSettings(prev => ({ ...prev, webhookUrl: e.target.value }))}
                        placeholder="https://your-webhook-endpoint.com/alerts"
                      />
                    </div>
                  )}
                </div>
                
                <Button onClick={handleSaveNotifications}>
                  <Save className="h-4 w-4 mr-2" />
                  Save Notification Settings
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* User Management */}
          <TabsContent value="users" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-mono flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  USER & ROLE MANAGEMENT
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {users.map((user) => (
                    <div key={user.id} className="flex items-center justify-between p-3 border border-border rounded">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
                          <span className="font-mono text-sm font-bold">
                            {user.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <p className="font-mono text-sm font-bold">{user.name}</p>
                          <p className="font-mono text-xs text-muted-foreground">{user.email}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <Badge 
                          variant={user.role === 'admin' ? 'destructive' : 
                                 user.role === 'operator' ? 'secondary' : 'default'}
                          className="text-xs"
                        >
                          {user.role.toUpperCase()}
                        </Badge>
                        <Badge 
                          variant={user.status === 'active' ? 'default' : 'secondary'}
                          className="text-xs"
                        >
                          {user.status.toUpperCase()}
                        </Badge>
                        <Button size="sm" variant="outline">
                          <Settings className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  ))}
                  
                  <div className="pt-4 border-t border-border">
                    <Button className="w-full">
                      <Users className="h-4 w-4 mr-2" />
                      Add New User
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default SettingsPage;
