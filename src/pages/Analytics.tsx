import { useState } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BarChart3, 
  TrendingUp, 
  TrendingDown, 
  AlertTriangle,
  Activity,
  Zap,
  Download,
  RefreshCw,
  Calendar
} from "lucide-react";

const Analytics = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState("30d");
  const [selectedZone, setSelectedZone] = useState("all");

  const riskTrends = [
    { date: "2024-01-01", sector7a: 45, sector7b: 32, sector8a: 18, sector8b: 28 },
    { date: "2024-01-02", sector7a: 48, sector7b: 35, sector8a: 20, sector8b: 30 },
    { date: "2024-01-03", sector7a: 52, sector7b: 38, sector8a: 22, sector8b: 33 },
    { date: "2024-01-04", sector7a: 55, sector7b: 40, sector8a: 25, sector8b: 35 },
    { date: "2024-01-05", sector7a: 58, sector7b: 42, sector8a: 28, sector8b: 38 },
    { date: "2024-01-06", sector7a: 62, sector7b: 45, sector8a: 30, sector8b: 40 },
    { date: "2024-01-07", sector7a: 65, sector7b: 48, sector8a: 32, sector8b: 42 },
    { date: "2024-01-08", sector7a: 68, sector7b: 50, sector8a: 35, sector8b: 45 },
    { date: "2024-01-09", sector7a: 70, sector7b: 52, sector8a: 38, sector8b: 48 },
    { date: "2024-01-10", sector7a: 73, sector7b: 55, sector8a: 40, sector8b: 50 }
  ];

  const sensorFailures = [
    { sensor: "TEMP-001", zone: "Sector 7-A", failureType: "Connection Lost", duration: "2h 15m", impact: "High" },
    { sensor: "VIB-003", zone: "Sector 7-B", failureType: "Battery Depleted", duration: "4h 30m", impact: "Medium" },
    { sensor: "RAIN-002", zone: "Sector 8-A", failureType: "Data Corruption", duration: "1h 45m", impact: "Low" },
    { sensor: "STRAIN-005", zone: "Sector 8-B", failureType: "Calibration Drift", duration: "6h 20m", impact: "High" },
    { sensor: "TEMP-007", zone: "Sector 7-A", failureType: "Hardware Malfunction", duration: "12h 10m", impact: "Critical" }
  ];

  const modelPerformance = [
    { metric: "Overall Accuracy", value: "94.2%", trend: "up", change: "+2.1%" },
    { metric: "Precision", value: "91.8%", trend: "up", change: "+1.5%" },
    { metric: "Recall", value: "96.5%", trend: "up", change: "+0.8%" },
    { metric: "F1 Score", value: "94.1%", trend: "up", change: "+1.2%" },
    { metric: "False Positive Rate", value: "3.2%", trend: "down", change: "-0.5%" },
    { metric: "Prediction Latency", value: "1.2s", trend: "down", change: "-0.3s" }
  ];

  const getTrendIcon = (trend: string) => {
    return trend === "up" ? <TrendingUp className="h-4 w-4 text-green-500" /> : <TrendingDown className="h-4 w-4 text-red-500" />;
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case "Critical": return "destructive";
      case "High": return "destructive";
      case "Medium": return "secondary";
      case "Low": return "default";
      default: return "default";
    }
  };

  return (
    <Layout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-mono font-bold">ANALYTICS</h1>
            <p className="text-sm text-muted-foreground font-mono">
              Risk trend analysis, sensor failure patterns, and model performance metrics
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Calendar className="h-4 w-4 mr-2" />
              Last 30 Days
            </Button>
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export Data
            </Button>
            <Button variant="outline" size="sm">
              <RefreshCw className="h-4 w-4 mr-2" />
              Refresh
            </Button>
          </div>
        </div>

        {/* Controls */}
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-mono">ANALYTICS CONTROLS</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-sm font-mono">TIMEFRAME:</span>
                <Select value={selectedTimeframe} onValueChange={setSelectedTimeframe}>
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="7d">7 Days</SelectItem>
                    <SelectItem value="30d">30 Days</SelectItem>
                    <SelectItem value="90d">90 Days</SelectItem>
                    <SelectItem value="1y">1 Year</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-sm font-mono">ZONE:</span>
                <Select value={selectedZone} onValueChange={setSelectedZone}>
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Zones</SelectItem>
                    <SelectItem value="sector-7a">Sector 7-A</SelectItem>
                    <SelectItem value="sector-7b">Sector 7-B</SelectItem>
                    <SelectItem value="sector-8a">Sector 8-A</SelectItem>
                    <SelectItem value="sector-8b">Sector 8-B</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Analytics Tabs */}
        <Tabs defaultValue="trends" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="trends">Risk Trends</TabsTrigger>
            <TabsTrigger value="failures">Sensor Failures</TabsTrigger>
            <TabsTrigger value="performance">Model Performance</TabsTrigger>
          </TabsList>

          {/* Risk Trend Analysis */}
          <TabsContent value="trends" className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm font-mono flex items-center gap-2">
                    <TrendingUp className="h-4 w-4" />
                    RISK TREND ANALYSIS
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {riskTrends.slice(-5).map((trend, index) => (
                      <div key={index} className="p-3 bg-muted border border-border rounded">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-mono text-sm font-bold">{trend.date}</span>
                          <Badge variant="outline" className="text-xs">
                            Daily Average
                          </Badge>
                        </div>
                        <div className="grid grid-cols-4 gap-2 text-xs font-mono">
                          <div className="text-center">
                            <div className="text-red-500 font-bold">{trend.sector7a}%</div>
                            <div className="text-muted-foreground">7-A</div>
                          </div>
                          <div className="text-center">
                            <div className="text-yellow-500 font-bold">{trend.sector7b}%</div>
                            <div className="text-muted-foreground">7-B</div>
                          </div>
                          <div className="text-center">
                            <div className="text-green-500 font-bold">{trend.sector8a}%</div>
                            <div className="text-muted-foreground">8-A</div>
                          </div>
                          <div className="text-center">
                            <div className="text-yellow-500 font-bold">{trend.sector8b}%</div>
                            <div className="text-muted-foreground">8-B</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-sm font-mono flex items-center gap-2">
                    <BarChart3 className="h-4 w-4" />
                    TREND SUMMARY
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-accent-danger/10 border border-accent-danger/20 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <AlertTriangle className="h-4 w-4 text-accent-danger" />
                        <span className="font-mono text-sm font-bold text-accent-danger">
                          HIGHEST RISK ZONE
                        </span>
                      </div>
                      <p className="font-mono text-sm">Sector 7-A showing consistent upward trend</p>
                      <p className="font-mono text-xs text-muted-foreground mt-1">
                        Risk increased from 45% to 73% over 10 days
                      </p>
                    </div>
                    
                    <div className="p-4 bg-accent-warning/10 border border-accent-warning/20 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <TrendingUp className="h-4 w-4 text-accent-warning" />
                        <span className="font-mono text-sm font-bold text-accent-warning">
                          MODERATE CONCERN
                        </span>
                      </div>
                      <p className="font-mono text-sm">Sectors 7-B and 8-B showing gradual increase</p>
                      <p className="font-mono text-xs text-muted-foreground mt-1">
                        Monitor closely for threshold breaches
                      </p>
                    </div>
                    
                    <div className="p-4 bg-accent-success/10 border border-accent-success/20 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <TrendingDown className="h-4 w-4 text-accent-success" />
                        <span className="font-mono text-sm font-bold text-accent-success">
                          STABLE ZONE
                        </span>
                      </div>
                      <p className="font-mono text-sm">Sector 8-A maintaining low risk levels</p>
                      <p className="font-mono text-xs text-muted-foreground mt-1">
                        Continue current monitoring protocols
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Sensor Failure Patterns */}
          <TabsContent value="failures" className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm font-mono flex items-center gap-2">
                    <Activity className="h-4 w-4" />
                    SENSOR FAILURE PATTERNS
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {sensorFailures.map((failure, index) => (
                      <div key={index} className="p-3 border border-border rounded">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-sm font-bold">{failure.sensor}</span>
                            <Badge variant="outline" className="text-xs">{failure.zone}</Badge>
                          </div>
                          <Badge variant={getImpactColor(failure.impact)} className="text-xs">
                            {failure.impact}
                          </Badge>
                        </div>
                        <div className="space-y-1 text-xs font-mono text-muted-foreground">
                          <div>Type: {failure.failureType}</div>
                          <div>Duration: {failure.duration}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-sm font-mono flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4" />
                    FAILURE ANALYSIS
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-muted border border-border rounded">
                      <h4 className="font-mono text-sm font-bold mb-2">FAILURE TYPES</h4>
                      <div className="space-y-2 text-xs font-mono">
                        <div className="flex justify-between">
                          <span>Connection Lost:</span>
                          <span>40%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Battery Depleted:</span>
                          <span>25%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Hardware Malfunction:</span>
                          <span>20%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Data Corruption:</span>
                          <span>10%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Calibration Drift:</span>
                          <span>5%</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-accent border border-border rounded">
                      <h4 className="font-mono text-sm font-bold mb-2">AVERAGE DOWNTIME</h4>
                      <div className="text-center">
                        <p className="font-mono text-2xl font-bold text-status-critical">4.2h</p>
                        <p className="font-mono text-xs text-muted-foreground">
                          Mean time to resolution
                        </p>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-card border border-border rounded">
                      <h4 className="font-mono text-sm font-bold mb-2">RECOMMENDATIONS</h4>
                      <div className="space-y-1 text-xs font-mono text-muted-foreground">
                        <div>• Implement redundant sensor networks</div>
                        <div>• Schedule proactive battery replacements</div>
                        <div>• Enhance connection monitoring</div>
                        <div>• Regular calibration checks</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Model Performance Metrics */}
          <TabsContent value="performance" className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm font-mono flex items-center gap-2">
                    <Zap className="h-4 w-4" />
                    MODEL PERFORMANCE METRICS
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {modelPerformance.map((metric, index) => (
                      <div key={index} className="p-3 bg-muted border border-border rounded">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-mono text-sm font-bold">{metric.metric}</span>
                          {getTrendIcon(metric.trend)}
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-lg font-bold">{metric.value}</span>
                          <Badge 
                            variant={metric.trend === "up" ? "default" : "secondary"}
                            className="text-xs"
                          >
                            {metric.change}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-sm font-mono flex items-center gap-2">
                    <BarChart3 className="h-4 w-4" />
                    PERFORMANCE SUMMARY
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-green-500/10 border border-green-500/20 rounded">
                      <div className="text-center">
                        <p className="font-mono text-3xl font-bold text-green-500">94.2%</p>
                        <p className="font-mono text-sm font-bold text-green-500">OVERALL ACCURACY</p>
                        <p className="font-mono text-xs text-muted-foreground mt-1">
                          Exceeding target of 90%
                        </p>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-muted border border-border rounded">
                      <h4 className="font-mono text-sm font-bold mb-2">PERFORMANCE TRENDS</h4>
                      <div className="space-y-2 text-xs font-mono">
                        <div className="flex justify-between">
                          <span>Accuracy Improvement:</span>
                          <span className="text-green-500">+2.1%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Latency Reduction:</span>
                          <span className="text-green-500">-0.3s</span>
                        </div>
                        <div className="flex justify-between">
                          <span>False Positive Rate:</span>
                          <span className="text-green-500">-0.5%</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-accent border border-border rounded">
                      <h4 className="font-mono text-sm font-bold mb-2">MODEL HEALTH</h4>
                      <div className="text-center">
                        <p className="font-mono text-lg font-bold text-status-normal">EXCELLENT</p>
                        <p className="font-mono text-xs text-muted-foreground">
                          All metrics within optimal ranges
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Analytics;
