import { Link } from "gatsby";
import React from "react";
import Layout from '../components/Layout';
import * as styles from '../styles/home.module.css';

export default function Home() {
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2 >Design</h2>
          <h2>Develop & Design</h2>
          <p>Web developer based in the Pacific Northwest.</p>
          <Link className={styles.btn} to="/projects">My Portfolio Projects</Link>
        </div>
      </section>
    </Layout>
  )
}
