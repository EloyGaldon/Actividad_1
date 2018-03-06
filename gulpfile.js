var gulp=require('gulp'),
    browserSync= require('browser-sync'),
    uglify = require('gulp-uglify');


gulp.task('default',['browser','minJS']);

gulp.task('minJS', function(){
    return gulp.src('js/app.js')
        .pipe(uglify())
        .pipe(gulp.dest('js/app.min.js'))
});

gulp.task('browser', function(){
    browserSync.init({
        server: {
            baseDir: "./"
        }
    })
})

gulp.watch('js/**/*.js').on('change',function(){
    return gulp.src('js/app.js')
        .pipe(uglify())
        .pipe(gulp.dest('js/app.min.js'))
});

gulp.watch(['index.html','js/app.js']).on('change',function(){
    browserSync.reload(
    );
})