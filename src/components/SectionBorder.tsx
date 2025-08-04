// components/SectionBorder.tsx
import React, { ReactNode } from "react";

interface SectionBorderProps {
  children: ReactNode;
}

export const SectionBorder: React.FC<SectionBorderProps> = ({ children }) => {
  return (
    <div className="container">
      <div className="border-l border-r border-gray-200/30">{children}</div>
    </div>
  );
};
