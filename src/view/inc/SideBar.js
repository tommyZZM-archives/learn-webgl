/**
 * Created by tommyZZM on 2015/8/8.
 */
import React from 'react';
import {Col,Input,ListGroup,ListGroupItem} from "react-bootstrap"

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
                    {this.renderSampleItem()}
                </ListGroup>
            </div>
        </Col>
        )
    }

    renderSampleItem(){
        var list = this.props.samplesList.filter((sample)=>{return sample.id>1});

        var helloworld = this.props.samplesList[0];

        var items = list.map((sample)=>{
            return (
                <ListGroupItem key={sample.id}
                               active={!!sample.activeState}
                               onClick={this.onClickSampleItem.bind(this, sample)}>
                    {sample.title}
                </ListGroupItem>
            )
        });

        if(helloworld) {
            items.unshift(
                <ListGroupItem key={helloworld.id}
                               active={!!helloworld.activeState}
                               onClick={this.onClickSampleItem.bind(this, helloworld)}>
                    {helloworld.title}
                </ListGroupItem>
            );
        }

        return items;
    }

    onClickSampleItem(sample,e){
        if(!!sample.activeState)return;
        SampleManager.toggleToSample(sample.id);
    }
}

export default SideBar;