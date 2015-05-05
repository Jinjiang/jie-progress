var package = require('package')('.');

var jshint = require('gulp-jshint');
var gulp = require('gulp');

var docsMaker = require('../docs-maker/docs-maker');
var ZorroInfo = docsMaker.ZorroInfo;
var writeFile = docsMaker.writeFile;

gulp.task('readme', function(done) {
  var maker = new ZorroInfo(package.name, package.main);
  maker.ready = function () {
    var result = this.genREADME();
    writeFile('README.md', result, done);
  };
});

gulp.task('lint', function() {
  return gulp.src('./z-*.html')
    .pipe(jshint.extract())
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('default', ['lint', 'readme'], function (done) {
  done();
});
