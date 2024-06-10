import { cn } from "@/lib/utils";
import Image from "next/image";
import { ButtonLink } from "../button";
import { Container } from "../container";
import { Heading, Paragraph } from "../text";

function OurTopPick() {
    return (
        <section className={cn("w-full py-[100px] max-lg:py-10 bg-gradient-to-l to-[#A7032B] from-[#82035E] ")}>
            <Container>
                <div className="grid grid-cols-3 grid-flow-row gap-[2px]">
                    <div className="relative col-span-2 row-span-2 aspect-[1.6]">
                        <Image
                            src={"/assets/images/parcel.webp"}
                            alt="parcel"
                            fill
                            className="absolute w-full h-full object-cover"
                        />
                        <div className="flex h-full flex-col gap-12 items-center justify-center relative z-[2]">
                            <Heading
                                className="text-[88px] max-lg:text-[48px] text-white font-black leading-[1.2] text-balance text-center"
                                headingLevel={"h2"}
                            >
                                {"Our top pick"}
                            </Heading>
                            <Paragraph className="text-2xl max-lg:text-[21px] text-white font-semibold text-balance">
                                wireless speaker
                            </Paragraph>
                            <ButtonLink className="text-[0.75rem] text-white font-black font-roboto uppercase hover:outline-white/20">
                                view product
                            </ButtonLink>
                        </div>
                    </div>
                    <div className="col-span-1 relative aspect-[1.6]">
                        <Image
                            src={"/assets/images/parcel.webp"}
                            alt="parcel"
                            fill
                            className="absolute w-full h-full object-cover"
                        />
                    </div>
                    <div className="col-span-1 relative aspect-[1.6]">
                        <Image
                            src={"/assets/images/parcel.webp"}
                            alt="parcel"
                            fill
                            className="absolute w-full h-full object-cover"
                        />
                    </div>
                </div>
                <div className="flex items-center justify-center gap-10">
                    <div className="flex flex-col"></div>
                </div>
            </Container>
        </section>
    );
}

export default OurTopPick;
