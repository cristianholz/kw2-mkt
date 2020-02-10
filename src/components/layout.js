/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.scss"

const Layout = ({ children }) => {
    const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

    return (
        <>
            <Header siteTitle={data.site.siteMetadata.title} />
            <div>
                <main>{children}</main>
                <footer>
                    <div className="row">
                        <div className="flex-box">
                            <div className="endereco">
                                Albino hugo Muller, Cidade Nova, 1174, Ivoti/RS <br />
                                (51) 99836.1008
                            </div>
                            <div className="email">
                                <a href="mailto:kw2@kw2.com.br">kw2@kw2.com.br</a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
