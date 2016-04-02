var gulp = require('gulp'),
    cp = require('child_process'),
    gulpProcess;

gulp.task('default', ['angular2']);

gulp.task('serve', ['angular2']);

gulp.task('angular2', function () {
	if (gulpProcess) {
		console.log('gulpProcess kill pid is: ' + gulpProcess.pid);
		gulpProcess.kill();
	}
	gulpProcess = cp.spawn('npm', ['run', 'start', '&']);
	console.log('gulpProcess pid is: ' + gulpProcess.pid);
  //run('npm start').exec();
})