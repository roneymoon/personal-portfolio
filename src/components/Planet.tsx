import { cva, VariantProps } from "class-variance-authority";
import { HTMLAttributes } from "react";
import clsx from "clsx";

// 1. Define the variants for Planet
const planetStyles = cva(
  "rounded-full bg-gradient-to-b -translate-x-[300px] -translate-y-[80px]",
  {
    variants: {
      size: {
        sm: "size-4",
        md: "size-6",
        lg: "size-8",
      },
      color: {
        violet: "from-violet-400 to-gray-950",
        teal: "from-teal-400 to-gray-950",
        fuchsia: "from-fuchsia-400 to-gray-950",
      },
    },
    defaultVariants: {
      size: "lg",
      color: "violet",
    },
  }
);

// 2. Combine VariantProps with HTML props
type PlanetProps = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof planetStyles>;

// 3. Create reusable Planet component
export const Planet = ({ size, color, className, ...rest }: PlanetProps) => {
  return (
    <div
      className={clsx(planetStyles({ size, color }), className)}
      {...rest}
    ></div>
  );
};
