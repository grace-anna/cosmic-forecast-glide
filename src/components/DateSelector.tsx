import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarIcon, TrendingUp, Info, Clock } from "lucide-react";
import { useState } from "react";
import { DateRange } from "react-day-picker";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

export const DateSelector = () => {
  const [dateRange, setDateRange] = useState<DateRange | undefined>();

  const presets = [
    { label: "Next Week", days: 7 },
    { label: "Next 2 Weeks", days: 14 },
    { label: "Next Month", days: 30 },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold">
          <span className="gradient-text">Select Your</span> Date Range
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Choose when you need the weather prediction for your outdoor plans
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Date Selection Panel */}
        <div className="space-y-6">
          <div className="glass-card p-6 space-y-4">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <CalendarIcon className="h-5 w-5 text-cyan-glow" />
              Pick Date Range
            </h3>

            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal bg-background/50 border-white/20",
                    !dateRange && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {dateRange?.from ? (
                    dateRange.to ? (
                      <>
                        {format(dateRange.from, "LLL dd, y")} -{" "}
                        {format(dateRange.to, "LLL dd, y")}
                      </>
                    ) : (
                      format(dateRange.from, "LLL dd, y")
                    )
                  ) : (
                    <span>Pick a date range</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="range"
                  selected={dateRange}
                  onSelect={setDateRange}
                  numberOfMonths={2}
                  initialFocus
                  className="p-3 pointer-events-auto"
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* Quick Presets */}
          <div className="glass-card p-6 space-y-4">
            <h3 className="text-lg font-semibold text-muted-foreground">Quick Select</h3>
            <div className="grid grid-cols-3 gap-3">
              {presets.map((preset) => (
                <Button
                  key={preset.label}
                  variant="secondary"
                  className="text-sm"
                  onClick={() => {
                    const from = new Date();
                    const to = new Date();
                    to.setDate(to.getDate() + preset.days);
                    setDateRange({ from, to });
                  }}
                >
                  {preset.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Time of Day */}
          <div className="glass-card p-6 space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <Clock className="h-5 w-5 text-purple-deep" />
              Time of Day
            </h3>
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

        {/* Date Info Panel */}
        <div className="glass-card p-6 space-y-4">
          <h3 className="text-xl font-semibold flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-magenta-hot" />
            Historical Data
          </h3>
          
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-secondary/30 border border-white/10">
              <div className="flex items-start gap-3">
                <Info className="h-5 w-5 text-cyan-glow mt-0.5" />
                <div className="space-y-2">
                  <p className="text-sm font-medium">Data Availability</p>
                  <p className="text-xs text-muted-foreground">
                    Analysis based on 10+ years of NASA satellite data for selected period
                  </p>
                </div>
              </div>
            </div>

            {dateRange?.from && dateRange?.to && (
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Duration</span>
                  <span className="font-medium">
                    {Math.ceil((dateRange.to.getTime() - dateRange.from.getTime()) / (1000 * 60 * 60 * 24))} days
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Confidence Level</span>
                  <span className="font-medium text-cyan-glow">High</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
