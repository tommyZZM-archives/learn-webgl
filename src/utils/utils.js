/**
 * Created by tommyZZM on 2015/8/20.
 */
export var url = {
    joint:function(...args) {
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
}