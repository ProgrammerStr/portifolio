'use strict';

var 
   gulp  = require('gulp'),
   sass  = require('gulp-sass'),
   watch = require('gulp-watch');


// TASK PARA O SASS
gulp.task('sass', function(){
   return gulp.src('sass/**/*.sass')
          .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
          .pipe(gulp.dest('css'));
});


gulp.task('watch', function(){
	gulp.watch('sass/**/*.sass', ['sass']);
});

// TASK DEFAULT
gulp.task('default', ['sass', 'watch']);
