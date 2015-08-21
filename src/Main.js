/**
 * Created by tommyZZM on 2015/7/16.
 */

import React from 'react';
import App from './view/App.js';

import SampleManager from './core/SampleManager.js';
import SampleField from './core/SampleField.js';

class Main{
    constructor(){
        React.render(<App/>, document.getElementById("app"));
    }
}

var main;
module.exports = {
    launch:function(){
        if((main instanceof Main))return;
        main = new Main();
    },
    SampleField:SampleField
};
