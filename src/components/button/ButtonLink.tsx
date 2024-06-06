import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
type ButtonLinkProps = React.LinkHTMLAttributes<HTMLLinkElement>;
function ButtonLink({ children, className, href = "/" }: ButtonLinkProps) {
    return (
        <Link
            href={href}
            className={cn(
                "flex items-center border-2 border-white rounded-[50px] w-fit px-4 py-1.5  hover:outline-white/40 hover:outline",
                className
            )}
        >
            {children}
        </Link>
    );
}

export default ButtonLink;
