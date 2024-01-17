// module.exports = {
//   plugins: {
//     'postcss-mixins': {}, // Asegúrate de tener la configuración adecuada si es necesario
//     'postcss-nested': {},
//     tailwindcss: {},
//     autoprefixer: {},
//   },
// }

module.exports = {
  plugins: [
    'postcss-mixins',
    'tailwindcss/nesting',
    "tailwindcss",
    'autoprefixer',
  ],
}

