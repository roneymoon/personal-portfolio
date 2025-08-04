"use client"
import { cva } from "class-variance-authority";
import { HTMLAttributes, useState } from "react";
import clsx from "clsx";

const classes = cva(
  "relative inline-flex items-center justify-center text-xs tracking-widest uppercase font-bold h-10 px-6 rounded-lg z-0 text-white  transition-all",
  {
    variants: {
      intent: {
        primary: "gradient-border",
        secondary: "bg-gray-100 text-gray-950",
        tertiary: "bg-gray-800 text-gray-200"
      },
    },
    defaultVariants: {
      intent: "primary",
    },
  }
);

export const Button = ({
  variant = "primary",
  className = "",
  children,
  ...otherProps
}: {
  variant?: "primary" | "secondary";
} & HTMLAttributes<HTMLButtonElement>) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = (e: any) => {
    setClicked(true);
    setTimeout(() => setClicked(false), 400); // Clear animation class
    if (otherProps.onClick) otherProps.onClick(e); // Preserve original onClick
  };

  return (
    <button
      className={clsx(
        classes({ intent: variant, className }),
        clicked && "click-pulse button-pressed"
      )}
      onClick={handleClick}
      {...otherProps}
    >
      {children}
    </button>
  );
};
