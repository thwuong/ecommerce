import { cn } from "@/lib/utils";
import React from "react";
interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
    headingLevel: React.ElementType;
}

function Heading({ children, className, headingLevel = "h2" }: HeadingProps) {
    const Heading = headingLevel;
    return <Heading className={cn("font-roboto", className)}>{children}</Heading>;
}

export default Heading;
