"use client"; // Error components must be Client Components

import Section from "@/components/layout/Section";
import { Container } from "@chakra-ui/react";
import { useEffect } from "react";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <main>
            <Section>
                <Container className="h-screen max-w-standard flex flex-col items-center justify-center">
                    <h2>Something went wrong!</h2>
                    <button
                        onClick={
                            // Attempt to recover by trying to re-render the segment
                            () => reset()
                        }
                    >
                        Try again
                    </button>
                </Container>
            </Section>
        </main>
    );
}
