"use client";
import { ProductType } from "@/type";
import Image from "next/image";
import { useState } from "react";
import { ButtonLink } from "../button";
import { Heading, Paragraph } from "../text";
function ProductBigCard({ title, price, image }: ProductType) {
    const [active, setActice] = useState(0);
    return (
        <div className="flex items-center gap-10 bg-background-card max-lg:flex-col-reverse max-lg:gap-5">
            <div className="flex flex-col gap-[30px] py-16 px-10  max-lg:gap-5 text-white max-lg:px-4 max-lg:py-10">
                <Paragraph className="text-[22px] leading-8 font-semibold">POLULAR</Paragraph>
                <Heading
                    className="text-[44px] max-lg:text-[28px] font-black leading-[1.2] max-lg:text-base"
                    headingLevel={"h2"}
                >
                    Loud and proud
                </Heading>
                <Paragraph className="text-2xl max-lg:text-[22px] font-semibold leading-9">
                    Relax and enjoy your music with these cool blue headphones.
                </Paragraph>
                <ButtonLink className="text-[0.75rem] font-black font-roboto uppercase hover:outline-white/20">
                    View Product
                </ButtonLink>
            </div>
            <Image src={"/assets/images/parcel.webp"} alt="parcel" width={714} height={521} />
        </div>
    );
}

export default ProductBigCard;
