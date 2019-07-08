import React from "react"
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

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
            }
            `
        }
        render={(data)=>(
            <Layout>
                <SEO title="Home" keywords={[`macaron canary`, `warrant canaries`]} />
                <h1>Macaron</h1>
                <h1>Canary</h1>
                <h2>I would like to:</h2>
                <Img
                    fluid={
                        data.bluetop.childImageSharp.fluid
                    }
                    alt=""
                />
                <h3>Make Macarons</h3>
                <p>Create examples of warrant canaries of your own choice!</p>
                <Img
                    fluid={
                        data.bluebottom.childImageSharp.fluid
                    }
                    alt=""
                />
                <Img
                    fluid={
                        data.yellowtop.childImageSharp.fluid
                    }
                    alt=""
                />
                <h3>See Macarons</h3>
                <p>View existing macarons!</p>
                <Img
                    fluid={
                        data.yellowbottom.childImageSharp.fluid
                    }
                    alt=""
                />
            </Layout>
        )}
    />
)

export default IndexPage
