/**
 * Created by tommyZZM on 2015/8/8.
 */
import React from 'react';
import {Col} from "react-bootstrap"
import color from "color";

import SampleRenderer from '../content/SampleRenderer.js'
import SampleManager from '../../core/SampleManager.js';

import {config} from "../../utils/utils.js"

class Content extends React.Component {

    constructor(){
        super();
        //SampleManager.addListener(SampleManager.PRE_READY_SAMPLE,this.onSamplePreReady.bind(this));
    }

    //onSamplePreReady() {
    //
    //}

    render(){
        return (
            <Col className="content " md={9} style={{minHeight:config.minHeight-138-91}}>
                {(()=>{
                    if(this.props.sampleContent&&this.props.sampleContent.id){
                        return <Markdown id={this.props.sampleContent.id} source={this.props.sampleContent.markdown}/>
                    }
                })()}
            </Col>
        )
    }
}

class Markdown extends React.Component{
    constructor() {
        super();

        this.markRenderer = new SampleRenderer({sourcepos: true});
        this.isRenderSuccess = false;

        this.canvasQuery = [];
        this.canvasDict = {};

        this.markRenderer.renderHtml("canvas",(tag,attrs)=>{
            return <Canvas parent={this} name={attrs.name||""} belongsto={this.props.id}/>;
        });
    }

    componentDidMount(){
        this.componentDidUpdate();
    }

    componentDidUpdate(){
        var dict = {};
        for(var i in this.canvasDict){
            dict[i] = React.findDOMNode(this.canvasDict[i])
        }

        var data = {
            canvas:{
                query:this.canvasQuery.map((canvas)=>{return React.findDOMNode(canvas)}),
                dirct:dict
            }
        };
        SampleManager.readySample(this.props.id,data);
        this.canvasQuery = [];
    }

    render(){
        if(typeof this.props.source === "string"){
            var elements = this.markRenderer.render(this.props.source || '');

            if(elements&&!elements.some((ele)=>{
                    return !React.isValidElement(ele)
                })){
                this.isRenderSuccess = true;

                return React.createElement.apply(React,["div",{className:"markdown"}].concat(elements));
            }
        }
        return <div className="noop"></div>
    }
}

class Canvas extends React.Component{
    componentDidMount() {
        this.componentDidUpdate();
    }

    componentDidUpdate(){
        var parent = this.props.parent;
        var canvas = React.findDOMNode(this);
        parent.canvasQuery.push(canvas);
        //var gl=canvas.getContext("webgl");
        //var background = canvas.style.backgroundColor||window.getComputedStyle(canvas).backgroundColor;
        //background = color(background).rgb();
        //gl.clearColor(background.r/255, background.g/255, background.b/255, 1.0);
        //gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        if(this.props.name)parent.canvasDict[this.props.name]=canvas;
    }

    render(){
        return (
            <canvas key={this.props.belongsto+"_"+this.props.name} name={this.props.name} data-belongsto={this.props.belongsto}></canvas>
        )
    }
}

export default Content;