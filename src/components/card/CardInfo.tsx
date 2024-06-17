import Image from "next/image";
import { Heading, Paragraph } from "../text";

function CardInfo() {
    return (
        <div className="flex flex-col gap-[30px] text-white">
            <Image src={"/assets/icons/soundware.svg"} alt="soundware" width={34} height={24} />
            <Heading headingLevel={"h3"} className="text-[32px] font-black leading-[1.1]">
                Noice cancelling
            </Heading>
            <Paragraph className="text-xl font-semibold">
                {`Equipped with state-of-the-art noise-cancelling technology, ensuring you a distraction-free listening
                experience. Whether you're in a noisy office or on a busy street, these headphones will effectively
                block out background noise and immerse you in your music like never before.`}
            </Paragraph>
        </div>
    );
}

export default CardInfo;
