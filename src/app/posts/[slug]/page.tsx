import { WEBSITE_HOST_URL } from "../../contants";

export async function generateMetadata({ params }: { params: { slug: string } }) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.slug}`);
    const { title, body } = await response.json();

    // Replace API
    return {
        title,
        description: body,
        openGraph: {
            title,
            description: body,
            url: `${WEBSITE_HOST_URL}/posts/${params.slug}`,
            type: "article",
        },
        twitter: {
            title,
            description: body,
        },
        alternates: {
            canonical: `${WEBSITE_HOST_URL}/posts/${params.slug}`,
        },
    };
}

export default function Page({ params }: { params: { slug: string } }) {
    return <div>My Post: {params.slug}</div>;
}
