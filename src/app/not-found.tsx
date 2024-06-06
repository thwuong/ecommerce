import Container from "@/components/container/Container";
import Section from "@/components/layout/Section";
import Link from "next/link";

export default function NotFound() {
    return (
        <main>
            <Section>
                <Container className="h-screen max-w-standard flex flex-col items-center justify-center">
                    <h2>Not Found</h2>
                    <p>Could not find requested resource</p>
                    <Link href="/">Return Home</Link>
                </Container>
            </Section>
        </main>
    );
}
