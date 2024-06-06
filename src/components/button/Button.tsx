import { cn } from "@/lib/utils";
import React from "react";
type ButtonProps = React.HTMLAttributes<HTMLButtonElement>;
function Button({ children, className }: ButtonProps) {
    return <button className={cn("flex items-center", className)}>{children}</button>;
}

export default Button;
