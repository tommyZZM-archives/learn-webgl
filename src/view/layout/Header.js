/**
 * Created by tommyZZM on 2015/8/7.
 */
import React from 'react';
import {config} from "../../utils/utils.js";
import {CollapsibleNav,Navbar,Nav,NavItem,DropdownButton,MenuItem} from "react-bootstrap"
console.log(require("react-bootstrap"))

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
                    <DropdownButton eventKey={3} title={"Math"} id="nav-brand-dropdown">
                        <MenuItem eventKey="1">test</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey="4">test2 link</MenuItem>
                    </DropdownButton>
                    <DropdownButton eventKey={3} title={"WebGL"} id="nav-brand-dropdown">
                        <MenuItem eventKey="1">test</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey="4">test2 link</MenuItem>
                    </DropdownButton>
                    <DropdownButton eventKey={3} title={"WebCL"} id="nav-brand-dropdown">
                        <MenuItem eventKey="1">test</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey="4">test2 link</MenuItem>
                    </DropdownButton>
                </Nav>
                <Nav ulClassName="hidden-xs" navbar right collapsible>
                    <NavItem eventKey={1} href="https://github.com/tommyZZM/webGLPratice" title="watch source on github">
                        <span className="fa fa-github-alt"></span>
                    </NavItem>
                    <NavItem eventKey={2} href={config.url} title="blog">
                        <span className="fa fa-home"></span>
                    </NavItem>
                </Nav>
            </Navbar>
        )
    }
}


export default Header;