import Section from "@/components/layout/Section";
import { WEBSITE_HOST_URL } from "../contants";
import Title from "@/components/text/Title";
import Container from "@/components/container/Container";
import Heading from "@/components/text/Heading";
import ContactForm from "@/components/contact/ContactForm";

export async function generateMetadata({ params }: { params: { slug: string } }) {
    const { title, description } = {
        title: "test",
        description: "test",
    };
    return {
        title,
        description,
        openGraph: {
            title,
            description,
            url: `${WEBSITE_HOST_URL}/posts/${params.slug}`,
            type: "article",
        },
        twitter: {
            title,
            description,
        },
        alternates: {
            canonical: `${WEBSITE_HOST_URL}/posts/${params.slug}`,
        },
    };
}

export default function Page({ params }: { params: { slug: string } }) {
    return (
        <Section>
            <Container className="max-w-standard">
                <Title>Show components</Title>
                <Heading headingLevel={"h2"}>Contact</Heading>
                <ContactForm />
            </Container>
        </Section>
    );
}
