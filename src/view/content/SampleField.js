/**
 * Created by tommyZZM on 2015/8/21.
 */

import {EventDispatcher} from 'alsc';

class SampleField extends EventDispatcher{
    constructor(){
        super();
        this.base = "";
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

    }
}

export default SampleField;