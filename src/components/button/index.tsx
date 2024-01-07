import * as React from "react";
import { cn } from "../../utils";
import { ButtonType } from "../../enum";

export const Button: React.FC<IButton> = (props) => {
  const {
    label,
    buttonType = ButtonType.PRIMARY,
    type = "button",
    loading = false,
    disabled = false,
    fullWidth = true,
    iconLeft,
    iconRight,
    className = "",
    ...rest
  } = props;

  let btnClassName = "";
  switch (buttonType) {
    case ButtonType.PRIMARY:
      btnClassName =
        "hover:bg-yellow bg-gray  justify-center px-6 text-base  rounded-tr-[32px] ";
      break;
    case ButtonType.SECONDARY:
      btnClassName =
        " bg-orange hover:bg-orange_dark border-[3px] text-lg border-dark justify-center px-6 rounded-full";
      break;

    default:
      "hover:bg-yellow bg-gray  justify-center px-6  rounded-tr-full ";
      break;
  }
  return (
    <button
      type={type}
      disabled={loading || disabled}
      className={cn(
        fullWidth ? "w-full" : "w-auto",
        "flex h-16 items-center whitespace-nowrap border border-transparent  font-medium  disabled:cursor-not-allowed disabled:opacity-50 text-dark",
        btnClassName,
        className
      )}
      {...rest}
    >
      {iconLeft &&
        React.cloneElement(iconLeft, { className: "-ml-0.5 mr-2 h-5 w-5" })}
      {label}
      {iconRight &&
        React.cloneElement(iconRight, {
          className: "ml-3 -mr-0.5 h-6 w-6",
        })}
    </button>
  );
};
