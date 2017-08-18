/**
 * Created by zhangtianbao on 2017/8/8.
 */
const gulp=require('gulp');

const autoprefixer=require('gulp-autoprefixer');
const cleancss=require('gulp-clean-css');
const less=require('gulp-less');

gulp.task('style',function () {
        return gulp.src('./src/css/*.less')
            .pipe(less())
            .pipe(autoprefixer())
            .pipe(cleancss())
            .pipe(gulp.dest('./dist/css'));
});