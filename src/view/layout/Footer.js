/**
 * Created by tommyZZM on 2015/8/7.
 */
import React from 'react';
import {config} from "../../utils/utils.js";

class Footer extends React.Component {
    render(){
        return (
            <footer>
                <p>© 2015&nbsp;<a href={config.url}>tommyzzm</a></p>
                <p>Powered by <a href="http://facebook.github.io/react/" target="_blank">React</a> and <a href="https://github.com/twbs/bootstrap/" target="_blank">BootStrap</a></p>
            </footer>
        );
    }
}

export default Footer;