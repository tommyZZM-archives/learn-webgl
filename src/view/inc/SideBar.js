/**
 * Created by tommyZZM on 2015/8/8.
 */
import React from 'react';
import {Col,Input,ListGroup,ListGroupItem,Pagination} from "react-bootstrap"

import SampleManager from '../../core/SampleManager.js';

class SideBar extends React.Component {

    render(){
        return(
        <Col className="sidebar" md={3}>
            <Input
                type='text'
                placeholder='Enter key words...'
                label='Search'
                hasFeedback
                />
            <div>
                <ListGroup>
                    <ListGroupItem disabled>Nothing Yet!</ListGroupItem>
                </ListGroup>
            </div>

        </Col>
        );
    }
}

export default SideBar;