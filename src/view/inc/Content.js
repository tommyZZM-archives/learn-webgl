/**
 * Created by tommyZZM on 2015/8/8.
 */
import React from 'react';
import {Col} from "react-bootstrap"

class Content extends React.Component {

    constructor(){
        super();
    }

    render(){
        return <Col className="content " md={8}></Col>
    }
}

export default Content;