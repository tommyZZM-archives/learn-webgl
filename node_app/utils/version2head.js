var stream = require('stream');
var crypto = require('crypto');

module.exports = function(length){
    var fileStream = new stream.Transform({objectMode: true});
    var sha1 = crypto.createHash('sha1');
    fileStream._transform = function(file, unused, callback){
        var max = length>=5?length:6;
        var contents = file.contents;

        sha1.update(contents);
        var hex = sha1.digest('hex');
        if(hex.length>=max){hex=hex.substring(0,max)}

        //var now = new Date();
        //console.log(now)

        var versionHead = "//version:"+hex+"\n\n";
        versionHead = new Buffer(versionHead);

        file.contents = Buffer.concat([versionHead,contents]);

        this.push(file);
        callback();
    };

    return fileStream;
}