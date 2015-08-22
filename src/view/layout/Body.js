/**
 * Created by tommyZZM on 2015/8/7.
 */
import React from 'react';
import { Grid } from 'react-bootstrap'

import Content from "../inc/Content.js";
import SideBar from "../inc/SideBar.js";

class Body extends React.Component {
    render(){
        return  <div className="body">
                    <Content sampleContent={this.props.sampleCurr}/>
                    <SideBar samplesList={(()=>{
                        if(this.props.samplesData && Array.isArray(this.props.samplesData.posts)){
                            return this.props.samplesData.posts;
                        }else{
                            return [];
                        }
                    })()}/>
                </div>
    }
}

export default Body;