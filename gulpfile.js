var gulp = require('gulp'),
  	connect = require('gulp-connect');
 
gulp.task('webserver', function() {
    connect.server({
        port: 5000
    })
});
 
gulp.task('default', ['webserver']);