import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import HeaderMenuLink from "./header-menu-link.js"
import "../../styles/header-menu.css"

const HeaderMenu = () => (
    <StaticQuery
        query={
            graphql`
            {   
                iconblog:file(relativePath:{eq:"vectors/icon-blog.png"}) {
                    childImageSharp {
                    fixed(width: 42,height: 40) {
                        ...GatsbyImageSharpFixed
                    }
                    }
                }
                icongetinvolved:file(relativePath:{eq:"vectors/icon-get-involved.png"}) {
                    childImageSharp {
                    fixed(width: 38,height: 40) {
                        ...GatsbyImageSharpFixed
                    }
                    }
                }
                iconmacarons:file(relativePath:{eq:"vectors/icon-macarons.png"}) {
                    childImageSharp {
                    fixed(width: 38,height: 43) {
                        ...GatsbyImageSharpFixed
                    }
                    }
                }  
                iconhistory:file(relativePath:{eq:"vectors/icon-history.png"}) {
                    childImageSharp {
                    fixed(width: 38,height: 47) {
                        ...GatsbyImageSharpFixed
                    }
                    }
                } 
                iconfaq:file(relativePath:{eq:"vectors/icon-faq.png"}) {
                    childImageSharp {
                    fixed(width: 40,height: 45) {
                        ...GatsbyImageSharpFixed
                    }
                    }
                }
                iconabout:file(relativePath:{eq:"vectors/icon-about.png"}) {
                    childImageSharp {
                    fixed(width: 38,height: 42) {
                        ...GatsbyImageSharpFixed
                    }
                    }
                }
                iconcontact:file(relativePath:{eq:"vectors/icon-contact.png"}) {
                    childImageSharp {
                    fixed(width: 38,height: 40) {
                        ...GatsbyImageSharpFixed
                    }
                    }
                }
                iconprivacy:file(relativePath:{eq:"vectors/icon-privacy.png"}) {
                    childImageSharp {
                    fixed(width: 38,height: 43) {
                        ...GatsbyImageSharpFixed
                    }
                    }
                }
            }
            `
        }
        render = {( data ) => (
            <nav className="menu-bar">
                <section class="menu-container">
                    <ul className="menu-items">
                        <HeaderMenuLink to="/blog/" text="Blog">
                            <Img
                                fixed={ data.iconblog.childImageSharp.fixed }
                                alt="Blog Icon" />
                        </HeaderMenuLink>
                        <HeaderMenuLink to="/get-involved/" text="Get Involved">
                            <Img
                                fixed={ data.icongetinvolved.childImageSharp.fixed }
                                alt="Get Involved Icon" />
                        </HeaderMenuLink>
                        <HeaderMenuLink to="/macarons/" text="Macarons">
                            <Img
                                fixed={ data.iconmacarons.childImageSharp.fixed }
                                alt="Macarons Icon" />
                        </HeaderMenuLink>
                        <HeaderMenuLink to="/history/" text="History">
                            <Img
                                fixed={ data.iconhistory.childImageSharp.fixed }
                                alt="History Icon" />
                        </HeaderMenuLink>
                        <HeaderMenuLink to="/faq/" text="FAQ">
                            <Img
                                fixed={ data.iconfaq.childImageSharp.fixed }
                                alt="FAQ Icon" />
                        </HeaderMenuLink>
                        <HeaderMenuLink to="/about/" text="About">
                            <Img
                                fixed={ data.iconabout.childImageSharp.fixed }
                                alt="About Icon" />
                        </HeaderMenuLink>
                        <HeaderMenuLink to="/contact/" text="Contact">
                            <Img
                                fixed={ data.iconcontact.childImageSharp.fixed }
                                alt="Contact Icon" />
                        </HeaderMenuLink>
                        <HeaderMenuLink to="/privacy/" text="Privacy">
                            <Img
                                fixed={ data.iconprivacy.childImageSharp.fixed }
                                alt="Privacy Icon" />
                        </HeaderMenuLink>
                    </ul>
                </section>
            </nav>
        )}
    />
)

export default HeaderMenu
