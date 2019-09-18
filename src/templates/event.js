import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'

const EventPage = () => (
  <StaticQuery
    query={graphql`
      query EventPostByID($pathSlug: String){
       allWordpressWpEvents(filter: {slug: { eq: $pathSlug }}){
			 edges {
			  node {
				
				title
			  }
			}
	  }
		}
    `}
    render={data => (
			 <div>
			 <h1>{data.allWordpressWpEvents.edges[0].node.title}</h1>
			 </div>
    )}
	/>
)

export default EventPage
