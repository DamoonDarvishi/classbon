import { Size } from "./size.type";
import { Variant } from "./variant.type";

export type ComponentBase = {
    isDisabled?: boolean;
    className?: string;
    variant?: Variant; // We want a type file for varient;
    size?: Size  // We want a type file for varient;
}