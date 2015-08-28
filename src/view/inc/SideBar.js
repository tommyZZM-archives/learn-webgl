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
                    {this.renderSampleItem()}
                </ListGroup>
            </div>

        </Col>
        );

        /*`
        <Pagination
                prev
                next
                items={3}
                maxButtons={3}
                activePage={1}
                onSelect={()=>{}} />
        `*/
    }

    renderSampleItem(){
        var list = this.props.samplesList.filter((sample)=>{return sample.id>1});

        var helloworld = this.props.samplesList[0];

        var items = list.map((sample)=>{
            return (
                <SideBarListItem key={sample.id}
                                 sampleId = {sample.id}
                                 active={!!sample.activeState}
                                 title={sample.title}
                    >
                </SideBarListItem>
            )
        });

        if(helloworld) {
            items.unshift(
                <SideBarListItem
                    key={helloworld.id}
                    sampleId={helloworld.id}
                    active={!!helloworld.activeState}
                    title={helloworld.title}
                    >
                </SideBarListItem>
            );
        }

        return items;
    }
}

class SideBarListItem extends ListGroupItem{
    constructor(){
        super();
        this.state = {
            isLoading:false
        };
    }

    onClickSampleItem(e){
        var sample = SampleManager.samplesIdDict[this.props.sampleId];
        if(!!sample.activeState)return;
        this.setState({isLoading:true});
        SampleManager.toggleToSample(sample.id,()=>{
            this.setState({isLoading:false});
        });
    }

    render(){
        return (
            <ListGroupItem
                       active={!!this.props.active}
                       onClick={this.onClickSampleItem.bind(this)}>
                {this.props.title}
                {(()=>{
                    if(this.state.isLoading){
                        return <span className="sign loading"></span>
                    }
                })()}
            </ListGroupItem>
        );
    }
}

export default SideBar;