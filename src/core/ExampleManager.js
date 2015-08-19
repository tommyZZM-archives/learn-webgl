/**
 * Created by tommyZZM on 2015/8/10.
 */

import { EventDispatcher } from 'alsc';
import agent from 'superagent';

class ExampleManager{

    static _instance;
    static get instance(){
        if(!(ExampleManager._instance instanceof ExampleManager)){
            return new ExampleManager();
        }
        return ExampleManager._instance;
    }

    constructor(){
        this.listener = new EventDispatcher();
        this.loadexample();
    }

    //加载例子数据
    loadexample(){
        agent.get("dist/post_data.json")
            .end(function(err,res){
                console.log(err,res)
            })
    }
}

export default ExampleManager.instance