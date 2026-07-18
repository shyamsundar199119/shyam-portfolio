import SectionTitle from "./SectionTitle";
import {
  Briefcase,
  Activity,
  Cpu,
  Wrench,
  MapPin,
  CheckCircle,
} from "lucide-react";

const highlights = [
  {
    icon: Briefcase,
    title: "12+ Years Experience",
    description:
      "Building enterprise backend systems using Java, Spring Boot and Microservices.",
  },
  {
    icon: Activity,
    title: "High-Scale Payment Systems",
    description:
      "Contributed to Mastercard's real-time payment platform processing nearly 1M transactions per day.",
  },
  {
    icon: Cpu,
    title: "Backend Engineering",
    description:
      "Designing REST APIs, microservices and distributed systems with Java & Spring Boot.",
  },
  {
    icon: Wrench,
    title: "DevOps & Automation",
    description:
      "Built CI/CD pipelines, deployment automation and production observability using Jenkins, Splunk, Dynatrace and Chef.",
  },
  {
    icon: MapPin,
    title: "Based in Oslo",
    description:
      "Open to Senior Backend, Platform and DevOps Engineering opportunities.",
  },
  {
    icon: CheckCircle,
    title: "Always Learning",
    description:
      "Currently building AI-powered applications while continuously improving backend architecture and cloud skills.",
  },
];

export default function CareerHighlights() {
  return (
    <section
      id="highlights"
      className="py-20 px-6 bg-gray-50 dark:bg-black/20"
    >
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="Career Highlights" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="
                  rounded-2xl
                  border
                  bg-white
                  dark:bg-neutral-900
                  p-6
                  shadow-sm
                  hover:shadow-xl
                  hover:-translate-y-1
                  transition-all
                  duration-300
                "
              >
                <Icon
                  className="text-blue-600 mb-4"
                  size={30}
                />

                <h3 className="font-bold text-xl mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}