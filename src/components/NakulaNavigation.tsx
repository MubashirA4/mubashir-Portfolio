import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NakulaNavigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  const navLinks = [
    { name: "Works", href: "#works" },
    { name: "Services", href: "#services" },
    { name: "Process", href: "#process" },
    { name: "Pricing", href: "#pricing" },
    { name: "Blog", href: "#blog" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/90 backdrop-blur-lg border-b border-border" : ""
        }`}
      >
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#" className="flex items-center">
              <span className="text-2xl font-bold tracking-tighter">NAKULA</span>
              <span className="text-primary text-xs ml-1">®</span>
            </a>

            {/* Right side - Desktop */}
            <div className="hidden lg:flex items-center gap-8">
              {/* Availability */}
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <div className="text-muted-foreground">
                    <span className="block text-xs">Available for project</span>
                    <span className="text-foreground font-medium">EARLY FEB 2025</span>
                  </div>
                </div>
                <div className="text-muted-foreground">
                  <span className="block text-foreground font-medium">{formatTime(currentTime)}</span>
                  <span className="text-xs">(GMT+7)</span>
                </div>
              </div>

              {/* CTA Button */}
              <a
                href="#contact"
                className="px-6 py-3 border border-border rounded-full font-medium hover:bg-secondary transition-colors"
              >
                LET'S TALK
              </a>

              {/* Menu Button */}
              <button
                onClick={() => setIsMenuOpen(true)}
                className="p-2 hover:bg-secondary rounded-lg transition-colors"
              >
                <Menu size={24} />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="lg:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Full Screen Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-background"
          >
            <div className="container mx-auto px-6 lg:px-12 h-full flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between h-20">
                <a href="#" className="flex items-center">
                  <span className="text-2xl font-bold tracking-tighter">NAKULA</span>
                  <span className="text-primary text-xs ml-1">®</span>
                </a>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 hover:bg-secondary rounded-lg transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="flex-1 flex flex-col justify-center">
                <nav className="space-y-4">
                  {navLinks.map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => setIsMenuOpen(false)}
                      className="block text-5xl sm:text-7xl lg:text-8xl font-bold hover:text-primary transition-colors"
                    >
                      {link.name}
                    </motion.a>
                  ))}
                </nav>
              </div>

              {/* Footer */}
              <div className="py-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-6">
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Instagram
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Twitter
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    LinkedIn
                  </a>
                </div>
                <a
                  href="#contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="cta-button"
                >
                  START A PROJECT
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NakulaNavigation;
