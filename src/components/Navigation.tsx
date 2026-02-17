import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { name: "About", href: "/#about" },
  { name: "Skills", href: "/#skills" },
  { name: "Projects", href: "/#projects" },
  { name: "Contact", href: "/#contact" },
];

const MotionLink = motion(Link);

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Target Background Layer (z-110) */}
      <div
        className={`fixed top-0 left-0 right-0 z-[110] h-16 sm:h-20 transition-all duration-300 ${
          isScrolled
            ? "glass-card border-b border-border/50"
            : "bg-transparent pointer-events-none"
        }`}
      />

      {/* Interactive Navigation Layer (z-[130]) */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-[130] pointer-events-none"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pointer-events-auto">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <div className="flex-1">
              <AnimatePresence>
                {!isHomePage && (
                  <MotionLink
                    to="/"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="text-lg sm:text-xl font-bold tracking-tighter hover:text-primary transition-colors inline-block"
                  >
                    Mubashir Ahmad Hamza
                  </MotionLink>
                )}
              </AnimatePresence>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <div className="flex items-center gap-6 pr-8 border-r border-border/50">
                {navItems.map((item, index) => (
                  <MotionLink
                    key={item.name}
                    to={item.href}
                    className="nav-link text-sm font-medium animated-underline"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.4 }}
                    whileHover={{ y: -2 }}
                  >
                    {item.name}
                  </MotionLink>
                ))}
              </div>

              <motion.a
                href="/Mubashir Ahmad CV.pdf"
                download="Mubashir Ahmad CV.pdf"
                className="px-5 py-2.5 bg-white text-black rounded-full font-semibold text-sm hover:scale-105 transition-transform ml-2"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.4 }}
              >
                Download CV
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden p-2 text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden glass-card border-t border-border/50 pointer-events-auto"
            >
              <div className="container mx-auto px-4 py-6 flex flex-col gap-6">
                <div className="flex flex-col gap-4">
                  {navItems.map((item, index) => (
                    <MotionLink
                      key={item.name}
                      to={item.href}
                      className="text-muted-foreground hover:text-primary transition-colors py-2 text-lg font-medium"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * index }}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </MotionLink>
                  ))}
                </div>

                <motion.a
                  href="/Mubashir Ahmad CV.pdf"
                  download="Mubashir Ahmad CV.pdf"
                  className="px-5 py-3 bg-white text-black rounded-xl font-bold text-center mt-2 shadow-lg"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Download CV
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navigation;
