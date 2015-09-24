/**
 * Created by tommyZZM on 2015/8/7.
 */
import React from 'react';
import {config} from "../../utils/utils.js";
import {CollapsibleNav,Navbar,Nav,NavItem,DropdownButton,MenuItem} from "react-bootstrap"

import CatalogDropList from "../inc/CatalogDropList";

class Header extends React.Component {
    render(){
        return (
            <header id="site-header">
                <h1 className="page-title">Test of GPU on Web</h1>
                <NavbarWrapper/>
            </header>
        )
    }
}

class NavbarWrapper extends React.Component{
    render(){
        return (
            <Navbar className="site-nav" bsStyle="default">
                <Nav navbar collapsible>
                    <CatalogDropList eventKey={1} title={config.catalog.Math}/>
                    <CatalogDropList eventKey={2} title={config.catalog.WebGL}/>
                    <CatalogDropList eventKey={3} title={config.catalog.WebCL}/>
                </Nav>
                <Nav ulClassName="hidden-xs navbar-quicklink" navbar right collapsible>
                    <NavItem eventKey={1} href="https://github.com/tommyZZM/webGLPratice" title="watch source on github">
                        <span className="fa fa-github-alt"/>
                    </NavItem>
                    <NavItem eventKey={2} href={config.url} title="blog">
                        <span className="fa fa-home"/>
                    </NavItem>
                </Nav>
            </Navbar>
        )
    }
}


export default Header;