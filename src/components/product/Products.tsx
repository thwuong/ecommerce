"use client";
import { useGetProductsQuery } from "@/lib/features/product/productAPI";
import { cn } from "@/lib/utils";
import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    CheckboxGroup,
    FormControl,
    FormLabel,
    Input,
    Radio,
    RadioGroup,
    RangeSlider,
    RangeSliderFilledTrack,
    RangeSliderThumb,
    RangeSliderTrack,
    Select,
} from "@chakra-ui/react";
import { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import { TbSortAscendingShapes } from "react-icons/tb";
import { ProductCard } from "../card";
import { Container } from "../container";
import { Heading } from "../text";
function Products() {
    const [range, setRange] = useState({
        min: 0,
        max: 420,
    });
    const [selectedColors, setSelectedColors] = useState<any[]>([]);
    const handleSelectColor = (item: any) => {
        if (selectedColors.includes(item)) {
            return setSelectedColors(selectedColors.filter((color) => color !== item));
        }
        setSelectedColors([...selectedColors, item]);
    };
    const { data, isLoading } = useGetProductsQuery(8);

    return (
        <section className="w-full py-[64px] max-lg:py-10">
            <Container>
                <Heading
                    headingLevel={"h1"}
                    className="text-[55px] max-lg:text-[33px] font-black leading-[1.2] text-balance"
                >
                    Products
                </Heading>
                <div className="grid-cols-12 grid gap-6 py-10">
                    <div className="flex flex-col gap-8 col-span-2">
                        <Heading
                            headingLevel={"h1"}
                            className="text-[30px] max-lg:text-[24px] font-black leading-[1.2] text-balance"
                        >
                            Filter by
                        </Heading>
                        <div className="flex flex-col">
                            <Accordion allowMultiple>
                                <AccordionItem>
                                    <AccordionButton>
                                        <Box
                                            as="span"
                                            flex="1"
                                            textAlign="left"
                                            className="text-2xl leading-[1.2] font-black font-roboto py-2"
                                        >
                                            Price
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                    <AccordionPanel pb={2}>
                                        <div className="flex flex-col gap-4">
                                            <RangeSlider
                                                value={[range.min, range.max]}
                                                colorScheme={"blackAlpha"}
                                                onChange={(value) => {
                                                    setRange({
                                                        min: value[0],
                                                        max: value[1],
                                                    });
                                                }}
                                            >
                                                <RangeSliderTrack>
                                                    <RangeSliderFilledTrack />
                                                </RangeSliderTrack>
                                                <RangeSliderThumb index={0} />
                                                <RangeSliderThumb index={1} />
                                            </RangeSlider>
                                            <div className="flex gap-2">
                                                <FormControl>
                                                    <FormLabel className="text-xs font-semibold">
                                                        From
                                                    </FormLabel>
                                                    <Input
                                                        type="number"
                                                        fontSize={16}
                                                        className="text-base font-bold"
                                                        size={"sm"}
                                                        value={range.min}
                                                        onChange={(e) => {
                                                            setRange({
                                                                ...range,
                                                                min: Number(e.target.value),
                                                            });
                                                        }}
                                                    />
                                                </FormControl>
                                                <FormControl>
                                                    <FormLabel className="text-xs font-semibold">
                                                        To
                                                    </FormLabel>
                                                    <Input
                                                        type="number"
                                                        fontSize={16}
                                                        className="text-base font-bold"
                                                        size={"sm"}
                                                        value={range.max}
                                                        onChange={(e) => {
                                                            setRange({
                                                                ...range,
                                                                max: Number(e.target.value),
                                                            });
                                                        }}
                                                    />
                                                </FormControl>
                                            </div>
                                        </div>
                                    </AccordionPanel>
                                </AccordionItem>
                                <AccordionItem>
                                    <AccordionButton>
                                        <Box
                                            as="span"
                                            flex="1"
                                            textAlign="left"
                                            className="text-2xl leading-[1.2] font-black font-roboto py-2"
                                        >
                                            Availability
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                    <AccordionPanel pb={2}>
                                        <div className="flex flex-col gap-3">
                                            <RadioGroup
                                                defaultValue="2"
                                                gap={2}
                                                display={"flex"}
                                                flexDirection={"column"}
                                                className="text-base font-semibold"
                                            >
                                                <div className="flex items-center justify-between">
                                                    <Radio value="1">In stock</Radio>
                                                    <p>36</p>
                                                </div>
                                                <div className="flex items-center justify-between">
                                                    <Radio value="2">Out of stock</Radio>
                                                    <p>36</p>
                                                </div>
                                            </RadioGroup>
                                        </div>
                                    </AccordionPanel>
                                </AccordionItem>
                                <AccordionItem>
                                    <AccordionButton>
                                        <Box
                                            as="span"
                                            flex="1"
                                            textAlign="left"
                                            className="text-2xl leading-[1.2] font-black font-roboto py-2"
                                        >
                                            Product type
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                    <AccordionPanel pb={2}>
                                        <div className="flex flex-col gap-3">
                                            <div className="flex flex-col gap-3">
                                                <RadioGroup
                                                    defaultValue="2"
                                                    gap={2}
                                                    display={"flex"}
                                                    flexDirection={"column"}
                                                    className="text-base font-semibold"
                                                >
                                                    <div className="flex items-center justify-between">
                                                        <Radio value="1">Earburds</Radio>
                                                        <p>6</p>
                                                    </div>
                                                    <div className="flex items-center justify-between">
                                                        <Radio value="2">Headphones</Radio>
                                                        <p>36</p>
                                                    </div>
                                                    <div className="flex items-center justify-between">
                                                        <Radio value="3">Speakers</Radio>
                                                        <p>36</p>
                                                    </div>
                                                </RadioGroup>
                                            </div>
                                        </div>
                                    </AccordionPanel>
                                </AccordionItem>
                                <AccordionItem>
                                    <AccordionButton>
                                        <Box
                                            as="span"
                                            flex="1"
                                            textAlign="left"
                                            className="text-2xl leading-[1.2] font-black font-roboto py-2"
                                        >
                                            Color
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                    <AccordionPanel pb={2}>
                                        <div className="flex flex-col gap-3">
                                            <CheckboxGroup
                                                colorScheme="green"
                                                defaultValue={["naruto", "kakashi"]}
                                            >
                                                <div className="flex flex-col gap-2 text-base font-semibold">
                                                    <div className="flex items-center justify-between">
                                                        <div
                                                            onClick={() => {
                                                                handleSelectColor(1);
                                                            }}
                                                            className={cn(
                                                                "cursor-pointer flex items-center gap-2"
                                                            )}
                                                        >
                                                            <div
                                                                className={cn(
                                                                    "size-4 bg-red-500 border border-white/60 rounded-full outline-gray-400 outline-1 outline",
                                                                    selectedColors.includes(1) &&
                                                                        " outline-2"
                                                                )}
                                                            ></div>
                                                            Red
                                                        </div>
                                                        <p>1</p>
                                                    </div>
                                                    <div className="flex items-center justify-between">
                                                        <div
                                                            onClick={() => {
                                                                handleSelectColor(2);
                                                            }}
                                                            className={cn(
                                                                "cursor-pointer flex items-center gap-2"
                                                            )}
                                                        >
                                                            <div
                                                                className={cn(
                                                                    "size-4 bg-yellow-500 border border-white/60 rounded-full outline-gray-400 outline-1 outline",
                                                                    selectedColors.includes(2) &&
                                                                        " outline-2"
                                                                )}
                                                            ></div>
                                                            Yellow
                                                        </div>
                                                        <p>2</p>
                                                    </div>
                                                    <div className="flex items-center justify-between">
                                                        <div
                                                            onClick={() => {
                                                                handleSelectColor(3);
                                                            }}
                                                            className={cn(
                                                                "cursor-pointer flex items-center gap-2"
                                                            )}
                                                        >
                                                            <div
                                                                className={cn(
                                                                    "size-4 bg-orange-500 border border-white/60 rounded-full outline-gray-400 outline-1 outline",
                                                                    selectedColors.includes(3) &&
                                                                        " outline-2"
                                                                )}
                                                            ></div>
                                                            orange
                                                        </div>
                                                        <p>1</p>
                                                    </div>
                                                </div>
                                            </CheckboxGroup>
                                        </div>
                                    </AccordionPanel>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>
                    <div className="col-span-10 flex flex-col gap-8">
                        <div className="ml-auto flex items-center gap-3">
                            <div className="flex items-center gap-2 text-base text-typo-primary">
                                <div className="flex items-center whitespace-nowrap gap-1 font-bold">
                                    <TbSortAscendingShapes className="font-bold" />
                                    Sort by:
                                </div>
                                <Select
                                    className="font-semibold"
                                    icon={<MdArrowDropDown />}
                                    placeholder="Woohoo! A new icon"
                                />
                            </div>
                            <p className="text-sm font-semibold">30 Products</p>
                        </div>
                        <div className="grid grid-cols-4 gap-x-[2px] gap-y-6">
                            {data &&
                                data.map((_, i) => {
                                    const key = `product-${i}`;
                                    return (
                                        <div key={key}>
                                            <ProductCard {..._} />
                                        </div>
                                    );
                                })}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default Products;
