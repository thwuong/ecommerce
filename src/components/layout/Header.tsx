"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { Menu } from "../menu";
import { RefundPolicy } from "../policy";
import { Topbar } from "../topbar";
type HeaderProps = React.HTMLAttributes<HTMLElement>;
function Header({ children, className }: HeaderProps) {
    return (
        <header className={cn("w-full", className)}>
            <Topbar />
            <RefundPolicy />
            <Menu />
        </header>
    );
}

export default Header;
