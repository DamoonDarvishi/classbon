import clsx from "clsx";
import { LoadingProps } from "./loading.types";
import { Size } from "../types/size.type";

const sizeClasses: Record<Size, string> = {
    tiny: 'loading-xs',
    small: 'loading-sm',
    normal: 'loading-md',
    large: 'loading-lg'
}

export const Loading: React.FC<LoadingProps> = ({
    type = "spinner",
    size = "normal",
    variant,
    className
}: LoadingProps) => {
    const classes = clsx(
        "loading",
        className,
        {
            [`loading-${type}`]: type,
            [`${sizeClasses[size]}`]: type,
            [`loading-${variant}`]: variant
        }
    )
    return <span className={classes}></span>
}