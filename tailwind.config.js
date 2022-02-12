const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './vendor/laravel/jetstream/**/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        extend: {
            colors: {
                'body': '#17171F',
                'selected-text': '#A3A3FF',
                'theme': '#3F3FFF',
                'nav': '#404053',
                'secondary': '#9191A4',
                'badge': '#3F3F51',
                'input-border': '#565666',
                'input': '#2A2A35',
                'card': '#575454'
            },
            fontFamily: {
                'poppins': ["'Poppins'", 'sans-serif']
            }
        },
    },

    plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
