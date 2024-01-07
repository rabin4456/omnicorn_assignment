import React from "react";
import { cn } from "../../utils";
import { HeaderType } from "../../enum";

const variantClassName = {
  sm: "sm:text-2xl text-xl font-medium",
  md: "sm:text-4xl text-2xl",
  lg: "sm:text-5xl text-3xl",
};

export const Header: React.FC<IHeader> = (props) => {
  const { className, children, variant = HeaderType.MEDIUM } = props;

  return (
    <p
      className={cn(
        "py-3 font-semibold  leading-8 text-dark ",
        variantClassName[variant],
        className
      )}
    >
      {children}
    </p>
  );
};
