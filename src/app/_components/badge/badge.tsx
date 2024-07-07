import clsx from "clsx";
import type { BadgeProps } from "./badge.types";
import { Size } from "../types/size.type";

const sizeClasses: Record<Size, string> = {
  tiny: "badge-xs",
  small: "badge-sm",
  normal: "badge-md",
  large: "badge-lg",
};

export const Badge: React.FC<BadgeProps> = ({
  variant,
  className,
  size = "tiny",
  children,
}) => {
  const classes = clsx("badge", className, {
    [`badge-${variant}`]: variant,
    [`${sizeClasses[size]}`]: size,
  });
  return <span className={classes}>{children}</span>;
};
