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
                                                        <p className=" label-text d-inline  exp-loc-text  ">Loaction </p>
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
                                                        <a href="javascript:;" className="apply apply-btn">{prop.node.acf.button_name} </a>
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
                                        <h2 className="section-heading-2 d-block text-center">Are you Ready?</h2>
                                        <form method="post" action="https://script.google.com/macros/s/AKfycbwcE57k_MU__-34meqARCcZLmpXf0TDZr51E4_S0WsyGZ54g4uj/exec" enctype="multipart/form-data">
                                            <div className="row ">
                                                <div className="col-md-6 mb-4">
                                            <label className="label-text">First Name</label>
                                            <input type="text" className="form-control" placeholder="" name="first_name" required/>
                                        </div>
                                        <div className="col-md-6 mb-4">
                                            <label className="label-text">Last Name</label>
                                            <input type="text" className="form-control" placeholder="" name="last_name" required/>
                                        </div>
                                                <div className="col-md-12 mb-3">
                                                    <label className="label-text">Email</label>
                                                    <input type="email" name="email" required="" className="form-control" placeholder="" required />
                                                </div>
                                                <div className="col-md-12 mb-3">
                                                    <label className="label-text">Select Position</label>
                                                    <select className="form-control" name="position" required>
                                                        <option value="">Please Select</option>
                                                        <option value="Jr. PHP Developer">Jr. PHP Developer</option>
                                                        <option value="UI/UX Designer">UI/UX Designer</option>
                                                        <option value="HR Executive">HR Executive</option>
                                                        <option value="SEO Executive">SEO Executive</option>
                                                        <option value="Sr. Magento Developer">Sr. Magento Developer</option>
                                                        <option value="Content Writer">Content Writer</option>
                                                        <option value="Graphic Designer">Graphic Designer</option>
                                                        <option value="Junior WordPress Developer">Junior WordPress Developer</option>
                                                        <option value="Jr. iOS Developer">Jr. iOS Developer</option>
                                                        <option value="Sr. Android Developer">Sr. Android Developer</option>
                                                        <option value="Programmer / Developer">Programmer / Developer</option>
                                                        <option value="Customer Service Representative">Customer Service Representative</option>
                                                        <option value="Strategic Account Manager">Strategic Account Manager</option>
                                                    </select>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="row">
                                                        <div className="col-xl-6 col-lg-12 col-md-6  col-sm-6 mb-4">
                                                            <label className="label-text">Current CTC</label>
                                                            <input type="number" name="CCTC" required className="form-control" placeholder=""/>
                                                        </div>
                                                        <div className="col-xl-6 col-lg-12 col-md-6  col-sm-6 mb-4">
                                                            <label className="label-text">Expected CTC</label>
                                                            <input type="number" name="ECTC" required className="form-control" placeholder=""/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-12  mb-0">
                                                    <label className="label-text">Resume Upload</label>
                                                    <div className="input-group ">
                                                        <input type="text"  className="form-control" placeholder="Upload only pdf, docx, doc and Max file size: up to 3 MB" readOnly=""/>
                                                                                                                <label className="input-group-btn">
                                                            <span className="btn btn-outline-secondary">
                                                                Browse<input type="file" className="d-none" required multiple="" name="resume"/>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
                                                            </span>
                                                        </label>
                                                    </div>
                                                </div>
                                                <input type="hidden" className="form-control" placeholder="Enter your name" name="url" value="/career" />
                                        <input type="hidden" className="form-control" name="form_name" value="Career" />
                                                <div className="col-md-12  mb-3 ">
                                                    <button type="submit" className="btn-default border-0" value="Submit">Submit</button>
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
