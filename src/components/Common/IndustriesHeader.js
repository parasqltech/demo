import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'


const IndustriesHeader = () => (
  <StaticQuery	
    query={graphql`
      query {
        allWordpressWpHomeservices{
    edges{
      node{
        title
        acf{
          title
          descprition
        }
      }
    }
  }
		}
    `}
    render={data => (
			 <ul className="">
                                     
				{data &&
				data.allWordpressWpHomeservices &&
				data.allWordpressWpHomeservices.edges &&
				data.allWordpressWpHomeservices.edges.map(
                prop => {
					return (
					<li className="">
                                           <a href="services-main-page.html" className="dropdown-item">
                                               <span className="services-heading">{prop.node.acf.title}</span>
                                               <span className="services-description">{prop.node.acf.descprition}</span>
                                           </a>
                                       </li>
					)
                }
                )}
									 
                                      
                                   </ul>
    )}
	/>
)

export default IndustriesHeader
