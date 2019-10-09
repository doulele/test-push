var gulp=require('gulp');
var open=require('open');
var $=require('gulp-load-plugins')();

gulp.task('html',function(){
	return gulp.src('develop/*html')
		.pipe($.htmlmin({collapseWhitespace:true}))
		.pipe(gulp.dest('product'))
		.pipe($.connect.reload())
})

gulp.task('css',function(){
	return gulp.src('develop/css/*styl')
		.pipe($.stylus({compress:true}))
		.pipe($.concat('test.css'))
		.pipe(gulp.dest('product'))
		.pipe($.connect.reload())
})

gulp.task('js',function(){
	return gulp.src('develop/js/*.js')
		.pipe($.uglify())
		.pipe($.concat('all.js'))
		.pipe(gulp.dest('product'))
		.pipe($.connect.reload())
})

gulp.task('image',function(){
	return gulp.src('develop/image/*')
		.pipe($.imagemin())
		.pipe(gulp.dest('product/image'))
		.pipe($.connect.reload())
})

//自动加载
gulp.task('watch',function(){
	gulp.watch('develop/*html',gulp.series('html'));
	gulp.watch('develop/css/*styl',gulp.series('css'));
	gulp.watch('develop/js/*js',gulp.series('js'));
})
gulp.task('connect',function(){
	$.connect.server({
		root:'product/',
		livereload:true,
		port:9999
	})
})

//自动打开
open("http://localhost:9999/test.html");

//清理
gulp.task('clean',function(){
	return gulp.src('product/*js')
		.pipe($.clean())
})
gulp.task('default',gulp.series('clean',gulp.parallel('connect','watch','image','css','js','html')))