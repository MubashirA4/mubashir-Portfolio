import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    main: [
      { name: "About", href: "/#about" },
      { name: "Skills", href: "/#skills" },
      { name: "Projects", href: "/#projects" },
      { name: "Contact", href: "/#contact" },
    ],
    social: [
      { name: "GitHub", icon: Github, href: "https://github.com/MubashirA4" },
      {
        name: "LinkedIn",
        icon: Linkedin,
        href: "https://www.linkedin.com/in/mubashir-ahmad-hamza-a5961b279/",
      },
      { name: "Email", icon: Mail, href: "mailto:hamza.cse123@gmail.com" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
    ],
  };

  return (
    <footer className="border-t border-border bg-background/50 backdrop-blur-sm">
      <div className="section-container py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Logo & Description */}
          <div className="lg:col-span-2 space-y-8">
            <a href="/" className="inline-block">
              <span className="text-4xl font-bold tracking-tighter uppercase">
                Mubashir<span className="text-primary">.</span>
              </span>
            </a>
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
              Sitemap
            </h4>
            <ul className="space-y-4">
              {footerLinks.main.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-lg text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 h-[1px] bg-primary group-hover:w-4 transition-all duration-300" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Contact */}
          <div className="space-y-8">
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-foreground">
              Contact
            </h4>
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Have a project in mind?
                <br />
                <a
                  href="mailto:contact@mubashir.dev"
                  className="text-white hover:text-primary transition-colors font-medium underline decoration-primary/30 underline-offset-8"
                >
                  Get in touch
                </a>
              </p>
              <p className="text-sm text-muted-foreground uppercase tracking-widest">
                Available Worldwide
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-10 border-t border-white/5">
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
