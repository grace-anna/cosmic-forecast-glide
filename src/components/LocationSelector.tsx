import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Search, Navigation } from "lucide-react";
import { useState } from "react";

export const LocationSelector = () => {
  const [location, setLocation] = useState("");

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold">
          <span className="gradient-text">Choose Your</span> Location
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Select a location to analyze historical weather patterns and predict future conditions
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Search Panel */}
        <div className="space-y-6">
          <div className="glass-card p-6 space-y-4">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <Search className="h-5 w-5 text-cyan-glow" />
              Search Location
            </h3>
            
            <div className="relative">
              <Input
                type="text"
                placeholder="Enter city, coordinates, or place name..."
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="pl-10 bg-background/50 border-white/20 focus:border-cyan-glow"
              />
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </div>

            <Button
              className="w-full bg-gradient-to-r from-cyan-glow to-purple-deep hover:shadow-lg"
              size="lg"
            >
              <Navigation className="mr-2 h-4 w-4" />
              Use Current Location
            </Button>
          </div>

          {/* Recent Searches */}
          <div className="glass-card p-6 space-y-4">
            <h3 className="text-lg font-semibold text-muted-foreground">Recent Searches</h3>
            <div className="space-y-2">
              {["Seattle, WA", "New York, NY", "Miami, FL"].map((place) => (
                <button
                  key={place}
                  className="w-full text-left px-4 py-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors flex items-center gap-3"
                >
                  <MapPin className="h-4 w-4 text-cyan-glow" />
                  <span>{place}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Map Preview */}
        <div className="glass-card p-6 space-y-4">
          <h3 className="text-xl font-semibold flex items-center gap-2">
            <MapPin className="h-5 w-5 text-magenta-hot" />
            Map Preview
          </h3>
          <div className="aspect-square rounded-lg bg-secondary/50 border border-white/10 flex items-center justify-center relative overflow-hidden">
            {/* Placeholder for map */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-glow/10 to-magenta-hot/10" />
            <div className="relative z-10 text-center space-y-3">
              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-cyan-glow to-purple-deep flex items-center justify-center animate-pulse-glow">
                <MapPin className="h-10 w-10 text-white" />
              </div>
              <p className="text-muted-foreground">Interactive map will appear here</p>
              <p className="text-xs text-muted-foreground/60">Click to drop a pin or search for a location</p>
            </div>
          </div>
          
          {/* Location Details */}
          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="space-y-1">
              <p className="text-xs text-muted-foreground">Latitude</p>
              <p className="font-mono text-sm">--.----- °N</p>
            </div>
            <div className="space-y-1">
              <p className="text-xs text-muted-foreground">Longitude</p>
              <p className="font-mono text-sm">---.----- °W</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
