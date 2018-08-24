const gulp = require('gulp');
const ignore = require("gulp-ignore")
const imagemin = require('gulp-imagemin');
const imageResize = require('gulp-image-resize');
const newer = require("gulp-newer");
const rename = require('gulp-rename');
const jpegtran = require('imagemin-jpegtran');
const mozjpeg = require('imagemin-mozjpeg');
const imageSize = require("image-size");
const merge2 = require("merge2");
const path = require('path');

var source = "assets/img/";
var destination = "assets/img/thumb/";
var excluded = [
	"work__smash-bros-at-wsu-ad__1.jpg",
	"work__smash-bros-at-wsu-ad__2.jpg",
	"work__smash-bros-at-wsu-ad__3.jpg",
	"work__smash-bros-at-wsu-ad__4.jpg",
	"work__smash-bros-at-wsu-photo__1.jpg",
	"work__smash-bros-at-wsu-photo__2.jpg",
	"work__smash-bros-at-wsu-photo__3.jpg",
	"work__smash-bros-at-wsu-photo__4.jpg",
	"home-header-background.jpg"
]

function imageWideEnough(file){
	if (imageSize(file.contents).width > 1200){
		return true;
	}
	else{
		return false;
	}
}

function checkIfExcluded(file){
	for (i = 0; i < excluded.length; i++){
		if (path.parse(file.path).base === excluded[i]){
			console.log("NOTE: " + path.parse(file.path).base + " was found in the excluded list. Skipping...");
			return true;
		}
	}
	
	return false;
}


try{
	gulp.task('create-thumbnails', function(){
		
		const streams = [];

		//Thumbnail
		streams.push(gulp.src(source + '*.jpg')
			.pipe(ignore.include(imageWideEnough))
			.pipe(ignore.exclude(checkIfExcluded))
			.pipe(imageResize({
				filter: "Catrom",
				sharpen: "0x1.0+0.17+0.05", //attempt to emulate what seems to be automatic sharpening in Photoshop's 'Save for Web' export
				quality: 100,
				width : 1200
			}))
			
			.pipe(imagemin({
				use: [jpegtran()]
			}
			))
			
			.pipe(imagemin([
				mozjpeg({
					progressive: true,
					quality: 85
				})
			]))
			
			.pipe(rename({suffix: '--thumb'}))
			.pipe(newer(destination))
			.pipe(gulp.dest(destination))
		)
		
		//Full-size resized
		/*streams.push(gulp.src('*.jpg')
			.pipe(imageResize({
				filter: "Catrom",
				sharpen: "0x1.0+0.17+0.05", //attempt to emulate what seems to be automatic sharpening in Photoshop's 'Save for Web' export
				quality: 100,
				width: 2000
			}))
			
			.pipe(imagemin({
				use: [jpegtran()]
			}
			))
			
			.pipe(rename({suffix: '--HQ'}))
			.pipe(gulp.dest('images/'))
		)*/
		
		return merge2(streams);
	})
}

catch(error){
	console.log(error);
}