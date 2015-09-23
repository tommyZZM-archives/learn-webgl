/**
 * Created by tommyZZM on 2015/8/7.
 */
var os = require('os');
var connect = require('connect');
var serveStatic = require('serve-static');
var serveIndex = require('serve-index');

var config = {};//global.gulpConfig;
config.server = {
    //port:9997,
    localhost:true
};

var dir = process.cwd();

function run(cb){
    var app = connect();
    app.use(function (req, res, next) {
        res.setHeader("Access-Control-Allow-Origin", "*");
        next();
    });

    app.use(serveStatic(dir, {'index': ['index.html']}));
    app.use(serveIndex(dir, {'icons': true}));

    var port = config.server.port || 9999;
    var hostname = config.server.localhost?"localhost":getIPAddress();

    app.listen(port, function () {
        // 忽略80端口
        port = (port != '80' ? ':' + port : '');
        var url = "http://" + hostname + port + '/';
        console.log("Running at " + url);
        cb(url)
    });
}

var getIPAddress = function () {
    var ifaces = os.networkInterfaces();
    var ip = '';
    for (var dev in ifaces) {
        ifaces[dev].forEach(function (details) {
            if (ip === '' && details.family === 'IPv4' && !details.internal) {
                ip = details.address;
                return;
            }
        });
    }
    return ip || "127.0.0.1";
};


exports.run = run;