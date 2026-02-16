import { motion } from "framer-motion";

const Footer = () => {
  const footerLinks = {
    main: [
      { name: "About", href: "/#about" },
      { name: "Skills", href: "/#skills" },
      { name: "Projects", href: "/#projects" },
      { name: "Contact", href: "/contact" },
    ],
    social: [
      { name: "Instagram", href: "#" },
      { name: "Twitter", href: "#" },
      { name: "LinkedIn", href: "#" },
      { name: "Dribbble", href: "#" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
    ],
  };

  return (
    <footer className="border-t border-border">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center mb-6">
              <span className="text-3xl font-bold tracking-tighter">
                Mubashir
              </span>
            </a>
            <p className="text-muted-foreground max-w-md mb-6">
              We build brands, websites, and digital experiences with intention,
              clarity and care.
            </p>
            <a href="/contact" className="cta-button">
              START A PROJECT
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-3">
              {footerLinks.main.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-3">
              {footerLinks.social.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Mubashir. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {footerLinks.legal.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
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
