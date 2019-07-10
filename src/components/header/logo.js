import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import "../../styles/logo.css"

const Logo = () => (
    <StaticQuery
        query={
            graphql`
            {   
                logo:file(relativePath:{eq:"vectors/logo.png"}) {
                    childImageSharp {
                    fixed(width: 40,height: 40) {
                        ...GatsbyImageSharpFixed
                    }
                    }
                }
            }
            `
        }
        render={( data )=>(
            <nav className="mchome">
                <h1 className="mctextlogo">
                    <Link to="/" className="mclink">Macaron Canary</Link>
                </h1>
                <Link to="/" className="mclogo">
                    <Img
                        fixed={ data.logo.childImageSharp.fixed }
                        alt="Logo"
                        className="logoimage"
                    />
                </Link>
            </nav>
        )}
    />
)

export default Logo
