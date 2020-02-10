import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const Empresas = ({ data }) => (
    <Layout>
            {data.allStrapiEmpresas.edges.map(empresas => (
                <div className="column" key={empresas.node.id}>
                    <div className="title">{empresas.node.Titulo}</div>
                    <div className="desc">{empresas.node.Descricao}</div>
                </div>
            ))}
    </Layout>
)

export default Empresas

export const empresasQuery = graphql`
  query {
    allStrapiEmpresas {
        edges {
          node {
            Descricao
            id
            Titulo
          }
        }
      }
  }
`;
