import { graphql, Link } from "gatsby";
import React from "react";
import Layout from '../components/Layout';
import * as styles from '../styles/home.module.css';
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function Home({ data }) {
  console.log(data);
  const image = getImage(data.file)
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2 >Design</h2>
          <h2>Develop & Design</h2>
          <p>Web developer based in the Pacific Northwest.</p>
          <Link className={styles.btn} to="/projects">My Portfolio Projects</Link>
        </div>
        <GatsbyImage image={image} alt="banner image" />
      </section>
    </Layout>
  )
}

export const query = graphql`
  query Banner {
    file(relativePath: {eq: "banner.png"}) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`