import { Card } from "@/components/ui/card";
import mineTopography from "@/assets/mine-topography.jpg";

export const RiskMap = () => {
  return (
    <Card className="p-4 bg-card border-border">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-mono font-bold text-sm uppercase tracking-wider">RISK VISUALIZATION MAP</h3>
        <div className="flex items-center gap-4 text-xs font-mono">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 bg-status-critical"></div>
            <span>HIGH RISK</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 bg-status-warning"></div>
            <span>MEDIUM RISK</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 bg-status-normal"></div>
            <span>LOW RISK</span>
          </div>
        </div>
      </div>
      
      <div className="relative bg-black border border-border h-64 overflow-hidden">
        <img 
          src={mineTopography} 
          alt="Mine topography visualization" 
          className="w-full h-full object-cover opacity-80"
        />
        
        {/* Risk indicators overlay */}
        <div className="absolute inset-0">
          {/* High risk zone */}
          <div className="absolute top-8 left-12 w-4 h-4 bg-status-critical border-2 border-status-critical animate-pulse"></div>
          <div className="absolute top-8 left-12 w-8 h-8 border border-status-critical opacity-50"></div>
          
          {/* Medium risk zones */}
          <div className="absolute top-16 right-16 w-3 h-3 bg-status-warning border border-status-warning"></div>
          <div className="absolute bottom-12 left-20 w-3 h-3 bg-status-warning border border-status-warning"></div>
          
          {/* Sensor positions */}
          <div className="absolute top-6 right-8 w-2 h-2 bg-data-high border border-data-high"></div>
          <div className="absolute bottom-8 right-12 w-2 h-2 bg-data-high border border-data-high"></div>
          <div className="absolute top-20 left-8 w-2 h-2 bg-data-high border border-data-high"></div>
        </div>
        
        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(to right, hsl(var(--grid-primary)) 1px, transparent 1px),
              linear-gradient(to bottom, hsl(var(--grid-primary)) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px'
          }}></div>
        </div>
      </div>
      
      <div className="mt-4 grid grid-cols-3 gap-4 text-xs font-mono">
        <div>
          <p className="text-muted-foreground">COORDINATES</p>
          <p className="text-data-high">45.2847°N, 67.8392°W</p>
        </div>
        <div>
          <p className="text-muted-foreground">ELEVATION RANGE</p>
          <p className="text-data-high">280M - 340M</p>
        </div>
        <div>
          <p className="text-muted-foreground">LAST UPDATE</p>
          <p className="text-data-high">14:23:07 UTC</p>
        </div>
      </div>
    </Card>
  );
};