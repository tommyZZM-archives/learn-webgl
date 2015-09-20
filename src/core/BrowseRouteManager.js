/**
 * Created by tommyZZM on 2015/9/18.
 */
import {EventDispatcher} from 'alsc';
import {default as urlprase} from 'url-querystring';

//设计要则无副作用方法

class BrowseRouteManager extends EventDispatcher{
    static _instance;
    static get instance(){
        if(!(BrowseRouteManager._instance instanceof BrowseRouteManager)){
            BrowseRouteManager._instance = new BrowseRouteManager();
        }
        return BrowseRouteManager._instance;
    }

    constructor(){
        super();
    }

    changeLoactionHash(data){
        var hash = "";
        for(var i in data){
            hash+= "?"+i+"="+data[i];
        }
        if(window.location.hash!==hash){
            window.location.hash = hash;
        }
        return hash;
    }

    checkCurrRoute(){
        var params = urlprase(window.location.hash).qs;
        params.sample = params.sample||1;

        if(typeof params.sample==="number" && params.sample<1){
            params.sample = 1;
        }
        return params;
    }
}

export default BrowseRouteManager.instance