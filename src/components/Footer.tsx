import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Github,
  Linkedin,
  Mail,
  Twitter,
  Instagram,
  MapPin,
} from "lucide-react";

const Footer = () => {
  const footerLinks = {
    main: [
      { name: "Home", href: "/" },
      { name: "About", href: "#about" },
      { name: "Services", href: "#specialization" },
      { name: "Skills", href: "#skills" },
      { name: "Projects", href: "#projects" },
      { name: "Experience", href: "#experience" },
      { name: "Education", href: "#education" },
      { name: "Contact", href: "#contact" },
    ],
    social: [
      { name: "GitHub", icon: Github, href: "https://github.com/MubashirA4" },
      {
        name: "LinkedIn",
        icon: Linkedin,
        href: "https://www.linkedin.com/in/mubashir-ahmad-hamza-a5961b279/",
      },
      { name: "Email", icon: Mail, href: "mailto:contact@mubashir.dev" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
    ],
  };

  return (
    <footer className="border-t border-border bg-background/50 backdrop-blur-sm">
      <div className="section-container py-20 px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  mb-10">
          {/* Logo & Description */}
          <div className="lg:col-span-2 space-y-8">
            <Link to="/" className="inline-block">
              <span className="text-4xl font-bold tracking-tighter uppercase">
                Mubashir<span className="text-primary">.</span>
              </span>
            </Link>
            <p className="text-xl text-muted-foreground max-w-md leading-relaxed">
              Crafting premium digital experiences through purposeful design and
              high-performance engineering.
            </p>

            {/* Social Icon Buttons */}
            <div className="flex items-center gap-4">
              {footerLinks.social.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all hover:bg-white/10"
                  whileHover={{ y: -5, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.name}
                >
                  <social.icon size={22} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-8">
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-foreground">
              Quick Navigation
            </h4>
            <ul className="grid grid-cols-2 grid-rows-4 grid-flow-col gap-x-8 gap-y-4">
              {footerLinks.main.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-lg text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 h-[1px] bg-primary group-hover:w-4 transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Contact */}
          <div className="space-y-8 ml-10">
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-foreground">
              Contact Detail
            </h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">
                    Email
                  </p>
                  <a
                    href="mailto:hamza.cse123@gmail.com"
                    className="text-lg text-foreground hover:text-primary transition-colors font-medium"
                  >
                    hamza.cse123@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">
                    Location
                  </p>
                  <p className="text-lg text-foreground font-medium">
                    Lahore, Pakistan
                  </p>
                </div>
              </div>

              <p className="text-sm text-muted-foreground uppercase tracking-widest pt-2">
                Available Worldwide
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-4 border-t border-white/5">
          <div className="flex items-center gap-8">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Mubashir Ahmad Hamza. All rights
              reserved.
            </p>
          </div>
          <div className="flex items-center gap-10">
            {footerLinks.legal.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
