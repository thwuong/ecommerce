import { navList } from "@/data";
import { cn } from "@/lib/utils";
import { NavItem } from "@/type";
import Image from "next/image";
import Link from "next/link";
import { CurrencyMenu } from "../currency";
import { LanguageMenu } from "../language";

function MobileMenu() {
    return (
        <section className="flex flex-col h-full w-full justify-between">
            <ul className="flex flex-col py-[25px]">
                {navList.map((nav: NavItem) => {
                    return (
                        <li className="relative group w-full px-4 hover:bg-typo-primary/40 py-3" key={nav.label}>
                            <Link href={"/"} className={cn("flex items-center gap-1")}>
                                <span className="text-base font-roboto duration-300 font-semibold text-white hover:opacity-80">
                                    {nav.label}
                                </span>
                            </Link>
                            <div className="w-0 duration-300 group-hover:w-full absolute left-0 bottom-0 bg-typo-primary h-[0.5px]"></div>
                        </li>
                    );
                })}
            </ul>
            <div className="flex items-center flex-col justify-center py-10 px-[25px] gap-5 w-full bg-typo-secondary">
                <div className="flex items-center gap-2">
                    <LanguageMenu />
                    <CurrencyMenu />
                </div>
                <div className="flex items-center gap-3  ">
                    {Array(5)
                        .fill(0)
                        .map((_, index) => {
                            const key = `social-${index}`;
                            return <Image key={key} src="/assets/icons/fb.svg" alt="facebook" width={24} height={24} />;
                        })}
                </div>
            </div>
        </section>
    );
}

export default MobileMenu;
