import React, { FC } from "react";
import { ProgressProps } from "./progress.types";
import { Size } from "../types/size.type";
import clsx from "clsx";

const sizeClasses: Record<Size, string> = {
  tiny: "progress-xs",
  small: "progress-sm",
  normal: "progress-md",
  large: "progress-lg",
};

export const Progress: FC<ProgressProps> = ({
  variant = "neutral",
  className,
  size = "small",
  value,
}) => {
  const classes = clsx("progress", className, {
    [`progress-${variant}`]: variant,
    [`${sizeClasses[size]}`]: size,
  });
  return  <progress value={value} max="100" className={classes}/>;
};
