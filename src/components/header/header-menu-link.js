import React from "react"
import { Link } from "gatsby"
import "../../styles/header-menu-link.css"

const HeaderMenuLink = ( props ) => (
    <li className="menu-menu-links">
        <Link to={ props.to } className="menu-icon">
            { props.children }
        </Link>
        <Link to={ props.to } className="menu-text">
            { props.text }
        </Link>
    </li>
)

export default HeaderMenuLink
