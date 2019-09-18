import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'

const SingleWorksheet = () => (
  <StaticQuery
    query={graphql`
		query {
			allWordpressWpKnowledgehub(filter: {categories: {slug: {regex: "/worksheet/"}}}, limit: 3) {
				edges {
				  node {
					id
					title
					slug
					content
					acf {
					  img {
						source_url
					  }
					}
				  }
				}
			  }
		}
    `}
    render={data => (
				<div className="row" >
				{data &&
				data.allWordpressWpKnowledgehub &&
				data.allWordpressWpKnowledgehub.edges &&
				data.allWordpressWpKnowledgehub.edges.map(
                prop => {
					return (
								<div className="col-md-4 thumbnial" >
                                 <div className="">
                                     <div className="img-thumbnial">
                                        <img src={prop.node.acf.img.source_url} className="img-fluid w-100"/>
                                     </div>
                                </div>
                                <div className="thumbnial-content">
                                    <h2 dangerouslySetInnerHTML={{ __html: prop.node.title}}  className="thumbnial-title"/>
                                    <p className="thumbnial-details" dangerouslySetInnerHTML={{ __html: prop.node.content}} />
                                    <Link to={"blog/"+prop.node.slug} className="btn btn-secondary-link  float-left">Read More <i className="fa fa-long-arrow-right ml-1"></i></Link>
                                </div>
                                </div>
                            
					)
                }
                )}
				</div>
			
    )}
	/>
)

export default SingleWorksheet
