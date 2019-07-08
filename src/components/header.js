import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import HeaderMenu from "./header-menu.js"
import "../styles/header.css"

const Header = () => (
    <StaticQuery
        query={
            graphql`
            {   
                hamburger:file(relativePath:{eq:"vectors/icon-hamburger.png"}) {
                    childImageSharp {
                    fixed(width: 38,height: 40) {
                        ...GatsbyImageSharpFixed
                    }
                    }
                }
            }
            `
        }
        render={( data )=>(
            <header>
                <Img
                    fixed={
                        data.hamburger.childImageSharp.fixed
                    }
                    alt=""
                />
                <HeaderMenu/>
                {/* <h1>
                    Macaron Canary
                </h1> */}
                <nav>
                    <input type="text" class="searchText" placeholder="Search..."/>
                </nav>
            </header>
        )}
    />
)

export default Header
