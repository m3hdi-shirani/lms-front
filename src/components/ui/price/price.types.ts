import { CommonProps } from "../@types/common-props.type";

export type PriceProps = Omit<CommonProps, "isDisabled" | "variant"> & {
  price?: number;
  text?: string;
};
