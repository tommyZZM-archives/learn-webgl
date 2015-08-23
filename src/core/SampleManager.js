/**
 * Created by tommyZZM on 2015/8/10.
 */

import {EventDispatcher} from 'alsc';
import * as agent from "superagent";
import * as howdo from "howdo";

import {url,fn} from "../utils/utils.js";
import SampleField from "./../view/content/SampleField.js";

class SampleManager extends EventDispatcher{
    /**@return {string}*/
    get CONFIG_LOADED(){return "CONFIG_LOADED";};
    /**@return {string}*/
    get TOGGLE_TO_SAMPLE(){return "TOGGLE_TO_SAMPLE";};
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
        this.currExample = null;
        agent.get("dist/post_data.json").then((res)=>{
            this.samplesData = JSON.parse(res.text);

            this.samplesDict["HEAD"] = this.samplesData.posts[0];
            this.samplesIdDict = {};
            var id = 1;
            this.samplesData.posts.forEach((post)=>{
                post.id = id;
                id++;
                this.samplesDict[post.title+post.date] = post;
                this.samplesIdDict[post.id] = post;
            });

            this.finsishLoadConfig();
        });

        //this.addListener(this.READY_SAMPLE,this.readySample.bind(this))
    }

    finsishLoadConfig(){
        this.emit(this.CONFIG_LOADED);
        this.toggleToSample("HEAD");
    }

    toggleToSample(id){
        if(this.currExample){
            this.currExample.destruct();
        }

        var sample = this.samplesDict[id];
        if(sample){
            if(!sample["marddown"] && !sample["script"]){
                howdo.task((next)=>{
                    agent.get(url.join("dist/post",sample.path,"/Entry.js")).end((err,res)=>{next(err,res.text);});
                }).task((next)=>{
                    agent.get(url.join("src-post/",sample.path,"Note.md")).end((err,res)=>{next(err,res.text);});
                }).together((err, res_script, res_markdown)=> {
                    eval.apply(this, ["var script =" + res_script]);
                    if (typeof script !== "undefined" && script.prototype && script.prototype instanceof SampleField) {
                        sample["script"] = script;
                    } else {
                        console.warn("load sample script error", sample.path)
                    }

                    sample["markdown"]=res_markdown;

                    this.emit(this.TOGGLE_TO_SAMPLE,{sample:sample});
                });
            }else{
                this.emit(this.TOGGLE_TO_SAMPLE,{sample:sample});
            }
        }
    }

    readySample(id,data){
        var sample = this.samplesIdDict[id];
        if(sample){
            if(!sample.runingScript){
                sample.runingScript = new sample.script();
            }
            sample.runingScript.launch(data.canvas);
            this.currExample = sample.runingScript;
        }
    }
}

export default SampleManager.instance