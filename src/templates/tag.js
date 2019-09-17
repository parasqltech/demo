import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import PostList from '../components/PostList'

const Tag = props => {
 

  return (
    <Layout>
      
     
    </Layout>
  )
}

export default Tag

export const pageQuery = graphql`
  query TagPage($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    allWordpressPost(filter: { tags: {  slug: { eq: $slug }  } }) {
      totalCount
      edges {
        node {
          ...PostListFields
        }
      }
    }
  }
`
