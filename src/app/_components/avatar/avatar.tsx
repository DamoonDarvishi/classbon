import React, { HTMLAttributes, ReactNode, forwardRef } from "react";
import Image from "next/image";
import { Size } from "../types/size.type";
import type { AvatarProps } from "./avatar.types";
import { IconUserProfile } from "@/app/_components/icons/icons";
import clsx from "clsx";

const sizeClasses: Record<Size, number> = {
  tiny: 40,
  small: 50,
  normal: 70,
  large: 120,
};

export const Avatar: React.FC<AvatarProps> = ({
  variant = "primary",
  className,
  size = "normal",
  src,
  alt = "",
}) => {
  const classes = clsx("avatar", className, {
    [`avatar-${variant}`]: variant,
    [`${sizeClasses[size]}`]: size,
  });

  return (
    <div
      style={{ width: sizeClasses[size], height: sizeClasses[size] }}
      className={classes}
    >
      {src ? (
        <Image
          src={src}
          width={sizeClasses[size]}
          height={sizeClasses[size]}
          alt={alt}
        />
      ) : (
        <IconUserProfile
          width={sizeClasses[size] / 2}
          height={sizeClasses[size] / 2}
        />
      )}
    </div>
  );
};
