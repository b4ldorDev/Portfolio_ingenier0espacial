/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./page/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        screens:{
            mobile:'280px',
        },

        extend: {
            colors: {
                secondary: "#8f9044",
                darkBg: "#fc8020",
                modGreen: "#8F9044",
                modGreen2: "#a0a14c",
                modYellow: "#FAFAD2",
                modOrange: "#FC8020",
                modRed: "#CF1500",
                modBlack: "#352F3D"
        
            },
            backgroundImage: {
                "gradient-cover":
                "linear-gradient(90.21deg, rgba(170, 54, 124, 0.5) -5.91%, rgba(74, 47, 189, 0.5) )"
            },
            animation: {
                'fade-in': 'fadeIn 1s ease-in-out',
                'slide-in': 'slideIn 1s ease-in-out',
                
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
               
            }
        },
    },
};
