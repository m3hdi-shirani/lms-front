import { ButtonHTMLAttributes } from "react";
import { CommonProps } from "../@types/common-props.type";
import { LoadingBehavior } from "../@types/loading-behavior.type";

export type ButtonShape = "default" | "wide" | "full" | "square";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  CommonProps &
  LoadingBehavior & {
    isOutline?: boolean;
    shape?: ButtonShape;
    isLink?: boolean;
    animatedIcon?: boolean;
  };
