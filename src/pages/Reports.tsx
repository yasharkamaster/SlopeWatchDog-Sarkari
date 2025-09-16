import { useState } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  Download, 
  Calendar as CalendarIcon,
  CheckSquare,
  Square,
  Settings,
  BarChart3,
  MapPin
} from "lucide-react";
import { format } from "date-fns";

const Reports = () => {
  const [selectedZones, setSelectedZones] = useState<string[]>([]);
  const [dateRange, setDateRange] = useState<{ from: Date | undefined; to: Date | undefined }>({
    from: undefined,
    to: undefined
  });
  const [reportType, setReportType] = useState("comprehensive");
  const [exportFormat, setExportFormat] = useState("pdf");

  const zones = [
    { id: "zone-1", name: "Sector 7-A", status: "active" },
    { id: "zone-2", name: "Sector 7-B", status: "active" },
    { id: "zone-3", name: "Sector 8-A", status: "active" },
    { id: "zone-4", name: "Sector 8-B", status: "active" },
    { id: "zone-5", name: "Sector 9-A", status: "inactive" },
    { id: "zone-6", name: "Sector 9-B", status: "inactive" }
  ];

  const reportTypes = [
    { value: "comprehensive", label: "Comprehensive Risk Report", description: "Complete analysis with all metrics" },
    { value: "summary", label: "Executive Summary", description: "High-level overview for management" },
    { value: "technical", label: "Technical Analysis", description: "Detailed sensor data and predictions" },
    { value: "alerts", label: "Alerts Report", description: "Alert history and resolution tracking" },
    { value: "predictions", label: "Predictions Report", description: "ML model performance and forecasts" }
  ];

  const exportFormats = [
    { value: "pdf", label: "PDF Document", icon: FileText },
    { value: "csv", label: "CSV Data", icon: BarChart3 },
    { value: "excel", label: "Excel Spreadsheet", icon: BarChart3 },
    { value: "json", label: "JSON Data", icon: Settings }
  ];

  const handleZoneToggle = (zoneId: string) => {
    if (selectedZones.includes(zoneId)) {
      setSelectedZones(selectedZones.filter(id => id !== zoneId));
    } else {
      setSelectedZones([...selectedZones, zoneId]);
    }
  };

  const handleSelectAllZones = () => {
    if (selectedZones.length === zones.length) {
      setSelectedZones([]);
    } else {
      setSelectedZones(zones.map(zone => zone.id));
    }
  };

  const handleGenerateReport = () => {
    console.log("Generating report:", {
      zones: selectedZones,
      dateRange,
      reportType,
      exportFormat
    });
  };

  const handleQuickReport = (type: string) => {
    console.log("Quick report:", type);
  };

  return (
    <Layout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-mono font-bold">REPORTS</h1>
            <p className="text-sm text-muted-foreground font-mono">
              Custom report generator with flexible export options
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Download Template
            </Button>
          </div>
        </div>

        {/* Quick Reports */}
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-mono">QUICK REPORTS</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
              <Button 
                variant="outline" 
                className="h-auto p-4 flex flex-col items-center gap-2"
                onClick={() => handleQuickReport("daily")}
              >
                <CalendarIcon className="h-6 w-6" />
                <span className="font-mono text-xs">Daily Summary</span>
              </Button>
              
              <Button 
                variant="outline" 
                className="h-auto p-4 flex flex-col items-center gap-2"
                onClick={() => handleQuickReport("weekly")}
              >
                <BarChart3 className="h-6 w-6" />
                <span className="font-mono text-xs">Weekly Analysis</span>
              </Button>
              
              <Button 
                variant="outline" 
                className="h-auto p-4 flex flex-col items-center gap-2"
                onClick={() => handleQuickReport("monthly")}
              >
                <FileText className="h-6 w-6" />
                <span className="font-mono text-xs">Monthly Report</span>
              </Button>
              
              <Button 
                variant="outline" 
                className="h-auto p-4 flex flex-col items-center gap-2"
                onClick={() => handleQuickReport("alerts")}
              >
                <MapPin className="h-6 w-6" />
                <span className="font-mono text-xs">Alerts Summary</span>
              </Button>
              
              <Button 
                variant="outline" 
                className="h-auto p-4 flex flex-col items-center gap-2"
                onClick={() => handleQuickReport("predictions")}
              >
                <Settings className="h-6 w-6" />
                <span className="font-mono text-xs">Predictions</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Custom Report Generator */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Report Configuration */}
          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-mono">CUSTOM REPORT GENERATOR</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Zone Selection */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm font-mono font-bold">SELECT ZONES</label>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={handleSelectAllZones}
                  >
                    {selectedZones.length === zones.length ? (
                      <CheckSquare className="h-4 w-4 mr-2" />
                    ) : (
                      <Square className="h-4 w-4 mr-2" />
                    )}
                    {selectedZones.length === zones.length ? 'Deselect All' : 'Select All'}
                  </Button>
                </div>
                <div className="space-y-2 max-h-48 overflow-y-auto border border-border rounded p-3">
                  {zones.map((zone) => (
                    <div key={zone.id} className="flex items-center gap-2">
                      <Checkbox
                        checked={selectedZones.includes(zone.id)}
                        onCheckedChange={() => handleZoneToggle(zone.id)}
                      />
                      <span className="font-mono text-sm">{zone.name}</span>
                      <Badge 
                        variant={zone.status === 'active' ? 'default' : 'secondary'}
                        className="text-xs"
                      >
                        {zone.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>

              {/* Date Range Selection */}
              <div>
                <label className="text-sm font-mono font-bold mb-3 block">SELECT DATE RANGE</label>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="text-xs font-mono text-muted-foreground">FROM</label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" className="w-full justify-start text-left font-mono text-sm">
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {dateRange.from ? format(dateRange.from, "PPP") : "Select date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={dateRange.from}
                          onSelect={(date) => setDateRange(prev => ({ ...prev, from: date }))}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  
                  <div>
                    <label className="text-xs font-mono text-muted-foreground">TO</label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" className="w-full justify-start text-left font-mono text-sm">
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {dateRange.to ? format(dateRange.to, "PPP") : "Select date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={dateRange.to}
                          onSelect={(date) => setDateRange(prev => ({ ...prev, to: date }))}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>
              </div>

              {/* Report Type */}
              <div>
                <label className="text-sm font-mono font-bold mb-3 block">REPORT TYPE</label>
                <Select value={reportType} onValueChange={setReportType}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {reportTypes.map((type) => (
                      <SelectItem key={type.value} value={type.value}>
                        <div>
                          <div className="font-mono text-sm">{type.label}</div>
                          <div className="text-xs text-muted-foreground">{type.description}</div>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Export Format */}
              <div>
                <label className="text-sm font-mono font-bold mb-3 block">EXPORT FORMAT</label>
                <div className="grid grid-cols-2 gap-2">
                  {exportFormats.map((format) => {
                    const Icon = format.icon;
                    return (
                      <Button
                        key={format.value}
                        variant={exportFormat === format.value ? "default" : "outline"}
                        className="flex items-center gap-2"
                        onClick={() => setExportFormat(format.value)}
                      >
                        <Icon className="h-4 w-4" />
                        <span className="font-mono text-xs">{format.label}</span>
                      </Button>
                    );
                  })}
                </div>
              </div>

              {/* Generate Button */}
              <Button 
                className="w-full" 
                onClick={handleGenerateReport}
                disabled={selectedZones.length === 0 || !dateRange.from || !dateRange.to}
              >
                <FileText className="h-4 w-4 mr-2" />
                Generate Custom Report
              </Button>
            </CardContent>
          </Card>

          {/* Report Preview */}
          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-mono">REPORT PREVIEW</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-muted border border-border rounded">
                  <h4 className="font-mono text-sm font-bold mb-2">REPORT CONFIGURATION</h4>
                  <div className="space-y-2 text-xs font-mono">
                    <div className="flex justify-between">
                      <span>Zones Selected:</span>
                      <span>{selectedZones.length}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Date Range:</span>
                      <span>
                        {dateRange.from && dateRange.to 
                          ? `${format(dateRange.from, "MMM dd")} - ${format(dateRange.to, "MMM dd")}`
                          : "Not selected"
                        }
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Report Type:</span>
                      <span className="capitalize">{reportType}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Export Format:</span>
                      <span className="uppercase">{exportFormat}</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-accent border border-border rounded">
                  <h4 className="font-mono text-sm font-bold mb-2">ESTIMATED CONTENT</h4>
                  <div className="space-y-1 text-xs font-mono text-muted-foreground">
                    <div>• Executive Summary</div>
                    <div>• Risk Assessment by Zone</div>
                    <div>• Sensor Data Analysis</div>
                    <div>• Alert History</div>
                    <div>• Prediction Accuracy</div>
                    <div>• Recommendations</div>
                  </div>
                </div>

                <div className="p-4 bg-card border border-border rounded">
                  <h4 className="font-mono text-sm font-bold mb-2">RECENT REPORTS</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span>Daily Summary - Jan 15, 2024</span>
                      <Button size="sm" variant="outline">
                        <Download className="h-3 w-3" />
                      </Button>
                    </div>
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span>Weekly Analysis - Jan 8-14, 2024</span>
                      <Button size="sm" variant="outline">
                        <Download className="h-3 w-3" />
                      </Button>
                    </div>
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span>Monthly Report - Dec 2023</span>
                      <Button size="sm" variant="outline">
                        <Download className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Report Templates */}
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-mono">REPORT TEMPLATES</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {reportTypes.map((type) => (
                <Card key={type.value} className="p-4">
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-mono text-sm font-bold">{type.label}</h4>
                      <p className="text-xs text-muted-foreground font-mono">{type.description}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="flex-1">
                        <FileText className="h-3 w-3 mr-2" />
                        Preview
                      </Button>
                      <Button size="sm" className="flex-1">
                        <Download className="h-3 w-3 mr-2" />
                        Generate
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Reports;
