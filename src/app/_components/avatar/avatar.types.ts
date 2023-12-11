import { ComponentBase } from "../types/component-base.type";

export type AvatarProps = Omit<ComponentBase, 'disabled'> & {
    src?: string,
    alt?: string
}