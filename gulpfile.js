var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var uglify = require('gulp-uglify');
var cssnano = require('gulp-cssnano');
var gulpIf = require('gulp-if');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');

gulp.task('uglify', function (){
	gulp.src('src/*.html')
		.pipe(gulpIf('*.html', htmlmin()))
		.pipe(gulp.dest('dist'));
	gulp.src('src/views/*.html')
		.pipe(gulpIf('*.html', htmlmin()))
		.pipe(gulp.dest('dist/views'));
	gulp.src('src/js/*.js')
		.pipe(gulpIf('*.js', uglify()))
		.pipe(gulp.dest('dist/js'));
	gulp.src('src/views/js/*.js')
		.pipe(gulpIf('*.js', uglify()))
		.pipe(gulp.dest('dist/views/js'));
	gulp.src('src/css/*.css')
		.pipe(gulpIf('*.css', cssnano()))
		.pipe(gulp.dest('dist/css'));
	gulp.src('src/views/css/*.css')
		.pipe(gulpIf('*.css', cssnano()))
		.pipe(gulp.dest('dist/views/css'));
});

gulp.task('images', function(){
	gulp.src('src/img/*.jpg')
		.pipe(cache(imagemin()))
		.pipe(gulp.dest('dist/img'))
	gulp.src('src/views/img/*.+(png|jpg)')
		.pipe(cache(imagemin()))
		.pipe(gulp.dest('dist/views/img'))
});