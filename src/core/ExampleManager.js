/**
 * Created by tommyZZM on 2015/8/10.
 */

import {EventDispatcher} from 'alsc';
import * as agent from "superagent"

import {url} from "../utils/utils.js";

class ExampleManager{

    static _instance;
    static get instance(){
        if(!(ExampleManager._instance instanceof ExampleManager)){
            return new ExampleManager();
        }
        return ExampleManager._instance;
    }

    constructor(){
        this.dispatcher = new EventDispatcher();
        this.examplesData = {};
        this.examplesDict = {};//例子代码文件
        this.currExample = null;
        agent.get("dist/post_data.json").then((res)=>{
            this.examplesData = JSON.parse(res.text);

            var need2Load = this.examplesData.posts.length*2;
            if(need2Load<=0){
                this.finsishLoad();
                return;
            }

            this.examplesData.posts.forEach((post)=>{

                //加载例子js实例
                agent.get(url.joint("dist/post",post.path,"/Entry.js")).then((res)=>{
                    need2Load--;
                    eval.apply(this, ["var example ="+res.text]);
                    post["script"]=example;
                    if(need2Load<=0){
                        this.finsishLoad();
                    }
                });

                //加载Markdown笔记
                agent.get(url.joint("src-post/",post.path,"Note.md")).then((res)=>{
                    need2Load--;
                    post["marddown"]=res.text;
                    if(need2Load<=0){
                        this.finsishLoad();
                    }
                })
            });
        });
    }

    finsishLoad(){
        console.log(this.examplesData);
    }

    registExample(example){

    }

    toggleToExample(){

    }
}

export default ExampleManager.instance