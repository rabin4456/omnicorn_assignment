import React from "react";
import { cn } from "../../utils";

const variantClassName = {
  sm: "text-base font-medium",
  md: "text-2xl font-normal",
};

export const Typography: React.FC<ITypography> = (props) => {
  const { className, children, variant = "md" } = props;

  return (
    <p className={cn(" text-dark ", variantClassName[variant], className)}>
      {children}
    </p>
  );
};
