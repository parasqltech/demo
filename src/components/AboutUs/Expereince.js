import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import Tilt from 'react-tilt'
import AboutPopup from './AboutPopup';


const Expereince = () => (
  <StaticQuery
    query={graphql`
      query {
    allWordpressWpExperience {
                        edges {
                            node {
                                acf {
                                    tagline
                                    descprition
                                }
                            }
                        }
                    }
                    allWordpressWpPartners {
                        edges {
                          node {
                            id
                            acf {
                              icon {
                                source_url
                              }
                            }
                          }
                        }
                    }
            
        }
    `}
    render={data => (
		<section className="about-us-section-2 mt-4 pt-4 ">
                <div className="container bg-white">
                    <div className="main-panel">
                  
                        <div className="row">
                            
                            <div className="col-lg-6">
                            {data &&
                            data.allWordpressWpExperience &&
                            data.allWordpressWpExperience.edges.map(
                        
                            
                        
                            prop => {
                            return (  
                                <> 
                                <h4 className="sub-heading">Our Partnerships</h4>
                                <h3 className="section-heading">{prop.node.acf.tagline}</h3>
                                <p className="label-text">{prop.node.acf.descprition}</p>
                                
								<AboutPopup />
                                  </>
                                        )
                                    }
                                )}  
                            </div>
                         
                            <div className="col-lg-6">
                                <div className="about-us-data-show xs-center section-padding">
                                        {data &&
                                    data.allWordpressWpPartners &&
                                    data.allWordpressWpPartners.edges.map(
                                
                                    
                                
                                    prop => {
                                    return (  
                                        <> 
                                    <Tilt className="about-us-data-show-single wow fadeInUp Tilt" options={{ max : 10,scale:1 }} data-wow-delay="0.1s"
                                        data-tilt="" data-tilt-max="20" data-tilt-scale="1.2">
                                       <div className="client-logo">
                                            <img src={prop.node.acf.icon.source_url} className="img-fluid Tilt-inner" alt=""/>
                                        </div>
                                    </Tilt>
                                    </>
                                        )
                                    }
                                )}  
                                </div>
                            </div>
                        </div>
                           
                    </div>
                </div>
            </section>
    )}
	/>
)

export default Expereince
