import { cn } from "@/lib/utils";
import { Button } from "@chakra-ui/react";
import Image from "next/image";
import { useState } from "react";
import ButtonLink from "../button/ButtonLink";
import { Container } from "../container";
import { Heading, Paragraph } from "../text";

function RefundPolicy() {
    const [more, setMore] = useState(false);
    return (
        <section className={cn("w-full bg-gradient-to-l to-[#A7032B] from-[#82035E] overflow-hidden")}>
            <Container>
                <div className="w-full">
                    <div className="w-full flex items-center gap-3 justify-center max-lg:justify-between py-2">
                        <Paragraph className="text-base font-semibold text-white">
                            Free shipping for orders of $300 +
                        </Paragraph>
                        <Button
                            onClick={() => setMore(!more)}
                            variant={"outline"}
                            border={"1px solid rgba(255, 255, 255,.4)"}
                            className="duration-300 !rounded-2xl max-lg:!rounded-full max-lg:w-[32px] max-lg:h-[32px] max-lg:!px-0"
                            _hover={{
                                bg: "transparent",
                                outline: "2px solid rgba(255, 255, 255,.4)",
                            }}
                            size={"sm"}
                        >
                            <div className="flex items-center gap-1">
                                <Paragraph className="text-base font-semibold text-white font-roboto max-lg:hidden">
                                    More
                                </Paragraph>
                                <Image
                                    src={"/assets/icons/dropdown.svg"}
                                    className={cn(more && "rotate-180", "duration-300 ")}
                                    alt="dropdown"
                                    width={16}
                                    height={16}
                                />
                            </div>
                        </Button>
                    </div>
                    <div
                        className={cn("duration-300 relative ", more ? "h-auto py-[70px]" : "h-0 invisible opacity-0")}
                    >
                        <Image
                            onClick={() => setMore(!more)}
                            src={"/assets/icons/close.svg"}
                            alt="close"
                            width={24}
                            height={24}
                            className="absolute right-0 top-0 cursor-pointer translate-y-1/2"
                        />
                        <div className="flex items-center gap-10  max-lg:flex-col">
                            <div className="flex flex-col gap-[30px] max-lg:gap-5 text-white">
                                <Paragraph className="text-base font-semibold">FOR ORDERS OF $300 OR MORE</Paragraph>
                                <Heading className="text-[55px] max-lg:text-[33px] font-semibold" headingLevel={"h2"}>
                                    Free Shipping
                                </Heading>
                                <Paragraph className="text-2xl max-lg:text-[21px] font-semibold  text-balance">
                                    Take advantage of our exciting offer! For a limited time, you can enjoy fast and
                                    reliable shipping on your purchase without having to worry about any extra costs.
                                    With just a few clicks, you can have your items delivered right to your door. Start
                                    shopping now before this offer ends!
                                </Paragraph>
                                <ButtonLink className="text-[0.75rem] font-black font-roboto uppercase">
                                    Refund Policy
                                </ButtonLink>
                            </div>
                            <Image src={"/assets/images/parcel.webp"} alt="parcel" width={714} height={521} />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default RefundPolicy;
