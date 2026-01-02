module.exports = {
  plugins: [
    require('postcss-import'),
    require('autoprefixer')({
      overrideBrowserslist: ['> 0.5% in US', 'Safari > 9'] // Example browser list
    }),
    require('@tailwindcss/postcss')({}),
    // Add other plugins here (e.g., require('cssnano') for minification)
  ]
};
