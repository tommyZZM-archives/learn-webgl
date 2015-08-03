var cp = require('child_process');
var iconv = require("iconv-lite");

function cp_gulptask(task,fn,log){
    if(fn===void 0){fn = function(){}}

    var taskarr;
    if(Array.isArray(task)){
        taskarr = task;
    }else if(typeof task === "string"){
        taskarr = task.split(" ");
    }

    //#abandon#注意这里一定要用gulp.cmd 参:http://matthew-jackson.com/notes/development/node-child_process-enoent-error-windows/
    //注意这里一定要用iojs|nodejs node_modules\\gulp\\bin\\gulp.js 这样才能建立通信管道.
    var watch = cp.spawn("iojs",["node_modules\\gulp\\bin\\gulp.js"].concat(taskarr),{
        encoding: 'utf8',
        timeout: 0,
        maxBuffer: 200*1024,
        killSignal: 'SIGTERM',
        stdio: ['pipe', 'pipe', 'pipe',"ipc"],
        cwd: undefined,
        env: process.env
    });

    //console.log(typeof watch.stdout,typeof watch.stderr,typeof watch.send)
    if(watch.stdout && log){
        watch.stdout.on('data', function(data) {
            var str = iconv.decode(data, 'utf8');
            str = str.replace(/\n$/i,"")
            console.log(str);
        });

        watch.stderr.setEncoding('utf8');watch.stderr.on('data', function(data) {
            //console.log(data);
        });
    }
    watch.on('message', function(data) {
        //console.log('watchFileChanged:',data);
        switch (data.cmd){
            default:{
                break;
            }
            case "onTaskFinish":{
                console.log("[gulp] watch-all task finished");
                fn();
            }
        }
    });

    return watch;
}

exports.cp_gulptask = cp_gulptask;
