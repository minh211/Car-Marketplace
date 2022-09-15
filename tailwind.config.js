/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}'
    ],
    theme: {
        extend: {},
        screens: {
            sm: { max: '375px' },
            // => @media (max-width: 375px) { ... }
            lg: { min: '376px' }
            // => @media (max-width: 375px) { ... }
        }
    },
    plugins: []
};
