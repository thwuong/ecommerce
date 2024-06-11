"use client";
import { useWindowSize } from "@uidotdev/usehooks";
import { memo, useRef } from "react";
// import Swiper core and required modules
import { Autoplay, Navigation, Pagination, Scrollbar } from "swiper/modules";

import { Swiper } from "swiper/react";

// Import Swiper styles
import { cn } from "@/lib/utils";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper as SwiperType } from "swiper/types";
import "./CarouselUIFull.css";
type CarouselProps = {
    length?: number;
    slidesPerView?: number;
    slidesPerViewMb?: number;
    children: React.ReactNode;
    isProgress?: boolean;
    isPagination?: boolean;
    isNavigation?: boolean;
    isProgressMb?: boolean;
    isPaginationMb?: boolean;
    isNavigationMb?: boolean;
    isScrollbar?: boolean;
    isScrollbarMb?: boolean;
    spaceBetween?: number;
};
function CarouselBigCard(props: CarouselProps) {
    const {
        slidesPerView = 1,
        slidesPerViewMb = 1,
        children,
        isProgress = false,
        isPagination = false,
        isNavigation = false,
        isProgressMb = false,
        isPaginationMb = false,
        isNavigationMb = false,
        isScrollbar = false,
        isScrollbarMb = false,
        spaceBetween = 50,
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
                <div
                    className={cn(
                        "swiper-scrollbar",
                        !isScrollbar && "hidden",
                        !isScrollbarMb ? "max-lg:hidden" : "max-lg:block"
                    )}
                    ref={scrollRef}
                ></div>
                <div className={cn(!isNavigation && "hidden", !isNavigationMb && "max-lg:hidden")}>
                    <div className="swiper-button-prev" ref={prevRef}></div>
                    <div className="swiper-button-next" ref={nextRef}></div>
                </div>
            </div>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, Autoplay]}
                spaceBetween={spaceBetween}
                slidesPerView={slidesPerView}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                navigation={
                    isNavigation && {
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }
                }
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                pagination={isPagination}
                scrollbar={{ draggable: true, el: scrollRef.current }}
                onSwiper={handleOnSwiper}
                onSlideChange={() => {}}
                breakpoints={{
                    "320": {
                        slidesPerView: slidesPerViewMb,
                        scrollbar: {
                            enabled: isScrollbarMb,
                        },
                    },
                    "678": {
                        slidesPerView: slidesPerView,
                        scrollbar: {
                            enabled: isScrollbar,
                        },
                    },
                }}
            >
                {children}

                <div
                    className={cn(
                        "autoplay-progress",
                        !isProgress && "!hidden",
                        !isProgressMb && "!max-lg:hidden"
                    )}
                    slot="container-end"
                >
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
