/**
 * Created by tommyZZM on 2015/8/28.
 */
var fs = require("fs");
var path = require("path");

var postdataPath = "../../dist/post_data.json";

var gulp = require("gulp");
var postdata = require(postdataPath);
var args = require('green').args;

var date = new Date();

//gulp new -n [名称] 新建一个实验项目发布~

gulp.task("new",function(){
    var name = args["n"]||args["name"];
    var postsrefresh = [];
    var postdataStr = "";
    if(!name){
        //更新下列表
        console.log("use -n to defined a name");
        postsrefresh = postdata.posts.filter(function(post){
            return post && fs.existsSync(path.join("./src-post",post.path));
        });
        postdata.posts = postsrefresh;
        postdataStr = JSON.stringify(postdata,null,4);
        fs.writeFileSync("./dist/post_data.json",postdataStr,"utf-8");
        return;
    }

    //获得日期
    var year = date.getFullYear()+"";
    var month = date.getMonth()+1;
    if(month<10)month = ("0"+month);
    var day = date.getDate();
    if(day<10)day = ("0"+day);

    var srcPath = path.join(year,month+"-"+day+"-"+name);
    var fullSrcPath = path.join("./src-post",srcPath);

    if(!Array.isArray(postdata.posts)){
        console.log("postdata.posts is not an Array");
        return;
    }

    //判断名称是否重复
    if(postdata.posts.some(function(post){
            console.log(post.title,name);
            return post.title === name;
        }) && !args["f"] && !args["force"]){
        console.log(name,"has already been taken! use -f or -force to try?");
        return;
    }

    //判断目录是否已经存在,而且目录是否重复;
    var copyFromHello = true;
    if(fs.existsSync(fullSrcPath) && !args["a"] && !args["add"] ){
        return;
    }else if(fs.existsSync(fullSrcPath)){
        if(postdata.posts.some(function(post){
                //console.log(path.join("./src-post",post.path) === fullSrcPath);
                return path.join("./src-post",post.path) === fullSrcPath;
            })){
            console.log(fullSrcPath,"has already exists!");
            return;
        }
        copyFromHello = false;
        //add
    }

    var postobject = {
        "title":name,
        "path":srcPath,
        "tags":"",
        "date":year+"-"+month+"-"+day
    };

    postsrefresh = postdata.posts.filter(function(post){
        return fs.existsSync(path.join("./src-post",post.path));
    });
    postdata.posts = postsrefresh;
    postdata.posts.push(postobject);
    postdataStr = JSON.stringify(postdata,null,4);

    fs.writeFileSync("./dist/post_data.json",postdataStr,"utf-8");

    if(copyFromHello){
        gulp.src("./src-post/helloworld/*",{base:"src-post/helloworld/"}).pipe(gulp.dest(fullSrcPath));
        //console.log(year,month,day,fullSrcPath,fs.existsSync(fullSrcPath))
    }
});