import React from "react"
import PropTypes from "prop-types"
import Header from "./header.js"
import Footer from "./footer.js"
import "../styles/layout.css"

const Layout = ({ children }) => (
    <>
    <Header/>
    <main>
        {children}
    </main>
    <Footer/>
    </>
)

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
