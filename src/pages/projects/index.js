import React from 'react'
import Layout from '../../components/Layout';
import * as styles from '../../styles/projects.module.css';

const Projects = () => {
  return ( 
    <Layout>
      <div className={styles.portfolio}>
        <h2>Portfolio</h2>
        <h3>Projects & Webistes I've Created</h3>
      </div>
    </Layout>
   );
}
 
export default Projects;