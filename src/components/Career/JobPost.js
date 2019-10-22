import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import ContactCareer from '../Contact/ContactCareer'


const JobPost = () => (
  <StaticQuery
    query={graphql`
      query {
        allWordpressWpPositions {
                edges {
                    node {
                    id
                    acf {
                        button_link
                        button_name
                        descprition
                        exp
                        job_title
                        location
                    }
                    }
                }
            }
		}
    `}
    render={data => (
		<section className="career-section-1 form-section ">
                <div className="container bg-white">
                    <div className="main-panel">
                        <div className="row justify-content-center">
                            <div className="col-lg-12 ">
                                <div className=" p-3">
                                        <h2 className="section-heading-2 ">Explore Opportunities</h2>
                                        <div className="card  border-bottom border-top-0 border-left-0 border-right-0">
                                            <div className="card-header bg-white row justify-content-between m-0" role="tab" >
                                                <p className=" mb-0 d-inline">
                                                    Position
                                                </p>
                                                <div >
                                                    <div class="d-inline m-0">
                                                        <p className="  label-text exp-loc-text d-inline ">Experience</p>
                                                        <p className=" label-text d-inline  exp-loc-text  ">Location </p>
                                                        <a href="javascript:void(0)" className="apply apply-btn visiblity-hidden border-0 text-white">&nbsp;Apply </a>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                        </div>
                                       
                                        <div id="accordion">
                                            
                                        {data &&
                                            data.allWordpressWpPositions &&
                                            data.allWordpressWpPositions.edges.map(
                                        
                                               
                                        
										(prop,i) => {
                                            return (   
                                            <div className="card">
                                                <div className="card-header bg-white row justify-content-between m-0" role="tab" >
                                                    <a className="nav-link mb-0 collapsed" data-toggle="collapse" href={"#opt"+i}>
                                                    <span className="toggle-icon"></span>           {prop.node.acf.job_title}
                                                    </a>
                                                    <div class="d-inline m-0">
                                                        <p className="label-text  exp-loc-text d-inline">{prop.node.acf.exp} </p>
                                                        <p className="label-text  exp-loc-text d-inline">{prop.node.acf.location} </p>
                                                        <a href="javascript:;" data-name={prop.node.acf.job_title} className="apply apply-btn">{prop.node.acf.button_name} </a>
                                                    </div>
                                                   
                                                
                                                </div>

                                                <div id={"opt"+i} className="collapse " role="tabpanel" data-parent="#accordion">
                                                <div className="card-body">
                                                <p className="label-text   d-md-none d-block">Experience : {prop.node.acf.exp} </p>
                                                <p className="label-text   d-md-none d-block">Location : {prop.node.acf.location} </p>
                                                   <div dangerouslySetInnerHTML={{ __html: prop.node.acf.descprition }}  className="JobDescription blank-section" />
                                                        
                                                    
													
													
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
                                <div className="row justify-content-center mt-4 pt-4">
                                <div className=" col-lg-10">
                                    <div className="p-3 formdiv"  >
									<span className=" sub-heading d-block mb-2 text-center mb-2">Contact Us</span>
                                        <h2 className="section-heading-2 d-block text-center">Are you Ready?</h2>
                                        <ContactCareer />
                                    </div>
                                </div>
                        </div>
                        </div>
                </div>
                </section>
    )}
	/>
)

export default JobPost
