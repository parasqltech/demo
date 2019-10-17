import React from "react"
import { StaticQuery, Link } from "gatsby"
import { graphql } from "gatsby"
 
import Search from "./Search"
 
const Main = () => (
  <StaticQuery
    query={graphql`
      query SearchIndexQueryWork {
         allWordpressWpSearch(filter: {subtype: {eq: "worksheet"}}) {
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