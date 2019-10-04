import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import Moment from 'react-moment';
import 'moment-timezone';

const Randomwork = () => (
  <StaticQuery
    query={graphql`
      query {
        allWordpressWpWorks(limit: 3, sort: {fields: wordpress_id, order: DESC}) {
		edges {
			node {
				title
				slug
				acf{
					short_descprition
					main_image {
                                source_url
                                link
                              }
				}
				
		}}
    }
      }
    `}
    render={data => (
       <section className="home-work-section home-work-section-details pt-4  ">
        
        <div className="container bg-white">
               
            <div className="row">
                <div className="col-md-12">
                    
                        <span className="section-subheading-heading">Relevant Story</span> 
                        <h2 className="section-heading text-center wow fadeIn" >
                            Some other case study
                        </h2>
                    <div className=" pt-0">
                        <div className="home-portfolio-slider-1 wow  animated" >
                            <div className="row">
							{data &&
							data.allWordpressWpWorks &&
							data.allWordpressWpWorks.edges.map(
							prop => {
								return (
                                <div className="col-md-4">
                                   <div className="work-thumbnial">
                                       <div className="work-thumbnail-image">
                                           <img src={prop.node.acf.main_image.source_url} className="img-fluid" alt=""/>
                                       </div>
                                       <div className="work-thumbnail-details">
                                           <p className="work-title" dangerouslySetInnerHTML={{ __html: prop.node.title }}  ></p>
                                           <p className="label-text">{prop.node.acf.short_descprition}</p>
                                           <Link to={"work/"+prop.node.slug} className="btn btn-secondary-link">Read More <i className="fa fa-long-arrow-right ml-1"></i></Link>
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

export default Randomwork
