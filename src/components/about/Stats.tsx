const Stats = () => {
  return (
    <section className="container mx-auto px-6 lg:px-12">
      <div className="grid lg:grid-cols-4 gap-12">
        {[
          { value: "3+", label: "Years in Development" },
          { value: "50+", label: "Projects Delivered" },
          { value: "MERN", label: "Specialized Stack" },
          { value: "24/7", label: "Commitment" },
        ].map((stat, i) => (
          <div key={i} className="text-center group">
            <div className="text-7xl font-bold text-white/10 group-hover:text-primary transition-colors mb-2">
              {stat.value}
            </div>
            <div className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
