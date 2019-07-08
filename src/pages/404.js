import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not Found" />
    <h1>404: NOT FOUND</h1>
    <p>Hi! Sorry, the page you're looking for is unfortunately either not available, not at this location, or doesn't exist. Try refreshing the page or go back to the <Link to="/">Homepage!</Link></p>
  </Layout>
)

export default NotFoundPage
