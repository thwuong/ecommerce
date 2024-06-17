"use client";

import dynamic from "next/dynamic";
import { SwiperSlide } from "swiper/react";
import { CardImageSingle } from "../card";
import { Container } from "../container";
const CarouselSimple = dynamic(() => import("../carousel").then((mod) => mod.CarouselSimple), {
    ssr: false,
});
function CollectionList() {
    return (
        <section className="w-full py-[100px] max-lg:py-10">
            <Container>
                <CarouselSimple slidesPerView={3} spaceBetween={2} isProgress={false} isScrollbarMb>
                    {Array(3)
                        .fill(3)
                        .map((_, index) => {
                            const key = `collcetion-${index}`;
                            return (
                                <SwiperSlide key={key}>
                                    <CardImageSingle {..._} />
                                </SwiperSlide>
                            );
                        })}
                </CarouselSimple>
            </Container>
        </section>
    );
}

export default CollectionList;
