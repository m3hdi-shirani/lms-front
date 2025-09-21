import { ReactNode } from "react";
import { CommonProps } from "../@types/common-props.type";

export type BadgeProps = Omit<CommonProps, "isDisabled"> & {
  children: ReactNode;
};
