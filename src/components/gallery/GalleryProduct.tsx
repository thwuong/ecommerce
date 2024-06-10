"use client";
import { useGetProductsQuery } from "@/lib/features/product/productAPI";
import { cn } from "@/lib/utils";
import { ProductType } from "@/type";
import formatPrice from "@/utils/formatPrice";
import { useClickAway } from "@uidotdev/usehooks";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoIosClose } from "react-icons/io";
import { RxDotFilled } from "react-icons/rx";
import { Container } from "../container";
import { Heading, Paragraph } from "../text";

function GalleryItem({ image, price, title, rating }: ProductType) {
    const [show, setShow] = useState(false);
    const ref: any = useClickAway(() => {
        setShow(false);
    });
    return (
        <div className="relative w-full aspect-square">
            <Image src={image} alt={title} fill className="absolute w-full h-full object-cover" />
            <div className="absolute top-1/2 left-1/2" ref={ref}>
                <div className="relative">
                    <div
                        onClick={() => setShow(!show)}
                        className="size-8 cursor-pointer bg-white rounded-full flex items-center justify-center hover:scale-110 duration-300"
                    >
                        {show ? <IoIosClose /> : <RxDotFilled />}
                    </div>
                    <div
                        className={cn(
                            "opacity-0 flex invisible gap-4 bg-white p-4 absolute left-8 min-w-max -translate-y-2 duration-300",
                            show && " opacity-100 visible translate-y-0"
                        )}
                    >
                        <Image
                            src={"/assets/images/product-1.webp"}
                            className="object-cover"
                            alt="related"
                            width={75}
                            height={75}
                        />
                        <div className="flex items-start justify-between flex-1 max-lg:flex-col max-lg:items-start gap-4">
                            <div className="flex flex-col">
                                <Link href={"/"} className="relative group">
                                    <Heading headingLevel={"h3"} className="card-title max-w-[120px]">
                                        {title}
                                    </Heading>
                                    <div className="w-0 duration-300 group-hover:w-full absolute left-0 bottom-0 bg-typo-primary h-[0.5px]"></div>
                                </Link>
                                <Paragraph className="card-price">{formatPrice(price)}</Paragraph>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
function GalleryProduct() {
    const { data, isLoading } = useGetProductsQuery(3);

    return (
        <section className="w-full py-[100px] max-lg:py-10 z-[2] bg-background-primary relative">
            <Container className="gap-12 max-lg:gap-10">
                <Heading
                    className="text-[55px] max-lg:text-[33px] font-roboto font-black leading-[1.2] text-balance text-center"
                    headingLevel={"h2"}
                >
                    {"Don't let the music die"}
                </Heading>
            </Container>
            <div className="w-full grid grid-cols-3 gap-[2px] mt-16">
                {!isLoading && data
                    ? data.map((product: ProductType, index: number) => {
                          const key = `product-${index}`;
                          return <GalleryItem key={key} {...product} />;
                      })
                    : null}
            </div>
        </section>
    );
}

export default GalleryProduct;
