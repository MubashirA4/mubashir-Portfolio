import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Github,
  Linkedin,
  CheckCircle,
} from "lucide-react";
import { useState, useRef } from "react";
import { z } from "zod";
import { useInView } from "framer-motion";

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Name is required")
    .max(100, "Name must be less than 100 characters"),
  email: z
    .string()
    .trim()
    .email("Invalid email address")
    .max(255, "Email must be less than 255 characters"),
  subject: z
    .string()
    .trim()
    .min(1, "Subject is required")
    .max(200, "Subject must be less than 200 characters"),
  message: z
    .string()
    .trim()
    .min(1, "Message is required")
    .max(1000, "Message must be less than 1000 characters"),
});

type ContactForm = z.infer<typeof contactSchema>;

const ContactSection = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<ContactForm>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactForm]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Partial<ContactForm> = {};
      result.error.errors.forEach((error) => {
        if (error.path[0]) {
          fieldErrors[error.path[0] as keyof ContactForm] = error.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setIsSuccess(false), 5000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "contact@mubashir.dev",
      href: "mailto:contact@mubashir.dev",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Available Worldwide",
      href: "#",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567",
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 lg:py-32 relative overflow-hidden"
      ref={sectionRef}
    >
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-24"
        >
          <span className="text-primary font-bold uppercase tracking-[0.3em] text-sm mb-4 block">
            Get In Touch
          </span>
          <h2 className="text-5xl lg:text-7xl font-bold uppercase tracking-tighter mb-8">
            Let's <span className="text-primary">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Have a project in mind or want to discuss potential opportunities?
            I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-20">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2 space-y-10"
          >
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  className="flex items-center gap-6 p-6 glass-card rounded-2xl hover-glow group bg-white/5 border-white/10"
                  whileHover={{ x: 10 }}
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground uppercase tracking-widest mb-1">
                      {info.label}
                    </div>
                    <div className="text-xl font-bold text-foreground">
                      {info.value}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="pt-8">
              <h3 className="text-xl font-bold text-foreground mb-6 uppercase tracking-widest">
                Follow the Journey
              </h3>
              <div className="flex gap-4">
                {[
                  {
                    icon: Github,
                    label: "GitHub",
                    href: "https://github.com/MubashirA4",
                  },
                  {
                    icon: Linkedin,
                    label: "LinkedIn",
                    href: "https://www.linkedin.com/in/mubashir-ahmad-hamza-a5961b279/",
                  },
                  {
                    icon: Mail,
                    label: "Email",
                    href: "mailto:hamza.cse123@gmail.com",
                  },
                ].map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all hover:bg-white/10"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="glass-card p-8 lg:p-12 rounded-3xl border border-white/10 bg-white/5"
            >
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-3">
                  <label
                    htmlFor="name"
                    className="text-sm font-bold uppercase tracking-widest text-muted-foreground ml-1"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-6 py-4 bg-white/5 border-2 rounded-2xl text-foreground placeholder:text-muted-foreground/20 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all ${
                      errors.name ? "border-destructive" : "border-white/10"
                    }`}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="text-xs text-destructive font-semibold ml-1">
                      {errors.name}
                    </p>
                  )}
                </div>
                <div className="space-y-3">
                  <label
                    htmlFor="email"
                    className="text-sm font-bold uppercase tracking-widest text-muted-foreground ml-1"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-6 py-4 bg-white/5 border-2 rounded-2xl text-foreground placeholder:text-muted-foreground/20 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all ${
                      errors.email ? "border-destructive" : "border-white/10"
                    }`}
                    placeholder="email@example.com"
                  />
                  {errors.email && (
                    <p className="text-xs text-destructive font-semibold ml-1">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-3 mb-8">
                <label
                  htmlFor="subject"
                  className="text-sm font-bold uppercase tracking-widest text-muted-foreground ml-1"
                >
                  What can I help with?
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-6 py-4 bg-white/5 border-2 rounded-2xl text-foreground placeholder:text-muted-foreground/20 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all ${
                    errors.subject ? "border-destructive" : "border-white/10"
                  }`}
                  placeholder="Project Inquiry, Speaking, etc."
                />
                {errors.subject && (
                  <p className="text-xs text-destructive font-semibold ml-1">
                    {errors.subject}
                  </p>
                )}
              </div>

              <div className="space-y-3 mb-10">
                <label
                  htmlFor="message"
                  className="text-sm font-bold uppercase tracking-widest text-muted-foreground ml-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className={`w-full px-6 py-4 bg-white/5 border-2 rounded-2xl text-foreground placeholder:text-muted-foreground/20 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none ${
                    errors.message ? "border-destructive" : "border-white/10"
                  }`}
                  placeholder="Tell me more about your ideas..."
                />
                {errors.message && (
                  <p className="text-xs text-destructive font-semibold ml-1">
                    {errors.message}
                  </p>
                )}
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-5 bg-primary text-primary-foreground rounded-2xl font-bold text-xl hover-glow flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-primary/20"
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      className="w-6 h-6 border-3 border-primary-foreground/30 border-t-primary-foreground rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                    Processing...
                  </>
                ) : isSuccess ? (
                  <>
                    <CheckCircle size={24} />
                    Sent Successfully!
                  </>
                ) : (
                  <>
                    <Send size={24} />
                    Send Message
                  </>
                )}
              </motion.button>

              {isSuccess && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 text-center text-primary font-bold uppercase tracking-widest"
                >
                  Thanks! I'll reach out to you shortly.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
