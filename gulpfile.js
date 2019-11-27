let gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    del = require('del'),
    autoprefixer = require('gulp-autoprefixer'),
    rename = require('gulp-rename')

gulp.task('clean', async () => {
    del.sync('dist')
})

gulp.task('scss', () => {
    return gulp.src('app/scss/**/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 8 versions']
        }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({ stream: true }))
})

gulp.task('css', function () {
    return gulp.src([
        'node_modules/normalize.css/normalize.css',
        'node_modules/slick-carousel/slick/slick.css',
        'node_modules/magnific-popup/dist/magnific-popup.css'
    ])
        .pipe(concat('_libs.scss'))
        .pipe(gulp.dest('app/scss'))
        .pipe(browserSync.reload({ stream: true }))
})

gulp.task('html', () => {
    return gulp.src('app/*.html')
        .pipe(browserSync.reload({ stream: true }))
})

gulp.task('script', () => {
    return gulp.src('app/js/*.js')
        .pipe(browserSync.reload({ stream: true }))
})

gulp.task('js', () => {
    return gulp.src([
        'node_modules/slick-carousel/slick/slick.js',
        'node_modules/magnific-popup/dist/jquery.magnific-popup.js',
        'node_modules/mixitup/dist/mixitup.js'
    ])
        .pipe(concat('libs.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('app/js/'))
        .pipe(browserSync.reload({ stream: true }))
})

gulp.task('browser-sync', () => {
    browserSync.init({
        server: {
            baseDir: "app/"
        }
    })
})

gulp.task('watch', () => {
    gulp.watch('app/scss/**/*.scss', gulp.parallel('scss'))
    gulp.watch('app/*.html', gulp.parallel('html'))
    gulp.watch('app/js/*.js', gulp.parallel('script'))
})

gulp.task('export', async () => {

    let bildHtml = gulp.src('app/**/*.html')
        .pipe(gulp.dest('dist'))

    let buildCss = glup.src('app/css/**/*.css')
        .pipe(gulp.dest('dist/css'))

    let buildJs = glup.src('app/js/**/*.js')
        .pipe(gulp.dest('dist/js'))

    let buildFonts = glup.src('app/fonts/**/*.*')
        .pipe(gulp.dest('dist/fonts'))

    let buildImgFonts = glup.src('app/img/**/*.*')
        .pipe(gulp.dest('dist/img'))

})

gulp.task('build', () => {
    gulp.series('clean', 'build')
})

gulp.task('default', gulp.parallel('css', 'scss', 'js', 'browser-sync', 'watch'))