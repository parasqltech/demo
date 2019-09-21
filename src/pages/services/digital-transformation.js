import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import Layout from '../../components/Layout'
import Particles from 'react-particles-js';

import quote from '../../img/quote.png';
import about from '../../img/about-us.png';




const transfomation = () => (
  <StaticQuery
    query={graphql`
      query {
        allWordpressWpServices(filter: {wordpress_id: {eq: 563}}) {
    edges {
      node {
        id
        title
        content
        acf {
          client_name
          description
          designationcompany
          testimonial_
          title
          about_image {
            source_url
          }
          image {
            source_url
          }
          faq {
            question
            answer
          }
        }
      }
    }
  }
      }
    `}
    render={data => (
		<Layout>
			<div className="bg">
					<div className="area-bg">
						 <Particles params={{"particles": {"number": {"value": 50,"density": {"enable": true,"value_area": 800}},"color": {"value": ["#FE395F", "#54DBF0", "#ad7cff", "#48d6ee"]},"shape": {"type": "polygon","stroke": {"width": 0,"color": "#000000",},"polygon": {"nb_sides": 10,},"image": {"src": "img/github.svg","width": 100,"height": 100}},"opacity": {"value": 0.2,"random": false,"anim": {"enable": false,"speed": 1,"opacity_min": 0.1,"sync": false}},"size": {"value": 5,"random": true,"anim": {"enable": false,"speed": 40,"size_min": 0.1,"sync": false}},"line_linked": {"enable": true,"distance": 150,"color": "#ffffff","opacity": 0.4,"width": 1},"move": {"enable": true,"speed": 6,"direction": "none","random": false,"straight": false,"out_mode": "out","bounce": false,"attract": {"enable": false,"rotateX": 600,"rotateY": 1200}}},"interactivity": {"detect_on": "canvas","events": {"onhover": {"enable": true,"mode": "grab"},"onclick": {"enable": true,"mode": "push"},"resize": true},"modes": {"grab": {"distance": 140,"line_linked": {"opacity": 1}},"bubble": {"distance": 400,"size": 40,"duration": 2,"opacity": 8,"speed": 3},"repulse": {"distance": 200,"duration": 0.4},"push": {"particles_nb": 4},"remove": {"particles_nb": 2}}},"retina_detect": true}} />
					</div>
				</div>
				<section className="breadcumbs-and-title-section">
					 <div className="container">
						<div className="breadcumbs-icon">
							<span className="icon-collection-1"></span>
							<span className="icon-collection-2"></span>
							<span className="icon-collection-3"></span>
						</div>
					</div>
					<div className="container text-center">
						
						
						<h1 className="section-heading" dangerouslySetInnerHTML={{ __html: data.allWordpressWpServices.edges[0].node.title}} >
						
						</h1>
						<ul className="breadcrumbs">
							<li> <Link to="/">Home</Link> \</li>
							<li> Services</li>
						</ul>
					</div>
			</section>
			<section className="home-services-section service-section-1 ">
         <div className="section-icons">
            
            <div className="icon-one" ></div>
            
            <div className="icon-two " ></div>
            
            <div className="icon-three " ></div>
        </div>
        <div className="container bg-white">
            <div className="main-panel text-center">
                <div className="row justify-content-center">
                    <div className="col-xl-9 col-lg-10">
                        <p className="label-text" dangerouslySetInnerHTML={{ __html: data.allWordpressWpServices.edges[0].node.content}}  ></p>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-xl-11">
                        <div className="row text-left ">
                   
                    <div className="col-md-6 services-block services-block-1">
                        <div className="thumbnial">
                            <div className="thumbnial-icon text-secondary">
                                <span className="icon flaticon-profits"></span>
                            </div>
                            <h3 className="thumbnial-title">Service Title </h3>
                            <p className="label-text">
                                Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
                                Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.




                            </p>
                            <div className="sub-service owl-carousel ">
                                 <div className="thumbnial-icon d-inline">
                                    <span className="icon flaticon-profits"></span>
                                </div>
                                <div className="thumbnial-icon d-inline">
                                    <span className="icon flaticon-profits"></span>
                                </div>
                                <div className="thumbnial-icon d-inline">
                                    <span className="icon flaticon-profits"></span>
                                </div>
                                <div className="thumbnial-icon d-inline">
                                    <span className="icon flaticon-profits"></span>
                                </div>
                                <div className="thumbnial-icon d-inline">
                                    <span className="icon flaticon-profits"></span>
                                </div>
                            </div>
                           
                            <div className="clear-fix py-4">
                                <a href="#" className="btn btn-secondary-link  float-left">Schedule a call <i className="fa fa-long-arrow-right ml-1"></i></a>
                                
                            </div>
                           
                        </div>
                    </div>
                    <div className="col-md-6 services-block services-block-2">
                        <div className="thumbnial">
                            <div className="thumbnial-icon text-secondary">
                                <span className="icon flaticon-profits"></span>
                            </div>
                            <h3 className="thumbnial-title">Service Title </h3>
                            <p className="label-text">
                                Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
                                Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
                            </p>
                            <div className="sub-service owl-carousel">
                                 <div className="thumbnial-icon d-inline">
                                    <span className="icon flaticon-profits"></span>
                                </div>
                                <div className="thumbnial-icon d-inline">
                                    <span className="icon flaticon-profits"></span>
                                </div>
                                <div className="thumbnial-icon d-inline">
                                    <span className="icon flaticon-profits"></span>
                                </div>
                                <div className="thumbnial-icon d-inline">
                                    <span className="icon flaticon-profits"></span>
                                </div>
                                <div className="thumbnial-icon d-inline">
                                    <span className="icon flaticon-profits"></span>
                                </div>
                            </div>
                            
                            <div className="clear-fix py-4">
                                <a href="#" className="btn btn-secondary-link  float-left">Schedule a call <i className="fa fa-long-arrow-right ml-1"></i></a>
                                
                            </div>
                           
                        </div>
                    </div>
                    <div className="col-md-6 services-block services-block-3">
                        <div className="thumbnial">
                            <div className="thumbnial-icon text-secondary">
                                <span className="icon flaticon-profits"></span>
                            </div>
                            <h3 className="thumbnial-title">Service Title </h3>
                            <p className="label-text">
                                Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
                                Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
                            </p>
                            <div className="sub-service owl-carousel">
                                 <div className="thumbnial-icon d-inline">
                                    <span className="icon flaticon-profits"></span>
                                </div>
                                <div className="thumbnial-icon d-inline">
                                    <span className="icon flaticon-profits"></span>
                                </div>
                                <div className="thumbnial-icon d-inline">
                                    <span className="icon flaticon-profits"></span>
                                </div>
                                <div className="thumbnial-icon d-inline">
                                    <span className="icon flaticon-profits"></span>
                                </div>
                                <div className="thumbnial-icon d-inline">
                                    <span className="icon flaticon-profits"></span>
                                </div>
                            </div>
                           
                            <div className="clear-fix py-4">
                                <a href="#" className="btn btn-secondary-link  float-left">Schedule a call <i className="fa fa-long-arrow-right ml-1"></i></a>
                            </div>
                        </div>          
                    </div>
                </div>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
	 <section className="home-about-section bg-white">
        <div className="container">
            <div className="about-mockup-bg  wow fadeIn">
                <img src={data.allWordpressWpServices.edges[0].node.acf.about_image.source_url} className="img-fluid about-us-image" alt=""/>
            </div>

            <div className="row justify-content-end">
                <div className="col-md-7 col-lg-6 col-sm-12 ">
                    <div className="about-content xs-center sm-center wow fadeInUp">
                        <h4 className="sub-heading ">About us</h4>
                        <h3 className="section-heading" dangerouslySetInnerHTML={{ __html: data.allWordpressWpServices.edges[0].node.acf.title}} ></h3>
                        <p className="label-text" dangerouslySetInnerHTML={{ __html: data.allWordpressWpServices.edges[0].node.acf.description}} ></p>
                        <div className="play-button">
                            <span data-video-id="" className="video-area-popup">

                                <i className="fa fa-play"></i></span>
                            <span>Check How we work together</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
    </section>
	<section className="home-testimonial-section">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8 ">
                    <span className="section-subheading-heading">Testimonial</span> 
                    <h2 className="section-heading text-center wow fadeIn">
                        Our customers loves us
                    </h2>
                </div>
            </div>
        </div>
        
        <div className="testiomonial-slider ">
            <div className="customer-testimonial-block">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-6 col-md-4 col-sm-4 col-6">
                            <div className="author-image">
                                <img src={data.allWordpressWpServices.edges[0].node.acf.image.source_url} className="img-fluid" alt=""/>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-8 col-sm-8">
                            <div className="author-content">
                                <div className="quote">
                                    <img src={quote} className="img-fluid" alt=""/>
                                </div>
                                <p className="label-text" dangerouslySetInnerHTML={{ __html: data.allWordpressWpServices.edges[0].node.acf.testimonial_}} ></p>
                                <div className="author-info">
                                    <h4 dangerouslySetInnerHTML={{ __html: data.allWordpressWpServices.edges[0].node.acf.client_name}} ></h4>
                                    <p dangerouslySetInnerHTML={{ __html: data.allWordpressWpServices.edges[0].node.acf.designationcompany}} ></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
	<section className="home-about-section pt-4 bg-white">
        <div className="container">
           
            <div className="row justify-content-start">
                <div className="col-md-7 col-lg-6  col-md-12 col-sm-12 ">
                    <div className="about-content xs-center sm-center wow fadeInUp">
                        <h4 className="sub-heading ">FAQ</h4>
                        <h3 className="section-heading">We develop digital strategies products and services.</h3>
                        <div id="accordion" className="faq-section">
                                
								{data.allWordpressWpServices.edges[0].node.acf.faq.map(
									(prop,i) => {
									return (
										<div className="card">
										<div className="card-header collapsed bg-white row  m-0" data-toggle="collapse" href={"#faq"+i} role="tab">
											<span className="toggle-icon"></span> {prop.question}
										</div>
										<div id={"faq"+i} className="collapse" role="tabpanel" data-parent="#accordion" >
											<div className="card-body">
												<p className="label-text">
													{prop.answer}
												</p>
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
            <div className="about-mockup-bg  wow fadeIn text-center">
                <img src={about} className="img-fluid about-us-image-2" alt=""/>
            </div>
        </div>
       
    </section>
	<section className="form-section mt-4 ">
            <div className="container  bg-white">
                <div className="row justify-content-center">
                    <div className="col-md-10">
                        <h2 className="section-heading text-center wow fadeIn mb-2">
                            Let us know how we can help
                        </h2>

                    </div>
                </div>
                <div className="main-panel">
                    <form method="POST" action="">
                        <div className="row justify-content-center">
                            <div className="col-lg-8 col-md-10">
                                 <div className="row">
                                    <div className="col-md-6 mb-4">
                                        <label className="label-text">First Name<sup>*</sup></label>
                                        <input type="text" className="form-control" placeholder=""/>
                                    </div>
                                    <div className="col-md-6 mb-4">
                                            <label className="label-text">Last Name<sup>*</sup></label>
                                        <input type="text" className="form-control" placeholder=""/>
                                    </div>
                                    <div className="col-md-12 mb-4">
                                        <label className="label-text">Email<sup>*</sup></label>
                                        <input type="text" className="form-control" placeholder=""/>
                                    </div>
                                    <div className="col-md-12 mb-4">
                                        <label className="label-text">Phone Number<sup>*</sup></label>
                                        <input type="text" className="form-control" placeholder=""/>
                                    </div>
                                   
                                    <div className="col-md-12">
                                        <label className="label-text">Your Goal:</label>
                                        <textarea rows="4" className="form-control" placeholder=""></textarea>
                                    </div>
                                
                                    <div className="col-md-12  mb-4 text-right">
                                        <button className="btn btn-default border-0">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                    </form>
                </div>
            </div>
    </section>
	
		</Layout>
    )}
  />
)

export default transfomation
