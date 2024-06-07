"use client";
import { contentList, slides } from "@/data";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import ButtonLink from "../button/ButtonLink";
import { Container } from "../container";
import { Paragraph } from "../text";
import "./Hero.css";
function Hero() {
    const [slide, setSlide] = useState(0);
    const [client, setClient] = useState({
        position: "",
        clientX: 0,
        clientY: 0,
    });
    const slideRef = useRef<any>();
    useEffect(() => {
        if (slideRef.current) clearInterval(slideRef.current);
        slideRef.current = setInterval(() => {
            if (slide === 2) {
                return setSlide(0);
            }
            return setSlide(slide + 1);
        }, 3000);
    }, [slide]);
    const handleHover = (e: any, p: string) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left - 20;
        const y = e.clientY - rect.top - 20;
        setClient({
            clientX: x,
            clientY: y,
            position: p,
        });
    };
    const handleMove = (index: number) => {
        if (index > 0 && slide === 2) {
            return setSlide(0);
        }
        if (index < 0 && slide === 0) {
            return setSlide(2);
        }
        setSlide(slide + index);
    };
    return (
        <section className="w-full h-[calc(70vh)] -translate-y-[64px] -mb-16">
            <div className="relative h-full overflow-hidden">
                <div
                    className="absolute bg-transparent w-1/2 h-full left-0 z-10"
                    onMouseMove={(e) => {
                        handleHover(e, "left");
                    }}
                    onMouseLeave={(e) => {
                        handleHover(e, "");
                    }}
                >
                    <div className="relative w-full h-full">
                        <motion.div
                            animate={{ x: client.clientX, y: client.clientY }}
                            className={cn(
                                "bg-white size-10 rounded-full  items-center justify-center absolute inset-0 hidden cursor-pointer",
                                client.position === "left" && "flex"
                            )}
                            onClick={() => handleMove(-1)}
                        >
                            <FiArrowLeft className="text-typo-primary" />
                        </motion.div>
                    </div>
                </div>
                <div
                    className="absolute bg-transparent w-1/2 h-full right-0 z-10"
                    onMouseMove={(e) => {
                        handleHover(e, "right");
                    }}
                    onMouseLeave={(e) => {
                        handleHover(e, "");
                    }}
                >
                    <div className="relative w-full h-full">
                        <motion.div
                            animate={{ x: client.clientX, y: client.clientY }}
                            className={cn(
                                "bg-white size-10 rounded-full  items-center justify-center absolute inset-0 hidden cursor-pointer",
                                client.position === "right" && "flex"
                            )}
                            onClick={() => handleMove(1)}
                        >
                            <FiArrowRight className="text-typo-primary" />
                        </motion.div>
                    </div>
                </div>
                <motion.div
                    initial={{ width: "100%" }}
                    animate={{ width: 0 }}
                    transition={{ duration: 0.5, repeat: Infinity, repeatType: "loop", repeatDelay: 2.5 }}
                    className="absolute bg-black h-full blur-[4px]"
                ></motion.div>
                <AnimatePresence>
                    <motion.img
                        src={slides[slide]}
                        alt={`slide-${slide}`}
                        className={cn("absolute w-full h-full object-cover")}
                        initial={{ opacity: 0.9 }}
                        animate={{ opacity: 1 }}
                        exit={{
                            visibility: "hidden",
                        }}
                        transition={{ duration: 0.3, repeat: Infinity, repeatType: "loop", repeatDelay: 2.7 }}
                    ></motion.img>
                </AnimatePresence>

                <Container className="relative h-full">
                    <AnimatePresence>
                        <div className="flex flex-col h-full items-center justify-center gap-[30px]">
                            <div className="text-[88px] font-roboto font-bold text-white flex gap-2 justify-center flex-wrap leading-[105.6px] max-w-3xl text-center">
                                {contentList[slide].title.split(" ").map((char, index) => {
                                    return (
                                        <motion.span
                                            initial={{ y: 50, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            key={char}
                                            transition={{
                                                duration: 0.2 * (index + 1),
                                            }}
                                            exit={{
                                                opacity: 0,
                                            }}
                                        >
                                            {char}
                                        </motion.span>
                                    );
                                })}
                            </div>
                            <motion.div
                                key={contentList[slide].title}
                                initial={{ y: 100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{
                                    duration: contentList[slide].title.split(" ").length * 0.2,
                                }}
                                exit={{
                                    opacity: 0,
                                }}
                            >
                                <ButtonLink
                                    href={contentList[slide].href}
                                    className="text-brand-200 text-xs font-black  border-brand-300"
                                >
                                    {contentList[slide].label}
                                </ButtonLink>
                            </motion.div>
                        </div>
                    </AnimatePresence>
                    <div className="w-full grid grid-cols-3 gap-2 z-10 absolute bottom-4">
                        <div className="p-5 bg-black/10 flex gap-4 items-center relative border-t border-white/40">
                            {slide === 0 && (
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: "100%" }}
                                    transition={{ duration: 3 }}
                                    className={cn("absolute top-0 left-0 bg-white h-[2px]")}
                                ></motion.div>
                            )}
                            <Image src={"/assets/icons/headphone.svg"} alt="slide-1" width={32} height={32} />
                            <Paragraph className="text-sm text-white font-semibold">Headphones</Paragraph>
                        </div>
                        <div className="p-5 bg-black/10 flex gap-4 items-center relative border-t border-white/40">
                            {slide === 1 && (
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: "100%" }}
                                    transition={{ duration: 3 }}
                                    className={cn("absolute top-0 left-0 bg-white h-[2px]")}
                                ></motion.div>
                            )}
                            <Image src={"/assets/icons/headphone.svg"} alt="slide-1" width={32} height={32} />
                            <Paragraph className="text-sm text-white font-semibold">Earbuds</Paragraph>
                        </div>
                        <div className="p-5 bg-black/10 flex gap-4 items-center relative border-t border-white/40">
                            {slide === 2 && (
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: "100%" }}
                                    transition={{ duration: 3 }}
                                    className={cn("absolute top-0 left-0 bg-white h-[2px]")}
                                ></motion.div>
                            )}
                            <Image src={"/assets/icons/headphone.svg"} alt="slide-1" width={32} height={32} />
                            <Paragraph className="text-sm text-white font-semibold">Wireless speakers</Paragraph>
                        </div>
                    </div>
                </Container>
            </div>
        </section>
    );
}

export default Hero;
