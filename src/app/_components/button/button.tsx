"use client";
import { clsx } from "clsx";
import type { ButtonProps, ButtonShape } from "./button.types";
import { Size } from "../types/size.type";
import { Loading } from "../loading";

const sizeClasses: Record<Size, string> = {
  tiny: "btn-xs",
  small: "btn-sm",
  normal: "",
  large: "btn-lg",
};

const shapeClasses: Record<ButtonShape, string> = {
  default: "",
  wide: "btn-wide",
  full: "btn-full",
  square: "btn-shape",
};

export const Button: React.FC<ButtonProps> = ({
  variant,
  size = "normal",
  isDisabled = false,
  isOutline = false,
  shape = "default",
  isLoading = false,
  loadingType = "spinner",
  loadingText = "در حال ارسال درخواست ...",
  type = "button",
  isLink = false,
  animatedIcon = false,
  children,
  className,
  ...rest
}: ButtonProps) => {
  // const classes = `btn ${variant ? 'btn-'+variant : ''}`
  // We can use "clsx" or "classnames", but I used clsx for this project
  // sample
  //  import styles from "./Button.module.scss";
  //   const classes = clsx(styles.btn, {
  //     [styles["btn--success"]]: success,
  //     [styles["btn--warn"]]: warn,
  //     [styles["btn--danger"]]: danger,
  //     [styles["btn--disabled"]]: disabled
  //   });
  const classes = clsx("btn", className, {
    "btn-outline": isOutline,
    "btn-link": isLink,
    "animated-icon": animatedIcon,
    "pointer-events-none opacity-80": isLoading,
    [`btn-${variant}`]: variant,
    [`${sizeClasses[size]}`]: size,
    [`${shapeClasses[shape]}`]: shape,
  });

  return (
    <button type={type} disabled={isDisabled} className={classes} {...rest}>
      {isLoading && <Loading type={loadingType} />}
      {isLoading ? loadingText : children}
    </button>
  );
};
