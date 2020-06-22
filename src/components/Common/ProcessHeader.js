import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'


const ProcessHeader = () => (
  <StaticQuery	
    query={graphql`
      query {
        allWordpressWpProcess(limit: 4, sort: {order: ASC, fields: wordpress_id}){
		edges {
		  node {
			title
			slug
			acf {
			  main_title
			  short_desc
			}
		  }
		}
	  }
		}
    `}
    render={data => (
			 <ul className="">
                                     
				{data &&
				data.allWordpressWpProcess &&
				data.allWordpressWpProcess.edges &&
				data.allWordpressWpProcess.edges.map(
                prop => {
					return (
					<li className="">
                                            <Link to={"/process/"+prop.node.slug+"/"} className="dropdown-item">
                                                <span className="services-subheading" dangerouslySetInnerHTML={{
              __html: prop.node.acf.main_title
            }} />
                                                <span className="services-heading" dangerouslySetInnerHTML={{
              __html: prop.node.title
            }} />
                                                <span className="services-description" dangerouslySetInnerHTML={{
              __html: prop.node.acf.short_desc
            }} />
                                            </Link>
                                        </li>
					)
                }
                )}
									 
                                      
                                   </ul>
    )}
	/>
)

export default ProcessHeader
