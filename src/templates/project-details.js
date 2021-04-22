import React from 'react'
import Img from 'gatsby-image'
import Layout from '../components/Layout'
import * as styles from '../styles/project-details.module.css'

export default function ProjectDetails() {
    return (
        <Layout>
            <div className={styles.details}>
                <h2>title</h2>
                <h3>stack</h3>
                <div className={styles.featured}>
                    {/* <Img fluid={} /> */}
                </div>
                {/* <div dangerouslySetInnerHTML={} /> */}
            </div>
        </Layout>
    )
}
