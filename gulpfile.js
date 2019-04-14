const gulp = require('gulp');
const babel = require('gulp-babel');
const server = require('gulp-webserver');
const gcss = require('gulp-clean-css');


gulp.task('myserver',()=>{
    gulp.src('.')
    .pipe(server({
        open:true,
        livereload:true,
        host:'localhost',
        port:8000,
    }))
})

gulp.task('minicss',()=>{
    gulp.src('./src/css/*.css')
    .pipe(gcss())
    .pipe(gulp.dest('./buld'))
})


// gulp.task('babel',()=>{
//     gulp.src('./src/js/*.js')
//     .pipe(babel({
//         presets:'es2015',
//     }))
//     .pipe(gulp.dest('lost/'))
// })

gulp.task('watch',()=>{
    gulp.watch('./src/css/index.css',['minicss'])
})

gulp.task('default',['minicss','myserver','watch'],()=>{

})