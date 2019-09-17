import React from 'react'

import { Link, StaticQuery, graphql } from 'gatsby'
import thumbnial from '../../img/career/thumbnial.jpg'

import CareerSection2Image1 from '../../img/career/why-we-are-employee-image.jpg'
import CareerSection2Image2 from '../../img/career/why-we-are-employee-image-1.jpg'
import employee from '../../img/career/why-we-are-employee-image.jpg'
import employee1 from '../../img/career/why-we-are-employee-image-1.jpg'

const Whyqltech = () => (
  <StaticQuery
    query={graphql`
      query {
        allWordpressWpWhyqltech {
                        edges {
                          node {
                            id
                            acf {
                              short_descp
                              tag_lin
                            }
                          }
                        }
                      }
		}
    `}
    render={data => (
	
		<section className="career-section-02 bg-white">
       <div className="container">
           <div className="main-panel">
               <div className="row justify-content-center text-center">
                       {data &&
                                    data.allWordpressWpWhyqltech &&
                                    data.allWordpressWpWhyqltech.edges.map(
                                
                                    
                                
                                    prop => {
                                    return (   
                                    <div className="col-md-10 mt-4">
                                            <h2 className="section-heading ">Why QL Tech?
                                                <span>{prop.node.acf.tag_lin}</span>
                                            </h2>
                                            <p className="label-text" dangerouslySetInnerHTML={{ __html: prop.node.acf.short_descp }} />
                                           
                                           
                                            
                                    </div>
                                        )
                                    }
                                )}  
                      
                        
               </div>
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-9 mb-4">
                        <div className="thumbnail wow fadeInLeft">
                            <div className="thumbnial-content">
                                <h2 className="thumbnial-title"> Space for Title</h2>
                                <p className="thumbnial-description">Learn why working at VMware will help you be a force for good.</p>
                                <a href="#" className="btn "> Watch Video</a>
                            </div>
                            <div className="thumbnial-image">
                                <img src={employee} className="" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-9 mb-4">
                        <div className="thumbnail wow fadeInRight thumbnial-right">
                             <div className="thumbnial-content">
                                    <h2 className="thumbnial-title"> Space for Title</h2>
                                    <p className="thumbnial-description">Learn why working at VMware will help you be a force for good.</p>
                                    <a href="#" className="btn "> Watch Video</a>
                                </div>
                                <div className="thumbnial-image">
                                    <img src={employee1} className="" alt=""/>
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

export default Whyqltech
