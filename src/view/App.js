/**
 * Created by tommyZZM on 2015/8/4.
 */
import React from 'react';
import { EventDispatcher } from 'alsc';

import Header from './layout/Header.js';
import Body from './layout/Body.js';
import Footer from './layout/Footer.js';

class App extends React.Component {
    constructor(){
        super();

        this.state = this.getState();

        window.addEventListener('resize', () => {
            if(this.isMount){
                this.onResize();
            }
        });
    }

    getState(){
        return {
            style:{
                minHeight:window.innerHeight-16 //document margin
            }
        }
    }

    onResize(){
        this.setState(this.getState());
    }

    componentDidMount() {
        this.isMount = true;
    }

    componentWillUnmount() {
        this.isMount = false
    }

    render(){
        //this.state.windowResized = true;
        var app =
            <div className="row">
                <div className="col-md-10 pull-center paper" style={this.state.style}>
                    <Header />
                    <Body />
                    <Footer />
                </div>
            </div>;
        return app;
    }
}

export default App;