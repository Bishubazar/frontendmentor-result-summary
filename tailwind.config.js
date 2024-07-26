/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                red: "hsl(0, 100%, 67%)",
                yellow: "hsl(39, 100%, 56%)",
                teal: "hsl(166, 100%, 37%)",
                blue: {
                    DEFAULT: "hsl(234, 85%, 45%)",
                    "l-slate": "hsl(252, 100%, 67%)",
                    "l-royal": "hsl(241, 81%, 54%)",
                    violet: "hsla(256, 72%, 46%, 1)",
                    persian: "hsla(241, 72%, 46%, 0)",
                },
                neutral: {
                    blue: "hsl(221, 100%, 96%)",
                    lavender: "hsl(241, 100%, 89%)",
                    dark: "hsl(224, 30%, 27%)",
                },
            },
        },
    },

    plugins: [],
};
