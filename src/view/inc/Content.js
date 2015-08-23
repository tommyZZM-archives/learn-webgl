/**
 * Created by tommyZZM on 2015/8/8.
 */
import React from 'react';
import {Col} from "react-bootstrap"

import * as Commonmark from 'commonmark';
import SampleRenderer from '../content/SampleRenderer.js'

class Content extends React.Component {

    constructor(){
        super();
    }

    componentDidMount() {

    }

    render(){
        return (
            <Col className="content " md={8}>
                <Markdown source={this.props.sampleContent?this.props.sampleContent.markdown:null}/>
            </Col>
        )
    }
}

class Markdown extends React.Component{
    constructor() {
        super();
        this.markPraser = new Commonmark.Parser();
        this.markRenderer = new SampleRenderer({sourcepos: true});
    }

    render(){
        if(typeof this.props.source === "string"){
            var ast = this.markPraser.parse(this.props.source || '');
            var elements = this.markRenderer.render(ast);

            return React.createElement.apply(React,["div",{className:"markdown"}].concat(elements));
        }else{
            return <div className="noop"></div>
        }
    }
}

export default Content;