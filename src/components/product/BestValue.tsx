import { Container } from "../container";
import { Heading } from "../text";
import ProductDetail from "./ProductDetail";

function BestValue() {
    return (
        <section className="w-full py-[100px] bg-background-primary max-lg:py-10">
            <Container className="gap-10">
                <div className="flex items-center justify-center">
                    <Heading
                        headingLevel={"h2"}
                        className="text-[22px] uppercase leading-8 font-semibold font-rajdhani text-typo-primary"
                    >
                        Best value
                    </Heading>
                </div>
                <ProductDetail />
            </Container>
        </section>
    );
}

export default BestValue;
