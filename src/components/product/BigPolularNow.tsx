"use client";
import { useGetProductsQuery } from "@/lib/features/product/productAPI";
import { CardInfo } from "../card";
import { CarouselBigCard } from "../carousel";
import { Container } from "../container";

function BigPolularNow() {
    const { data, isLoading } = useGetProductsQuery(3);
    return (
        <section className="w-full py-[100px] bg-gradient-to-l to-[rgb(23,45,53)] from-[rgb(4,20,33)] max-lg:py-10">
            <Container className="gap-40">
                {data && <CarouselBigCard listItem={data} />}
                <div className="grid grid-cols-3 gap-x-20 gap-y-5 max-lg:grid-cols-1 px-10">
                    {Array(3)
                        .fill(3)
                        .map((_, index) => {
                            const key = `collcetion-${index}`;
                            return <CardInfo key={key} {..._} />;
                        })}
                </div>
            </Container>
        </section>
    );
}

export default BigPolularNow;
