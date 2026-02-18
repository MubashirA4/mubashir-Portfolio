import { Terminal, Workflow, Cpu, Code2, ShieldCheck, Zap } from "lucide-react";

const Tools = () => {
  return (
    <section className="container mx-auto px-6 lg:px-12">
      <div className="glass-card p-12 overflow-hidden relative">
        <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold uppercase tracking-tight mb-6">
              Tools & Workflow
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              I utilize a modern toolset to ensure code quality, collaboration,
              and high-performance deployment.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                "VS Code",
                "Anti Gravity",
                "Git/GitHub",
                "Vercel",
                "Postman",
                "Figma",
                "Agile/Scrum",
              ].map((tool) => (
                <span
                  key={tool}
                  className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium hover:border-primary/50 transition-colors"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <div className="grid grid-cols-3 gap-6 opacity-30">
              <Terminal size={60} className="text-primary" />
              <Workflow size={60} />
              <Cpu size={60} className="text-primary" />
              <Code2 size={60} />
              <ShieldCheck size={60} className="text-primary" />
              <Zap size={60} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tools;
