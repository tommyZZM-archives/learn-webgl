/**
 * Created by tommyZZM on 2015/7/29.
 */
var gulp = require("gulp");
var less = require("gulp-less");

var config = global.gulpConfig;

gulp.task("@less-compile",function(){
    if(!config.less || !config.less.entry){return;}
    gulp.src(config.less.entry.map(function(entry){
        return entry.path;
    })).pipe(less())
    .pipe(gulp.dest("./dist/style"));
});

gulp.task("less",["@less-compile"],function(){
    var src = config.less.entry.map(function(entry){
        return entry.path;
    });

    gulp.watch(src.concat(config.watchfiles),["@less-compile"])
});