import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            fontFamily: {
                inter: ["Inter", ...defaultTheme.fontFamily.sans],
                rajdhani: ["Rajdhani", ...defaultTheme.fontFamily.sans],
                roboto: ["Roboto", ...defaultTheme.fontFamily.sans],
            },
            spacing: {
                standard: "1520px",
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
                typo: {
                    primary: "rgb(4, 20, 33)",
                    secondary: "rgba(4, 20, 33, 0.75)",
                },
            },
            fontSize: {
                13: "13px",
            },
        },
    },
    plugins: [],
};
export default config;
