/**
 * Created by tommyZZM on 2015/8/10.
 */

import { EventDispatcher } from 'alsc';

class ExampleManager extends EventDispatcher{

    static get instance(){
        return new ExampleManager();
    }

    constructor(){
        super();
    }

    //加载例子数据
    loadexample(){

    }
}

export default ExampleManager.instance