/**
 * Created by tommyZZM on 2015/8/20.
 */
export var url = {
    join:function(...args) {
        var joined = [].slice.call(arguments, 0).join('/');
        return (function normalize (str) {
            return str
                .replace(/[\/]+/g, '/')
                .replace(/\/\?/g, '?')
                .replace(/\/\#/g, '#')
                .replace(/\:\//g, '://')
                .replace(/\/\.\//g, '\/');
        })(joined);
    }
};

export var rex = {
    htmlSingleTag:(/^<(\w+)\s*\/?>(?:<\/\1>|)$/),
    html:/<|&#?\w+;/
};

export var constants = {
    PI:Math.PI,
    PI_2: Math.PI * 2,
    RAD_TO_DEG:180 / Math.PI,
    DEG_TO_RAD:Math.PI / 180
};

export var config = {
    url:"http://www.chalet581.xyz"
};