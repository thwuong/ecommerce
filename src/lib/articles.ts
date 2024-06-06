export const getAllArticles = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/");
        return await response.json();
    } catch (error) {
        console.error("Database Error:", error);
        throw new Error("Failed to fetch invoice.");
    }
};
// Replace API
