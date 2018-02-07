let mix = require("laravel-mix");

mix
  .js("src/js/app.js", "dist/js/")
  .sass("src/css/app.scss", "dist/css/")
  .copy("src/fonts/", "dist/fonts/")
  .copy("src/*.html", "dist/")
  .setPublicPath("dist");
