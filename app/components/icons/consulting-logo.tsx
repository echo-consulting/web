import type { HTMLAttributes } from "react";

type ConsultingLogoProps = HTMLAttributes<SVGSVGElement>;

export const ConsultingLogo = (props: ConsultingLogoProps) => {
  return (
    <svg
      width="36"
      height="64"
      viewBox="0 0 36 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M0 0H36V64H0V0Z" fill="white" />
    </svg>
  );
};
