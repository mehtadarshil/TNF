import { useState } from "react";
    import { Menu, X } from "lucide-react";
    import { Link, useNavigate } from "react-router-dom";
    import logo from "@/assets/logo.png";

    const Navbar = () => {
      const [isOpen, setIsOpen] = useState(false);
      const navigate = useNavigate();

      const navItems = [
        { name: "Home", id: "home" },
        { name: "Services", id: "services" },
        { name: "Impact", id: "impact" },
        { name: "Contact", id: "contact" },
      ];

      const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          setIsOpen(false);
        }
      };

      return (
        <nav className="fixed w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border animate-fade-in rounded-b-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div onClick={() => scrollToSection("home")} className="flex items-center space-x-2 cursor-pointer hover:scale-105 transition-transform">
                <img src={logo} alt="TechNoFear Logo" className="h-10 w-10 mr-2" />
                <span className="text-xl font-bold text-primary">TechNoFear</span>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.id)}
                    className="text-sm font-medium text-foreground hover:text-primary transition-colors hover:scale-105 transform"
                  >
                    {item.name}
                  </button>
                ))}
                <Link
                  to="/blog"
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors hover:scale-105 transform"
                >
                  Blog
                </Link>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="px-4 py-2 rounded-md bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all hover:scale-105 transform"
                >
                  Get Started
                </button>
              </div>

              {/* Mobile Navigation Button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-foreground hover:text-primary transition-colors"
                >
                  {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>

            {/* Mobile Navigation Menu */}
            {isOpen && (
              <div className="md:hidden animate-fade-in">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  {navItems.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => scrollToSection(item.id)}
                      className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary transition-colors"
                    >
                      {item.name}
                    </button>
                  ))}
                  <Link
                    to="/blog"
                    className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Blog
                  </Link>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="block w-full px-3 py-2 rounded-md text-base font-medium bg-primary text-primary-foreground hover:opacity-90 transition-opacity text-center"
                  >
                    Get Started
                  </button>
                </div>
              </div>
            )}
          </div>
        </nav>
      );
    };

    export default Navbar;
