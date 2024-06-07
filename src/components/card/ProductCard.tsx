import { cn } from "@/lib/utils";
import { Badge } from "@chakra-ui/react";
import Image from "next/image";
import { useState } from "react";
import StarRatings from "react-star-ratings";
import { Heading, Paragraph } from "../text";
function ProductCard() {
    const [active, setActice] = useState(0);
    return (
        <div className="flex flex-col gap-4 w-full relative">
            <div className="w-full h-[374px] relative">
                <Badge variant="solid" colorScheme="brand" className="absolute top-0 z-10 -translate-y-1/2 left-1">
                    Staff pick
                </Badge>
                <Image src={"/assets/images/card-1.webp"} alt="card" fill className="absolute w-full h-full" />
            </div>
            <div className="flex flex-col gap-1 pb-5">
                <Heading headingLevel={"h5"}>Wireless earbuds</Heading>
                <div className="flex items-center gap-1">
                    <Paragraph>
                        $120.00 USD <span className="line-through">$130.00</span>
                    </Paragraph>
                </div>
                <StarRatings
                    rating={4}
                    starRatedColor="black"
                    starDimension="16px"
                    starSpacing="2px"
                    numberOfStars={5}
                    name="rating"
                />
                <div className="flex items-center gap-3 px-2">
                    <div
                        onClick={() => {
                            setActice(0);
                        }}
                        className={cn(
                            "size-4 cursor-pointer border border-white/80 outline-gray-400 outline-1 outline rounded-full bg-white",
                            active == 0 && " outline-2"
                        )}
                    ></div>
                    <div
                        onClick={() => {
                            setActice(1);
                        }}
                        className={cn(
                            "size-4 cursor-pointer border border-white/80 rounded-full outline-gray-400 outline-1 outline bg-red-500",
                            active == 1 && " outline-2"
                        )}
                    ></div>
                    <div
                        onClick={() => {
                            setActice(2);
                        }}
                        className={cn(
                            "size-4 cursor-pointer border border-white/80 outline-gray-400 outline-1 outline rounded-full bg-yellow-500",
                            active == 2 && "outline-2"
                        )}
                    ></div>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
