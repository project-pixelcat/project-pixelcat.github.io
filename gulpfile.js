const gulp = require('gulp')
const jade = require('gulp-jade')
const postcss = require('gulp-postcss')
const serve = require('gulp-serve')
const nano = require('gulp-cssnano')
const copy = require('gulp-copy')
const babel = require('gulp-babel')

gulp.task('html', function () {
	return gulp.src('./src/*.jade')
		.pipe(jade({
			locals: {time: Date.now()},
			pretty: true
		}))
		.pipe(gulp.dest('./build'))
})

gulp.task('css', function () {
	return gulp.src('./src/css/style.css')
		.pipe(postcss([
			require('postcss-cssnext')()
		]))
		.pipe(nano())
		.pipe(gulp.dest('./build'))
})

gulp.task('js', function () {
	return gulp.src('./src/js/*.js')
		.pipe(babel())
		.pipe(gulp.dest('./build'))
})

gulp.task('serve', serve({
	port: 3031,
	root: ['./build']
}))

gulp.task('copy', function () {
	return gulp.src(['./CNAME', './media/**'])
		.pipe(copy('./build/'))
})

gulp.task('watch', function () {
	gulp.watch('./src/**/*.jade', ['html'])
	gulp.watch('./src/css/**/*.css', ['css'])
	gulp.watch('./src/js/**/*.js', ['js'])
})

gulp.task('build', ['html', 'css', 'copy', 'js'])

gulp.task('default', ['build', 'watch', 'serve'])
