import React from "react"

import { graphql, useStaticQuery } from "gatsby"

const Footer = () => {
    const data = useStaticQuery(graphql`
    query {
        site{
            siteMetadata{
                author
            }
        }
    }
    `)
    return (
        <footer>
<p>By {data.site.siteMetadata.author} @ 2020. All Right Reserved </p>
        </footer>
    )
}

export default Footer