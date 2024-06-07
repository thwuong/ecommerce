"use client";
import { useAppSelector } from "@/lib/hooks";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React, { memo } from "react";
type LangType = {
    label: string;
    code: string;
    icon: string;
};
const langData: LangType[] = [
    {
        label: "United States (USD $)",
        code: "usd",
        icon: "/assets/icons/vi.jpg",
    },
    {
        label: "Canada (CAD $)",
        code: "canada",
        icon: "/assets/icons/en.jpg",
    },
    {
        label: "France (EUR #)",
        code: "france",
        icon: "/assets/icons/en.jpg",
    },
];

function CurrencyMenu() {
    const currentLanguage = useAppSelector((state) => state.globalStore.currentLanguage);
    const path = usePathname();
    const router = useRouter();

    const selectedLang = (item: LangType) => {
        router.push(`${path}?lang=${item.code}`);
        // router.refresh();
        // window.location.href = `${path}?lang=${item.code}`;
    };
    const currLang = React.useMemo(
        () => langData.find((item) => item.code === currentLanguage) || langData[0],
        [currentLanguage]
    );

    return (
        <Menu>
            <MenuButton
                bg={"transparent"}
                className="animate-fade"
                _hover={{
                    bg: "transparent",
                }}
                _active={{
                    bg: "transparent",
                }}
                height={7}
                minW={"fit-content"}
                as={Button}
                rightIcon={<Image src={"/assets/icons/dropdown.svg"} alt="dropdown" width={12} height={12} />}
            >
                <span className="text-13 font-semibold text-white">{currLang.label}</span>
            </MenuButton>
            <MenuList p={2} zIndex={21} bg={"black"} border={"none"} w={"fit-content"}>
                {langData.map((item) => (
                    <MenuItem
                        bg={"black"}
                        height={7}
                        className="hover:bg-typo-primary/50"
                        gap={2}
                        w={"100%"}
                        shadow={"inherit"}
                        key={item.code}
                        onClick={() => selectedLang(item)}
                    >
                        {/* <Image src={item.icon} alt="dropdown" width={18} height={12} /> */}
                        <span className="text-13 text-white">{item.label}</span>
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
}

export default memo(CurrencyMenu);
