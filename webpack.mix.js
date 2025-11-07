const mix = require('laravel-mix');
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

mix.setPublicPath(paths.assets);
mix.setResourceRoot(paths.src);

mix.copyDirectory(`${paths.src}/fonts`, `${paths.assets}/fonts`);
mix.copyDirectory(`${paths.src}/img`, `${paths.assets}/img`);

// vendor js concat
mix.combine([

    `${paths.node_modules_jquery_countdown}/jquery.countdown.min.js`,
    `${paths.node_modules_gmap3}/gmap3.min.js`,
    `${paths.node_modules_imagesloaded}/imagesloaded.pkgd.min.js`,
    `${paths.node_modules_isotope}/isotope.pkgd.min.js`,
    `${paths.node_modules_iziToast}/iziToast.min.js`,
    `${paths.node_modules_jquery}/jquery.min.js`,
    `${paths.node_modules_nouislider}/nouislider.min.js`,
    `${paths.node_modules_owl_carousel}/owl.carousel.min.js`,
    `${paths.node_modules_photoswipe}/photoswipe.esm.min.js`,
    `${paths.node_modules_popper_js}/popper.min.js`,
    `${paths.node_modules_velocity_animate}/velocity.min.js`,
    //`${paths.src_js_vendor}/*.js`,
], `${paths.assets_js}/vendor.min.js`);

mix.scripts([
    'node_modules/modernizr/src/Modernizr.js',
    // other vendor JS
], 'assets/js/modernizr.min.js');

// Compile SCSS main
mix.sass(`${paths.src_scss}/styles.scss`, `${paths.assets_css}/styles.css`, {
    processCssUrls: false
}).minify(`${paths.assets_css}/styles.css`, `${paths.assets_css}/styles.min.css`);

// Compile bootstrap
//mix.sass(`${paths.bootstrap_scss}/bootstrap.scss`, `${paths.src_css_vendor}/bootstrap.min.css`);
mix.sass(`${paths.bootstrap_scss}/scss/bootstrap.scss`, `${paths.src_css_vendor}/bootstrap.min.css`);

// vendor css concat
mix.combine([
    `${paths.src_css_vendor}/*.css`,
    'node_modules/pe7-icon/dist/dist/pe-icon-7-stroke.min.css',
], `${paths.assets_css}/vendor.min.css`);


// scripts main minified
mix.js(`${paths.src_js}/scripts.js`, `${paths.assets_js}/scripts.min.js`);
//mix.copy(`node_modules/izitoast/dist/js/iziToast.min.js`, `assets/js/iziToast.min.js`);

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
    browser: "google chrome",
    open: false
});

mix.disableNotifications();
