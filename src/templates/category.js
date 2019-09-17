import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import PostList from '../components/PostList'

const Category = props => {
  

  return (
    <Layout>
      <Helmet title={`${category} | ${siteTitle}`} />
    
    </Layout>
  )
}

export default Category

export const pageQuery = graphql`
  query CategoryPage($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    allWordpressPost(filter: { categories: {  slug: { eq: $slug }  } }) {
      totalCount
      edges {
        node {
          ...PostListFields
        }
      }
    }
  }
`
