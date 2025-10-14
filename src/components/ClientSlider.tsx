import { useEffect, useState } from "react";

const clients = [
  "Microsoft Partner",
  "Cloud Services Excellence",
  "IT Security Certified",
  "Azure Expert",
  "M365 Specialist",
  "ISO 27001",
];

const ClientSlider = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => (prev - 1) % 100);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const doubledClients = [...clients, ...clients, ...clients];

  return (
    <section className="py-16 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 mb-8">
        <h2 className="text-3xl font-bold text-center">
          Vertrauen Sie auf unsere Expertise
        </h2>
      </div>

      <div className="relative">
        <div
          className="flex gap-12 items-center"
          style={{
            transform: `translateX(${offset}%)`,
            transition: "transform 0.05s linear",
          }}
        >
          {doubledClients.map((client, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-8 py-4 bg-card rounded-lg shadow-sm border border-border min-w-[200px] text-center"
            >
              <span className="text-sm font-semibold text-foreground whitespace-nowrap">
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientSlider;
