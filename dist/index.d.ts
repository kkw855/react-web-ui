import * as react_jsx_runtime from 'react/jsx-runtime';
import * as class_variance_authority_dist_types from 'class-variance-authority/dist/types';
import { VariantProps } from 'class-variance-authority';
import { ComponentProps } from 'react';

declare const buttonVariants: (props?: ({
    variant?: "default" | "outline" | "ghost" | "elevated" | null | undefined;
    size?: "default" | "sm" | "lg" | "icon" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
declare const Button: ({ className, variant, size, children, asChild, isLoading, ...props }: ComponentProps<"button"> & VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    isLoading?: boolean;
}) => react_jsx_runtime.JSX.Element;

export { Button };
