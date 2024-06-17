"use client";

import { cn } from "@/lib/utils";
import formatPrice from "@/utils/formatPrice";
import { Alert, AlertDescription, AlertIcon, AlertTitle, Button, Divider } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiStar } from "react-icons/fi";
import { MdLocalShipping } from "react-icons/md";
import { SpinnerButton } from "../button";
import { RelatedProductCard } from "../card";
import { Heading, Paragraph } from "../text";

function ProductDetail() {
    const [currentIndex, setCurrentIndex] = useState(0);
    return (
        <div className="w-full p-12 shadow-xl rounded-2xl bg-white flex overflow-hidden max-lg:flex-col max-lg:px-4">
            <ul className="flex flex-col pr-12 gap-2 max-lg:hidden">
                {Array(6)
                    .fill(0)
                    .map((_, i) => {
                        const key = `image-${i}`;
                        return (
                            <li
                                onClick={() => setCurrentIndex(i)}
                                key={key}
                                className={cn(
                                    "cursor-pointer duration-200 border-b border-transparent",
                                    currentIndex === i && "border-typo-primary border-b-2"
                                )}
                            >
                                <Image src={"/assets/images/speaker.avif"} alt="product" width={64} height={64}></Image>
                            </li>
                        );
                    })}
            </ul>
            <motion.div
                key={currentIndex}
                initial={{
                    x: 100,
                    opacity: 0,
                    visibility: "hidden",
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    visibility: "visible",
                }}
                transition={{
                    duration: 0.5,
                }}
                className="relative w-[665px] h-auto max-lg:h-[302px] max-lg:w-full"
            >
                <Image
                    src={"/assets/images/product-1.webp"}
                    alt="product"
                    fill
                    className="absolute w-full h-full"
                ></Image>
            </motion.div>
            <ul className="flex items-center justify-center gap-4 py-8 lg:hidden">
                {Array(6)
                    .fill(0)
                    .map((_, i) => {
                        const key = `image-${i}`;
                        return (
                            <li
                                onClick={() => setCurrentIndex(i)}
                                key={key}
                                className={cn(
                                    "cursor-pointer duration-200 border border-black size-3 bg-white rounded-full",
                                    currentIndex === i && "bg-black"
                                )}
                            ></li>
                        );
                    })}
            </ul>
            {/* about product */}
            <div className="flex-1 bg-white z-10 flex flex-col gap-4 pl-12 max-lg:pl-0">
                <Link href={"/link"} className="product-caption text-typo-primary">
                    Master & Dynamic
                </Link>
                <Heading headingLevel={"h2"} className="product-title text-typo-primary">
                    MW08 Sport (Green Sapphire Glass / Black Kevlar® Case)
                </Heading>
                <div className="flex justify-between items-center">
                    <Paragraph className="product-price text-typo-primary">{formatPrice(349)}</Paragraph>
                    <div className="flex gap-1">
                        <Paragraph className="text-typo-primary text-sm">4.8</Paragraph>
                        <FiStar className="text-yellow-500 text-base" />
                    </div>
                </div>
                <Divider opacity={40} />
                <div className="flex flex-col gap-2">
                    <Paragraph className="product-caption text-typo-primary">
                        Color:{" "}
                        <span className="product-caption opacity-100 text-typo-primary">
                            Green Sapphire Glass / Black Kevlar® Case
                        </span>
                    </Paragraph>
                    <ul className="flex gap-2 flex-wrap">
                        {Array(6)
                            .fill(0)
                            .map((_, i) => {
                                const key = `image-${i}`;
                                return (
                                    <li
                                        onClick={() => setCurrentIndex(i)}
                                        key={key}
                                        className={cn(
                                            "cursor-pointer overflow-hidden duration-200 border-2 rounded-lg border-typo-primary/10",
                                            currentIndex === i && "border-typo-primary border-2"
                                        )}
                                    >
                                        <Image
                                            src={"/assets/images/speaker.avif"}
                                            alt="product"
                                            width={64}
                                            height={64}
                                        ></Image>
                                    </li>
                                );
                            })}
                    </ul>
                </div>
                <div className="flex flex-col gap-2">
                    <Paragraph className="product-caption text-typo-primary">Quanlity:</Paragraph>
                    <SpinnerButton />
                </div>
                <div className="flex items-center">
                    <Alert status="success" bg={"transparent"}>
                        <AlertIcon />
                        In stock
                    </Alert>
                </div>
                <div className="flex items-center gap-4 max-lg:flex-col">
                    <Button
                        size={"unstyled"}
                        variant={"outline"}
                        color={"black"}
                        _hover={{
                            bg: "blackAlpha.200",
                        }}
                        className="flex-1 font-bold text-base py-4 px-4 rounded-xl w-full"
                    >
                        Add to cart
                    </Button>
                    <Button
                        size={"unstyled"}
                        bg={"black"}
                        _hover={{
                            bg: "blackAlpha.800",
                        }}
                        color={"white"}
                        className="flex-1 font-bold text-base py-4 px-4 rounded-xl w-full hover:bg-black/80 hover:text-white"
                    >
                        Buy it now
                    </Button>
                </div>
                <Alert
                    status="warning"
                    variant="subtle"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                    textAlign="center"
                    borderRadius={"12px"}
                    py={"16px"}
                    gap={"8px"}
                >
                    <AlertTitle fontSize="md" className="flex items-center gap-1 font-bold text-typo-primary">
                        <MdLocalShipping />
                        Fast shipping
                    </AlertTitle>
                    <AlertDescription maxWidth="md" className="font-semibold text-typo-secondary">
                        Place your order before 12:00pm and receive it by tomorrow
                    </AlertDescription>
                </Alert>
                <div className="flex flex-col gap-2">
                    <Paragraph className="product-caption text-typo-primary">Buy with:</Paragraph>
                    <RelatedProductCard />
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;
