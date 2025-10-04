import { Button } from "@/components/ui/button";
import { Calendar, Clock } from "lucide-react";

export const DateSelector = () => {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold">
          <span className="gradient-text">Select Your</span> Dates
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Choose a specific date or date range to analyze historical weather patterns
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Quick Select Presets */}
        <div className="glass-card p-6 space-y-4">
          <h3 className="text-xl font-semibold flex items-center gap-2">
            <Clock className="h-5 w-5 text-cyan-glow" />
            Quick Select
          </h3>
          <div className="space-y-2">
            {["Next Week", "Next Month", "Next 3 Months", "Custom Range"].map((preset) => (
              <Button
                key={preset}
                variant="outline"
                className="w-full justify-start border-white/20 hover:border-cyan-glow hover:bg-cyan-glow/10"
              >
                {preset}
              </Button>
            ))}
          </div>

          <div className="pt-4 border-t border-white/10 space-y-3">
            <h4 className="font-medium text-sm text-muted-foreground">Special Periods</h4>
            {["Memorial Day Weekend", "4th of July", "Labor Day"].map((holiday) => (
              <Button
                key={holiday}
                variant="outline"
                className="w-full justify-start text-sm border-white/20 hover:border-magenta-hot hover:bg-magenta-hot/10"
                size="sm"
              >
                🎉 {holiday}
              </Button>
            ))}
          </div>
        </div>

        {/* Calendar View */}
        <div className="md:col-span-2 glass-card p-6 space-y-4">
          <h3 className="text-xl font-semibold flex items-center gap-2">
            <Calendar className="h-5 w-5 text-magenta-hot" />
            Calendar Selection
          </h3>
          
          <div className="aspect-[4/3] rounded-lg bg-secondary/50 border border-white/10 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-glow/10 to-magenta-hot/10" />
            <div className="relative z-10 text-center space-y-3">
              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-cyan-glow to-purple-deep flex items-center justify-center animate-pulse-glow">
                <Calendar className="h-10 w-10 text-white" />
              </div>
              <p className="text-muted-foreground">Interactive calendar will appear here</p>
              <p className="text-xs text-muted-foreground/60">Select single dates or date ranges</p>
            </div>
          </div>

          {/* Selected Range Display */}
          <div className="glass-card p-4 bg-cyan-glow/10 border-cyan-glow/30">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-muted-foreground mb-1">Selected Range</p>
                <p className="font-semibold text-cyan-glow">No dates selected</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-muted-foreground mb-1">Duration</p>
                <p className="font-semibold">-- days</p>
              </div>
            </div>
          </div>

          {/* Time of Day Selector */}
          <div className="grid grid-cols-3 gap-3">
            {["Morning", "Afternoon", "Evening"].map((time) => (
              <Button
                key={time}
                variant="outline"
                className="border-white/20 hover:border-purple-deep hover:bg-purple-deep/10"
                size="sm"
              >
                {time}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Historical Data Availability */}
      <div className="glass-card p-6">
        <div className="flex items-center gap-4">
          <div className="flex-1">
            <h4 className="font-semibold mb-2">Historical Data Availability</h4>
            <p className="text-sm text-muted-foreground">
              Based on <span className="text-cyan-glow font-semibold">15+ years</span> of NASA satellite data
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-safe" />
              <span className="text-xs">High Confidence</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-yellow-warning" />
              <span className="text-xs">Moderate</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-danger" />
              <span className="text-xs">Limited</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
