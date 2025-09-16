/**
 * Risk Map Page Component
 * Developer: Yasharka Bhattacharyya
 * System: Rockfall AI Monitoring Platform
 * 
 * Proprietary component - All rights reserved to Yasharka Bhattacharyya © 2025
 */
import { useState } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { 
  Map, 
  Download, 
  Play, 
  Pause, 
  Layers, 
  Satellite, 
  Thermometer,
  Clock,
  Maximize2,
  Minimize2
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const RiskMap = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentLayer, setCurrentLayer] = useState("dem");
  const [timeValue, setTimeValue] = useState([50]);
  const [selectedZones, setSelectedZones] = useState<string[]>([]);

  const layers = [
    { id: "dem", label: "DEM", icon: Map },
    { id: "heatmap", label: "Heatmap", icon: Thermometer },
    { id: "satellite", label: "Satellite", icon: Satellite },
  ];

  const zones = [
    { id: "zone-1", name: "Sector 7-A", risk: "HIGH", color: "bg-accent-danger", textColor: "text-accent-danger" },
    { id: "zone-2", name: "Sector 7-B", risk: "MEDIUM", color: "bg-accent-warning", textColor: "text-accent-warning" },
    { id: "zone-3", name: "Sector 8-A", risk: "LOW", color: "bg-accent-success", textColor: "text-accent-success" },
    { id: "zone-4", name: "Sector 8-B", risk: "MEDIUM", color: "bg-accent-warning", textColor: "text-accent-warning" },
  ];

  const handleExport = () => {
    console.log("Exporting map snapshot...");
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <Layout>
      <div style={{ display: 'none' }} data-developer="Yasharka Bhattacharyya" data-copyright="© 2025 Yasharka Bhattacharyya. All rights reserved."></div>
      
      <div className="flex h-screen watermark-yb hidden-watermark">
        {/* Map Container */}
        <div className="flex-1 relative">
          {/* Map Controls Overlay */}
          <div className="absolute top-4 left-4 z-10 space-y-2">
            <Card className="p-2">
              <div className="flex items-center gap-2">
                <Layers className="h-4 w-4" />
                <span className="text-sm font-mono">LAYERS</span>
              </div>
              <ToggleGroup 
                type="single" 
                value={currentLayer} 
                onValueChange={(value) => value && setCurrentLayer(value)}
                className="mt-2"
              >
                {layers.map((layer) => {
                  const Icon = layer.icon;
                  return (
                    <ToggleGroupItem key={layer.id} value={layer.id} size="sm">
                      <Icon className="h-3 w-3 mr-1" />
                      {layer.label}
                    </ToggleGroupItem>
                  );
                })}
              </ToggleGroup>
            </Card>

            <Card className="p-2">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span className="text-sm font-mono">TIME SLIDER</span>
              </div>
              <div className="mt-2 space-y-2">
                <Slider
                  value={timeValue}
                  onValueChange={setTimeValue}
                  max={100}
                  step={1}
                  className="w-32"
                />
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono">00:00</span>
                  <span className="font-mono">{timeValue[0]}%</span>
                  <span className="font-mono">24:00</span>
                </div>
                <div className="flex gap-1">
                  <Button size="sm" variant="outline" onClick={handlePlayPause}>
                    {isPlaying ? <Pause className="h-3 w-3" /> : <Play className="h-3 w-3" />}
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Zone Legend */}
          <div className="absolute top-4 right-4 z-10">
            <Card className="p-3">
              <CardTitle className="text-sm font-mono mb-2">RISK ZONES</CardTitle>
              <div className="space-y-2">
                {zones.map((zone) => (
                  <div key={zone.id} className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${zone.color}`}></div>
                    <span className="text-xs font-mono">{zone.name}</span>
                    <Badge 
                      variant={zone.risk === 'HIGH' ? 'destructive' : zone.risk === 'MEDIUM' ? 'secondary' : 'default'}
                      className={`text-xs ${zone.textColor}`}
                    >
                      {zone.risk}
                    </Badge>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Fullscreen Toggle */}
          <div className="absolute bottom-4 right-4 z-10">
            <Button onClick={toggleFullscreen} size="sm">
              {isFullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
            </Button>
          </div>

          {/* Map Area */}
          <div className="w-full h-full bg-muted/20 border border-border flex items-center justify-center">
            <div className="text-center space-y-4">
              <Map className="h-16 w-16 mx-auto text-muted-foreground" />
              <div className="space-y-2">
                <h3 className="text-lg font-mono font-bold">INTERACTIVE RISK MAP</h3>
                <p className="text-sm text-muted-foreground font-mono">
                  Fullscreen map visualization with multi-layer support
                </p>
                <div className="flex gap-2 justify-center">
                  <Badge variant="outline">DEM View</Badge>
                  <Badge variant="outline">Risk Overlay</Badge>
                  <Badge variant="outline">Time Playback</Badge>
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
                <CardTitle className="text-sm font-mono">MAP CONTROLS</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-xs font-mono text-muted-foreground">CURRENT LAYER</label>
                  <div className="mt-1 p-2 bg-muted border border-border rounded">
                    <span className="font-mono text-sm">{currentLayer.toUpperCase()}</span>
                  </div>
                </div>
                
                <div>
                  <label className="text-xs font-mono text-muted-foreground">TIME POSITION</label>
                  <div className="mt-1 p-2 bg-muted border border-border rounded">
                    <span className="font-mono text-sm">{timeValue[0]}% of 24h cycle</span>
                  </div>
                </div>

                <Button onClick={handleExport} className="w-full" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Export Snapshot (PNG)
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-mono">ZONE DETAILS</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {zones.map((zone) => (
                    <div 
                      key={zone.id} 
                      className="p-3 border border-border rounded cursor-pointer hover:bg-muted transition-colors"
                      onClick={() => {
                        if (selectedZones.includes(zone.id)) {
                          setSelectedZones(selectedZones.filter(id => id !== zone.id));
                        } else {
                          setSelectedZones([...selectedZones, zone.id]);
                        }
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-sm font-bold">{zone.name}</span>
                        <Badge 
                          variant={zone.risk === 'HIGH' ? 'destructive' : zone.risk === 'MEDIUM' ? 'secondary' : 'default'}
                          className="text-xs"
                        >
                          {zone.risk}
                        </Badge>
                      </div>
                      <div className="mt-2 text-xs text-muted-foreground font-mono">
                        Click to view detailed analysis
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

export default RiskMap;
