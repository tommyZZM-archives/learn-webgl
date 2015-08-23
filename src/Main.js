/**
 * Created by tommyZZM on 2015/7/16.
 */

import React from 'react';
import App from './view/App.js';

import SampleManager from './core/SampleManager.js';
import AnimationManager from './core/AnimationManager.js';
import SampleField from './view/content/SampleField.js';

class Main{
    constructor(){
        React.render(<App/>, document.getElementById("app"));//
    }
}

var app;
module.exports = {
    launch:function(){
        if((app instanceof Main))return;
        app = new Main();
    },
    SampleField:SampleField,
    AnimationManager:AnimationManager
};
