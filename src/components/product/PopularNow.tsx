"use client";
import { useGetProductsQuery } from "@/lib/features/product/productAPI";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import { CarouselUI } from "../carousel";
import { Container } from "../container";
import { Heading, Paragraph } from "../text";

function PopularNow() {
    const { data, isLoading } = useGetProductsQuery();
    return (
        <section className="w-full py-[100px] bg-background-primary max-lg:py-10">
            <Container>
                <div className="flex items-center justify-between">
                    <Heading headingLevel={"h2"} className="text-[44px] font-black leading-[52px] font-roboto">
                        Popular now
                    </Heading>
                    <Link href="/products" className="flex items-center gap-2">
                        <Paragraph className="font-semibold text-base text-typo-primary">Shop all products</Paragraph>
                        <IoIosArrowForward className="text-typo-primary" />
                    </Link>
                </div>
                <div className="py-10">{data && <CarouselUI listItem={data} />}</div>
            </Container>
        </section>
    );
}

export default PopularNow;
