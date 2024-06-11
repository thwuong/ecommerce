import { categories, navList } from "@/data";
import useStickyHeader from "@/hooks/useStickyHeader";
import { cn } from "@/lib/utils";
import { NavItem } from "@/type";
import { useDisclosure } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiMail, FiSearch } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosArrowForward } from "react-icons/io";
import { IoBagOutline } from "react-icons/io5";
import { MdOutlineAccountCircle } from "react-icons/md";
import { ContactForm } from "../contact";
import { Container } from "../container";
import { DrawerUI } from "../drawer";
import { ModalUI } from "../modal";
import { Heading } from "../text";
import MobileMenu from "./MobileMenu";
function Menu() {
    const [show, setShow] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { isOpen: isDrawer, onOpen: onOpenDrawer, onClose: onCloseDrawer } = useDisclosure();
    const [sticky] = useStickyHeader();

    return (
        <section
            className={cn(
                "relative z-50 bg-transparent duration-300 hover:bg-white group/header",
                sticky && "fixed top-0 bg-white w-full py-4"
            )}
        >
            <Container>
                <div className="flex items-center justify-between gap-10 py-5 w-full">
                    <nav className="w-[635px] max-lg:hidden">
                        <ul className="flex gap-4 items-center gap-x-5 gap-y-[30px]">
                            {navList.map((nav: NavItem) => {
                                return (
                                    <li
                                        className="relative group after:absolute after:h-full after:top-0 after:translate-y-full after:w-full after:bg-transparent"
                                        key={nav.label}
                                        onMouseEnter={() => {
                                            nav.hasChildren && setShow(true);
                                        }}
                                        onMouseLeave={() => {
                                            nav.hasChildren && setShow(false);
                                        }}
                                    >
                                        <Link href={"/"} className={cn("flex items-center gap-1")}>
                                            <span
                                                className={cn(
                                                    "text-base font-roboto duration-300 font-black text-white group-hover/header:text-typo-primary hover:opacity-80",
                                                    sticky && "text-typo-primary"
                                                )}
                                            >
                                                {nav.label}
                                            </span>
                                            {nav.hasChildren && (
                                                <IoIosArrowForward
                                                    fontSize={"12px"}
                                                    className="text-white rotate-90 group-hover/header:text-typo-primary"
                                                />
                                            )}
                                        </Link>
                                        <div className="w-0 duration-300 group-hover:w-full absolute left-0 bottom-0 bg-typo-primary h-[0.5px]"></div>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                    {/* Mobile */}
                    <div className="max-lg:flex hidden">
                        <GiHamburgerMenu fontSize={"24px"} onClick={onOpenDrawer} />
                    </div>
                    <DrawerUI
                        isOpen={isDrawer}
                        onClose={onCloseDrawer}
                        placement={"left"}
                        size="full"
                        headerNode={
                            <div className="bg-typo-secondary/80 w-full flex items-center justify-end gap-4 px-3">
                                <div
                                    className="relative cursor-pointer flex items-center text-white gap-1"
                                    onClick={() => onOpen()}
                                >
                                    <p className="text-base font-roboto duration-300 font-semibold text-white hover:opacity-80">
                                        Subcribe
                                    </p>
                                    <FiMail fontSize={"20px"} color="white" />
                                </div>

                                <div className="relative flex items-center text-white gap-1">
                                    <p className="text-base font-roboto duration-300 font-semibold text-white hover:opacity-80">
                                        Login
                                    </p>
                                    <MdOutlineAccountCircle fontSize={"20px"} color="white" />
                                </div>
                            </div>
                        }
                    >
                        <MobileMenu />
                    </DrawerUI>
                    <Image src={"/assets/logos/logo.svg"} alt="logo" width={120} height={18} />
                    <div className="flex items-center gap-4 ml-auto max-lg:ml-0">
                        <div
                            className="relative cursor-pointer max-lg:hidden"
                            onClick={() => onOpen()}
                        >
                            <FiMail
                                fontSize={"24px"}
                                className={cn(
                                    "text-white group-hover/header:text-typo-primary hover:opacity-80",
                                    sticky && "text-typo-primary"
                                )}
                            />
                        </div>
                        <div className="relative">
                            <FiSearch
                                fontSize={"24px"}
                                className={cn(
                                    "text-white group-hover/header:text-typo-primary hover:opacity-80",
                                    sticky && "text-typo-primary"
                                )}
                            />
                        </div>
                        <div className="relative max-lg:hidden">
                            <MdOutlineAccountCircle
                                fontSize={"24px"}
                                className={cn(
                                    "text-white group-hover/header:text-typo-primary hover:opacity-80",
                                    sticky && "text-typo-primary"
                                )}
                            />
                        </div>
                        <div className="relative">
                            <div className="size-5 text-xs font-semibold rounded-full bg-brand-500 text-white absolute -top-2 -right-2 flex items-center justify-center">
                                12
                            </div>
                            <IoBagOutline
                                fontSize={"24px"}
                                className={cn(
                                    "text-white group-hover/header:text-typo-primary hover:opacity-80",
                                    sticky && "text-typo-primary"
                                )}
                            />
                        </div>
                    </div>
                </div>
            </Container>
            <div
                onMouseEnter={() => {
                    setShow(true);
                }}
                onMouseLeave={() => {
                    setShow(false);
                }}
                className={cn(
                    "w-full  absolute top-full bg-white duration-300 max-lg:hidden",
                    show ? "h-auto py-10 z-10" : "h-0 opacity-0 invisible"
                )}
            >
                <Container>
                    <div className="grid grid-cols-12 gap-[50px]">
                        <div className="col-span-2 flex flex-col gap-5">
                            <Heading
                                headingLevel={"h4"}
                                className="text-base group relative font-roboto w-fit duration-300 font-black text-typo-primary hover:opacity-80 cursor-pointer"
                            >
                                Shop all
                                <div className="w-0 duration-300 group-hover:w-full absolute left-0 bottom-0 bg-typo-primary h-[0.5px]"></div>
                            </Heading>
                            <ul className="flex flex-col gap-2">
                                {categories.map((nav: NavItem) => {
                                    return (
                                        <li className="relative group w-fit" key={nav.label}>
                                            <Link
                                                href={"/"}
                                                className={cn("flex items-center gap-1")}
                                            >
                                                <span className="text-base duration-300 font-semibold text-typo-primary hover:opacity-80">
                                                    {nav.label}
                                                </span>
                                            </Link>
                                            <div className="w-0 duration-300 group-hover:w-full absolute left-0 bottom-0 bg-typo-primary h-[0.5px]"></div>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                        <div className="flex gap-2 col-span-9">
                            <Link href={"/"} className="flex flex-col gap-4">
                                <Image
                                    src={"/assets/images/parcel.webp"}
                                    alt="parcel"
                                    width={250}
                                    height={200}
                                />
                                <div className={cn("flex items-center gap-4")}>
                                    <span className="text-base font-roboto duration-300 font-black text-typo-primary hover:opacity-80">
                                        Gift
                                    </span>
                                    <Image
                                        src={"/assets/icons/dropdown-black.svg"}
                                        alt="dropdown"
                                        className="-rotate-90"
                                        width={16}
                                        height={16}
                                    />
                                </div>
                            </Link>
                            <Link href={"/"} className="flex flex-col gap-4">
                                <Image
                                    src={"/assets/images/parcel.webp"}
                                    alt="parcel"
                                    width={250}
                                    height={200}
                                />
                                <div className={cn("flex items-center gap-4")}>
                                    <span className="text-base font-roboto duration-300 font-black text-typo-primary hover:opacity-80">
                                        Gift
                                    </span>
                                    <Image
                                        src={"/assets/icons/dropdown-black.svg"}
                                        alt="dropdown"
                                        className="-rotate-90"
                                        width={16}
                                        height={16}
                                    />
                                </div>
                            </Link>
                            <Link href={"/"} className="flex flex-col gap-4">
                                <Image
                                    src={"/assets/images/parcel.webp"}
                                    alt="parcel"
                                    width={250}
                                    height={200}
                                />
                                <div className={cn("flex items-center gap-4")}>
                                    <span className="text-base font-roboto duration-300 font-black text-typo-primary hover:opacity-80">
                                        Gift
                                    </span>
                                    <Image
                                        src={"/assets/icons/dropdown-black.svg"}
                                        alt="dropdown"
                                        className="-rotate-90"
                                        width={16}
                                        height={16}
                                    />
                                </div>
                            </Link>
                        </div>
                    </div>
                </Container>
            </div>
            <ModalUI isOpen={isOpen} onClose={onClose}>
                <ContactForm />
            </ModalUI>
        </section>
    );
}

export default Menu;
