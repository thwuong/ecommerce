// Need to use the React-specific entry point to allow generating React hooks
import type { ProductType } from "@/type";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const productAPI = createApi({
    reducerPath: "productAPI",
    baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com/products" }),
    endpoints: (builder) => ({
        getProducts: builder.query<ProductType[], number>({
            query: (limit) => `?sort=desc&limit=${limit}`,
        }),
    }),
});

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useGetProductsQuery } = productAPI;
