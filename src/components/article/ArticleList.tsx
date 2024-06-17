"use client";
import { Avatar } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { SwiperSlide } from "swiper/react";
import { CarouselSimple } from "../carousel";
import { Heading } from "../text";

function ArticleList() {
    return (
        <CarouselSimple slidesPerView={3} spaceBetween={2} isProgress={false} isScrollbarMb>
            {Array(3)
                .fill(3)
                .map((_, index) => {
                    const key = `blog-${index}`;
                    return (
                        <SwiperSlide key={key}>
                            <Link href={"/"} className="flex flex-col bg-white shadow ">
                                <div className="w-full aspect-[3/2] relative">
                                    <Image
                                        src={"/assets/images/slide-1.webp"}
                                        alt="product"
                                        className="absolute w-full h-full object-cover"
                                        fill
                                    />
                                </div>
                                <div className="flex flex-col gap-[30px] p-6">
                                    <Heading
                                        headingLevel={"h5"}
                                        className="font-black font-roboto text-[30px] max-lg:text-2xl leading-9 text-typo-primary"
                                    >
                                        {"Over-ear headphones still can't be beat"}
                                    </Heading>
                                    <div className="flex items-center gap-4">
                                        <Avatar src="https://bit.ly/broken-link" />
                                        <div>
                                            <p className="text-xl font-semibold">John Smith</p>
                                            <span className="text-base font-semibold opacity-75 text-typo-primary">
                                                January 3, 2023
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </SwiperSlide>
                    );
                })}
        </CarouselSimple>
    );
}

export default ArticleList;
