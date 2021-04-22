import React from "react"
import { graphql, Link } from 'gatsby'
import Layout from "../components/Layout"
import * as styles from '../styles/home.module.css'
import Img from 'gatsby-image'

export default function Home({ data }) {
  console.log(data);
  const { fluid } = data.file.childImageSharp
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Developer!!!</h2>
          <h3>Web & Mobile</h3>
          <p>UX designer, Mobile & Web developer based in Westlands, Kenya.</p>
          <Link className={styles.btn} to="/projects">My Portfolio Projects</Link>
        </div>
        <Img fluid={fluid} />
      </section>
    </Layout>
  )
}

export const query = graphql`
  query Banner {
    file(relativePath: {eq: "banner.png"}) {
      id
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;