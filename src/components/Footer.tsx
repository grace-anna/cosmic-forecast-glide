export const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-secondary/20 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-glow to-purple-deep flex items-center justify-center">
                <span className="text-xl font-bold">🌤️</span>
              </div>
              <div>
                <h3 className="font-bold">NASA WeatherWise</h3>
                <p className="text-xs text-muted-foreground">Space Apps 2025</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Predicting weather with the power of NASA Earth observation data
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-cyan-glow transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-cyan-glow transition-colors">API Access</a></li>
              <li><a href="#" className="hover:text-cyan-glow transition-colors">Data Sources</a></li>
              <li><a href="#" className="hover:text-cyan-glow transition-colors">Methodology</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">About</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-cyan-glow transition-colors">Team</a></li>
              <li><a href="#" className="hover:text-cyan-glow transition-colors">NASA Space Apps</a></li>
              <li><a href="#" className="hover:text-cyan-glow transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-cyan-glow transition-colors">Terms of Use</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-cyan-glow transition-colors">GitHub</a></li>
              <li><a href="#" className="hover:text-cyan-glow transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-cyan-glow transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-cyan-glow transition-colors">Feedback</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2025 NASA WeatherWise. Built for NASA Space Apps Challenge.</p>
          <div className="flex items-center gap-2">
            <span>Powered by</span>
            <span className="font-semibold text-cyan-glow">NASA POWER API</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
