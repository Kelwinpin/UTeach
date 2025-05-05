// tailwind.config.js
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#0F172A',
                },
            },
            fontFamily: {
                sans: ['var(--font-roboto)', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
