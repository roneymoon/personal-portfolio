"use client"; 
import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionContentProps {
  children: ReactNode;
}

export const SectionContent: React.FC<SectionContentProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.1 }}
      className="container relative isolate overflow-hidden"
      style={{
        maskImage:
          "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
      }}
    >
      {children}
    </motion.div>
  );
};
