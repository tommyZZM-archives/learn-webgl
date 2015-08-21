/**
 * Created by tommyZZM on 2015/7/6.
 */
var gulp = require("gulp");
var gutil = require("gulp-util");

// Specify game project paths for tasks.
global.gulpConfig = {
    dev:true,
    domains: [//scriptfile
        {"name":"app","path":'./src',entry:"Main.js"}//export:true
    ],
    less:{
        entry:[
            {"path":"./style/style.less"}
        ]
    },
    babel:{
        polyfill:false
    },
    watchfiles:[
        "./index.html",
        "./style/**/*.less",
        "./src-post/**/*.js"
    ],
    out: './dist',
    externals:{
        react: 'window.React',
        pixi: 'window.PIXI',
        "react-bootstrap":"window.ReactBootstrap"
    },
    gulp:gulp
};

var requireDir  = require('require-dir');

// Require all tasks in gulp/tasks, including subfolders
requireDir('./node_app/tasks');

gulp.task('default', function(){
    //gulp.start("webpack");
});

//Electron 使用的子进程运行的 task
gulp.task('watch-all',["on-watch-change"], function(){
    var domains = global.gulpConfig.domains;
    gulp.watch(domains.map(function (domain) {
        return domain.path+"/**/*.js";
    }).concat(global.gulpConfig.watchfiles),["on-watch-change"]);
});

gulp.task("on-watch-change",["webpack"],function(){
    if(typeof process!== "undefined"){
        if(typeof process.send === "function"){
            process.send({ cmd: 'onTaskFinish' });
        }
    }
});

