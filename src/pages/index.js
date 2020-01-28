import React from "react"
import { Link } from "gatsby"
import Layout from "../component/layout"

const IndexPage = () => {
    return(
        <Layout>
            <h1>Hello</h1>
            <h3>contact me for <Link to="/contact">freelancing</Link></h3>
        </Layout>
    )
}

export default IndexPage