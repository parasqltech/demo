import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import Moment from 'react-moment';
import 'moment-timezone';

const Randomevent = () => (
  <StaticQuery
    query={graphql`
      query {
        allWordpressWpEvents(limit: 3, sort: {fields: wordpress_id, order: DESC}) {
		edges {
			node {
				title
				slug
				acf{
					date
					image{
                        source_url
                    }
				}
				
		}}
    }
      }
    `}
    render={data => (
       <section className="home-event-section  pt-4 mb-4">
        
        <div className="container ">
               
            <div className="row">
                <div className="col-md-12">
                    
                        <span className="section-subheading-heading">Relevant Story</span>  
                        <h2 className="section-heading text-center wow fadeIn">
                           
                            Some other case study
                        </h2>
                    <div className="work-portfolio-module pt-0">
                        <div className=" home-portfolio-slider-1 ">
                            <div className="row">
							
								{data &&
							data.allWordpressWpEvents &&
							data.allWordpressWpEvents.edges.map(
							prop => {
								return (
									<div className="col-lg-4 col-md-6 col-sm-6 mb-4">
                                    <div className="work-thumbnial " >
                                        <div className="work-thumbnail-image">
                                            {(prop.node.acf.image != null) ? (<img src={prop.node.acf.image.source_url} className="img-fluid" alt=""/>) : ('')}
                                            
                                            <p className="event-date"><span><Moment format="DD">
												{prop.node.acf.date}
											</Moment></span><Moment format="MMM">
												{prop.node.acf.date}
											</Moment></p>
                                        </div>
                                        <div className="work-thumbnail-details">
                                            <Link to={"event/"+prop.node.slug} className="work-title">{prop.node.title}</Link>
                                        </div>
                                    </div>
                                </div>
								)
							}
							)}
							
                                
                               
                               
                            </div>
                        </div> 
                        
                    </div>
                </div>
            </div>
        </div>
    </section>	
    )}
  />
)

export default Randomevent
