import { cn } from "@/lib/utils";
import React from "react";
type ContainerProps = React.HTMLAttributes<HTMLDivElement>;
function Container({ children, className }: ContainerProps): JSX.Element {
    return <div className={cn("w-full max-w-standard mx-auto max-md:px-4", className)}>{children}</div>;
}

export default Container;
