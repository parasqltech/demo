import React from "react"
import { StaticQuery, Link } from "gatsby"
import { graphql } from "gatsby"
 
import Search from "./Search"
 
const Main = () => (
  <StaticQuery
    query={graphql`
      query SearchIndexQuery {
         allWordpressWpSearch(filter: {subtype: {eq: "post"}}) {
			edges {
			  node {
				id
				title
				subtype
				url
			  }
			}
		  }
      }
    `}
    render={data => (
      
        <Search searchIndex={data.allWordpressWpSearch.edges} />
     
    )}
  />
)
 
export default Main