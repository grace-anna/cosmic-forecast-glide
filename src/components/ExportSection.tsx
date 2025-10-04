import { Button } from "@/components/ui/button";
import { FileDown, FileJson, FileSpreadsheet, FileText, Share2 } from "lucide-react";

export const ExportSection = () => {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold">
          <span className="gradient-text">Export</span> & Share
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Download your analysis or share it with others
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Export Formats */}
        <div className="glass-card p-6 space-y-4">
          <h3 className="text-xl font-semibold flex items-center gap-2">
            <FileDown className="h-5 w-5 text-cyan-glow" />
            Download Report
          </h3>
          
          <div className="space-y-3">
            <Button
              variant="outline"
              className="w-full justify-start gap-3 border-white/20 hover:border-cyan-glow hover:bg-cyan-glow/10"
            >
              <FileText className="h-5 w-5" />
              <div className="text-left flex-1">
                <div className="font-semibold">PDF Report</div>
                <div className="text-xs text-muted-foreground">Complete analysis with charts</div>
              </div>
            </Button>

            <Button
              variant="outline"
              className="w-full justify-start gap-3 border-white/20 hover:border-cyan-glow hover:bg-cyan-glow/10"
            >
              <FileSpreadsheet className="h-5 w-5" />
              <div className="text-left flex-1">
                <div className="font-semibold">CSV Export</div>
                <div className="text-xs text-muted-foreground">Raw data for further analysis</div>
              </div>
            </Button>

            <Button
              variant="outline"
              className="w-full justify-start gap-3 border-white/20 hover:border-cyan-glow hover:bg-cyan-glow/10"
            >
              <FileJson className="h-5 w-5" />
              <div className="text-left flex-1">
                <div className="font-semibold">JSON Format</div>
                <div className="text-xs text-muted-foreground">Structured data for developers</div>
              </div>
            </Button>
          </div>
        </div>

        {/* Share Options */}
        <div className="glass-card p-6 space-y-4">
          <h3 className="text-xl font-semibold flex items-center gap-2">
            <Share2 className="h-5 w-5 text-magenta-hot" />
            Share Analysis
          </h3>
          
          <div className="space-y-3">
            <div className="space-y-2">
              <label className="text-sm text-muted-foreground">Shareable Link</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  readOnly
                  value="https://nasa-weather.app/share/abc123"
                  className="flex-1 px-4 py-2 rounded-lg bg-secondary/50 border border-white/20 text-sm font-mono"
                />
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-cyan-glow to-purple-deep"
                >
                  Copy
                </Button>
              </div>
            </div>

            <div className="pt-4 space-y-3">
              <p className="text-sm text-muted-foreground">Share via:</p>
              <div className="grid grid-cols-3 gap-3">
                <Button variant="outline" size="sm" className="border-white/20">
                  📧 Email
                </Button>
                <Button variant="outline" size="sm" className="border-white/20">
                  💬 SMS
                </Button>
                <Button variant="outline" size="sm" className="border-white/20">
                  🔗 Link
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Data Attribution */}
      <div className="glass-card p-6 bg-purple-deep/10 border-purple-deep/30">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-glow to-purple-deep flex items-center justify-center flex-shrink-0">
            <span className="text-xl">🛰️</span>
          </div>
          <div className="flex-1">
            <h4 className="font-semibold mb-2">Data Sources</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              This analysis uses data from NASA's POWER (Prediction Of Worldwide Energy Resources) project,
              derived from satellite observations and climate models spanning over 15 years of historical records.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
