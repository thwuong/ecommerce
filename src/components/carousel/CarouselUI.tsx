import { cn } from "@/lib/utils";
import { memo, useState } from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { ProductCard } from "../card";
import "./CarouselUI.css";
type CarouselProps = {
    length?: number;
};
function CarouselUI(props: CarouselProps) {
    const { length = 8 } = props;
    const [index, setIndex] = useState(1);
    var settings: Settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        afterChange(currentSlide) {
            setIndex(currentSlide / 4 + 1);
        },
    };
    return (
        <section className="w-full flex flex-col gap-8" id="slide-popular">
            <Slider {...settings}>
                {Array(length)
                    .fill(0)
                    .map((_, key) => (
                        <div key={key}>
                            <ProductCard />
                        </div>
                    ))}
            </Slider>
            <div className="w-full flex items-center justify-center">
                <div className="w-[300px] h-1 relative">
                    <div
                        className={cn("absolute left-0 bg-typo-primary duration-300 h-full")}
                        style={{
                            width: `${(100 / (length / 4)) * index}%`,
                        }}
                    ></div>
                </div>
            </div>
        </section>
    );
}

export default memo(CarouselUI);
