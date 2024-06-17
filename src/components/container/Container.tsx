import { cn } from "@/lib/utils";
import React from "react";
type ContainerProps = React.HTMLAttributes<HTMLDivElement>;
function Container({ children, className }: ContainerProps): JSX.Element {
    return (
        <div
            className={cn(
                "w-full flex flex-col max-w-standard px-12 mx-auto max-lg:px-4",
                className
            )}
        >
            {children}
        </div>
    );
}

export default Container;
