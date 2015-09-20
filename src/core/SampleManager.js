/**
 * Created by tommyZZM on 2015/8/10.
 */

import {EventDispatcher} from 'alsc';
import * as agent from "superagent";
import * as async from "async";

import {url,fn} from "../utils/utils.js";
import SampleField from "./../view/content/SampleField.js";
import AnimationManager from "./AnimationManager.js";
import BrowseRouteManager from './BrowseRouteManager.js';

class SampleManager extends EventDispatcher{
    /**@return {string}*/
    get CONFIG_LOADED(){return "CONFIG_LOADED";};
    /**@return {string}*/
    get PRE_READY_SAMPLE(){return "PRE_READY_SAMPLE";};
    /**@return {string}*/
    //get READY_SAMPLE(){return "READY_SAMPLE";};

    static _instance;
    static get instance(){
        if(!(SampleManager._instance instanceof SampleManager)){
            SampleManager._instance = new SampleManager();
        }
        return SampleManager._instance;
    }

    constructor(){
        super();
        this.samplesData = {};
        this.samplesDict = {};//例子代码文件
        this.currSampleScript = null;
        this.currSampleID = null;
        agent.get("dist/post_data.json").then((res)=>{
            this.samplesData = JSON.parse(res.text);

            this.samplesDict["HEAD"] = this.samplesData.posts[0];
            this.samplesIdDict = {};
            var id = 1;
            this.samplesData.posts.forEach((post)=>{
                post.activeState = false;
                post.id = id;
                id++;
                post.path = post.path.replace("\\","\/");
                post.path = post.path.replace("\&","-");
                this.samplesDict[post.path] = post;
                this.samplesIdDict[post.id] = post;
            });

            this.finsishLoadConfig();
        });

        //this.addListener(this.READY_SAMPLE,this.readySample.bind(this))
    }

    finsishLoadConfig(){
        this.emit(this.CONFIG_LOADED);

        window.addEventListener("hashchange", (e)=>{
            var route = BrowseRouteManager.checkCurrRoute();
            console.log(route.sample)
            this.toggleToSample(route.sample);
        },false);

        var route = BrowseRouteManager.checkCurrRoute();
        this.toggleToSample(route.sample);
    }

    toggleToSample(hashorid,cb){
        var sample = this.samplesDict[hashorid];
        if(!sample){
            sample = this.samplesIdDict[hashorid];
        }

        console.log("toggleToSample",hashorid,this.samplesDict,this.samplesDict[hashorid]);

        if(sample){
            if(!sample["marddown"] && !sample["script"]){
                async.series([
                    (next)=>{
                        agent.get(url.join("dist/post",sample.path,"/Entry.js")).end((err,res)=>{next(err,res.text);});
                    },
                    (next)=>{
                        agent.get(url.join("src-post/",sample.path,"Note.md")).end((err,res)=>{next(err,res.text);});
                    }
                ],(err, results)=>{
                    var res_script = results[0];
                    var res_markdown = results[1];

                    eval.apply(this, ["var script =" + res_script]);
                    if (typeof script !== "undefined" && script.prototype && script.prototype instanceof SampleField) {
                        sample["script"] = script;
                    } else {
                        console.warn("load sample script error", sample.path)
                    }

                    sample["markdown"]=res_markdown;

                    if(!err){
                        this.preReadySample(sample,cb);
                    }else{
                        if(typeof cb==="function"){cb();}
                    }
                });
            }else{
                this.preReadySample(sample,cb);
            }
        }else{
            window.location.href = "http://www.chalet581.xyz/404"
        }
    }

    preReadySample(sample,cb){
        //console.log("preReadySample")
        this.samplesData.posts.forEach((post)=>{
            post.activeState = false;
        });

        sample.activeState = true;
        if(typeof cb==="function"){cb();}

        BrowseRouteManager.changeLoactionHash({
            sample:sample.path
        });

        this.emit(this.PRE_READY_SAMPLE,{sample:sample});
    }

    readySample(id,data){
        if(id===this.currSampleID)return;
        this.currSampleID=id;

        var sample = this.samplesIdDict[id];

        if(this.currSampleScript){
            this.currSampleScript.destruct();
            if(this.currSampleScript.notImplementOnDestruct){
                AnimationManager.stop(true);
            }
        }

        if(sample){
            if(!sample.runingScript){
                sample.runingScript = new sample.script(sample.id,url.join("src-post/",sample.path),url.join("dist/post",sample.path));
            }
            sample.runingScript.launch(data.canvas,data);
            this.currSampleScript = sample.runingScript;
        }
    }
}

export default SampleManager.instance