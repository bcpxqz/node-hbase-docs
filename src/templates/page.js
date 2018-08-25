import React from "react"
import { graphql } from "gatsby"
import Helmet from 'react-helmet'
import Layout from '../components/Layout'

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <Helmet
        title={'Node HBase - ' + frontmatter.title}
        meta={[
          { name: 'description', content: frontmatter.description },
          { name: 'keywords', content: frontmatter.keywords },
        ]}
      >
        <html lang="en" />
      </Helmet>
      <div
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(fields: { slug: { eq: $path } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
