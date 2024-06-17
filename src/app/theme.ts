/* theme.ts */
import { extendTheme } from "@chakra-ui/react";
import "@fontsource/rajdhani/400.css";
import "@fontsource/rajdhani/500.css";
import "@fontsource/rajdhani/600.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/roboto/900.css";
export const theme = extendTheme({
    fonts: {
        body: `'Rajdhani', sans-serif`,
    },
    colors: {
        brand: {
            "50": "#fff0f2",
            "100": "#ffe1e6",
            "200": "#ffc8d2",
            "300": "#ff9bae",
            "400": "#ff6384",
            "500": "#ff2c5e",
            "600": "#f60849",
            "700": "#d2003f",
            "800": "#ae033c",
            "900": "#94073a",
            "950": "#53001b",
        },
    },
});
