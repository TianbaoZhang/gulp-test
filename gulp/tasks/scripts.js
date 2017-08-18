/**
 * Created by zhangtianbao on 2017/8/8.
 */
const gulp=require('gulp');

const uglify=require('gulp-uglify');
const rename=require('gulp-rename');
const concat=require('gulp-concat');
const useref=require('gulp-useref');
const order=require('gulp-order');

gulp.task('scripts',function () {
    return gulp.src('./src/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'));
});