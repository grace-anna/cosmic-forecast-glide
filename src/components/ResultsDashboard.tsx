import { TrendingUp, TrendingDown, AlertTriangle } from "lucide-react";

export const ResultsDashboard = () => {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold">
          <span className="gradient-text">Analysis</span> Results
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Historical weather probability based on NASA satellite data
        </p>
      </div>

      {/* Overall Risk Score */}
      <div className="glass-card p-8 text-center space-y-6">
        <div className="relative inline-block">
          <div className="w-48 h-48 mx-auto rounded-full border-8 border-green-safe/30 flex items-center justify-center relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-green-safe/20 to-transparent animate-pulse-glow" />
            <div className="relative z-10 text-center">
              <div className="text-6xl font-bold text-green-safe">72</div>
              <div className="text-sm text-muted-foreground">Favorable</div>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-2">Conditions Look Good!</h3>
          <p className="text-muted-foreground">Based on 10+ years of historical data for this location and time period</p>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="glass-card p-6 space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="font-semibold">Best Days</h4>
            <TrendingUp className="h-5 w-5 text-green-safe" />
          </div>
          <div className="text-3xl font-bold text-green-safe">5/7</div>
          <p className="text-sm text-muted-foreground">Days meet all criteria</p>
        </div>

        <div className="glass-card p-6 space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="font-semibold">Moderate Risk</h4>
            <AlertTriangle className="h-5 w-5 text-yellow-warning" />
          </div>
          <div className="text-3xl font-bold text-yellow-warning">2/7</div>
          <p className="text-sm text-muted-foreground">Days with some concerns</p>
        </div>

        <div className="glass-card p-6 space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="font-semibold">High Risk</h4>
            <TrendingDown className="h-5 w-5 text-red-danger" />
          </div>
          <div className="text-3xl font-bold text-red-danger">0/7</div>
          <p className="text-sm text-muted-foreground">Days to avoid</p>
        </div>
      </div>

      {/* Charts Placeholder */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="glass-card p-6 space-y-4">
          <h3 className="text-xl font-semibold">Probability Timeline</h3>
          <div className="aspect-video rounded-lg bg-secondary/50 border border-white/10 flex items-center justify-center">
            <div className="text-center space-y-2">
              <div className="text-4xl">📈</div>
              <p className="text-muted-foreground text-sm">Line chart will appear here</p>
            </div>
          </div>
        </div>

        <div className="glass-card p-6 space-y-4">
          <h3 className="text-xl font-semibold">Parameter Comparison</h3>
          <div className="aspect-video rounded-lg bg-secondary/50 border border-white/10 flex items-center justify-center">
            <div className="text-center space-y-2">
              <div className="text-4xl">🕸️</div>
              <p className="text-muted-foreground text-sm">Radar chart will appear here</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recommendations */}
      <div className="glass-card p-6 space-y-4 bg-cyan-glow/10 border-cyan-glow/30">
        <h3 className="text-xl font-semibold flex items-center gap-2">
          <span>💡</span> Recommendations
        </h3>
        <ul className="space-y-2">
          <li className="flex items-start gap-3">
            <span className="text-green-safe">✓</span>
            <span className="text-sm">October 15-17 show excellent conditions for outdoor activities</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-yellow-warning">⚠</span>
            <span className="text-sm">October 19-20 may have elevated precipitation risk</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-cyan-glow">ℹ</span>
            <span className="text-sm">Morning hours typically show more favorable conditions</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
