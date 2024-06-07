import { Hero } from "@/components/hero";
import PopularNow from "@/components/product/PopularNow";
import { getAllArticles } from "@/lib/articles";
export default async function Home() {
    const data: [] = await getAllArticles();
    return (
        <main>
            <Hero />
            <PopularNow />
        </main>
    );
}
