import { GiftCard } from "@/components/banner";
import { Container } from "@/components/container";
import { Products } from "@/components/product";

export default async function Page() {
    return (
        <main className="bg-background-primary">
            <section className="py-[100px] w-full">
                <Container>
                    <GiftCard />
                </Container>
            </section>
            <Products />
        </main>
    );
}
