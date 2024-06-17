import Image from "next/image";
import { ButtonLink } from "../button";
import { Container } from "../container";
import { Heading, Paragraph } from "../text";

function ArticleSingle() {
    return (
        <section className="w-full py-[100px] max-lg:py-10 z-[2] relative">
            <Container>
                <article className="flex items-center gap-10 max-lg:flex-col">
                    <div className="flex flex-col gap-[30px] py-16 max-lg:gap-5 w-[calc(50%)] max-lg:w-full max-lg:items-center max-lg:text-center">
                        <Paragraph className="text-[22px] leading-8 font-semibold text-brand-700">
                            EARBUDS
                        </Paragraph>
                        <Heading
                            className="text-[55px] max-lg:text-[33px] font-black leading-[1.2] text-balance"
                            headingLevel={"h2"}
                        >
                            How to choose earbuds that work for you?
                        </Heading>
                        <Paragraph className="text-2xl max-lg:text-[21px] font-semibold leading-9 text-balance">
                            How to choose earbuds that work for you? With so many shapes and
                            features, it’s easy to get confused when shopping earbuds. Let us help
                            you find the product that fit your needs.
                        </Paragraph>
                        <div className="flex items-center gap-2 mt-4">
                            <ButtonLink className="text-xs leading-normal font-black font-roboto uppercase text-white bg-brand-700 hover:outline-brand-700/20">
                                Read article
                            </ButtonLink>
                            <ButtonLink className="text-xs leading-normal font-black font-roboto uppercase border-brand-700 text-brand-700 hover:outline-brand-700/20">
                                Shop earbuds
                            </ButtonLink>
                        </div>
                    </div>
                    <div className="grid-cols-5 grid gap-[2px] w-[calc(50%)] max-lg:w-full items-stretch">
                        <div className="w-full aspect-square col-span-2 relative self-end">
                            <Image
                                src={"/assets/images/parcel.webp"}
                                alt="parcel"
                                fill
                                className="absolute w-full h-full object-cover"
                            />
                        </div>
                        <div className="w-full aspect-square col-span-3 relative">
                            <Image
                                src={"/assets/images/parcel.webp"}
                                alt="parcel"
                                fill
                                className="absolute w-full h-full object-cover"
                            />
                        </div>
                        <div className="w-full aspect-square col-span-3 relative">
                            <Image
                                src={"/assets/images/parcel.webp"}
                                alt="parcel"
                                fill
                                className="absolute w-full h-full object-cover"
                            />
                        </div>
                        <div className="w-full aspect-square col-span-2 relative self-start">
                            <Image
                                src={"/assets/images/parcel.webp"}
                                alt="parcel"
                                fill
                                className="absolute w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </article>
            </Container>
        </section>
    );
}

export default ArticleSingle;
