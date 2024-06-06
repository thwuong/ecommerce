import { cn } from "@/lib/utils";
import React from "react";
type TitleProps = React.HTMLAttributes<HTMLHeadingElement>;

function Title({ children, className }: TitleProps) {
    return <h1 className={cn("text-[1rem] font-roboto", className)}>{children}</h1>;
}

export default Title;
