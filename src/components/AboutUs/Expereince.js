import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'





const Expereince = () => (
  <StaticQuery
    query={graphql`
      query {
    allWordpressWpExperience {
                        edges {
                            node {
                            acf {
                                global_customer
                                global_customer_count
                                project_completed
                                project_completed_count
                                tagline
                                team_member
                                team_member_count
                                descprition
                                branch_in_world_wide_count
                                branch_in_world_wide
                            }
                            }
                        }
                    }
            
        }
    `}
    render={data => (
		<section className="about-us-section-2  ">
                <div className="container">
                    <div className="main-panel">
                    {data &&
                            data.allWordpressWpExperience &&
                            data.allWordpressWpExperience.edges.map(
                        
                            
                        
                            prop => {
                            return (   
                        <div className="row">
                            <div className="col-lg-6">
                                <h4 className="sub-heading">Our Expereince</h4>
                                <h3 className="section-heading-2">{prop.node.acf.tagline}</h3>
                                <p className="label-text">{prop.node.acf.descprition}</p>
                                <a href="#" className="btn btn-secondary-link">Get an Estimate <i
                                        className="fa fa-long-arrow-right ml-1"></i></a>
                            </div>
                            <div className="col-lg-6">
                                <div className="about-us-data-show xs-center section-padding">
                                    <div className="about-us-data-show-single wow fadeInUp active" data-wow-delay="0.1s"
                                        data-tilt="" data-tilt-max="20" data-tilt-scale="1.2">
                                        <h3><span className="counter">{prop.node.acf.global_customer_count}</span>K</h3>
                                        <p>{prop.node.acf.global_customer}</p>
                                    </div>
                                    <div className="about-us-data-show-single wow fadeInUp" data-wow-delay="0.2s" data-tilt=""
                                        data-tilt-max="20" data-tilt-scale="1.2">
                                        <h3><span className="counter">{prop.node.acf.project_completed_count}</span>+</h3>
                                        <p>{prop.node.acf.project_completed}</p>
                                    </div>
                                    <div className="about-us-data-show-single wow fadeInUp" data-wow-delay="0.3s" data-tilt=""
                                        data-tilt-max="20" data-tilt-scale="1.2">
                                        <h3><span className="counter">{prop.node.acf.team_member_count}</span>+</h3>
                                        <p>{prop.node.acf.team_member}</p>
                                    </div>
                                    <div className="about-us-data-show-single wow fadeInUp" data-wow-delay="0.4s" data-tilt=""
                                        data-tilt-max="20" data-tilt-scale="1.2">
                                        <h3><span className="counter">{prop.node.acf.branch_in_world_wide_count}</span></h3>
                                        <p>{prop.node.acf.branch_in_world_wide}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                              )
                            }
                        )}  
                    </div>
                </div>
            </section>
    )}
	/>
)

export default Expereince
