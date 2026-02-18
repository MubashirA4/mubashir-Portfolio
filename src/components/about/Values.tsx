import { CheckCircle2 } from "lucide-react";

interface ValuesProps {
  values: { title: string; desc: string }[];
}

const Values = ({ values }: ValuesProps) => {
  return (
    <section className="container mx-auto px-6 lg:px-12">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold uppercase tracking-tighter">
          Personal Values
        </h2>
      </div>
      <div className="grid md:grid-cols-4 gap-8">
        {values.map((val, i) => (
          <div key={i} className="text-center space-y-4">
            <CheckCircle2 className="w-8 h-8 text-primary mx-auto" />
            <h3 className="text-xl font-bold">{val.title}</h3>
            <p className="text-muted-foreground text-sm">{val.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Values;
