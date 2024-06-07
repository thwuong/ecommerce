import { cn } from "@/lib/utils";
import { Input } from "@chakra-ui/react";
import { FiMail, FiSend } from "react-icons/fi";
import { Container } from "../container";
import { Paragraph } from "../text";

function CTA() {
    return (
        <section className="w-full py-[70px] max-lg:py-10 border-b border-gray-500/80">
            <Container>
                <div className="grid grid-cols-2 gap-10 max-lg:grid-cols-1">
                    <div className="flex flex-col gap-x-[30px] gap-y-5">
                        <FiMail fontSize={"36px"} color="white" />
                        <Paragraph className="text-2xl leading-9 font-semibold text-white">
                            News and promotions straight to your mailbox.
                        </Paragraph>
                    </div>
                    <form className="flex flex-col gap-5">
                        <div className="relative border-b-2 border-white">
                            <Input
                                type="email"
                                name="email"
                                id="email"
                                className="rounded-none text-sm pt-4 font-semibold leading-6 text-white peer focus:bg-white/15"
                                variant="unstyled"
                                borderRadius={"unset"}
                                paddingX={"16px"}
                            />
                            <label
                                htmlFor="email"
                                className={cn(
                                    "absolute duration-300 text-white font-semibold top-1/2 left-2 text-2xl -translate-y-1/2 peer-focus:translate-y-0 peer-focus:top-0 peer-focus:text-sm peer-empty:translate-y-0  peer-empty:top-0 peer-empty:text-sm"
                                )}
                            >
                                Email
                            </label>
                            <FiSend
                                fontSize={"24px"}
                                color="white"
                                className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
                            />
                        </div>
                        <Paragraph className="text-base leading-[22px] font-semibold text-white">
                            Unsubscribe easily, whenever you like.
                        </Paragraph>
                    </form>
                </div>
            </Container>
        </section>
    );
}

export default CTA;
