import {
  CheckCircle2,
  ClipboardList,
  FileText,
  Hammer,
  MessageSquareText,
} from "lucide-react";

import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";

const STEPS = [
  {
    id: "request",
    title: "Request a Quote",
    description:
      "Share your project details, approximate measurements, location, and reference images if available.",
    icon: MessageSquareText,
  },
  {
    id: "review",
    title: "Project Review",
    description:
      "We review your requirements to understand the scope, materials, and practical fabrication approach.",
    icon: ClipboardList,
  },
  {
    id: "quotation",
    title: "Receive Quotation",
    description:
      "You'll receive a quotation based on the project requirements, materials, labour, and installation scope.",
    icon: FileText,
  },
  {
    id: "fabrication",
    title: "Fabrication",
    description:
      "After approval, fabrication begins according to the agreed specifications and project plan.",
    icon: Hammer,
  },
  {
    id: "completion",
    title: "Delivery & Installation",
    description:
      "The completed project is delivered or installed as agreed, followed by a final quality check.",
    icon: CheckCircle2,
  },
];

function ProcessSection() {
  return (
    <section className="bg-gray-50 py-14">
      <Container>
        <SectionHeading
          eyebrow="Our Process"
          title="From Your Idea to the Finished Project"
          description="We follow a simple, transparent process so you know what to expect at every stage."
          align="center"
        />

        <div className="relative mt-16">
          {/* Desktop connector line */}
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-slate-200 lg:block" />

          <div className="grid gap-8 lg:grid-cols-5 grid gap-14 md:grid-cols-[1.3fr_1fr_1fr] sm:grid-cols-[1.3fr_1fr_1fr]">
            {STEPS.map((step, index) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.id}
                  className="relative rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-500 hover:shadow-lg"
                >
                  {/* Step Number */}
                  <div className="absolute right-4 top-4 text-sm font-bold text-slate-300">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  {/* Icon */}
                  <div className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                    <Icon className="h-8 w-8" />
                  </div>

                  <h3 className="mt-6 text-xl font-semibold text-slate-900">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {step.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ProcessSection;