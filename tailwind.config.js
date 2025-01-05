/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                secundary: "#352f3d",
                darkBg: "#fc8020"
            },
            backgroundImage: {
                "gradient-cover":
                "linear-gradient(90.21deg, rgba(170, 54, 124, 0.5) -5.91%, rgba(74, 47, 189, 0.5) )"
            },
            animation: {
                'fade-in': 'fadeIn 1s ease-in-out',
                'slide-in': 'slideIn 1s ease-in-out',
                // Agrega aquí las animaciones que necesites
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' }
                },
                slideIn: {
                    '0%': { transform: 'translateX(-100%)' },
                    '100%': { transform: 'translateX(0)' }
                }
                // Agrega aquí los keyframes que necesites
            }
        },
    },
};