let mix = require("laravel-mix");

mix.setPublicPath("public").js("src/scripts/app.js", "public/script");
