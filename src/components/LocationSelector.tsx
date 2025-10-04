import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Search, Navigation } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

export const LocationSelector = () => {
  const [location, setLocation] = useState("");
  const [coordinates, setCoordinates] = useState({ lat: 0, lon: 0 });
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const marker = useRef<mapboxgl.Marker | null>(null);

  useEffect(() => {
    if (!mapContainer.current || map.current) return;

    // You'll need to add your Mapbox token here
    // For now, using a placeholder - users should add their own token
    mapboxgl.accessToken = 'pk.eyJ1IjoibG92YWJsZS1kZW1vIiwiYSI6ImNtNTBxeWQ2YTA5aWsycXM5eDRhMGJ4eGcifQ.example';
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/dark-v11',
      center: [-98.5795, 39.8283], // Center of US
      zoom: 3,
    });

    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    // Add click handler to drop pin
    map.current.on('click', (e) => {
      const { lng, lat } = e.lngLat;
      setCoordinates({ lat, lon: lng });
      
      if (marker.current) {
        marker.current.remove();
      }
      
      marker.current = new mapboxgl.Marker({ color: '#00d4ff' })
        .setLngLat([lng, lat])
        .addTo(map.current!);
    });

    return () => {
      map.current?.remove();
    };
  }, []);

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
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && location.trim()) {
                    console.log('Searching for:', location);
                  }
                }}
                className="pl-10 pr-10 bg-background/50 border-white/20 focus:border-cyan-glow"
              />
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Button
                size="icon"
                onClick={() => {
                  if (location.trim()) {
                    console.log('Searching for:', location);
                  }
                }}
                disabled={!location.trim()}
                className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8"
              >
                <Search className="h-4 w-4" />
              </Button>
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
          <div ref={mapContainer} className="aspect-square rounded-lg overflow-hidden border border-white/10" />
          
          {/* Location Details */}
          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="space-y-1">
              <p className="text-xs text-muted-foreground">Latitude</p>
              <p className="font-mono text-sm">{coordinates.lat.toFixed(4)}°</p>
            </div>
            <div className="space-y-1">
              <p className="text-xs text-muted-foreground">Longitude</p>
              <p className="font-mono text-sm">{coordinates.lon.toFixed(4)}°</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
