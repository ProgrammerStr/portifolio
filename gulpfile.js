'use strict';

var 
   gulp  = require('gulp'),
   sass  = require('gulp-ruby-sass'),
   watch = require('gulp-watch');


// TASK PARA O SASS
gulp.task('sass', function(){
   return sass('sass/**/*.sass').pipe(gulp.dest('css'));
});


gulp.task('watch', function(){
	gulp.watch('sass/**/*.sass', ['sass']);
});

// TASK DEFAULT
gulp.task('default', ['sass', 'watch']);
