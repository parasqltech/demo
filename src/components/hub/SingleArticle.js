import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'

const SingleArticle = () => (
  <StaticQuery
    query={graphql`
		query {
			 allWordpressPost(filter: {acf: {is_featured: {eq: "1:Featured"}}}, limit: 1, sort: {fields: wordpress_id, order: DESC}) {
				edges {
				  node {
					id
					title
					slug
					date(formatString: "D MMMM,Y")
					content
					acf{
					knowledge_hub_featured_image {
						id
						source_url
					  }	
					feature_image{
						source_url
					}
					posted_by
					}
					categories{
					  id
					  name
					  slug
					}
				  }
				}
			  }
		}
    `}
    render={data => (
				<div className="col-md-12 thumbnial thumbnial1" >
				{data &&
				data.allWordpressPost &&
				data.allWordpressPost.edges &&
				data.allWordpressPost.edges.map(
                prop => {
					return (
								<div>
                                 <div className="">
                                     <div className="img-thumbnial">
                                        
										{(prop.node.acf.knowledge_hub_featured_image != null) ? (<img src={prop.node.acf.knowledge_hub_featured_image.source_url} className="img-fluid w-100"
                                                alt=""/>) : ('')}
										
                                     </div>
                                </div>
                                <div className="thumbnial-content top">
                                    <h2 dangerouslySetInnerHTML={{ __html: prop.node.title}}  className="thumbnial-title"/>
                                    <p className="thumbnial-details" dangerouslySetInnerHTML={{ __html: (prop.node.content).substring(0, 250)+"..."  }} />
										
                                    <Link to={"/hub/"+prop.node.categories[0].slug+"/"+prop.node.slug+"/"} className="btn btn-secondary-link  float-left">Read More <i className="fa fa-long-arrow-right ml-1"></i></Link>
                                </div>
                                </div>
                            
					)
                }
                )}
				</div>
			
    )}
	/>
)

export default SingleArticle
