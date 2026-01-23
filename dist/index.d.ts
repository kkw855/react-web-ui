import * as react_jsx_runtime from 'react/jsx-runtime';
import { VariantProps } from 'class-variance-authority';
import { ComponentProps } from 'react';

declare const buttonVariants: (props?: any) => string;
declare const Button: ({ className, variant, size, children, asChild, isLoading, ...props }: ComponentProps<"button"> & VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    isLoading?: boolean;
}) => react_jsx_runtime.JSX.Element;

export { Button };
