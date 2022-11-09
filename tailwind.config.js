module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                "dark-gray": "#1f191a",
                "medium-gray": "#363636",
                "light-gray": "#46403f"
            },
            maxWidth: {
                "130px": "130px"
            }
        },
        fontFamily: {
            sans: ["Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
            // From https://tailwindcss.com/docs/font-family
            mono: [
                "ui-monospace",
                "SFMono-Regular",
                "Menlo",
                "Monaco",
                "Consolas",
                "Liberation Mono",
                "Courier New",
                "monospace"
            ]
        }
    },
    variants: {
        extend: {}
    },
    plugins: []
};
