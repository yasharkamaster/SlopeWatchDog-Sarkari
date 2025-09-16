import { useState } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { 
  Camera, 
  Play, 
  Pause, 
  Square, 
  Download, 
  Maximize2,
  Video,
  Wifi,
  WifiOff,
  Circle,
  Camera as CameraIcon
} from "lucide-react";

const LiveFootage = () => {
  const [selectedDrone, setSelectedDrone] = useState("drone-1");
  const [isPlaying, setIsPlaying] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState("connected");

  const drones = [
    { 
      id: "drone-1", 
      name: "Drone Alpha", 
      location: "Sector 7-A", 
      status: "online",
      battery: 85,
      signal: "strong"
    },
    { 
      id: "drone-2", 
      name: "Drone Beta", 
      location: "Sector 7-B", 
      status: "online",
      battery: 72,
      signal: "medium"
    },
    { 
      id: "drone-3", 
      name: "Drone Gamma", 
      location: "Sector 8-A", 
      status: "offline",
      battery: 0,
      signal: "none"
    },
    { 
      id: "drone-4", 
      name: "Drone Delta", 
      location: "Sector 8-B", 
      status: "online",
      battery: 91,
      signal: "strong"
    },
  ];

  const selectedDroneData = drones.find(drone => drone.id === selectedDrone);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleRecord = () => {
    setIsRecording(!isRecording);
  };

  const handleSnapshot = () => {
    console.log("Taking snapshot...");
  };

  const handleDownload = () => {
    console.log("Downloading footage...");
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <Layout>
      <div className="flex h-screen">
        {/* Video Container */}
        <div className="flex-1 relative">
          {/* Video Controls Overlay */}
          <div className="absolute top-4 left-4 z-10">
            <Card className="p-3">
              <div className="flex items-center gap-2 mb-3">
                <Camera className="h-4 w-4" />
                <span className="text-sm font-mono">DRONE SELECTOR</span>
              </div>
              <Select value={selectedDrone} onValueChange={setSelectedDrone}>
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {drones.map((drone) => (
                    <SelectItem key={drone.id} value={drone.id}>
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${
                          drone.status === 'online' ? 'bg-green-500' : 'bg-red-500'
                        }`}></div>
                        {drone.name} - {drone.location}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Card>
          </div>

          {/* Connection Status */}
          <div className="absolute top-4 right-4 z-10">
            <Card className="p-3">
              <div className="flex items-center gap-2">
                {connectionStatus === "connected" ? (
                  <Wifi className="h-4 w-4 text-green-500" />
                ) : (
                  <WifiOff className="h-4 w-4 text-red-500" />
                )}
                <span className="text-sm font-mono">
                  {connectionStatus === "connected" ? "LIVE" : "OFFLINE"}
                </span>
              </div>
            </Card>
          </div>

          {/* Video Controls */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
            <Card className="p-2">
              <div className="flex items-center gap-2">
                <Button 
                  size="sm" 
                  variant="outline" 
                  onClick={handlePlayPause}
                >
                  {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                </Button>
                
                <Button 
                  size="sm" 
                  variant={isRecording ? "destructive" : "outline"}
                  onClick={handleRecord}
                >
                  <Circle className="h-4 w-4" />
                </Button>
                
                <Button 
                  size="sm" 
                  variant="outline" 
                  onClick={handleSnapshot}
                >
                  <CameraIcon className="h-4 w-4" />
                </Button>
                
                <Button 
                  size="sm" 
                  variant="outline" 
                  onClick={toggleFullscreen}
                >
                  <Maximize2 className="h-4 w-4" />
                </Button>
              </div>
            </Card>
          </div>

          {/* Video Area */}
          <div className="w-full h-full bg-black border border-border flex items-center justify-center">
            <div className="text-center space-y-4 text-white">
              <Video className="h-16 w-16 mx-auto" />
              <div className="space-y-2">
                <h3 className="text-lg font-mono font-bold">LIVE DRONE FOOTAGE</h3>
                <p className="text-sm font-mono opacity-75">
                  {selectedDroneData?.name} - {selectedDroneData?.location}
                </p>
                <div className="flex gap-2 justify-center">
                  <Badge variant="outline" className="text-white border-white">
                    {isPlaying ? 'LIVE' : 'PAUSED'}
                  </Badge>
                  {isRecording && (
                    <Badge variant="destructive" className="animate-pulse">
                      RECORDING
                    </Badge>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Side Panel */}
        {!isFullscreen && (
          <div className="w-80 border-l border-border bg-card p-4 space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-mono">DRONE STATUS</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {selectedDroneData && (
                  <>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono text-muted-foreground">DRONE</span>
                        <span className="font-mono text-sm font-bold">{selectedDroneData.name}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono text-muted-foreground">LOCATION</span>
                        <span className="font-mono text-sm">{selectedDroneData.location}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono text-muted-foreground">STATUS</span>
                        <Badge 
                          variant={selectedDroneData.status === 'online' ? 'default' : 'destructive'}
                          className="text-xs"
                        >
                          {selectedDroneData.status.toUpperCase()}
                        </Badge>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono text-muted-foreground">BATTERY</span>
                        <span className="font-mono text-sm">{selectedDroneData.battery}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${
                            selectedDroneData.battery > 50 ? 'bg-green-500' : 
                            selectedDroneData.battery > 20 ? 'bg-yellow-500' : 'bg-red-500'
                          }`}
                          style={{ width: `${selectedDroneData.battery}%` }}
                        ></div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-muted-foreground">SIGNAL</span>
                      <Badge 
                        variant={selectedDroneData.signal === 'strong' ? 'default' : 
                                selectedDroneData.signal === 'medium' ? 'secondary' : 'destructive'}
                        className="text-xs"
                      >
                        {selectedDroneData.signal.toUpperCase()}
                      </Badge>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-mono">RECORDING CONTROLS</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-muted-foreground">STATUS</span>
                  <Badge variant={isRecording ? "destructive" : "secondary"} className="text-xs">
                    {isRecording ? 'RECORDING' : 'STANDBY'}
                  </Badge>
                </div>
                
                {isRecording && (
                  <div className="p-2 bg-destructive/10 border border-destructive/20 rounded">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-destructive rounded-full animate-pulse"></div>
                      <span className="text-xs font-mono text-destructive">RECORDING IN PROGRESS</span>
                    </div>
                  </div>
                )}

                <div className="space-y-2">
                  <Button 
                    variant={isRecording ? "destructive" : "outline"} 
                    className="w-full" 
                    size="sm"
                    onClick={handleRecord}
                  >
                    <Circle className="h-4 w-4 mr-2" />
                    {isRecording ? 'Stop Recording' : 'Start Recording'}
                  </Button>
                  
                  <Button variant="outline" className="w-full" size="sm" onClick={handleSnapshot}>
                    <CameraIcon className="h-4 w-4 mr-2" />
                    Take Snapshot
                  </Button>
                  
                  <Button variant="outline" className="w-full" size="sm" onClick={handleDownload}>
                    <Download className="h-4 w-4 mr-2" />
                    Download Footage
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-mono">AVAILABLE DRONES</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {drones.map((drone) => (
                    <div 
                      key={drone.id}
                      className={`p-2 border border-border rounded cursor-pointer transition-colors ${
                        selectedDrone === drone.id ? 'bg-accent' : 'hover:bg-muted'
                      }`}
                      onClick={() => setSelectedDrone(drone.id)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className={`w-2 h-2 rounded-full ${
                            drone.status === 'online' ? 'bg-green-500' : 'bg-red-500'
                          }`}></div>
                          <span className="font-mono text-sm">{drone.name}</span>
                        </div>
                        <span className="text-xs text-muted-foreground">{drone.battery}%</span>
                      </div>
                      <div className="text-xs text-muted-foreground font-mono mt-1">
                        {drone.location}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default LiveFootage;
