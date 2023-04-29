module.exports = {
  plugins: [
    require('prettier-plugin-tailwindcss'),
    require('prettier-plugin-prisma'),
  ],
  arrowParens: 'avoid',
  semi: false,
  singleQuote: true,
  jsxSingleQuote: true,
  trailingComma: 'all',
}
