// Loads Laravel Mix
let mix = require("laravel-mix");

// Compiles the Tailwind base file located at src/tailwind.css to web/tailwind.css
mix.postCss("src/tailwind.css", "docs/style.css", [
  require("postcss-nested"),
  require("tailwindcss")
]);