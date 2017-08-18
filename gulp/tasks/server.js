/**
 * Created by zhangtianbao on 2017/8/8.
 */
const gulp=require('gulp');
const browserSync =  require('browser-sync').create();
const reload = browserSync.reload;

gulp.task('server',['style','script'],function () {
    browserSync.init({
        server: {
            baseDir: './src',
            tunnel:true      //可以解决与wenstrom冲突问题

        }
    });

    gulp.watch(['*.html', 'styles/**/*.css', 'scripts/**/*.js'], {cwd: 'app'}, reload);
});