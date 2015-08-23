/**
 * Created by tommyZZM on 2015/8/23.
 */
import {EventDispatcher} from 'alsc';

var loop = "loop";

class AnimationManager extends EventDispatcher{

    static _instance;
    static get instance(){
        if(!(AnimationManager._instance instanceof AnimationManager)){
            AnimationManager._instance = new AnimationManager();
        }
        return AnimationManager._instance;
    }

    constructor(){
        super();
        this._stopState = true;
        this.run();
    }

    run(){
        this._stopState = false;
        this._loop()
    }

    stop(force=true){
        this._stopState = true;
        if(force){
            this.removeAllListener(loop);
        }
    }

    onLoop(fn){
        this.addListener(loop,fn);
    }

    _loop(){
        if(this._stopState)return;
        requestAnimationFrame(this._loop.bind(this));
        this.emit(loop);
    }
}

export default AnimationManager.instance