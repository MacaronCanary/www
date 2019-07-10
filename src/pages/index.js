import React from "react"
import Img from "gatsby-image"
import { StaticQuery, graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/pages/index/index.css"

const IndexPage = () => (
    <StaticQuery
        query={
            graphql`
            {   
                bluetop:file(relativePath:{eq:"vectors/blue-top-large.png"}) {
                    childImageSharp {
                    fluid(maxWidth: 400) {
                        ...GatsbyImageSharpFluid
                    }
                    }
                }
                bluebottom:file(relativePath:{eq:"vectors/blue-bottom-large.png"}) {
                    childImageSharp {
                    fluid(maxWidth: 400) {
                        ...GatsbyImageSharpFluid
                    }
                    }
                }
                pinktop:file(relativePath:{eq:"vectors/pink-top-large.png"}) {
                    childImageSharp {
                    fluid(maxWidth: 400) {
                        ...GatsbyImageSharpFluid
                    }
                    }
                }
                pinkbottom:file(relativePath:{eq:"vectors/pink-bottom-large.png"}) {
                    childImageSharp {
                    fluid(maxWidth: 400) {
                        ...GatsbyImageSharpFluid
                    }
                    }
                }
                yellowtop:file(relativePath:{eq:"vectors/pink-top-large.png"}) {
                    childImageSharp {
                    fluid(maxWidth: 400) {
                        ...GatsbyImageSharpFluid
                    }
                    }
                }
                yellowbottom:file(relativePath:{eq:"vectors/pink-bottom-large.png"}) {
                    childImageSharp {
                    fluid(maxWidth: 400) {
                        ...GatsbyImageSharpFluid
                    }
                    }
                }
                unevenmacaron:file(relativePath:{eq:"vectors/uneven-macaron.png"}) {
                    childImageSharp {
                    fluid(maxWidth: 400) {
                        ...GatsbyImageSharpFluid
                    }
                    }
                }
            }
            `
        }
        render={(data)=>(
            <Layout>
                <SEO title="Home" keywords={[`macaron canary`, `warrant canaries`]} />
                <h1 className="index-h1 h1-1">Macaron</h1>
                <Img
                        fluid={ data.unevenmacaron.childImageSharp.fluid }
                        className="uneven-macaron"
                        alt="Uneven Macaron Logo"
                />
                <h1 className="index-h1 h1-2">Canary</h1>
                <h2 className="index-h2">I would like to:</h2>
                <nav className="index-macaron">
                    <Img
                        fluid={ data.bluetop.childImageSharp.fluid }
                        className="index-top"
                        alt="Top Shell of a Blue Macaron"
                    />
                    <Link to="/macarons-bake/" className="index-macarons-link">
                        <section className="index-filling">
                            <h3 className="index-h3">Make Macarons</h3>
                            <p className="index-p">Create examples of warrant canaries of your own choice!</p>
                        </section>
                    </Link>
                    <Img
                        fluid={ data.bluebottom.childImageSharp.fluid }
                        className="index-bottom"
                        alt="Bottom Shell of a Blue Macaron"
                    />
                </nav>
                <nav className="index-macaron">
                    <Img
                        fluid={ data.yellowtop.childImageSharp.fluid }
                        className="index-top"
                        alt="Top Shell of a Yellow Macaron"
                    />
                    <Link to="/macarons/" className="index-macarons-link">
                        <section className="index-filling">
                            <h3 className="index-h3">See Macarons</h3>
                            <p className="index-p">View existing macarons!</p>
                        </section>
                    </Link>
                    <Img
                        fluid={ data.yellowbottom.childImageSharp.fluid }
                        className="index-bottom"
                        alt="Bottom Shell of a Yellow Macaron"
                    />
                </nav>
            </Layout>
        )}
    />
)

export default IndexPage
