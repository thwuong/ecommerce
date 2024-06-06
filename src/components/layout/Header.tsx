"use client";
import { cn } from "@/lib/utils";
import { Button, useDisclosure } from "@chakra-ui/react";
import React from "react";
import DrawerUI from "../drawer/DrawerUI";
import Image from "next/image";
import Link from "next/link";
type HeaderProps = React.HTMLAttributes<HTMLElement>;
function Header({ children, className }: HeaderProps) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <header className={cn("px-12 max-md:px-4 flex items-center justify-between", className)}>
            <Image src={"/assets/logos/logo.svg"} alt="logo" width={128} height={96} />
            <nav>
                <ul className="flex gap-4 items-center">
                    <li>
                        <Link href={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link href={"/preview"}>Preview</Link>
                    </li>
                </ul>
            </nav>
            <Button onClick={onOpen}>
                <Image src={"/assets/icons/ham.svg"} alt="menu" width={24} height={24} />
            </Button>

            <DrawerUI isOpen={isOpen} onClose={onClose} placement={"right"}>
                Hello
            </DrawerUI>
        </header>
    );
}

export default Header;
