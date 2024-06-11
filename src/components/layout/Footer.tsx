import { footerMenu } from "@/data";
import { cn } from "@/lib/utils";
import { NavItem } from "@/type";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { CTA } from "../contact";
import { Container } from "../container";
import { CurrencyMenu } from "../currency";
import { LanguageMenu } from "../language";
import { Heading, Paragraph } from "../text";
type FooterProps = React.HTMLAttributes<HTMLElement>;
function Footer({ className }: FooterProps) {
    return (
        <footer
            className={cn(
                "w-full bg-gradient-to-l to-[rgb(23,45,53)] from-[rgb(4,20,33)]",
                className
            )}
        >
            <CTA />
            <Container>
                <div className="grid grid-cols-12 max-lg:grid-cols-1 w-full pt-12 gap-10 max-lg:pt-10">
                    <div className="col-span-2 max-lg:col-span-1 flex flex-col gap-5">
                        <Heading
                            headingLevel={"h4"}
                            className="text-lg relative font-roboto w-fit font-black text-white"
                        >
                            Quick links
                        </Heading>
                        <ul className="flex flex-col gap-2">
                            {footerMenu.map((nav: NavItem) => {
                                return (
                                    <li className="relative group w-fit" key={nav.label}>
                                        <Link href={"/"} className={cn("flex items-center gap-1")}>
                                            <span className="text-base  duration-300 font-semibold text-white hover:opacity-80">
                                                {nav.label}
                                            </span>
                                        </Link>
                                        <div className="w-0 duration-300 group-hover:w-full absolute left-0 bottom-0 bg-white h-[0.5px]"></div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <div className="col-span-2 max-lg:col-span-1 flex flex-col gap-5">
                        <Heading
                            headingLevel={"h4"}
                            className="text-lg relative font-roboto w-fit font-black text-white"
                        >
                            Follow us
                        </Heading>
                        <div className="flex items-center gap-2">
                            {Array(5)
                                .fill(0)
                                .map((_, index) => {
                                    const key = `social-${index}`;
                                    return (
                                        <Image
                                            key={key}
                                            src="/assets/icons/fb.svg"
                                            alt="facebook"
                                            width={24}
                                            height={24}
                                        />
                                    );
                                })}
                        </div>
                    </div>
                    <div className="col-span-4 max-lg:col-span-1 flex flex-col gap-5">
                        <Heading
                            headingLevel={"h4"}
                            className="text-lg relative font-roboto w-fit font-black text-white"
                        >
                            A long-standing reputation
                        </Heading>
                        <Paragraph className="text-base text-balance font-semibold text-white">
                            With years of experience and expertise passed down from generation to
                            generation, we are known for our commitment to excellence and our
                            ability to consistently supply innovative and reliable sound systems.
                        </Paragraph>
                        <Link href={"/about-us"} className={cn("flex items-center gap-2")}>
                            <span className="text-base font-roboto duration-300 font-black text-white hover:opacity-80">
                                About us
                            </span>
                            <IoIosArrowForward color="white" />
                        </Link>
                    </div>
                    <div className="col-span-4 max-lg:col-span-1 flex flex-col gap-5">
                        <Heading
                            headingLevel={"h4"}
                            className="text-lg relative font-roboto w-fit font-black text-white"
                        >
                            Free shipping for orders of $300+
                        </Heading>
                        <Paragraph className="text-base text-balance font-semibold text-white">
                            Take advantage of our exciting offer of free shipping on all orders over
                            $300! With this limited-time offer, you can enjoy fast and reliable
                            shipping on your purchases without having to worry about any extra
                            costs.
                        </Paragraph>
                        <Link href={"/shipping-policy"} className={cn("flex items-center gap-2")}>
                            <span className="text-base font-roboto duration-300 font-black text-white hover:opacity-80">
                                Shipping policy
                            </span>
                            <IoIosArrowForward color="white" />
                        </Link>
                    </div>
                </div>
                <div className="py-10 flex flex-col gap-5">
                    <div className="flex items-center justify-between max-lg:flex-col-reverse gap-5">
                        <div className="flex items-center gap-[10px]">
                            {Array(5)
                                .fill(0)
                                .map((_, index) => {
                                    const key = `payment-${index}`;
                                    return (
                                        <Image
                                            key={key}
                                            src="/assets/icons/fb.svg"
                                            alt="facebook"
                                            width={36}
                                            height={22}
                                        />
                                    );
                                })}
                        </div>
                        <div className="flex items-center gap-2">
                            <LanguageMenu />
                            <CurrencyMenu />
                        </div>
                    </div>
                    <div className="flex gap-2 text-sm font-black text-white items-center max-lg:justify-center">
                        <Paragraph>
                            © 2024, <Link href={"/theme"}>Champion theme flash</Link>
                        </Paragraph>
                        <Link href={"/teknix"}>Powered by Teknix</Link>
                    </div>
                </div>
            </Container>
        </footer>
    );
}

export default Footer;
