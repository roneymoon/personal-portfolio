"use client";
import React from "react";
import AshwinSantiago from "@/assets/images/ashwin-santiago.jpg";
import AlecWhitten from "@/assets/images/alec-whitten.jpg";
import ReneWells from "@/assets/images/rene-wells.jpg";
import MollieHall from "@/assets/images/mollie-hall.jpg";
import { useRef } from "react";

import { motion, useScroll, useTransform } from "framer-motion";

export const testimonials = [
  {
    quote:
      "Sphereal has completely transformed the way we collaborate. The AI chatbot's ability to automate tasks and provide insightful recommendations has saved us hours each week. It's now an indispensable part of our workflow.",
    name: "Ashwin Santiago",
    title: "Operations Manager",
    image: AshwinSantiago,
  },
  {
    quote:
      "Sphereal integrates effortlessly with our existing tools, and the AI chatbot feels like a natural extension of our team. The responses are impressively accurate, and it's always learning from our interactions.",
    name: "Alec Whitten",
    title: "Lead Developer",
    image: AlecWhitten,
  },
  {
    quote:
      "Sphereal's AI has elevated our customer service to a whole new level. Its real-time responses and personalized recommendations help us address client needs faster than ever. I can't imagine our support team without it.",
    name: "Rene Wells",
    title: "Customer Success Manager",
    image: ReneWells,
  },
  {
    quote:
      "I've never seen a tool like Sphereal. It's intuitive, responsive, and has helped us streamline projects that would normally take days. The AI capabilities are unmatched in terms of accuracy and speed.",
    name: "Mollie Hall",
    title: "Product Designer",
    image: MollieHall,
  },
];

export const Testimonials = () => {
  const titleRef = useRef<HTMLHeadingElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: titleRef,
    offset: ["start end", "end start"],
  });

  const transformTop = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  const transformBottom = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  return (
    <section className="container pb-[10000px]">
      <div className="border-l border-r ml-8 mr-8 px-4 border-gray-200/30">
        <h2 className="text-4xl md:text-5xl lg:text-6xl flex flex-col overflow-hidden">
          <motion.span
            className="whitespace-nowrap"
            style={{ x: transformTop }}
          >
            some nice words from my past clients some nice words from my past
            clients some nice words from my past clients
          </motion.span>
          <motion.span
            className="whitespace-nowrap self-end text-amber-400"
            style={{ y: transformBottom }}
          >
            some nice words from my past clients some nice words from my past
            clients some nice words from my past clients
          </motion.span>
        </h2>
        <div className="container"></div>
      </div>
    </section>
  );
};

export default Testimonials;
