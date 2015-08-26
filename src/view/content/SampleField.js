/**
 * Created by tommyZZM on 2015/8/21.
 */

import {EventDispatcher} from 'alsc';

import * as agent from "superagent";
import * as async from "async";

import * as utils from "../../utils/utils.js";

var SHADER_TYPE = {};
SHADER_TYPE["vertex"] = WebGLRenderingContext.VERTEX_SHADER;
SHADER_TYPE["fragment"] = WebGLRenderingContext.FRAGMENT_SHADER;

class SampleField extends EventDispatcher{
    constructor(src,dist){
        super();
        this["_srcPath"] = src;
        this["_distPath"] = dist;
        this.shadersDict = {};
        this.CONSTANTS = Object.assign({},utils.constants);
        this.CONSTANTS.V = this.CONSTANTS.VERTEX_SHADER = "vertex";
        this.CONSTANTS.F = this.CONSTANTS.FRAGMENT_SHADER = "fragment";
    }

    srcPath(url){
        return utils.url.join(this._srcPath,url);
    }

    distPath(url){
        return utils.url.join(this._distPath,url);
    }

    loadOneShader(gl,url,type,name,cb){
        return agent.get(url).end((err,res)=>{
            if(!err){
                if(!(type in SHADER_TYPE)){
                    return;
                }

                var shader = gl.createShader(SHADER_TYPE[type]);
                gl.shaderSource(shader, res.text);
                gl.compileShader(shader);

                if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
                    error(gl.getShaderInfoLog(shader));
                    return null;
                }

                this.shadersDict[name] = shader;
            }
            if(typeof cb==="function"){
                cb(err,res.text||"");
            }
        })
    }

    loadShaders(gl,cb,loadobj){
        if(typeof cb!=="function" || !Array.isArray(loadobj) || loadobj.length<=0)return;

        var tasks = loadobj.map((load)=>{
            if(load.url && load.type && load.name){
                return (next)=>{
                    this.loadOneShader(gl,load.url,load.type,load.name,next)
                }
            }
            return (next)=>{next(null, "")}
        });

        async.series(tasks,()=>{
            cb();
        })
    }

    launch(canvas){
        //TODO:需要传入canvas
    }

    get destruct(){
        return ()=>{
            this.onDestruct();
            this.emit("destruct")
        }
    }

    onDestruct(){
        this.notImplementOnDestruct = true;
        //console.error("onDestruct not implement yet!",this._srcPath,this._distPath);
    }
}

export default SampleField;