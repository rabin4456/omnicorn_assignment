import React from "react";
import { cn } from "../../utils";

const variantClassName = {
  sm: "text-base font-medium",
  md: "sm:text-2xl sm:font-normal text-xl  font-light",
};

export const Typography: React.FC<ITypography> = (props) => {
  const { className, children, variant = "md" } = props;

  return (
    <p className={cn(" text-dark", variantClassName[variant], className)}>
      {children}
    </p>
  );
};
