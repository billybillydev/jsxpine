let mix = require("laravel-mix");

mix.setPublicPath("public").js("src/script/app.js", "public/script");
