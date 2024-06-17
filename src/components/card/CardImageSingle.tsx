import { Button } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { IoMdArrowDropright } from "react-icons/io";
type CardImageSingleProps = {
    href: string;
    name: string;
};
function CardImageSingle({ href = "/", name = "Speakers" }: CardImageSingleProps) {
    return (
        <Link href={href} className="w-full group relative">
            <div className="w-full aspect-square relative overflow-hidden">
                <Image
                    src={"/assets/images/collection-1.webp"}
                    alt="collection"
                    fill
                    className="absolute w-full h-full duration-300 group-hover:scale-105 object-cover"
                />
            </div>
            <Button
                rightIcon={<IoMdArrowDropright />}
                colorScheme="unstyled"
                variant="solid"
                size={"sm"}
                rounded={"16px"}
                className="absolute bg-black bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
                {name}
            </Button>
        </Link>
    );
}

export default CardImageSingle;
