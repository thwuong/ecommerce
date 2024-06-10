"use client";
import { ProductType } from "@/type";
import Image from "next/image";
import { useState } from "react";
import { ButtonLink } from "../button";
import { Heading, Paragraph } from "../text";
function ProductBigCard({ title, price, image }: ProductType) {
    const [active, setActice] = useState(0);
    return (
        <div className="flex items-center gap-10 bg-background-card max-lg:flex-col">
            <div className="flex flex-col gap-[30px] py-16 px-10  max-lg:gap-5 text-white">
                <Paragraph className="text-[22px] leading-8 font-semibold">POLULAR</Paragraph>
                <Heading className="text-[44px] max-lg:text-[33px] font-black leading-[1.2]" headingLevel={"h2"}>
                    Loud and proud
                </Heading>
                <Paragraph className="text-2xl max-lg:text-[21px] font-semibold leading-9">
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
