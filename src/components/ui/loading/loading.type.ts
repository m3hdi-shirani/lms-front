import { CommonProps } from "../@types/common-props.type";

export type LoadingProps = Omit<CommonProps, "isDisabled"> & {
  types?: "ring" | "spinner";
};
