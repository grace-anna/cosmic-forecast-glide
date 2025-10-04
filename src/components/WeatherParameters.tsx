import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Cloud, Droplets, Wind, Thermometer, Eye, Sun } from "lucide-react";

const parameters = [
  {
    id: "temperature",
    name: "Temperature",
    icon: Thermometer,
    color: "from-red-danger to-yellow-warning",
    description: "Min/Max temperature thresholds",
  },
  {
    id: "precipitation",
    name: "Precipitation",
    icon: Droplets,
    color: "from-cyan-glow to-blue-500",
    description: "Rainfall and snow amount",
  },
  {
    id: "wind",
    name: "Wind Speed",
    icon: Wind,
    color: "from-gray-400 to-gray-600",
    description: "Average and gust speeds",
  },
  {
    id: "humidity",
    name: "Humidity",
    icon: Droplets,
    color: "from-teal-400 to-cyan-glow",
    description: "Relative humidity levels",
  },
  {
    id: "visibility",
    name: "Visibility",
    icon: Eye,
    color: "from-purple-deep to-magenta-hot",
    description: "Atmospheric visibility range",
  },
  {
    id: "uv",
    name: "UV Index",
    icon: Sun,
    color: "from-yellow-warning to-red-danger",
    description: "Ultraviolet radiation index",
  },
];

export const WeatherParameters = () => {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold">
          <span className="gradient-text">Weather</span> Parameters
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Select and customize the weather conditions most important to your plans
        </p>
      </div>

      {/* Preset Profiles */}
      <div className="flex flex-wrap gap-3 justify-center">
        {["Beach Day", "Hiking Trip", "Outdoor Wedding", "Sports Event", "Photography"].map((profile) => (
          <Button
            key={profile}
            variant="outline"
            className="border-white/20 hover:border-cyan-glow hover:bg-cyan-glow/10"
          >
            {profile}
          </Button>
        ))}
      </div>

      {/* Parameter Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {parameters.map((param) => {
          const Icon = param.icon;
          return (
            <div
              key={param.id}
              className="glass-card p-6 space-y-4 hover:scale-105 transition-all cursor-pointer group"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${param.color} flex items-center justify-center group-hover:shadow-lg transition-shadow`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{param.name}</h3>
                    <p className="text-xs text-muted-foreground">{param.description}</p>
                  </div>
                </div>
                <input
                  type="checkbox"
                  defaultChecked
                  className="w-5 h-5 rounded border-white/20 bg-secondary text-cyan-glow focus:ring-cyan-glow"
                />
              </div>

              {/* Threshold Slider */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Min</span>
                  <span>Max</span>
                </div>
                <Slider
                  defaultValue={[30, 70]}
                  max={100}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-cyan-glow">30%</span>
                  <span className="text-magenta-hot">70%</span>
                </div>
              </div>

              {/* Historical Average */}
              <div className="pt-2 border-t border-white/10 flex justify-between text-xs">
                <span className="text-muted-foreground">Historical Avg:</span>
                <span className="font-semibold">--</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Summary Card */}
      <div className="glass-card p-6 bg-cyan-glow/10 border-cyan-glow/30">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-semibold text-lg mb-1">6 Parameters Selected</h3>
            <p className="text-sm text-muted-foreground">Ready to analyze weather probability</p>
          </div>
          <Button
            size="lg"
            className="bg-gradient-to-r from-cyan-glow to-purple-deep hover:shadow-lg"
          >
            Calculate Probability
          </Button>
        </div>
      </div>
    </div>
  );
};
