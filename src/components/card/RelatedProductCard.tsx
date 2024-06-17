import formatPrice from "@/utils/formatPrice";
import { Button } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { Heading, Paragraph } from "../text";

function RelatedProductCard() {
    return (
        <div className="flex items-center gap-4 rounded-xl border border-black/40 p-4 max-lg:items-start">
            <Image src={"/assets/images/product-1.webp"} alt="related" width={80} height={80} />
            <div className="flex items-center justify-between flex-1 max-lg:flex-col max-lg:items-start gap-4">
                <div className="flex flex-col">
                    <Link href={"/"} className="relative group">
                        <Heading headingLevel={"h3"} className="card-title">
                            MW08 Sport Kevlar® Charging Case
                        </Heading>
                        <div className="w-0 duration-300 group-hover:w-full absolute left-0 bottom-0 bg-typo-primary h-[0.5px]"></div>
                    </Link>
                    <Paragraph className="card-price">{formatPrice(34900)}</Paragraph>
                </div>
                <Button className="cursor-pointer" rounded={"12px"} w={"fit-content"}>
                    + Add
                </Button>
            </div>
        </div>
    );
}

export default RelatedProductCard;
