import {
  DoorOpen,
  Fence,
  Hammer,
  House,
  PanelsTopLeft,
  Shield,
  Sparkles,
  Wrench,
} from "lucide-react";

export const services = [
  {
    id: "gate-fabrication",

    slug: "gate-fabrication",

    name: "Gate Fabrication",

    shortDescription:
      "Custom metal gates designed and fabricated for homes, shops, offices, and commercial properties.",

    description:
      "We provide custom gate fabrication based on your required size, design, material, and property type. From simple and durable entrance gates to modern decorative designs, every project is planned for strength, functionality, and long-term use.",

    icon: DoorOpen,

    image: "/images/services/gate-fabrication.png",

    category: "Fabrication",

    featured: true,

    benefits: [
      "Custom size and design",
      "Residential and commercial options",
      "Strong and durable fabrication",
      "Multiple design styles",
      "Repair and modification options",
    ],

    applications: [
      "Main entrance gates",
      "Home gates",
      "Shop and office gates",
      "Factory gates",
      "Sliding gates",
    ],

    process: [
      {
        title: "Requirement",
        description:
          "Share your required gate size, location, design preference, and reference images if available.",
      },
      {
        title: "Measurement",
        description:
          "Measurements and project requirements are confirmed before fabrication begins.",
      },
      {
        title: "Quotation",
        description:
          "A quotation is prepared based on material, size, design, labour, and installation requirements.",
      },
      {
        title: "Fabrication",
        description:
          "The gate is fabricated according to the approved specifications.",
      },
      {
        title: "Installation",
        description:
          "The completed gate is installed and checked for proper operation and finishing.",
      },
    ],
  },

  {
    id: "railing-fabrication",

    slug: "railing-fabrication",

    name: "Railing Fabrication",

    shortDescription:
      "Custom railings for balconies, staircases, terraces, and commercial spaces.",

    description:
      "We fabricate strong and practical metal railings for residential and commercial properties. Railing designs can be customized according to the available space, safety requirements, and preferred appearance.",

    icon: Fence,

    image: "/images/services/railing-fabrication.png",

    category: "Fabrication",

    featured: true,

    benefits: [
      "Custom measurements",
      "Safety-focused fabrication",
      "Modern and traditional designs",
      "Indoor and outdoor solutions",
      "Professional installation",
    ],

    applications: [
      "Balcony railings",
      "Staircase railings",
      "Terrace railings",
      "Commercial railings",
      "Safety barriers",
    ],

    process: [
      {
        title: "Site Requirement",
        description:
          "We understand the location, measurements, safety requirements, and preferred railing style.",
      },
      {
        title: "Design",
        description:
          "A suitable railing design is selected according to the property and project requirements.",
      },
      {
        title: "Quotation",
        description:
          "Pricing is calculated according to measurements, material, design complexity, and installation.",
      },
      {
        title: "Fabrication",
        description:
          "The railing is fabricated according to the approved measurements and design.",
      },
      {
        title: "Installation",
        description:
          "The railing is securely installed and checked for stability and finishing.",
      },
    ],
  },

  {
    id: "grill-fabrication",

    slug: "grill-fabrication",

    name: "Grill Fabrication",

    shortDescription:
      "Strong custom metal grills for windows, balconies, doors, and property protection.",

    description:
      "We provide custom grill fabrication for homes and commercial properties. Grills are manufactured according to the required measurements and can be designed for security, ventilation, and appearance.",

    icon: Shield,

    image: "/images/services/grill-fabrication.png",

    category: "Fabrication",

    featured: true,

    benefits: [
      "Custom measurements",
      "Security-focused designs",
      "Window and door solutions",
      "Multiple design options",
      "Durable construction",
    ],

    applications: [
      "Window grills",
      "Door grills",
      "Balcony grills",
      "Safety grills",
      "Commercial property grills",
    ],

    process: [
      {
        title: "Requirement",
        description:
          "Share the grill location, measurements, design preference, and security requirements.",
      },
      {
        title: "Measurement",
        description:
          "Required dimensions are confirmed before fabrication.",
      },
      {
        title: "Quotation",
        description:
          "The quotation is prepared according to size, material, design, and installation requirements.",
      },
      {
        title: "Fabrication",
        description:
          "The grill is fabricated according to the approved specifications.",
      },
      {
        title: "Installation",
        description:
          "The completed grill is securely fitted at the required location.",
      },
    ],
  },

  {
    id: "shed-fabrication",

    slug: "shed-fabrication",

    name: "Shed Fabrication",

    shortDescription:
      "Metal shed fabrication for homes, shops, warehouses, parking areas, and commercial spaces.",

    description:
      "We design and fabricate metal shed structures according to available space and usage requirements. Solutions are available for residential, commercial, workshop, storage, and parking applications.",

    icon: House,

    image: "/images/services/shed-fabrication.png",

    category: "Structural",

    featured: true,

    benefits: [
      "Custom structure planning",
      "Residential and commercial use",
      "Strong supporting framework",
      "Multiple roofing options",
      "Installation support",
    ],

    applications: [
      "Parking sheds",
      "Shop sheds",
      "Warehouse sheds",
      "Workshop sheds",
      "Terrace sheds",
    ],

    process: [
      {
        title: "Site Assessment",
        description:
          "The available area, intended use, dimensions, and structural requirements are understood.",
      },
      {
        title: "Planning",
        description:
          "The frame layout and suitable roofing solution are planned according to the project.",
      },
      {
        title: "Quotation",
        description:
          "A quotation is prepared according to dimensions, material, structure, roofing, and labour.",
      },
      {
        title: "Fabrication",
        description:
          "Structural components are fabricated according to the approved plan.",
      },
      {
        title: "Installation",
        description:
          "The structure and roofing are installed and checked for proper alignment and stability.",
      },
    ],
  },

  {
    id: "staircase-fabrication",

    slug: "staircase-fabrication",

    name: "Staircase Fabrication",

    shortDescription:
      "Custom metal staircases for residential, commercial, industrial, and access requirements.",

    description:
      "We fabricate metal staircases according to site dimensions, available space, and usage requirements. Designs can be customized for indoor, outdoor, residential, commercial, and industrial applications.",

    icon: PanelsTopLeft,

    image: "/images/services/staircase-fabrication.png",

    category: "Structural",

    featured: false,

    benefits: [
      "Custom site measurements",
      "Strong structural fabrication",
      "Indoor and outdoor options",
      "Space-conscious designs",
      "Railing integration",
    ],

    applications: [
      "Home staircases",
      "Outdoor staircases",
      "Shop access stairs",
      "Industrial access stairs",
      "Terrace access",
    ],

    process: [
      {
        title: "Site Measurement",
        description:
          "Height, width, available area, and access requirements are measured and reviewed.",
      },
      {
        title: "Planning",
        description:
          "A suitable staircase layout is planned according to space and usage.",
      },
      {
        title: "Quotation",
        description:
          "Pricing is calculated according to structure, material, dimensions, railing, and installation.",
      },
      {
        title: "Fabrication",
        description:
          "The staircase components are fabricated according to approved measurements.",
      },
      {
        title: "Installation",
        description:
          "The staircase is installed and checked for stability, alignment, and safe usage.",
      },
    ],
  },

  {
    id: "welding-repair",

    slug: "welding-repair",

    name: "Welding Repair",

    shortDescription:
      "Repair and reinforcement for damaged gates, grills, railings, frames, and metal structures.",

    description:
      "Our welding repair service helps restore damaged, cracked, loose, or broken metal components. The repair approach depends on the condition of the existing structure and whether repair or replacement is the safer solution.",

    icon: Wrench,

    image: "/images/services/welding-repair.png",

    category: "Repair",

    featured: true,

    benefits: [
      "Gate and grill repairs",
      "Broken joint repair",
      "Structural reinforcement",
      "On-site repair where practical",
      "Repair assessment before work",
    ],

    applications: [
      "Broken gates",
      "Damaged railings",
      "Loose grills",
      "Metal frames",
      "Existing fabricated structures",
    ],

    process: [
      {
        title: "Problem Assessment",
        description:
          "Share photos or details of the damaged component so the repair requirement can be understood.",
      },
      {
        title: "Inspection",
        description:
          "The condition is checked to determine whether repair, reinforcement, or replacement is appropriate.",
      },
      {
        title: "Quotation",
        description:
          "The repair cost is estimated according to damage, material, labour, and site requirements.",
      },
      {
        title: "Repair",
        description:
          "Required welding, reinforcement, replacement, or adjustment work is completed.",
      },
      {
        title: "Final Check",
        description:
          "The repaired area is checked for stability and proper operation.",
      },
    ],
  },

  {
    id: "structural-welding",

    slug: "structural-welding",

    name: "Structural Welding",

    shortDescription:
      "Welding and fabrication solutions for structural metal frames and supporting structures.",

    description:
      "We provide structural welding and fabrication for suitable residential, commercial, and workshop projects. Work is planned according to project dimensions, material requirements, intended use, and applicable project specifications.",

    icon: Hammer,

    image: "/images/services/structural-welding.png",

    category: "Structural",

    featured: false,

    benefits: [
      "Custom structural fabrication",
      "Frame welding",
      "Support structure fabrication",
      "Repair and reinforcement",
      "Project-based solutions",
    ],

    applications: [
      "Metal frames",
      "Support structures",
      "Workshop structures",
      "Commercial fabrication",
      "Structural repairs",
    ],

    process: [
      {
        title: "Project Review",
        description:
          "Project dimensions, intended use, specifications, and fabrication requirements are reviewed.",
      },
      {
        title: "Planning",
        description:
          "Material and fabrication requirements are determined according to the project.",
      },
      {
        title: "Quotation",
        description:
          "A project quotation is prepared based on scope, materials, labour, and installation requirements.",
      },
      {
        title: "Fabrication",
        description:
          "Structural components are fabricated according to approved project requirements.",
      },
      {
        title: "Installation",
        description:
          "Where included in the project scope, fabricated components are installed and checked.",
      },
    ],
  },

  {
    id: "custom-metal-fabrication",

    slug: "custom-metal-fabrication",

    name: "Custom Metal Fabrication",

    shortDescription:
      "Made-to-order metal fabrication for unique residential, commercial, and business requirements.",

    description:
      "Have a custom metal requirement that does not fit a standard service? We can review your idea, reference image, measurements, and intended use to determine a suitable fabrication solution.",

    icon: Sparkles,

    image: "/images/services/custom-metal-fabrication.png",

    category: "Custom",

    featured: true,

    benefits: [
      "Made-to-order fabrication",
      "Reference design support",
      "Custom dimensions",
      "Residential and commercial projects",
      "Project-specific solutions",
    ],

    applications: [
      "Custom frames",
      "Metal stands",
      "Custom enclosures",
      "Decorative fabrication",
      "Special fabrication projects",
    ],
    process: [
      {
        title: "Share Your Idea",
        description:
          "Send your requirement, measurements, drawings, or reference images.",
      },
      {
        title: "Feasibility Review",
        description:
          "The requirement is reviewed to determine a practical fabrication approach.",
      },
      {
        title: "Quotation",
        description:
          "A quotation is prepared according to material, dimensions, complexity, labour, and installation.",
      },
      {
        title: "Fabrication",
        description:
          "The approved custom product is fabricated according to the agreed requirements.",
      },
      {
        title: "Delivery / Installation",
        description:
          "The finished fabrication is delivered or installed according to the agreed project scope.",
      },
    ],
  },
    {
    id: "steel-fabrication",

    slug: "steel-fabrication",

    name: "Steel Gate Fabrication",

    shortDescription:
      "Custom steel gates designed and fabricated for homes, shops, offices, and commercial properties.",

    description:
      "We provide custom gate fabrication based on your required size, design, material, and property type. From simple and durable entrance gates to modern decorative designs, every project is planned for strength, functionality, and long-term use.",

    icon: DoorOpen,

    image: "/images/services/steel-fabrication.png",

    category: "Fabrication",

    featured: true,

    benefits: [
      "Custom size and design",
      "Residential and commercial options",
      "Strong and durable fabrication",
      "Multiple design styles",
      "Repair and modification options",
    ],

    applications: [
      "Main entrance gates",
      "Home gates",
      "Shop and office gates",
      "Factory gates",
      "Sliding gates",
    ],

    process: [
      {
        title: "Requirement",
        description:
          "Share your required gate size, location, design preference, and reference images if available.",
      },
      {
        title: "Measurement",
        description:
          "Measurements and project requirements are confirmed before fabrication begins.",
      },
      {
        title: "Quotation",
        description:
          "A quotation is prepared based on material, size, design, labour, and installation requirements.",
      },
      {
        title: "Fabrication",
        description:
          "The gate is fabricated according to the approved specifications.",
      },
      {
        title: "Installation",
        description:
          "The completed gate is installed and checked for proper operation and finishing.",
      },
    ],
  },
];

/**
 * Featured services for homepage sections.
 */
export const featuredServices = services.filter(
  (service) => service.featured
);

/**
 * Find a service using its public URL slug.
 *
 * Example:
 * getServiceBySlug("gate-fabrication")
 */
export function getServiceBySlug(slug) {
  return services.find((service) => service.slug === slug);
}

/**
 * Get unique service categories.
 *
 * Useful for filters on the Services page.
 */
export const serviceCategories = [
  ...new Set(services.map((service) => service.category)),
];