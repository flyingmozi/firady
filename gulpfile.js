const gulp = require('gulp');
const babel = require('gulp-babel');
const server = require('gulp-webserver');


gulp.task('myserver',()=>{
    gulp.src('.')
    .pipe(server({
        open:true,
        livereload:true,
        host:'localhost',
        port:8000,
    }))
})


// gulp.task('babel',()=>{
//     gulp.src('./src/js/*.js')
//     .pipe(babel({
//         presets:'es2015',
//     }))
//     .pipe(gulp.dest('lost/'))
// })