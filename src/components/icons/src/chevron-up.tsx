import BaseIcon from "@/components/icons/BaseIcon";
import { SvgIcon } from "@/components/icons/icon.types";
export default function SvgIcon(props: SvgIcon) {
  return (
    <BaseIcon {...props}>
      {" "}
      <path d="M21 16.5L11.989 7.5L3 16.5" />{" "}
    </BaseIcon>
  );
}
