import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'





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
		<section className="career-section-1 form-section">
                <div className="container">
                    <div className="main-panel">
                        <div className="row justify-content-center">
                            <div className="col-lg-12 ">
                                <div className=" p-3">
                                        <h2 className="section-heading-2 ">Featured Positions</h2>
                                        <div className="card  border-bottom border-top-0 border-left-0 border-right-0">
                                            <div className="card-header bg-white row justify-content-between m-0" role="tab" >
                                                <p className=" mb-0 d-inline">
                                                    Position
                                                </p>
                                                <div >
                                                    <div class="d-inline m-0">
                                                        <p className="  label-text exp-loc-text d-inline ">Experience</p>
                                                        <p className=" label-text d-inline  exp-loc-text  ">Loaction </p>
                                                        <a href="javascript:void(0)" className=" apply-btn visiblity-hidden border-0 text-white">&nbsp;Apply </a>
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
                                                        <a href={prop.node.acf.button_link} className="apply-btn">{prop.node.acf.button_name} </a>
                                                    </div>
                                                   
                                                
                                                </div>

                                                <div id={"opt"+i} className="collapse " role="tabpanel" data-parent="#accordion">
                                                <div className="card-body">
                                                <p className="label-text   d-md-none d-block">{prop.node.acf.exp} </p>
                                                <p className="label-text   d-md-none d-block">{prop.node.acf.location} </p>
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
                                <div className="row justify-content-center">
                                <div className=" col-lg-10">
                                    <div className="p-3">
                                        <h2 className="section-heading-2 d-block text-center">Send Your Resume</h2>
                                        <form method="POST" action="">
                                            <div className="row ">
                                                <div className="col-md-6 mb-3">
                                                    <label className="label-text">First Name:</label>
                                                    <input type="text" className="form-control" placeholder="First Name"/>
                                                </div>
                                                <div className="col-md-6 mb-3">
                                                    <label className="label-text">last Name:</label>
                                                    <input type="text" className="form-control" placeholder="last Name"/>
                                                </div>
                                                <div className="col-md-6 mb-3">
                                                    <label className="label-text">Email address:</label>
                                                    <input type="text" className="form-control" placeholder="Email address"/>
                                                </div>
                                                <div className="col-md-6 mb-3">
                                                    <label className="label-text">Select Position:</label>
                                                    <select className="form-control">
                                                        <option> Option 1</option>
                                                        <option> Option 1</option>
                                                        <option> Option 1</option>
                                                        <option> Option 1</option>
                                                        <option> Option 1</option>
                                                    </select>
                                                </div>
                                                <div className="col-md-6 mb-4">
                                                    <label className="label-text">Current CTC:</label>
                                                    <input type="text" className="form-control" placeholder="Enter Current CTC"/>
                                                </div>
                                                <div className="col-md-6 mb-4">
                                                    <label className="label-text">Expected CTC:</label>
                                                    <input type="text" className="form-control" placeholder="Enter Expected CTC"/>
                                                </div>
                                                <div className="col-md-12  mb-0">
                                                    <label className="label-text">Resume Upload:</label>
                                                    <div className="input-group ">
                                                        <input type="text" className="form-control" placeholder="Upload only pdf, docx, doc and Max file size: up to 3 MB" readOnly=""/>
                                                                                                                <label className="input-group-btn">
                                                            <span className="btn btn-outline-secondary">
                                                               Browse<input type="file" className="d-none" multiple=""/>
                                                            </span>
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="col-md-12  mb-3 ">
                                                    <button className="btn btn-default border-0">Submit</button>
                                                </div>
                                            </div>
                                        </form>
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
