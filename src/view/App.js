/**
 * Created by tommyZZM on 2015/8/4.
 */
import React from 'react';

class App extends React.Component {
    render(){
        //this.state.windowResized = true;
        var app =
            <div className="row">
                <div className="col-md-10 pull-center paper" style={this.style}></div>
            </div>;
        return app;
    }

    get style(){
        return {
            minHeight:window.innerHeight-16 //document margin
        }
    }
}

export default App;