const mix = require('laravel-mix');
const execSync = require('child_process').execSync;

mix.setPublicPath('assets')
    .setResourceRoot('src')
    .copyDirectory(`src/fonts`, `assets/fonts`)
    .copyDirectory(`src/img`, `assets/img`)
    .sass(`src/scss/styles.scss`, `assets/css/styles.css`)
    .options({processCssUrls: false})
    .minify(`assets/css/styles.css`)
    .sass(`src/vendor/bootstrap/bootstrap.scss`, `src/vendor/css/bootstrap.min.css`)
    .combine([
        `src/vendor/css/*.css`
    ], `assets/css/vendor.min.css`)
    .copy(`src/js/modernizr.min.js`, `assets/js/modernizr.min.js`)
    .copy(`src/js/card.min.js`, `assets/js/card.min.js`)
    .copy(`src/js/dataTable.json`, `assets/js/dataTable.json`)
    .combine([
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

    ], 'assets/js/vendor.min.js')
    .before(() => {
        execSync(`pug src/templates --pretty --out assets`);
    })
    .browserSync({
        server: 'assets',
        files: [
            `assets/**/*.html`,
            `assets/css/*.css`,
            `assets/js/*.js`,
        ],
        browser: "google chrome",
        open: false
    })
    .disableNotifications();