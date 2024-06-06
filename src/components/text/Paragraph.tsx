import { cn } from "@/lib/utils";
import React from "react";
type ParagraphProps = React.HTMLAttributes<HTMLParagraphElement>;

function Paragraph({ children, className }: ParagraphProps) {
    return <p className={cn("", className)}>{children}</p>;
}

export default Paragraph;
