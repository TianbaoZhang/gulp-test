const gulp=require('gulp')
const argv=require('yargs').argv;
const requireDir=require('require-dir');
const sequence=require('run-sequence');


requireDir('./gulp/task');

gulp.task('default',function () {
    sequence('html');
})





