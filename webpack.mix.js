const mix = require('laravel-mix');
const path = require('path');
const execSync = require('child_process').execSync;

const paths = {
    assets: "assets",
    src: "src",
    assets_css: "assets/css",
    assets_js: "assets/js",
    src_scss: "src/scss",
    src_js: "src/js",
    src_pug: "src/templates",
    src_css_vendor: "src/vendor/css",
    src_js_vendor: "src/vendor/js",
    bootstrap_scss: "src/vendor/bootstrap",
};

mix.setPublicPath(paths.assets);
mix.setResourceRoot(paths.src);

mix.copyDirectory(`${paths.src}/fonts`, `${paths.assets}/fonts`);
mix.copyDirectory(`${paths.src}/img`, `${paths.assets}/img`);

// Compile SCSS main
mix.sass(`${paths.src_scss}/styles.scss`, `${paths.assets_css}/styles.css`)
   .options({ processCssUrls: false });
mix.minify(`${paths.assets_css}/styles.css`);

// Compile bootstrap
mix.sass(`${paths.bootstrap_scss}/bootstrap.scss`, `${paths.src_css_vendor}/bootstrap.min.css`);

// vendor css concat
mix.combine([
    `${paths.src_css_vendor}/*.css`
], `${paths.assets_css}/vendor.min.css`);


// scripts main minified
mix.js(`${paths.src_js}/scripts.js`, `${paths.assets_js}/scripts.min.js`);
mix.copy(`${paths.src_js}/modernizr.min.js`, `${paths.assets_js}/modernizr.min.js`);
mix.copy(`${paths.src_js}/card.min.js`, `${paths.assets_js}/card.min.js`);
mix.copy(`${paths.src_js}/dataTable.json`, `${paths.assets_js}/dataTable.json`);
//mix.copy(`${paths.src_js}/vendor.min.js`, `${paths.assets_js}/vendor.min.js`);

// vendor js concat
// mix.combine([
//     `${paths.src_js_vendor}/*.js`,
// ], `${paths.assets_js}/vendor.min.js`);

mix.combine([
    'src/vendor/js/jquery.min.js',
    'src/vendor/js/popper.min.js',
    'src/vendor/js/bootstrap.min.js',
    'src/vendor/js/velocity.min.js',
    'src/vendor/js/downCount.min.js',
    'src/vendor/js/gmap3.min.js',
    'src/vendor/js/imagesloaded.pkgd.min.js',
    'src/vendor/js/isotope.pkgd.min.js',
    'src/vendor/js/izitoast.min.js',
    'src/vendor/js/nouislider.min.js',
    'src/vendor/js/owl.carousel.min.js',
    'src/vendor/js/photoswipe-ui-default.min.js',
    'src/vendor/js/photoswipe.min.js',
    'src/vendor/js/select2.full.min.js',
    'src/vendor/js/jquery.dataTables.min.js',
    'src/vendor/js/dataTables.bootstrap4.min.js'

], 'assets/js/vendor.min.js');


// Pug compile
mix.before(() => {
    execSync(`pug ${paths.src_pug} --pretty --out ${paths.assets}`);
});

// browserSync
mix.browserSync({
    server: paths.assets,
    files: [
        `${paths.assets}/**/*.html`,
        `${paths.assets_css}/*.css`,
        `${paths.assets_js}/*.js`,
    ],
    browser: "google chrome"
});

mix.disableNotifications();