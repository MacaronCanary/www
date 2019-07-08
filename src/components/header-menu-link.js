import React from "react"
import { Link } from "gatsby"
import "../styles/header-menu-link.css"

const HeaderMenuLink = ( props ) => (
    <li>
        <Link to={ props.to } className="icon">
            { props.children }
        </Link>
        <Link to={ props.to } className="text">
            { props.text }
        </Link>
    </li>
)

export default HeaderMenuLink
