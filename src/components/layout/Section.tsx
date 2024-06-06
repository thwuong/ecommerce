import { cn } from "@/lib/utils";
import React from "react";
type SectionProps = React.HTMLAttributes<HTMLElement>;
function Section({ children, className }: SectionProps) {
    return <section className={cn("w-full", className)}>{children}</section>;
}

export default Section;
