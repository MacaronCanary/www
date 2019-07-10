import React from "react"
import PropTypes from "prop-types"
import Header from "./header/header.js"
import Footer from "./footer.js"
import "../styles/layout.css"
import "../styles/typography.css"

const Layout = ({ children }) => (
    <body>
        <Header className="layout-header" />
        <main className="layout-main">
            { children }
        </main>
        <Footer className="layout-footer" />
    </body>
)

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
