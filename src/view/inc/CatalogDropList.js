/**
 * Created by tommyZZM on 2015/9/24.
 */
import {DropdownButton,MenuItem} from "react-bootstrap"

import SampleManager from '../../core/SampleManager.js';

class CatalogDropList extends React.Component{

    renderDropList(){
        //console.log(SampleManager.getSampleListByCatalog(this.props.title),this.props.title)
        var list = SampleManager.getSampleListByCatalog(this.props.title);
        if(list.length<=0){
            return <MenuItem disabled>Nothing Yet!</MenuItem>
        }else{
            return list.map((item)=>{
                return <CatalogDropListItem
                    key={item.id}
                    sampleId = {item.id}
                    active={!!item.activeState}
                    title={item.title}
                />
            })
        }
    }

    render(){
        return (
            <DropdownButton eventKey={this.props.eventKey} title={this.props.title} navItem>
                {this.renderDropList.apply(this)}
            </DropdownButton>
        )
    }
}

class CatalogDropListItem extends React.Component{
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
        console.log("CatalogDropListItem",this.props.title)
        return (
            <MenuItem
                active={!!this.props.active}
                onClick={this.onClickSampleItem.bind(this)}>
                {this.props.title}
                {(()=>{
                    if(this.state.isLoading){
                        return <span className="sign loading"></span>
                    }
                })()}
            </MenuItem>
        );
    }
}

export default CatalogDropList;