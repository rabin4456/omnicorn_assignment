import React from "react";
import { cn } from "../../utils";

const variantClassName = {
  sm: "sm:text-2xl text-xl font-medium",
  md: "sm:text-4xl text-3xl",
  lg: "sm:text-5xl text-4xl",
};

export const Header: React.FC<IHeader> = (props) => {
  const { className, children, variant = "md" } = props;

  return (
    <h1
      className={cn(
        "py-3 font-semibold  leading-8 text-dark ",
        variantClassName[variant],
        className
      )}
    >
      {children}
    </h1>
  );
};
