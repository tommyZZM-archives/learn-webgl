/**
 * Created by tommyZZM on 2015/8/8.
 */
import React from 'react';
import { EventDispatcher } from 'alsc';
import {Col,Input} from "react-bootstrap"

class SideBar extends React.Component {
    render(){
        return(
        <Col className="sidebar" md={4}>
            <Input
                type='text'
                placeholder='Enter key words...'
                label='Search'
                hasFeedback
                />
        </Col>
        )
    }
}

export default SideBar;