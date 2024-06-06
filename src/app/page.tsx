import Container from "@/components/container/Container";
import Title from "@/components/text/Title";
import { getAllArticles } from "@/lib/articles";
export default async function Home() {
    const data: [] = await getAllArticles();
    return (
        <main>
            <Container>
                <Title>Hello world</Title>
            </Container>
        </main>
    );
}
