import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const History = () => (
  <Layout>
    <SEO title="Macaron Canary: History" />
    <h1>History</h1>
    <p>We are in a defining point in time with our fight to protect and defend our civil liberties and privacy, as companies continuously further and implement their goals of monetising our user data; government agencies expand mass surveillance and data collection with the usage of warrantless National Security Letters accompanied by effectively permanent gag orders.</p>
    <p>Every person, company, and organisation should be aware of where we are in time with this, how we historically got here, what we've tried so far, and from there learn what options they have and what they can do to help themselves; help implement new tech policies; and help create legislation to mitigate the issues involved while working towards finding new ways to push back.</p>
    <h2>National Security Letter (NSL)</h2>
    <Link to="/history-nsl/">Learn More: Background, History, and Timeline of National Security Letters</Link>
    <h2>Warrant Canary</h2>
    <Link to="/history-warrant-canary">Learn More: Canaries, History, and Timeline of Warrant Canaries</Link>
    <h2>Warrant Canary Projects</h2>
    <Link to="/history-warrant-canary-projects/">Learn More: Previous Warrant Canary Projects and Why They're Difficult to Maintain</Link>
  </Layout>
)

export default History
