import { Hero } from "@/components/hero";
import { BestValue, PopularNow } from "@/components/product";
import { getAllArticles } from "@/lib/articles";
export default async function Home() {
    const data: [] = await getAllArticles();
    return (
        <main>
            <Hero />
            <PopularNow />
            <BestValue />
        </main>
    );
}
