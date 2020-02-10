import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Form from "../components/form"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <div className="box-trabalhos">
      {data.allStrapiPortfolios.edges.map(project => (
        <div className="column" key={project.node.id}>
          <a href={project.node.URL}>
            <div className="box-imagem">
              <img
                src={project.node.thumb.publicURL}
                alt={project.node.Title}
              />
            </div>
            <div className="empresa">{project.node.Title}</div>
          </a>
        </div>
      ))}
    </div>
    <div className="box-contatos">
      <div className="row">
        {data.allStrapiContatoes.edges.map(contato => (
          <div className="column" key={contato.node.id}>
            <div className="title">{contato.node.Titulo}</div>
            <div className="desc">{contato.node.Descricao}</div>
          </div>
        ))}

        <div className="box-form">
          <Form />
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage

export const projectsQuery = graphql`
  query {
    allStrapiPortfolios {
      edges {
        node {
          Title
          URL
          id
          thumb {
            publicURL
          }
        }
      }
    }
    allStrapiContatoes {
      edges {
        node {
          Titulo
          Descricao
          id
        }
      }
    }
  }
`
