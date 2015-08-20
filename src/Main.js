/**
 * Created by tommyZZM on 2015/7/16.
 */

import React from 'react';
import App from './view/App.js';

class Main{
    constructor(){
        React.render(<App/>, document.getElementById("app"));
    }

    registExample(example){

    }
}

module.exports = Main;
