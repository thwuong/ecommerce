import { cn } from "@/lib/utils";
import React from "react";
type FooterProps = React.HTMLAttributes<HTMLElement>;
function Footer({ children, className }: FooterProps) {
    return <footer className={cn("px-12 max-md:px-4 grid max-md:grid-cols-1", className)}>{children}</footer>;
}

export default Footer;
