var gulp=require('gulp'),
    browserSync= require('browser-sync'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    cache = require('gulp-cache');


gulp.task('default',['browser','minJS', 'minCSS', 'images']);

gulp.task('minJS', function(){
    return gulp.src('js/app.js')
        .pipe(uglify())
        .pipe(gulp.dest('js/app.min.js'))

});

gulp.task('minCSS', function()
{
 return gulp.src('css/style.css')
     .pipe(uglify())
     .pipe(gulp.dest('css/style.min.css'))
});

gulp.task('browser', function(){
    browserSync.init({
        server: {
            baseDir: "./"
        }
    })
});

gulp.task('images', function ()
{
    return gulp.src('assets/images/**/*.+(png|jpg|gif|svg)')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
});

gulp.task('images',function ()
{
    return gulp.src('assets/images/**/*.+(png|jpg|gif|svg)')
        .pipe(cache(imagemin({
            interlaced: true
        })))
        .pipe(gulp.dest('dist/images'))
})

gulp.watch('js/**/*.js').on('change',function(){
    return gulp.src('js/app.js')
        .pipe(uglify())
        .pipe(gulp.dest('js/app.min.js'))
});

gulp.watch('css/*.css').on('change',function()
{
    return gulp.src('css/style.css')
        .pipe(uglify())
        .pipe(gulp.dest('css/style.min.css'))
})

gulp.watch(['index.html','js/app.js']).on('change',function(){
    browserSync.reload(
    );
})