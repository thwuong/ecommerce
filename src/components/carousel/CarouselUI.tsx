import { cn } from "@/lib/utils";
import { ProductType } from "@/type";
import { useWindowSize } from "@uidotdev/usehooks";
import { memo, useEffect, useState } from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { ProductCard } from "../card";
import "./CarouselUI.css";
type CarouselProps = {
    length?: number;
    slidesToShow?: number;
    slidesToScroll?: number;
    slidesToShowOnMb?: number;
    slidesToScrollOnMb?: number;
    listItem?: ProductType[];
};
function CarouselUI(props: CarouselProps) {
    const {
        length = 8,
        listItem = Array(length).fill(0),
        slidesToScroll = 4,
        slidesToShow = 4,
        slidesToScrollOnMb = 1,
        slidesToShowOnMb = 1,
    } = props;
    const { width } = useWindowSize();

    const [index, setIndex] = useState(1);
    const [progress, setProgress] = useState(0);
    var settings: Settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: slidesToShow,
        slidesToScroll: slidesToScroll,
        afterChange(currentSlide) {
            setIndex(currentSlide / (width! >= 768 ? slidesToShow : slidesToScrollOnMb) + 1);
        },
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: slidesToShow,
                },
            },
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: slidesToShowOnMb,
                    slidesToScroll: slidesToScrollOnMb,
                    infinite: true,
                    arrows: false,
                    centerMode: false,
                },
            },
        ],
    };
    useEffect(() => {
        if (width != 0) {
            setProgress((100 / (length / (width! >= 768 ? slidesToShow : slidesToScrollOnMb))) * index);
        }
    }, [length, width, index, slidesToShow, slidesToScrollOnMb]);

    return (
        <section className="w-full flex flex-col gap-8" id="slide-popular">
            <Slider {...settings}>
                {listItem.map((_, i) => {
                    const key = `product-${i}`;
                    return (
                        <div key={key}>
                            <ProductCard {..._} />
                        </div>
                    );
                })}
            </Slider>
            <div className="w-full flex items-center justify-center py-5">
                <div className="w-[300px] max-lg:w-full h-1 relative after:absolute after:w-full after:h-1/2 after:bg-gray-300 after:-translate-y-1/2 after:top-1/2">
                    <div
                        className={cn("absolute left-0 bg-typo-primary duration-300 h-full z-[2]")}
                        style={{
                            width: `${progress}%`,
                        }}
                    ></div>
                </div>
            </div>
        </section>
    );
}

export default memo(CarouselUI);
