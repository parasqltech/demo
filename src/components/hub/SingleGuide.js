import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'

const SingleGuide = () => (
  <StaticQuery
    query={graphql`
		query {
			allWordpressWpGuide(limit: 2) {
				edges {
				  node {
					id
					title
					slug
					content
					 acf {
					  feature_image{
						  source_url
					  }
					  posted_by
					}
				  }
				}
			  }
		}
    `}
    render={data => (
				<div className="row" >
				{data &&
				data.allWordpressWpGuide &&
				data.allWordpressWpGuide.edges &&
				data.allWordpressWpGuide.edges.map(
                prop => {
					return (
								<div className="col-md-6 thumbnial" >
                                 
                                     <div className="img-thumbnial">
                                        
										{(prop.node.acf.feature_image != null) ? (<img src={prop.node.acf.feature_image.source_url} className="img-fluid w-100"/>) : ('')}
                                     </div>
                                
                                <div className="thumbnial-content">
                                    <h2 dangerouslySetInnerHTML={{ __html: prop.node.title}}  className="thumbnial-title"/>
                                    <p className="thumbnial-details" dangerouslySetInnerHTML={{ __html: (prop.node.content).substring(0, 250)+"..."}} />
                                    <Link to={"/guide/"+prop.node.slug+"/"} className="btn btn-secondary-link  float-left">Read More <i className="fa fa-long-arrow-right ml-1"></i></Link>
                                </div>
                                </div>
                            
					)
                }
                )}
				</div>
			
    )}
	/>
)

export default SingleGuide
