import { useState } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  AlertTriangle, 
  Search, 
  Filter, 
  CheckCircle, 
  Clock, 
  Archive,
  Download,
  MoreHorizontal,
  Eye,
  EyeOff
} from "lucide-react";

const Alerts = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPriority, setSelectedPriority] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [selectedAlerts, setSelectedAlerts] = useState<string[]>([]);
  const [showArchived, setShowArchived] = useState(false);

  const alerts = [
    {
      id: "alert-1",
      title: "High Rockfall Risk Detected",
      zone: "Sector 7-A",
      priority: "HIGH",
      status: "active",
      timestamp: "2024-01-15 14:23:45",
      description: "Strain sensors detected significant movement. Rockfall probability at 73%.",
      acknowledged: false,
      resolved: false
    },
    {
      id: "alert-2", 
      title: "Sensor Network Disruption",
      zone: "Sector 7-B",
      priority: "MEDIUM",
      status: "acknowledged",
      timestamp: "2024-01-15 13:45:12",
      description: "Temperature sensor offline. Network connectivity issues detected.",
      acknowledged: true,
      resolved: false
    },
    {
      id: "alert-3",
      title: "Rainfall Threshold Exceeded", 
      zone: "Sector 8-A",
      priority: "MEDIUM",
      status: "resolved",
      timestamp: "2024-01-15 12:30:00",
      description: "24-hour rainfall exceeded 50mm threshold. Risk assessment updated.",
      acknowledged: true,
      resolved: true
    },
    {
      id: "alert-4",
      title: "Critical Temperature Spike",
      zone: "Sector 8-B", 
      priority: "HIGH",
      status: "active",
      timestamp: "2024-01-15 11:15:30",
      description: "Temperature increased by 8°C in 2 hours. Thermal expansion risk.",
      acknowledged: false,
      resolved: false
    },
    {
      id: "alert-5",
      title: "Vibration Anomaly Detected",
      zone: "Sector 7-A",
      priority: "LOW", 
      status: "archived",
      timestamp: "2024-01-14 16:20:15",
      description: "Minor vibration detected. Within normal parameters.",
      acknowledged: true,
      resolved: true
    }
  ];

  const filteredAlerts = alerts.filter(alert => {
    const matchesSearch = alert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         alert.zone.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPriority = selectedPriority === "all" || alert.priority === selectedPriority;
    const matchesStatus = selectedStatus === "all" || alert.status === selectedStatus;
    const matchesArchive = showArchived || alert.status !== "archived";
    
    return matchesSearch && matchesPriority && matchesStatus && matchesArchive;
  });

  const handleSelectAlert = (alertId: string) => {
    if (selectedAlerts.includes(alertId)) {
      setSelectedAlerts(selectedAlerts.filter(id => id !== alertId));
    } else {
      setSelectedAlerts([...selectedAlerts, alertId]);
    }
  };

  const handleSelectAll = () => {
    if (selectedAlerts.length === filteredAlerts.length) {
      setSelectedAlerts([]);
    } else {
      setSelectedAlerts(filteredAlerts.map(alert => alert.id));
    }
  };

  const handleBulkAcknowledge = () => {
    console.log("Bulk acknowledge:", selectedAlerts);
    setSelectedAlerts([]);
  };

  const handleBulkResolve = () => {
    console.log("Bulk resolve:", selectedAlerts);
    setSelectedAlerts([]);
  };

  const handleBulkArchive = () => {
    console.log("Bulk archive:", selectedAlerts);
    setSelectedAlerts([]);
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "HIGH": return "destructive";
      case "MEDIUM": return "secondary";
      case "LOW": return "default";
      default: return "default";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "destructive";
      case "acknowledged": return "secondary";
      case "resolved": return "default";
      case "archived": return "outline";
      default: return "default";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "active": return <AlertTriangle className="h-4 w-4" />;
      case "acknowledged": return <Clock className="h-4 w-4" />;
      case "resolved": return <CheckCircle className="h-4 w-4" />;
      case "archived": return <Archive className="h-4 w-4" />;
      default: return <AlertTriangle className="h-4 w-4" />;
    }
  };

  return (
    <Layout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-mono font-bold">ALERTS</h1>
            <p className="text-sm text-muted-foreground font-mono">
              Real-time alert management and historical archive
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export Alerts
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setShowArchived(!showArchived)}
            >
              {showArchived ? <EyeOff className="h-4 w-4 mr-2" /> : <Eye className="h-4 w-4 mr-2" />}
              {showArchived ? 'Hide Archived' : 'Show Archived'}
            </Button>
          </div>
        </div>

        {/* Filters and Search */}
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-mono">FILTERS & SEARCH</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search alerts..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              
              <Select value={selectedPriority} onValueChange={setSelectedPriority}>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Priority</SelectItem>
                  <SelectItem value="HIGH">High</SelectItem>
                  <SelectItem value="MEDIUM">Medium</SelectItem>
                  <SelectItem value="LOW">Low</SelectItem>
                </SelectContent>
              </Select>

              <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="acknowledged">Acknowledged</SelectItem>
                  <SelectItem value="resolved">Resolved</SelectItem>
                  <SelectItem value="archived">Archived</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Bulk Actions */}
        {selectedAlerts.length > 0 && (
          <Card>
            <CardContent className="pt-4">
              <div className="flex items-center gap-4">
                <span className="font-mono text-sm">
                  {selectedAlerts.length} alert(s) selected
                </span>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" onClick={handleBulkAcknowledge}>
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Acknowledge
                  </Button>
                  <Button size="sm" variant="outline" onClick={handleBulkResolve}>
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Resolve
                  </Button>
                  <Button size="sm" variant="outline" onClick={handleBulkArchive}>
                    <Archive className="h-4 w-4 mr-2" />
                    Archive
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Alerts Table */}
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-mono">ALERTS LIST</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-12">
                    <Checkbox
                      checked={selectedAlerts.length === filteredAlerts.length && filteredAlerts.length > 0}
                      onCheckedChange={handleSelectAll}
                    />
                  </TableHead>
                  <TableHead className="font-mono text-xs">STATUS</TableHead>
                  <TableHead className="font-mono text-xs">PRIORITY</TableHead>
                  <TableHead className="font-mono text-xs">TITLE</TableHead>
                  <TableHead className="font-mono text-xs">ZONE</TableHead>
                  <TableHead className="font-mono text-xs">TIMESTAMP</TableHead>
                  <TableHead className="font-mono text-xs">ACTIONS</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredAlerts.map((alert) => (
                  <TableRow key={alert.id}>
                    <TableCell>
                      <Checkbox
                        checked={selectedAlerts.includes(alert.id)}
                        onCheckedChange={() => handleSelectAlert(alert.id)}
                      />
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        {getStatusIcon(alert.status)}
                        <Badge variant={getStatusColor(alert.status)} className="text-xs">
                          {alert.status.toUpperCase()}
                        </Badge>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant={getPriorityColor(alert.priority)} className="text-xs">
                        {alert.priority}
                      </Badge>
                    </TableCell>
                    <TableCell className="font-mono text-sm font-bold">
                      {alert.title}
                    </TableCell>
                    <TableCell className="font-mono text-sm">
                      {alert.zone}
                    </TableCell>
                    <TableCell className="font-mono text-sm">
                      {alert.timestamp}
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-1">
                        {!alert.acknowledged && (
                          <Button size="sm" variant="outline">
                            <CheckCircle className="h-3 w-3" />
                          </Button>
                        )}
                        {!alert.resolved && (
                          <Button size="sm" variant="outline">
                            <CheckCircle className="h-3 w-3" />
                          </Button>
                        )}
                        <Button size="sm" variant="outline">
                          <MoreHorizontal className="h-3 w-3" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Alert Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="border-accent-danger/20 bg-accent-danger/5">
            <CardContent className="pt-4">
              <div className="text-center">
                <div className="text-2xl font-mono font-bold text-accent-danger">2</div>
                <div className="text-xs font-mono text-muted-foreground">ACTIVE ALERTS</div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-accent-warning/20 bg-accent-warning/5">
            <CardContent className="pt-4">
              <div className="text-center">
                <div className="text-2xl font-mono font-bold text-accent-warning">1</div>
                <div className="text-xs font-mono text-muted-foreground">ACKNOWLEDGED</div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-accent-success/20 bg-accent-success/5">
            <CardContent className="pt-4">
              <div className="text-center">
                <div className="text-2xl font-mono font-bold text-accent-success">1</div>
                <div className="text-xs font-mono text-muted-foreground">RESOLVED</div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-accent-info/20 bg-accent-info/5">
            <CardContent className="pt-4">
              <div className="text-center">
                <div className="text-2xl font-mono font-bold text-accent-info">1</div>
                <div className="text-xs font-mono text-muted-foreground">ARCHIVED</div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Historical Archive */}
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-mono flex items-center gap-2">
              <Archive className="h-4 w-4" />
              HISTORICAL ALERTS ARCHIVE
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="recent" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="recent">Recent (24h)</TabsTrigger>
                <TabsTrigger value="week">This Week</TabsTrigger>
                <TabsTrigger value="month">This Month</TabsTrigger>
                <TabsTrigger value="all">All Time</TabsTrigger>
              </TabsList>
              
              <TabsContent value="recent" className="mt-4">
                <div className="text-center py-8 text-muted-foreground">
                  <Archive className="h-8 w-8 mx-auto mb-2" />
                  <p className="font-mono text-sm">Recent alerts archive</p>
                </div>
              </TabsContent>
              
              <TabsContent value="week" className="mt-4">
                <div className="text-center py-8 text-muted-foreground">
                  <Archive className="h-8 w-8 mx-auto mb-2" />
                  <p className="font-mono text-sm">Weekly alerts archive</p>
                </div>
              </TabsContent>
              
              <TabsContent value="month" className="mt-4">
                <div className="text-center py-8 text-muted-foreground">
                  <Archive className="h-8 w-8 mx-auto mb-2" />
                  <p className="font-mono text-sm">Monthly alerts archive</p>
                </div>
              </TabsContent>
              
              <TabsContent value="all" className="mt-4">
                <div className="text-center py-8 text-muted-foreground">
                  <Archive className="h-8 w-8 mx-auto mb-2" />
                  <p className="font-mono text-sm">Complete alerts archive</p>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Alerts;
