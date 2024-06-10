import { aboutList } from "@/data";
import { AboutType } from "@/type";
import Image from "next/image";
import { Container } from "../container";
import { Heading, Paragraph } from "../text";
function AboutContentBlock({ title, image, description }: AboutType) {
    return (
        <li className="w-full flex items-center gap-10 even:flex-row-reverse">
            <div className="relative w-1/2 aspect-[1/0.73]">
                <Image src={image} alt="parcel" fill className="absolute w-full h-full object-cover" />
            </div>
            <div className="w-1/2 flex flex-col gap-[30px] text-typo-primary">
                <Heading
                    className="text-[44px] max-lg:text-[33px] font-black  leading-[1.2] text-balance"
                    headingLevel={"h2"}
                >
                    {title}
                </Heading>
                <Paragraph className="text-2xl max-lg:text-[21px]  font-semibold leading-9 text-balance">
                    {description}
                </Paragraph>
            </div>
        </li>
    );
}
function AboutProduct() {
    return (
        <section className="relative w-full py-[64px] max-lg:py-10">
            <div className="absolute bg-background-primary w-full h-[calc(100%+164px)] top-[-164px]"></div>
            <Container className="gap-20">
                <div className="w-full flex-col flex justify-center items-center gap-10 z-[2] relative max-w-[50%] mx-auto">
                    <Paragraph className="text-[22px] leading-8 font-semibold text-center">EARBUDS</Paragraph>
                    <Heading
                        className="text-[88px] max-lg:text-[48px] font-black leading-[1.2] text-balance text-center"
                        headingLevel={"h2"}
                    >
                        {"What's the big buzz all about?"}
                    </Heading>
                </div>
                <ul className="w-full relative z[2] flex flex-col gap-10">
                    {aboutList.map((item, index) => {
                        const key = `about-${index}`;
                        return <AboutContentBlock key={key} {...item} />;
                    })}
                </ul>
            </Container>
        </section>
    );
}

export default AboutProduct;
