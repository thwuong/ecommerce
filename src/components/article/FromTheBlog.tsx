import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import { Container } from "../container";
import { Heading, Paragraph } from "../text";
import ArticleList from "./ArticleList";

function FromTheBlog() {
    return (
        <section className="w-full py-[100px] bg-background-primary max-lg:py-10">
            <Container>
                <div className="flex items-center justify-between max-lg:flex-col max-lg:items-start max-lg:gap-5">
                    <Heading
                        headingLevel={"h2"}
                        className="text-[44px] font-black leading-[1.2] max-lg:text-[28px] font-roboto"
                    >
                        From the blog
                    </Heading>
                    <Link href="/products" className="flex items-center gap-2">
                        <Paragraph className="font-semibold text-base text-typo-primary">
                            View all
                        </Paragraph>
                        <div className="size-5 flex items-center justify-center bg-black rounded-full">
                            <IoIosArrowForward className="text-white" />
                        </div>
                    </Link>
                </div>
                <div className="py-10">
                    <ArticleList />
                </div>
            </Container>
        </section>
    );
}

export default FromTheBlog;
