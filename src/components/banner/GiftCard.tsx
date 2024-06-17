import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "../button";
import { Heading } from "../text";

function GiftCard() {
    return (
        <Link href={"/promotion"} className="flex p-4 items-center bg-typo-primary/20">
            <div className="flex items-center justify-evenly w-1/2 bg-white self-stretch">
                <p className="text-sm font-semibold">We also have</p>
                <Heading className="text-[44px] max-lg:text-2xl font-black" headingLevel={"h3"}>
                    Gift cards
                </Heading>
                <ButtonLink className="bg-brand-600 text-white font-semibold uppercase hover:outline-brand-600/40">
                    Buy now
                </ButtonLink>
            </div>
            <div className="w-1/2 relative h-[120px]">
                <Image
                    src={"/assets/images/cards.webp"}
                    alt="promotion"
                    fill
                    className="w-full absolute h-full"
                />
            </div>
        </Link>
    );
}

export default GiftCard;
