import { Code, Cloud, Shield, LineChart, Smartphone, Brain } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Custom Software Development",
    description:
      "Tailored solutions to meet your unique business needs with expertise in various programming languages and frameworks.",
  },
  {
    icon: Smartphone,
    title: "Web & Mobile Development",
    description:
      "Responsive, user-friendly, and scalable apps integrated with advanced technologies like AR/VR and AI.",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description:
      "Seamless transition to the cloud with cost-effective and secure infrastructure management.",
  },
  {
    icon: Brain,
    title: "IT Consulting",
    description:
      "Expert guidance for digital transformation and technology roadmaps to achieve business goals.",
  },
  {
    icon: Shield,
    title: "Cybersecurity Services",
    description:
      "Proactive measures to protect your business from threats and ensure compliance with global security standards.",
  },
  {
    icon: LineChart,
    title: "Data Analytics & AI",
    description:
      "Transform data into actionable insights with AI-driven solutions for enhanced decision-making.",
  },
];

const Services = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gradient">Our Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive IT solutions designed to transform your business and drive
            growth through innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass-card p-6 rounded-xl hover:scale-105 transition-all duration-300 animate-fade-up"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <service.icon className="w-10 h-10 text-primary mb-4 animate-pulse" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
