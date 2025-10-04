import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { useEffect, useRef } from "react";

export const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
    }> = [];

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.3,
      });
    }

    function animate() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 212, 255, ${particle.opacity})`;
        ctx.fill();

        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToLocation = () => {
    document.getElementById("location")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
      />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-glow/20 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-magenta-hot/20 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
            <span className="gradient-text">Know Before</span>
            <br />
            <span className="text-foreground">You Go</span>
          </h1>
        </div>

        <div className="animate-slide-up" style={{ animationDelay: "0.3s" }}>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Predict the probability of adverse weather using decades of NASA Earth observation data.
            Plan your outdoor activities with confidence.
          </p>
        </div>

        <div className="animate-slide-up flex flex-col sm:flex-row gap-4 justify-center" style={{ animationDelay: "0.5s" }}>
          <Button
            size="lg"
            onClick={scrollToLocation}
            className="bg-gradient-to-r from-cyan-glow to-purple-deep hover:shadow-lg hover:scale-105 transition-all text-lg px-8 py-6"
          >
            Start Analysis
            <ArrowDown className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-cyan-glow text-cyan-glow hover:bg-cyan-glow/10 text-lg px-8 py-6"
          >
            Learn More
          </Button>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-slide-up" style={{ animationDelay: "0.7s" }}>
          <div className="glass-card p-6 hover:scale-105 transition-transform">
            <div className="text-4xl mb-3">🛰️</div>
            <h3 className="text-lg font-semibold mb-2 text-foreground">NASA Data</h3>
            <p className="text-sm text-muted-foreground">Powered by decades of satellite observations</p>
          </div>
          <div className="glass-card p-6 hover:scale-105 transition-transform">
            <div className="text-4xl mb-3">📊</div>
            <h3 className="text-lg font-semibold mb-2 text-foreground">Smart Analytics</h3>
            <p className="text-sm text-muted-foreground">Advanced algorithms predict weather patterns</p>
          </div>
          <div className="glass-card p-6 hover:scale-105 transition-transform">
            <div className="text-4xl mb-3">🎯</div>
            <h3 className="text-lg font-semibold mb-2 text-foreground">Accurate Results</h3>
            <p className="text-sm text-muted-foreground">Historical probability analysis you can trust</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-sm">Scroll to explore</span>
          <ArrowDown className="h-5 w-5" />
        </div>
      </div>
    </div>
  );
};
