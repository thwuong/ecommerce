"use client";
import { useAppSelector } from "@/lib/hooks";
import { Button, Menu, MenuButton, MenuItem, MenuList, Spinner } from "@chakra-ui/react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React, { memo, useEffect, useState } from "react";
type LangType = {
    label: string;
    code: string;
    icon: string;
};
const langData: LangType[] = [
    {
        label: "Tiếng Việt",
        code: "vi",
        icon: "/assets/icons/vi.jpg",
    },
    {
        label: "English",
        code: "en",
        icon: "/assets/icons/en.jpg",
    },
];

function LanguageMenu() {
    const currentLanguage = useAppSelector((state) => state.globalStore.currentLanguage);
    const path = usePathname();
    const router = useRouter();
    const [isClient, setIsClient] = useState(false);
    const selectedLang = (item: LangType) => {
        router.push(`${path}?lang=${item.code}`);
        // router.refresh();
        // window.location.href = `${path}?lang=${item.code}`;
    };
    const currLang = React.useMemo(
        () => langData.find((item) => item.code === currentLanguage) || langData[0],
        [currentLanguage]
    );
    useEffect(() => {
        setIsClient(true);
    }, []);
    return (
        <Menu>
            {isClient ? (
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
            ) : (
                <Spinner color="white" />
            )}

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

export default memo(LanguageMenu);
