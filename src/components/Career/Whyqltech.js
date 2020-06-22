import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import Moment from 'react-moment';
import 'moment-timezone';


import portfolio from '../../img/portfolio/1.jpg'

const Whyqltech = () => (
  <StaticQuery
    query={graphql`
      query {
        allWordpressWpEvents(limit: 3) {
		edges {
		  node {
			id
			title
			slug
			acf {
			  date
			  image{
				  source_url
			  }
			}
			 categories{
				name
			}
		  }
		}	
	  }
		}
    `}
    render={data => (
	
		<section className="career-section-02 home-event-section bg-white">
       <div className="container">
           <div className="main-panel">
               <div className="row justify-content-center text-center">
                    <div className="col-md-10 mt-4">
                        <h2 className="section-heading mb-0 pb-0">Life at QL Tech
                            
                        </h2>
						
						<span className="sub-heading  pb-4 mb-4">Growth, purpose, and collaboration. For starters.</span>
                        <p className="section-heading-2 mt-4 d-block pt-2">
						Learning is fun here. Check out some of our recent ventures

                        </p> 
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="work-portfolio-module pt-0">
                            <div className=" career-event-slider ">
                                <div className="row justify-content-center">
                                    
                                    {data  && data.allWordpressWpEvents.edges.map(
										prop => {
											return (    
												<div className="col-lg-4 col-md-6 mb-4  col-sm-6">
												<div className='grid-item wow fadeInLeft  work-thumbnial ' >
												<div className="work-thumbnail-image">
													{(prop.node.acf.image != null) ? (<img src={prop.node.acf.image.source_url} className="img-fluid" alt=""/>) : ('')}
													<p className="event-date"><span><Moment format="DD">
														{prop.node.acf.date}
													</Moment></span><Moment format="MMM">
														{prop.node.acf.date}
													</Moment></p>
												</div>
												<div className="work-thumbnail-details">
													<Link to={"/event/"+prop.node.slug+"/"} className="work-title">{prop.node.title}</Link>
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
					<div className="col-md-12 text-center" >
							<Link className="btn-default" to="/event/">Check out more events</Link>
					</div>
                </div>
                    
            </div>
       </div>
    </section>
	
	
		
    )}
	/>
)

export default Whyqltech
