/**
 * Created by tommyZZM on 2015/8/8.
 */
import React from 'react';
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
            <div>
                <ul>
                    {this.renderSampleItem()}
                </ul>
            </div>
        </Col>
        )
    }

    renderSampleItem(){
        return this.props.samplesList.map((sample)=>{
            return <li key={sample.id}>{sample.title}</li>
        });
    }
}

export default SideBar;