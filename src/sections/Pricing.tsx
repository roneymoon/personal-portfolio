"use client";
import { Button } from "@/components/Button";
import { SectionBorder } from "@/components/SectionBorder";
import { SectionContent } from "@/components/SectionContent";
import { twMerge } from "tailwind-merge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { Orbit } from "@/components/Orbit"; // Assuming Orbit.js is memoized if needed

// Pre-calculate merged class names for performance
const baseTierClassName =
  "border leading-tight bg-[#030712] border-gray-200/30 rounded-3xl px-6 py-12 max-w-sm mx-auto";

export const pricingTiers = [
  {
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "Free",
    buttonText: "Get Started",
    features: [
      "Access to AI chatbot for natural language conversations",
      "Basic task automation for simple workflows",
      "Limited message history storage",
    ],
    color: "amber",
    className: twMerge(baseTierClassName, "lg:py-12 lg:my-6"), // Merged here
  },
  {
    title: "Premium",
    description: "Advanced AI capabilities for enhanced productivity",
    price: 99,
    buttonText: "Upgrade to Premium",
    features: [
      "All Basic features included",
      "Priority access to new AI features and updates",
      "Advanced automation tools for seamless task management",
      "Customizable chat templates for your specific workflows",
    ],
    color: "violet",
    className: twMerge(baseTierClassName, "lg:py-18 lg:my-0"), // Merged here
  },
  {
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: 149,
    buttonText: "Contact Us",
    buttonVariant: "primary",
    features: [
      "All Premium features included",
      "Dedicated account manager and priority customer support",
      "Enhanced security and compliance features for large teams",
      "Custom AI models tailored to your organization's needs",
      "API access for seamless integration with enterprise systems",
    ],
    color: "teal",
    className: twMerge(baseTierClassName, "lg:py-12 lg:my-6"), // Merged here
  },
];

export const Pricing = () => {
  return (
    <section className="pt-[100px]">
      <div className="container relative isolate">
        {/* ✅ Orbit visuals with fade-in only */}
        <motion.div
          className="absolute inset-0 -z-10"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }} // Consider reducing duration, e.g., 0.5
        >
          <div className="absolute inset-0 -z-10">
            {[350, 600, 850].map((size) => (
              <div
                key={size}
                className="absolute left-1/2 top-[30%] -translate-x-1/2 -translate-y-1/2"
              >
                {/* Ensure Orbit component itself is optimized/memoized if complex */}
                <Orbit className={`size-[${size}px]`} />
              </div>
            ))}
          </div>
        </motion.div>

        <SectionBorder>
          <SectionContent>
            <h2 className="text-3xl md:text-4xl lg:text-5xl z-20 font-semibold text-center text-gray-300">
              Flexible plans for every need
            </h2>
            <div className="mt-12 z-20 flex flex-col lg:flex-row lg:items-start gap-8">
              {pricingTiers.map((tier) => (
                <div key={tier.title} className={tier.className}>
                  <h3
                    className={twMerge(
                      "font-semibold text-4xl",
                      tier.color === "violet" && "text-violet-400",
                      tier.color === "teal" && "text-teal-400",
                      tier.color === "amber" && "text-amber-400"
                    )}
                  >
                    {tier.title}
                  </h3>
                  <p className="mt-4 text-gray-400">{tier.description}</p>
                  <div className="mt-6">
                    {typeof tier.price === "number" && (
                      <span className="text-2xl font-semibold text-gray-200 align-top">
                        ₹
                      </span>
                    )}
                    <span className="text-7xl font-semibold text-gray-200">
                      {tier.price}
                    </span>
                  </div>
                  <Button
                    variant="secondary"
                    className="mt-8 w-full text-gray-800"
                  >
                    {tier.buttonText}
                  </Button>
                  <ul className="flex flex-col gap-4 mt-8">
                    {tier.features.map((feature) => (
                      <li
                        key={feature}
                        className="border-t border-gray-200/30 pt-4 flex gap-4"
                      >
                        <FontAwesomeIcon
                          icon={faCircleCheck}
                          className="text-violet-400 size-6 mr-2 flex-shrink-0"
                        />
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </SectionContent>
        </SectionBorder>
      </div>
    </section>
  );
};

export default Pricing;