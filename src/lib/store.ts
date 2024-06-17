import { configureStore } from "@reduxjs/toolkit";
import globalSlice from "./features/global/globalSlice";
import { productAPI } from "./features/product/productAPI";

export const makeStore = () => {
    return configureStore({
        reducer: {
            globalStore: globalSlice,
            [productAPI.reducerPath]: productAPI.reducer,
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productAPI.middleware),
    });
};
// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
