module.exports = {
    content: [
        "./layouts/**/*.html",
        "./content/**/*.{html,md}",
    ],
    theme: {
        extend: {
            spacing: {
                "header": "2.75rem",
                "header-margin": "1rem",
                "footer": "2.75rem",
                "footer-margin": "1rem",
            }
        },
        colors: {
            "bg-light": "#F9F5D7",
            "fg-light": "#282828",
            /* Tailwind-like Nord color names */
            'nord-0': '#2E3440',
            'nord-1': '#3B4252',
            'nord-2': '#434C5E',
            'nord-3': '#4C566A',
            'nord-4': '#D8DEE9',
            'nord-5': '#E5E9F0',
            'nord-6': '#ECEFF4',
            'nord-7': '#8FBCBB',
            'nord-8': '#88C0D0',
            'nord-9': '#81A1C1',
            'nord-10': '#5E81AC',
            'nord-11': '#BF616A',
            'nord-12': '#D08770',
            'nord-13': '#EBCB8B',
            'nord-14': '#A3BE8C',
            'nord-15': '#B48EAD',
        }
    },
}