/**
 * Created by tommyZZM on 2015/8/4.
 */
import React from 'react';

import Header from './layout/Header.js';
import Body from './layout/Body.js';
import Footer from './layout/Footer.js';

import SampleManager from '../core/SampleManager.js';

class App extends React.Component {
    constructor(){
        super();

        this.state = this.initializeState;
        SampleManager.addListener(SampleManager.CONFIG_LOADED,this.onSampleConfigReady.bind(this));
        SampleManager.addListener(SampleManager.TOGGLE_TO_SAMPLE,this.onSampleToggle.bind(this));

        window.addEventListener('resize', () => {
            if(this.isMount){
                this.onResize();
            }
        });
    }

    get initializeState(){
        return {
            style:{
                minHeight:window.innerHeight-16 //document margin
            },
            samplesData:null,
            sampleCurr:null //当前例子
        }
    }

    onResize(){
        if(this.state.style.minHeight!==window.innerHeight-16){
            this.setState({
                style:{
                    minHeight:window.innerHeight-16 //document margin
                }
            });
        }
    }

    onSampleConfigReady(){
        this.setState({
            samplesData:SampleManager.samplesData
        });
    }

    onSampleToggle(e){
        this.setState({
            sampleCurr:e.sample
        });
    }

    componentDidMount() {this.isMount = true;}
    componentWillUnmount() {this.isMount = false}
    render(){
        //this.state.windowResized = true;
        var app =
            <div className="row">
                <div className="col-md-10 pull-center paper" style={this.state.style}>
                    <Header />
                    <Body sampleCurr={this.state.sampleCurr} samplesData={this.state.samplesData}/>
                    <Footer />
                </div>
            </div>;
        return app;
    }
}

export default App;