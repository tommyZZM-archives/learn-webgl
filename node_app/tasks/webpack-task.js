/**
 * Created by tommyZZM on 2015/7/14.
 */

var fs = require('fs');
var path = require('path');

var gulp = require("gulp");
var gutil = require("gulp-util");
var webpack = require("webpack-stream");

var clean = require("gulp-clean");
var named = require("vinyl-named");
var merge = require("merge-stream");
var concat = require("gulp-concat");
var add = require("gulp-add");

var extname = ".es6~";

gulp.task("@webpack-clean-tmp",function(){
    return gulp.src("./**/*"+extname).pipe(clean());
});

var config = global.gulpConfig;
//获取每个domain的源码文件夹
gulp.task("@webpack-concat-each-domain",function(){
    var domains = config.domains;
    var i=0;
    var namebetoken = [];

    var tasks = domains.map(function(domain) {
        var foldername = domain.path.substring(domain.path.lastIndexOf("/") + 1, domain.path.length);

        var entryname = (domain.name||foldername)+extname;
        if(namebetoken.indexOf(domain.name)>=0){
            throw new gutil.PluginError("[task]@webpack-concat-each-core", "duplicate core name in"+JSON.stringify(domain));
        }else{
            namebetoken.push(domain.name);
        }

        domains[i].entrypath = path.join(domain.path,entryname);
        i++;

        var src = [path.join(domain.path,domain.entry||'Main.js')];
        if(domain.single === true){
            src = domain.path;
        }

        return gulp.src(src)
            .pipe(add('use_strict.js', '"use strict";',true))
            .pipe(concat(entryname))
            .pipe(gulp.dest(domain.path))
    });

    return merge(tasks);
});

//source build
gulp.task("@webpack-load-src",["@webpack-concat-each-domain"], function() {
    gulp.src("./dist/js/*.js").pipe(clean());

    var domains = config.domains;

    var loader = "babel-loader";
    if(config.babel && config.babel.polyfill){
        loader+="?experimental&optional=selfContained";
    }

    return gulp.src(domains.map(function (domain) {
        return domain.entrypath;
    }))
        .pipe(named())
        .pipe(webpack({
            output: {
                libraryTarget: "var",
                library: "[name]",
                filename: '[name].js'
            },
            externals: config.externals,
            module: {
                loaders: [
                    {test: /\.js$/, exclude: /node_modules/, loader: loader},
                    {test: /\.es6~$/, exclude: /node_modules/, loader: loader},
                    {test: /\.less$/, loader: "style!css!less"}
                ]
            }
        }, null, function (err, stats) {
            if (err) throw new gutil.PluginError("webpack", err);
            //gulp.start(["@webpack-clean-tmp"]);
        }))
        .pipe(gulp.dest("./dist/js"));
});

gulp.task("webpack", ["@webpack-load-src"], function(){

});

gulp.task("webpack-watch", ["@webpack-load-src"], function(){
    var domains = config.domains;

    gulp.watch(domains.map(function (domain) {
        return domain.path+"/**/*.js";
    }),["@webpack-load-src"])
});

gulp.task("webpack-clean-tmp",function(){
    gulp.start(["@webpack-clean-tmp"]);
});