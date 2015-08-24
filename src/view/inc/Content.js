/**
 * Created by tommyZZM on 2015/8/8.
 */
import React from 'react';
import {Col} from "react-bootstrap"

import SampleRenderer from '../content/SampleRenderer.js'
import SampleManager from '../../core/SampleManager.js';

class Content extends React.Component {

    constructor(){
        super();
    }

    componentDidMount() {

    }

    render(){
        return (
            <Col className="content " md={8}>
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
            return <Canvas parent={this} attrs={attrs}/>;
        })
    }

    componentDidMount() {
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
        if(this.isRenderSuccess){
            SampleManager.readySample(this.props.id,data);
        }
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
        var parent = this.props.parent;
        var canvas = React.findDOMNode(this);
        parent.canvasQuery.push(canvas);
        if(this.props.attrs.name)parent.canvasDict[this.props.attrs.name]=canvas;
    }

    render(){
        return React.createElement("canvas",this.props.attrs)
    }
}

export default Content;