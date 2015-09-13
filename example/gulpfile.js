/**
 * Created by Rannn505 on 8/27/2015.
 */

var gulp = require('gulp');
var minifyHTML = require('gulp-minify-html');
var del = require('del');

var starter = require('../index');

var paths = {
    html: ['./**/*.html','!node_modules/**/*.html']
};


gulp.task('clean', function() {
    return del(['build']);
});

gulp.task('minify-html', ['clean'], function() {

    return gulp.src(paths.html)
        .pipe(minifyHTML())
        .pipe(gulp.dest('build/html'));
});

gulp.task('default', ['minify-html'], function(){

    starter({path:"testApp.js",url:"http://localhost:8080"});
});