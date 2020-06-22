import React from "react"
import { Link, StaticQuery, graphql } from 'gatsby'
import Moment from 'react-moment';
import 'moment-timezone';

class Randomevent extends React.Component{
	
	constructor(props) {
		super(props);
		
	}
	
	
	
  render (){
    return(
      <>
      <StaticQuery
    query={graphql`
      query {
        allWordpressWpEvents(limit: 4, sort: {fields: wordpress_id, order: DESC}) {
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
       <section className="home-event-section home-work-section-details pt-4  ">
        
        <div className="container bg-white"  >
               
            <div className="row">
                <div className="col-md-12">
                    
                        <span className="section-subheading-heading">Check out more Events</span> 
                        
                    <div className=" pt-0 mt-5">
                        <div className="home-portfolio-slider-1 wow  animated" >
                            <div className="row">
							{data &&
							data.allWordpressWpEvents &&
							data.allWordpressWpEvents.edges.map(
							(prop,i) => {
								return (
								<>
									{(prop.node.slug == this.props.url) ? ('') : (
									<>
									{(i > 3) ? ('') : (<div id={i} className="col-lg-4 col-md-6 col-sm-6 mb-4">
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
                                            <Link to={"/event/"+prop.node.slug+"/"} className="work-title">{prop.node.title}</Link>
                                        </div>
                                    </div>
                                </div>)}		
									</>	
									
									)}
								</>
                               
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
    </>
    )
  }
}

export default Randomevent