/**
 * Created by tommyZZM on 2015/8/7.
 */
import React from 'react';
import {config} from "../../utils/utils.js";

class Header extends React.Component {
    render(){
        return (
            <header id="site-header">
                <h1 className="page-title">WebGL Pratice</h1>

                <nav className="social-nav">
                    <ul>
                        <li>
                            <a href="https://github.com/tommyZZM/webGLPratice" title="watch source on github">
                                <span className="fa fa-github-alt"></span>
                            </a>
                        </li>
                        <li>
                            <a href={config.url} title="blog"><span className="fa fa-ellipsis-h"></span>
                            </a>
                        </li>
                    </ul>
                </nav>
                <nav className="site-nav">
                    <ul>
                        <li className="curr"><a>笔记</a></li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Header;