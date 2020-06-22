import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'


const ServiceHeader = () => (
  <StaticQuery	
    query={graphql`
      query {
        allWordpressWpHomeservices{
    edges{
      node{
        title
		slug
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
                (prop,i) => {
					return (
					<li key={i} className="">
                                           <Link to={"/services/"+prop.node.slug+"/"} className="dropdown-item">
                                               <span className="services-heading">{prop.node.acf.title}</span>
                                               <span className="services-description">{prop.node.acf.descprition}</span>
                                           </Link>
                                       </li>
					)
                }
                )}
									 
                                      
                                   </ul>
    )}
	/>
)

export default ServiceHeader
