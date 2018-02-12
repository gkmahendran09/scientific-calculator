let mix = require("laravel-mix");

mix
    .js("src/js/app.js", "dist/js/")
    .sass("src/css/app.scss", "dist/css/")
    .copy("src/*.html", "dist/")
    .copy("src/fonts/", "dist/fonts/")
    .copy("src/sound/", "dist/sound/")
    .setPublicPath("dist");
