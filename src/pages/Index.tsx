import { Hero } from "@/components/Hero";
import { LocationSelector } from "@/components/LocationSelector";
import { DateSelector } from "@/components/DateSelector";
import { WeatherParameters } from "@/components/WeatherParameters";
import { ResultsDashboard } from "@/components/ResultsDashboard";
import { ExportSection } from "@/components/ExportSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-glow to-purple-deep flex items-center justify-center">
              <span className="text-xl font-bold">🌤️</span>
            </div>
            <div>
              <h1 className="text-lg font-bold text-foreground">NASA WeatherWise</h1>
              <p className="text-xs text-muted-foreground">Space Apps Challenge 2025</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#location" className="text-sm text-foreground/80 hover:text-cyan-glow transition-colors">Location</a>
            <a href="#dates" className="text-sm text-foreground/80 hover:text-cyan-glow transition-colors">Dates</a>
            <a href="#parameters" className="text-sm text-foreground/80 hover:text-cyan-glow transition-colors">Parameters</a>
            <a href="#results" className="text-sm text-foreground/80 hover:text-cyan-glow transition-colors">Results</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <Hero />

      {/* Main Content */}
      <main className="relative">
        {/* Location Selector */}
        <section id="location" className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <LocationSelector />
          </div>
        </section>

        {/* Date Selector */}
        <section id="dates" className="py-20 px-6 bg-secondary/20">
          <div className="max-w-7xl mx-auto">
            <DateSelector />
          </div>
        </section>

        {/* Weather Parameters */}
        <section id="parameters" className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <WeatherParameters />
          </div>
        </section>

        {/* Results Dashboard */}
        <section id="results" className="py-20 px-6 bg-secondary/20">
          <div className="max-w-7xl mx-auto">
            <ResultsDashboard />
          </div>
        </section>

        {/* Export Section */}
        <section id="export" className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <ExportSection />
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
