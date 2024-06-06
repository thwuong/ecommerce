import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
type ButtonLinkProps = React.LinkHTMLAttributes<HTMLLinkElement>;
function ButtonLink({ children, className, href = "/" }: ButtonLinkProps) {
    return (
        <Link href={href} className={cn("flex items-center", className)}>
            {children}
        </Link>
    );
}

export default ButtonLink;
