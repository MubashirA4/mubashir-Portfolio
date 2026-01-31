import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Check } from "lucide-react";

const plans = [
  {
    id: "bespoke",
    name: "Bespoke",
    description: "Perfect for specialized needs or early-stage projects.",
    price: null,
    priceLabel: "Custom",
    features: [],
    cta: "CONTACT US",
    popular: false,
  },
  {
    id: "starter",
    name: "Starter",
    description: "Perfect for solo founders and early stage brands.",
    price: 5999,
    priceLabel: "/mo",
    features: [
      "1 Senior designer",
      "72 hours turn around time",
      "One request at a time",
      "Pause or cancel anytime",
      "Up to 40 hours per month",
      "Async communication",
    ],
    cta: "BOOK THIS PACKAGE",
    popular: false,
  },
  {
    id: "growth",
    name: "Growth",
    description: "Perfect for scaling businesses ready to go deeper.",
    price: 8999,
    priceLabel: "/mo",
    features: [
      "2 Senior designers",
      "48 hours turn around time",
      "Two requests at a time",
      "Pause or cancel anytime",
      "Up to 70 hours per month",
      "Async communication",
    ],
    cta: "BOOK THIS PACKAGE",
    popular: true,
  },
];

const NakulaPricing = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section id="pricing" className="section-container" ref={ref}>
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="heading-xl mb-4"
        >
          PRICING
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-muted-foreground text-lg"
        >
          From launch to scale, we've got you covered at every stage.
        </motion.p>

        {/* Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-center gap-4 mt-8"
        >
          <button
            onClick={() => setIsAnnual(false)}
            className={`px-4 py-2 rounded-full transition-colors ${
              !isAnnual ? "bg-secondary text-foreground" : "text-muted-foreground"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setIsAnnual(true)}
            className={`px-4 py-2 rounded-full transition-colors flex items-center gap-2 ${
              isAnnual ? "bg-secondary text-foreground" : "text-muted-foreground"
            }`}
          >
            Annual
            <span className="text-xs bg-primary text-primary-foreground px-2 py-0.5 rounded-full">
              -20%
            </span>
          </button>
        </motion.div>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.id}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            className={`pricing-card ${plan.popular ? "popular" : ""}`}
          >
            {/* Popular badge */}
            {plan.popular && (
              <div className="absolute top-4 right-4">
                <span className="text-xs font-bold text-primary uppercase tracking-wider">
                  (POPULAR)
                </span>
              </div>
            )}

            {/* Plan name */}
            <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
            <p className="text-muted-foreground mb-6">{plan.description}</p>

            {/* Price */}
            {plan.price ? (
              <div className="mb-8">
                <span className="text-5xl font-bold">
                  ${isAnnual ? Math.round(plan.price * 0.8) : plan.price}
                </span>
                <span className="text-muted-foreground">{plan.priceLabel}</span>
              </div>
            ) : (
              <div className="mb-8">
                <span className="text-3xl font-bold text-muted-foreground">Custom Quote</span>
              </div>
            )}

            {/* Features */}
            {plan.features.length > 0 && (
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <span className="text-primary">+</span>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* CTA */}
            <a
              href="#contact"
              className={`w-full inline-flex items-center justify-center py-4 rounded-full font-semibold transition-all ${
                plan.popular
                  ? "bg-primary text-primary-foreground hover:opacity-90"
                  : "border border-border hover:bg-secondary"
              }`}
            >
              {plan.cta}
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default NakulaPricing;
