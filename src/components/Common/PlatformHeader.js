import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'


const PlatformHeader = () => (
  <StaticQuery	
    query={graphql`
      query {
        allWordpressWpPlatform {
    edges {
      node {
        title
        slug
      }
    }
  }
		}
    `}
    render={data => (
			  <ul className="dropdown-menu-ul-list">
                                     
				{data &&
				data.allWordpressWpPlatform &&
				data.allWordpressWpPlatform.edges &&
				data.allWordpressWpPlatform.edges.map(
                prop => {
					return (
					<li>
                                           <Link to={"/platforms/"+prop.node.slug+"/"} className="dropdown-item mt-1">
                                               <span className="dropdown-menu-li-list"  dangerouslySetInnerHTML={{ __html: prop.node.title}}></span>
                                           </Link>
                                       </li>
					)
                }
                )}
									 
                                      
                                   </ul>
    )}
	/>
)

export default PlatformHeader
