import AnimatedSection from "./AnimatedSection";

const stats = [
  {
    number: "12+",
    label: "Years Experience",
  },
  {
    number: "1M+",
    label: "Transactions / Day",
  },
  {
    number: "24/7",
    label: "Production Support",
  },
  {
    number: "50+",
    label: "Enterprise Releases",
  },
];

export default function Stats() {
  return (
    <AnimatedSection>

      <section className="py-16 px-6">

        <div className="
        max-w-6xl
        mx-auto
        grid
        grid-cols-2
        md:grid-cols-4
        gap-6
        ">

          {stats.map((stat)=>(
            <div
              key={stat.label}
              className="
              border
              rounded-xl
              p-6
              text-center
              hover:scale-105
              transition
              "
            >

              <h3 className="
              text-4xl
              font-bold
              text-blue-600
              ">
                {stat.number}
              </h3>

              <p className="mt-2">
                {stat.label}
              </p>

            </div>
          ))}

        </div>

      </section>

    </AnimatedSection>
  );
}