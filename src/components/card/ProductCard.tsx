import { cn } from "@/lib/utils";
import { ProductType } from "@/type";
import { Badge } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import StarRatings from "react-star-ratings";
import { Heading, Paragraph } from "../text";
function ProductCard({ title, price, image }: ProductType) {
    const [active, setActice] = useState(0);
    return (
        <Link href={"/"} className="flex flex-col gap-4 w-full relative group">
            <div className="w-full h-[374px] relative duration-200 group-hover:-translate-y-2">
                <Badge variant="solid" colorScheme="brand" className="absolute top-0 z-10 -translate-y-1/2 left-1">
                    Staff pick
                </Badge>
                <Image src={"/assets/images/card-1.webp"} alt="card" fill className="absolute w-full h-full " />
            </div>
            <div className="flex flex-col gap-1 pb-5">
                <Heading headingLevel={"h5"} className="card-title duration-300 line-clamp-1 group-hover:underline">
                    {title}
                </Heading>
                <div className="flex items-center gap-1">
                    <Paragraph className="card-price">
                        {Number(price).toLocaleString("en-US", {
                            style: "currency",
                            unitDisplay: "short",
                            currency: "usd",
                        })}{" "}
                        <span className="line-through">$130.00</span>
                    </Paragraph>
                </div>
                <StarRatings
                    rating={4}
                    starRatedColor="black"
                    starDimension="16px"
                    starSpacing="2px"
                    numberOfStars={Math.floor(Math.random() * 5)}
                    name="rating"
                    key={Math.random() * 99999}
                />
                <div className="flex items-center gap-3 px-1">
                    <div
                        onClick={() => {
                            setActice(0);
                        }}
                        className={cn(
                            "size-4 cursor-pointer border border-white/60 outline-gray-400 outline-1 outline rounded-full bg-white/90",
                            active == 0 && " outline-2"
                        )}
                    ></div>
                    <div
                        onClick={() => {
                            setActice(1);
                        }}
                        className={cn(
                            "size-4 cursor-pointer border border-white/60 rounded-full outline-gray-400 outline-1 outline bg-red-500",
                            active == 1 && " outline-2"
                        )}
                    ></div>
                    <div
                        onClick={() => {
                            setActice(2);
                        }}
                        className={cn(
                            "size-4 cursor-pointer border border-white/60 outline-gray-400 outline-1 outline rounded-full bg-yellow-500",
                            active == 2 && "outline-2"
                        )}
                    ></div>
                </div>
            </div>
        </Link>
    );
}

export default ProductCard;
