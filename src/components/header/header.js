import React, { Component } from "react"
import Hamburger from "./hamburger.js"
import HeaderMenu from "./header-menu.js"
import Logo from "./logo.js"
// import SearchBar from "./search-bar.js" // Future feature
import "../../styles/header.css"

class Header extends Component {
    constructor() {
        super();
        this.state = {
            visible: false,
        };
        this.toggleMenu = this.toggleMenu.bind(this);
    }
    toggleMenu() {
        this.setState({visible: !this.state.visible})
    }
    render() {
        return (
            <header>
                <Hamburger toggle={this.toggleMenu} className="header-hamburger" />
                {this.state.visible && <HeaderMenu className="header-menu" />}
                <Logo className="header-logo" />
            </header>
        );
    }
}

export default Header
