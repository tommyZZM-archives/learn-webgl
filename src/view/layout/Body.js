/**
 * Created by tommyZZM on 2015/8/7.
 */
import React from 'react';
import { Grid } from 'react-bootstrap'

import Content from "../inc/Content.js";
import SideBar from "../inc/SideBar.js";

import ExampleManager from '../../core/ExampleManager.js'

class Body extends React.Component {
    render(){
        return  <div className="body">
                    <Content />
                    <SideBar />
                </div>
    }
}

export default Body;