import { AboutProduct } from "@/components/about";
import { ArticleSingle } from "@/components/article";
import { CollectionList } from "@/components/collection";
import { GalleryProduct } from "@/components/gallery";
import { Hero } from "@/components/hero";
import { BestValue, BigPolularNow, OurTopPick, PopularNow } from "@/components/product";
import { getAllArticles } from "@/lib/articles";
export default async function Home() {
    const data: [] = await getAllArticles();
    return (
        <main>
            <Hero />
            <PopularNow />
            <BestValue />
            <BigPolularNow />
            <CollectionList />
            <ArticleSingle />
            <AboutProduct />
            <GalleryProduct />
            <OurTopPick />
        </main>
    );
}
