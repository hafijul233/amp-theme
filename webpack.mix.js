const mix = require('laravel-mix');
const path = require('path');
//const execSync = require('child_process').execSync;
const { execSync } = require('child_process');


mix.copyDirectory('src/fonts', 'assets/fonts');
mix.copyDirectory('src/img', 'assets/img');

const paths = {
    assets: "assets",
    src: "src",
    assets_css: "assets/css",
    assets_js: "assets/js",
    src_scss: "src/scss",
    src_js: "src/js",
    src_pug: "src/templates",
    src_pug_helper: "src/templates/helpers",
    src_pug_partial: "src/templates/partials",
    src_css_vendor: "src/vendor/css",
    src_js_vendor: "src/vendor/js",
    //bootstrap_scss: "src/vendor/bootstrap",

    // vendor js fetch node modules
    bootstrap_scss: "node_modules/bootstrap",

    // vendor css concat


    // vendor js fetch node modules
    
    node_modules_jquery_countdown: "node_modules/jquery-countdown/dist",
    node_modules_gmap3: "node_modules/gmap3/dist",
    node_modules_imagesloaded: "node_modules/imagesloaded",
    node_modules_isotope: "node_modules/isotope-layout/dist",
    node_modules_iziToast: "node_modules/izitoast/dist/js",
    node_modules_jquery: "node_modules/jquery/dist",
    node_modules_nouislider: "node_modules/nouislider/dist",
    node_modules_owl_carousel: "node_modules/owl.carousel/dist",
    node_modules_photoswipe: "node_modules/photoswipe/dist",
    node_modules_popper_js: "node_modules/popper.js/dist/",
    node_modules_velocity_animate: "node_modules/velocity-animate"
};

// vendor js concat
// mix.combine([
//     `${paths.node_modules_jquery_countdown}/jquery.countdown.min.js`,
//     `${paths.node_modules_gmap3}/gmap3.min.js`,
//     `${paths.node_modules_imagesloaded}/imagesloaded.pkgd.min.js`,
//     `${paths.node_modules_isotope}/isotope.pkgd.min.js`,
//     `${paths.node_modules_iziToast}/iziToast.min.js`,
//     `${paths.node_modules_jquery}/jquery.min.js`,
//     `${paths.node_modules_owl_carousel}/owl.carousel.min.js`,
//     `${paths.node_modules_photoswipe}/photoswipe.esm.min.js`,
//     `${paths.node_modules_popper_js}/popper.min.js`,
//     `${paths.node_modules_velocity_animate}/velocity.min.js`
// ], `${paths.assets_js}/vendor.min.js`);


mix.combine([
    'src/vendor/js/jquery.min.js',
    'src/vendor/js/bootstrap.min.js',
    'src/vendor/js/popper.min.js',
    'src/vendor/js/velocity.min.js',
    'src/vendor/js/downCount.min.js',
    'src/vendor/js/gmap3.min.js',
    'src/vendor/js/imagesloaded.pkgd.min.js',
    'src/vendor/js/isotope.pkgd.min.js',
    'src/vendor/js/izitoast.min.js',
    'src/vendor/js/nouislider.min.js',
    'src/vendor/js/owl.carousel.min.js',
    'src/vendor/js/photoswipe-ui-default.min.js',
    'src/vendor/js/photoswipe.min.js'
], 'assets/js/vendor.min.js');


// Compile SCSS main
mix.sass(`${paths.src_scss}/styles.scss`, `${paths.assets_css}/styles.css`)
   .options({ processCssUrls: false });

// minify
mix.minify(`${paths.assets_css}/styles.css`);

// Compile bootstrap
mix.sass(`${paths.bootstrap_scss}/scss/bootstrap.scss`, `${paths.src_css_vendor}/bootstrap.min.css`);

// vendor css concat
mix.combine([
    `${paths.src_css_vendor}/*.css`
], `${paths.assets_css}/vendor.min.css`);


// scripts main minified
mix.js(`${paths.src_js}/scripts.js`, `${paths.assets_js}/scripts.min.js`);
mix.copy(`${paths.src_js}/modernizr.min.js`, `${paths.assets_js}/modernizr.min.js`);
mix.copy(`${paths.src_js}/card.min.js`, `${paths.assets_js}/card.min.js`);

// Pug compile
// mix.before(() => {
//     execSync(`pug ${paths.src_pug} --pretty --out ${paths.assets}`);
// });

mix.before(() => {
    execSync(
        `npx pug ${paths.src_pug} --pretty --out ${paths.assets} --ignore "${paths.src_pug_helper}/**" --ignore "${paths.src_pug_partial}/**"`,
        { stdio: 'inherit' } // so you can see output/errors
    );
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

// const webpack = require('webpack');

// mix.webpackConfig({
//     plugins: [
//         new webpack.ProvidePlugin({
//             $: 'jquery',
//             jQuery: 'jquery',
//             'window.jQuery': 'jquery',
//         }),
//     ],
// });


mix.disableNotifications();
