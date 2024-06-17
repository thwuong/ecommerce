"use client";
import { ProductType } from "@/type";
import { useWindowSize } from "@uidotdev/usehooks";
import { memo, useRef } from "react";
// import Swiper core and required modules
import { Autoplay, Navigation, Pagination, Scrollbar } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper as SwiperType } from "swiper/types";
import { ProductBigCard } from "../card";
import "./CarouselUIFull.css";
type CarouselProps = {
    length?: number;
    slidesToShow?: number;
    slidesToScroll?: number;
    slidesToShowOnMb?: number;
    slidesToScrollOnMb?: number;
    listItem?: ProductType[];
};
function CarouselBigCard(props: CarouselProps) {
    const {
        length = 8,
        listItem = Array(length).fill(0),
        slidesToScroll = 1,
        slidesToShow = 1,
        slidesToScrollOnMb = 1,
        slidesToShowOnMb = 1,
    } = props;
    const { width } = useWindowSize();
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const scrollRef = useRef(null);
    const progressCircle = useRef<any>(null);
    const progressContent = useRef<any>(null);
    const onAutoplayTimeLeft = (s: SwiperType, time: number, progress: number) => {
        progressCircle.current.style.setProperty("--progress", 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    const handleOnSwiper = (swiper: SwiperType) => {
        // // Ensure the navigation elements are correctly assigned after the swiper is initialized
        // setTimeout(() => {
        //     swiper.params.navigation.prevEl = prevRef.current;
        //     swiper.params.navigation.nextEl = nextRef.current;
        //     swiper.navigation.init();
        //     swiper.navigation.update();
        // });
    };
    return (
        <section className="w-full relative swiper-container">
            <div className="flex items-center w-full swiper-button">
                <div className="swiper-scrollbar" ref={scrollRef}></div>
                <div className="max-lg:hidden">
                    <div className="swiper-button-prev" ref={prevRef}></div>
                    <div className="swiper-button-next" ref={nextRef}></div>
                </div>
            </div>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                pagination={false}
                scrollbar={{ draggable: true, el: scrollRef.current }}
                onSwiper={handleOnSwiper}
                onSlideChange={() => {}}
            >
                {listItem.map((_, i) => {
                    const key = `product-${i}`;
                    return (
                        <SwiperSlide key={key}>
                            <ProductBigCard {..._} />
                        </SwiperSlide>
                    );
                })}

                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
        </section>
    );
}

export default memo(CarouselBigCard);
