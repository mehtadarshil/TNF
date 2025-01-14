import { ArrowRight } from "lucide-react";
    import { Link } from "react-router-dom";

    const Hero = () => {
      return (
        <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 bg-background relative">
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
          <div className="text-center max-w-4xl mx-auto space-y-8 animate-fade-up relative z-10">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight animate-fade-up glass-card p-8 rounded-lg shadow-xl" style={{ animationDelay: "200ms" }}>
                Empowering Your Digital Future with{" "}
                <span className="text-gradient animate-pulse">Fearless Innovation</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-up glass-card p-6 rounded-lg" style={{ animationDelay: "400ms" }}>
                TechNoFear bridges the gap between technology and trust, delivering
                cutting-edge IT solutions tailored to your needs.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "600ms" }}>
              <Link
                to="/contact"
                className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all duration-300 flex items-center gap-2 group hover:scale-105 transform"
              >
                Get Started
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="px-8 py-3 rounded-lg glass-card text-foreground hover:bg-secondary/20 transition-all duration-300 hover:scale-105 transform"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      );
    };

    export default Hero;
