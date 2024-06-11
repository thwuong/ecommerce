import { Avatar } from "@chakra-ui/react";
import { IoMdQuote } from "react-icons/io";
import { Paragraph } from "../text";

function ReviewBasic({ name, description }: { name: string; description: string }) {
    return (
        <div className="flex flex-col gap-6 items-center text-center basis-[calc(33.33333%-40px)] justify-between text-white min-h-[280px]">
            <div className="flex flex-col gap-4 items-center">
                <IoMdQuote fontSize={40} />
                <Paragraph className="text-xl font-semibold text-balance">{description}</Paragraph>
            </div>
            <div className="flex items-center gap-4">
                <Avatar src="https://bit.ly/broken-link" />
                {name}
            </div>
        </div>
    );
}

export default ReviewBasic;
