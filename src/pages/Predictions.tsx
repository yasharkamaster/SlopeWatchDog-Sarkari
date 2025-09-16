import { useState } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { 
  TrendingUp, 
  Download, 
  Calendar, 
  Clock, 
  AlertTriangle,
  BarChart3,
  FileText
} from "lucide-react";

const Predictions = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState("24h");
  const [selectedZone, setSelectedZone] = useState("all");

  const predictions = [
    {
      zone: "Sector 7-A",
      risk: "HIGH",
      probability: 73,
      timeframe: "2-4 hours",
      confidence: 94,
      trend: "increasing",
      factors: ["High rainfall", "Increased strain", "Temperature spike"]
    },
    {
      zone: "Sector 7-B", 
      risk: "MEDIUM",
      probability: 45,
      timeframe: "6-12 hours",
      confidence: 87,
      trend: "stable",
      factors: ["Moderate rainfall", "Stable strain", "Normal temperature"]
    },
    {
      zone: "Sector 8-A",
      risk: "LOW", 
      probability: 12,
      timeframe: "24-48 hours",
      confidence: 91,
      trend: "decreasing",
      factors: ["Low rainfall", "Decreasing strain", "Cooling temperature"]
    },
    {
      zone: "Sector 8-B",
      risk: "MEDIUM",
      probability: 38,
      timeframe: "8-16 hours", 
      confidence: 89,
      trend: "stable",
      factors: ["Moderate rainfall", "Stable strain", "Normal temperature"]
    }
  ];

  const timeframes = [
    { value: "1h", label: "1 Hour" },
    { value: "6h", label: "6 Hours" },
    { value: "24h", label: "24 Hours" },
    { value: "72h", label: "3 Days" },
    { value: "168h", label: "1 Week" }
  ];

  const handleDownloadReport = () => {
    console.log("Downloading prediction report...");
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "HIGH": return "text-red-500";
      case "MEDIUM": return "text-yellow-500";
      case "LOW": return "text-green-500";
      default: return "text-gray-500";
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "increasing": return "↗";
      case "decreasing": return "↘";
      case "stable": return "→";
      default: return "→";
    }
  };

  return (
    <Layout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-mono font-bold">PREDICTIONS</h1>
            <p className="text-sm text-muted-foreground font-mono">
              Zone-wise forecast analysis and probability modeling
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Calendar className="h-4 w-4 mr-2" />
              Last Updated: 14:23
            </Button>
            <Button onClick={handleDownloadReport} size="sm">
              <Download className="h-4 w-4 mr-2" />
              Download Report
            </Button>
          </div>
        </div>

        {/* Controls */}
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-mono">PREDICTION CONTROLS</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-sm font-mono">TIMEFRAME:</span>
                <div className="flex gap-1">
                  {timeframes.map((tf) => (
                    <Button
                      key={tf.value}
                      variant={selectedTimeframe === tf.value ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedTimeframe(tf.value)}
                    >
                      {tf.label}
                    </Button>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-sm font-mono">ZONE:</span>
                <Button
                  variant={selectedZone === "all" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedZone("all")}
                >
                  All Zones
                </Button>
                {predictions.map((pred) => (
                  <Button
                    key={pred.zone}
                    variant={selectedZone === pred.zone ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedZone(pred.zone)}
                  >
                    {pred.zone}
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Zone-wise Forecast Table */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-mono flex items-center gap-2">
                  <BarChart3 className="h-4 w-4" />
                  ZONE-WISE FORECAST TABLE
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="font-mono text-xs">ZONE</TableHead>
                      <TableHead className="font-mono text-xs">RISK LEVEL</TableHead>
                      <TableHead className="font-mono text-xs">PROBABILITY</TableHead>
                      <TableHead className="font-mono text-xs">TIMEFRAME</TableHead>
                      <TableHead className="font-mono text-xs">CONFIDENCE</TableHead>
                      <TableHead className="font-mono text-xs">TREND</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {predictions.map((pred) => (
                      <TableRow key={pred.zone}>
                        <TableCell className="font-mono text-sm font-bold">
                          {pred.zone}
                        </TableCell>
                        <TableCell>
                          <Badge 
                            variant={pred.risk === 'HIGH' ? 'destructive' : 
                                   pred.risk === 'MEDIUM' ? 'secondary' : 'default'}
                            className="text-xs"
                          >
                            {pred.risk}
                          </Badge>
                        </TableCell>
                        <TableCell className="font-mono text-sm">
                          <span className={getRiskColor(pred.risk)}>
                            {pred.probability}%
                          </span>
                        </TableCell>
                        <TableCell className="font-mono text-sm">
                          {pred.timeframe}
                        </TableCell>
                        <TableCell className="font-mono text-sm">
                          {pred.confidence}%
                        </TableCell>
                        <TableCell className="font-mono text-sm">
                          <span className="flex items-center gap-1">
                            {getTrendIcon(pred.trend)}
                            <span className="capitalize">{pred.trend}</span>
                          </span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>

          {/* Probability vs Time Graph */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-mono flex items-center gap-2">
                  <TrendingUp className="h-4 w-4" />
                  PROBABILITY VS TIME
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {predictions.map((pred) => (
                    <div key={pred.zone} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs font-bold">{pred.zone}</span>
                        <span className={`font-mono text-xs ${getRiskColor(pred.risk)}`}>
                          {pred.probability}%
                        </span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${
                            pred.risk === 'HIGH' ? 'bg-red-500' : 
                            pred.risk === 'MEDIUM' ? 'bg-yellow-500' : 'bg-green-500'
                          }`}
                          style={{ width: `${pred.probability}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 p-3 bg-accent-danger/10 border border-accent-danger/20 rounded-lg">
                  <div className="text-center">
                    <p className="font-mono text-lg font-bold text-accent-danger">73%</p>
                    <p className="font-mono text-xs text-muted-foreground uppercase">
                      Highest Risk Probability
                    </p>
                    <p className="font-mono text-xs text-accent-danger mt-1 font-bold">
                      Sector 7-A - Immediate Action Required
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Detailed Analysis */}
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-mono flex items-center gap-2">
              <FileText className="h-4 w-4" />
              DETAILED RISK FACTORS
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {predictions.map((pred) => (
                <Card key={pred.zone} className="p-3">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="font-mono text-sm font-bold">{pred.zone}</h4>
                      <Badge 
                        variant={pred.risk === 'HIGH' ? 'destructive' : 
                               pred.risk === 'MEDIUM' ? 'secondary' : 'default'}
                        className="text-xs"
                      >
                        {pred.risk}
                      </Badge>
                    </div>
                    <div className="space-y-1">
                      {pred.factors.map((factor, index) => (
                        <div key={index} className="text-xs font-mono text-muted-foreground">
                          • {factor}
                        </div>
                      ))}
                    </div>
                    <div className="pt-2 border-t border-border">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span>Confidence:</span>
                        <span>{pred.confidence}%</span>
                      </div>
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span>Timeframe:</span>
                        <span>{pred.timeframe}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Action Items */}
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-mono flex items-center gap-2">
              <AlertTriangle className="h-4 w-4" />
              RECOMMENDED ACTIONS
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="p-3 bg-destructive/10 border border-destructive/20 rounded">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4 text-destructive" />
                  <span className="font-mono text-sm font-bold text-destructive">
                    IMMEDIATE ACTION REQUIRED
                  </span>
                </div>
                <p className="font-mono text-xs text-muted-foreground mt-1">
                  Sector 7-A shows 73% rockfall probability within 2-4 hours. Evacuate personnel immediately.
                </p>
              </div>
              
              <div className="p-3 bg-yellow-500/10 border border-yellow-500/20 rounded">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-yellow-500" />
                  <span className="font-mono text-sm font-bold text-yellow-500">
                    MONITOR CLOSELY
                  </span>
                </div>
                <p className="font-mono text-xs text-muted-foreground mt-1">
                  Sectors 7-B and 8-B show medium risk levels. Increase monitoring frequency.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Predictions;
