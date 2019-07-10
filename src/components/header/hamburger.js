import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "../../styles/hamburger.css"

const Hamburger = ( props ) => (
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
        render = {( data ) => (
            <button className="hamburger-button" onClick={ props.toggle }>
                <Img
                    fixed={ data.hamburger.childImageSharp.fixed }
                    alt="Hamburger Menu"
                    className="hamburger"
                />
            </button>
        )}
    />
)

export default Hamburger
