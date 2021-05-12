import { graphql, Link } from 'gatsby';
import React from 'react'
import Layout from '../../components/Layout';
import * as styles from '../../styles/projects.module.css';

const Projects = ({ data }) => {
  console.log(data);
  const projects = data.projects.nodes
  const contact = data.contact.siteMetadata.contact

  return ( 
    <Layout>
      <div className={styles.portfolio}>
        <h2>Portfolio</h2>
        <h3>Projects & Webistes I've Created</h3>
        <div className={styles.projects}>
          {projects && projects.map(project => (
            <Link 
              to={"/projects/" + project.frontmatter.slug}
              key={project.id}
            >
              <h3>{ project.frontmatter.title }</h3>
              <p>{ project.frontmatter.stack }</p>
            </Link>
          ))}
        </div>
        <p>Like what you see? Email me at { contact } for a quote.</p>
      </div>
    </Layout>
   );
}
 
export default Projects;

// export page query
export const query = graphql`
  query ProjectsPage {
    projects: allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          slug
          stack
          title
          date
        }
        id
      }
    }
    contact: site {
      siteMetadata {
        contact
      }
    }

  }
`