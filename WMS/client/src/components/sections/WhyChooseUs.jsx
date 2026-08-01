import {
  BadgeCheck,
  ClipboardCheck,
  HardHat,
  ShieldCheck,
  Wrench,
  Zap,
} from "lucide-react";

import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";

const FEATURES = [
  {
    id: "custom-solutions",
    title: "Custom Fabrication",
    description:
      "Every project is planned according to your measurements, design preferences, and practical requirements.",
    icon: Wrench,
  },
  {
    id: "quality-workmanship",
    title: "Quality Workmanship",
    description:
      "We focus on clean fabrication, strong welded joints, and attention to detail throughout the project.",
    icon: BadgeCheck,
  },
  {
    id: "project-planning",
    title: "Transparent Quotation",
    description:
      "Project requirements are reviewed before providing a quotation, helping you understand the proposed scope of work.",
    icon: ClipboardCheck,
  },
  {
    id: "durable-results",
    title: "Built for Durability",
    description:
      "Suitable materials and fabrication methods are selected based on the intended application of the project.",
    icon: ShieldCheck,
  },
  {
    id: "professional-approach",
    title: "Professional Approach",
    description:
      "From initial discussion to installation, we aim for clear communication and organized project execution.",
    icon: HardHat,
  },
  {
    id: "practical-solutions",
    title: "Practical Solutions",
    description:
      "Whether it's a new fabrication or a repair, we recommend practical solutions based on the project's needs.",
    icon: Zap,
  },
];

function WhyChooseUsSection() {
  return (
    <section className="bg-gray-50 py-14">
      <Container>
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Reliable Welding & Fabrication You Can Count On"
          description="We focus on practical fabrication solutions, quality workmanship, and clear communication throughout every stage of your project."
          align="center"
        />

        <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {FEATURES.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.id}
                className="group rounded-2xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-orange-100 text-orange-600 transition-colors duration-300 group-hover:bg-orange-600 group-hover:text-white">
                  <Icon className="h-7 w-7" />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {feature.description}
                </p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default WhyChooseUsSection;