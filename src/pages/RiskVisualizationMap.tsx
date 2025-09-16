import { useState } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Badge } from "@/components/ui/badge";
import { 
  Box, 
  Layers, 
  RotateCcw, 
  ZoomIn, 
  ZoomOut, 
  Move3D,
  Info,
  Maximize2,
  Settings
} from "lucide-react";

const RiskVisualizationMap = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [activeLayers, setActiveLayers] = useState<string[]>(["geology", "strain"]);
  const [cameraAngle, setCameraAngle] = useState([45]);
  const [zoomLevel, setZoomLevel] = useState([50]);
  const [selectedZone, setSelectedZone] = useState<string | null>(null);

  const layers = [
    { id: "geology", label: "Geology", color: "bg-orange-500" },
    { id: "strain", label: "Strain", color: "bg-red-500" },
    { id: "rainfall", label: "Rainfall", color: "bg-blue-500" },
    { id: "temperature", label: "Temperature", color: "bg-yellow-500" },
  ];

  const zones = [
    { 
      id: "zone-1", 
      name: "Sector 7-A", 
      risk: "HIGH", 
      coordinates: { x: 120, y: 80 },
      details: {
        geology: "Granite with fractures",
        strain: "0.0034 mm/m",
        rainfall: "45mm/24h",
        temperature: "23°C"
      }
    },
    { 
      id: "zone-2", 
      name: "Sector 7-B", 
      risk: "MEDIUM", 
      coordinates: { x: 200, y: 150 },
      details: {
        geology: "Sandstone stable",
        strain: "0.0012 mm/m",
        rainfall: "32mm/24h",
        temperature: "25°C"
      }
    },
    { 
      id: "zone-3", 
      name: "Sector 8-A", 
      risk: "LOW", 
      coordinates: { x: 80, y: 200 },
      details: {
        geology: "Limestone solid",
        strain: "0.0008 mm/m",
        rainfall: "28mm/24h",
        temperature: "22°C"
      }
    },
  ];

  const toggleLayer = (layerId: string) => {
    if (activeLayers.includes(layerId)) {
      setActiveLayers(activeLayers.filter(id => id !== layerId));
    } else {
      setActiveLayers([...activeLayers, layerId]);
    }
  };

  const resetCamera = () => {
    setCameraAngle([45]);
    setZoomLevel([50]);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <Layout>
      <div className="flex h-screen">
        {/* 3D Model Container */}
        <div className="flex-1 relative">
          {/* 3D Controls Overlay */}
          <div className="absolute top-4 left-4 z-10 space-y-2">
            <Card className="p-3">
              <div className="flex items-center gap-2 mb-3">
                <Layers className="h-4 w-4" />
                <span className="text-sm font-mono">LAYER CONTROLS</span>
              </div>
              <div className="space-y-2">
                {layers.map((layer) => (
                  <div key={layer.id} className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${layer.color}`}></div>
                    <label className="text-xs font-mono cursor-pointer">
                      <input
                        type="checkbox"
                        checked={activeLayers.includes(layer.id)}
                        onChange={() => toggleLayer(layer.id)}
                        className="mr-2"
                      />
                      {layer.label}
                    </label>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-3">
              <div className="flex items-center gap-2 mb-3">
                <Move3D className="h-4 w-4" />
                <span className="text-sm font-mono">CAMERA CONTROLS</span>
              </div>
              <div className="space-y-3">
                <div>
                  <label className="text-xs font-mono text-muted-foreground">ANGLE</label>
                  <Slider
                    value={cameraAngle}
                    onValueChange={setCameraAngle}
                    max={90}
                    min={0}
                    step={1}
                    className="mt-1"
                  />
                  <div className="text-xs font-mono text-center">{cameraAngle[0]}°</div>
                </div>
                
                <div>
                  <label className="text-xs font-mono text-muted-foreground">ZOOM</label>
                  <Slider
                    value={zoomLevel}
                    onValueChange={setZoomLevel}
                    max={100}
                    min={10}
                    step={1}
                    className="mt-1"
                  />
                  <div className="text-xs font-mono text-center">{zoomLevel[0]}%</div>
                </div>

                <div className="flex gap-1">
                  <Button size="sm" variant="outline" onClick={resetCamera}>
                    <RotateCcw className="h-3 w-3" />
                  </Button>
                  <Button size="sm" variant="outline">
                    <ZoomIn className="h-3 w-3" />
                  </Button>
                  <Button size="sm" variant="outline">
                    <ZoomOut className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Zone Risk Indicators */}
          <div className="absolute inset-0 pointer-events-none">
            {zones.map((zone) => (
              <div
                key={zone.id}
                className="absolute pointer-events-auto cursor-pointer"
                style={{
                  left: `${zone.coordinates.x}px`,
                  top: `${zone.coordinates.y}px`,
                }}
                onClick={() => setSelectedZone(selectedZone === zone.id ? null : zone.id)}
              >
                <div className={`w-4 h-4 rounded-full border-2 border-white ${
                  zone.risk === 'HIGH' ? 'bg-red-500' : 
                  zone.risk === 'MEDIUM' ? 'bg-yellow-500' : 'bg-green-500'
                } animate-pulse`}></div>
                
                {selectedZone === zone.id && (
                  <div className="absolute top-6 left-0 bg-card border border-border rounded p-3 shadow-lg min-w-48">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <h4 className="font-mono font-bold text-sm">{zone.name}</h4>
                        <Badge 
                          variant={zone.risk === 'HIGH' ? 'destructive' : zone.risk === 'MEDIUM' ? 'secondary' : 'default'}
                          className="text-xs"
                        >
                          {zone.risk}
                        </Badge>
                      </div>
                      <div className="space-y-1 text-xs font-mono">
                        <div>Geology: {zone.details.geology}</div>
                        <div>Strain: {zone.details.strain}</div>
                        <div>Rainfall: {zone.details.rainfall}</div>
                        <div>Temperature: {zone.details.temperature}</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Fullscreen Toggle */}
          <div className="absolute bottom-4 right-4 z-10">
            <Button onClick={toggleFullscreen} size="sm">
              <Maximize2 className="h-4 w-4" />
            </Button>
          </div>

          {/* 3D Model Area */}
          <div className="w-full h-full bg-gradient-to-br from-muted/20 to-muted/40 border border-border flex items-center justify-center">
            <div className="text-center space-y-4">
              <Box className="h-20 w-20 mx-auto text-muted-foreground animate-pulse" />
              <div className="space-y-2">
                <h3 className="text-xl font-mono font-bold">3D RISK VISUALIZATION</h3>
                <p className="text-sm text-muted-foreground font-mono">
                  Interactive 3D terrain model with risk overlays
                </p>
                <div className="flex gap-2 justify-center flex-wrap">
                  <Badge variant="outline">Geology Layer</Badge>
                  <Badge variant="outline">Strain Analysis</Badge>
                  <Badge variant="outline">Rainfall Data</Badge>
                  <Badge variant="outline">Temperature Map</Badge>
                </div>
                <div className="mt-4 p-3 bg-card/50 border border-border rounded">
                  <p className="text-xs font-mono text-muted-foreground">
                    Click on risk indicators for detailed zone information
                  </p>
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
                <CardTitle className="text-sm font-mono flex items-center gap-2">
                  <Settings className="h-4 w-4" />
                  3D MODEL SETTINGS
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-xs font-mono text-muted-foreground">ACTIVE LAYERS</label>
                  <div className="mt-2 space-y-1">
                    {layers.map((layer) => (
                      <div key={layer.id} className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${layer.color}`}></div>
                        <span className="text-xs font-mono">
                          {activeLayers.includes(layer.id) ? '✓' : '○'} {layer.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="text-xs font-mono text-muted-foreground">CAMERA ANGLE</label>
                  <div className="mt-1 p-2 bg-muted border border-border rounded">
                    <span className="font-mono text-sm">{cameraAngle[0]}° elevation</span>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-mono text-muted-foreground">ZOOM LEVEL</label>
                  <div className="mt-1 p-2 bg-muted border border-border rounded">
                    <span className="font-mono text-sm">{zoomLevel[0]}% zoom</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-mono flex items-center gap-2">
                  <Info className="h-4 w-4" />
                  ZONE RISK ANALYSIS
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {zones.map((zone) => (
                    <div 
                      key={zone.id} 
                      className={`p-3 border border-border rounded cursor-pointer transition-colors ${
                        selectedZone === zone.id ? 'bg-accent' : 'hover:bg-muted'
                      }`}
                      onClick={() => setSelectedZone(selectedZone === zone.id ? null : zone.id)}
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
                        Click to view detailed 3D analysis
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-mono">QUICK ACTIONS</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full" size="sm">
                  Reset View
                </Button>
                <Button variant="outline" className="w-full" size="sm">
                  Export 3D Model
                </Button>
                <Button variant="outline" className="w-full" size="sm">
                  Generate Report
                </Button>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default RiskVisualizationMap;
