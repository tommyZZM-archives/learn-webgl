/**
 * Created by tommyZZM on 2015/8/8.
 */
import React from 'react';
import {Col} from "react-bootstrap"

import * as Commonmark from 'commonmark';

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
    }

    render(){
        if(typeof this.props.source === "string"){
            var renderer = new Commonmark.HtmlRenderer({sourcepos: true});
            var ast = this.markPraser.parse(this.props.source || '');
            var elements = renderer.render(ast);

            //console.log(this.props.source,elements);
            return <div className="markdown" dangerouslySetInnerHTML={{__html:elements}}></div>
        }else{
            return <div className="noop"></div>
        }
    }
}

export default Content;