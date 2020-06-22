import React, {Component} from "react"
import { graphql,Link } from "gatsby"
import PropTypes from "prop-types"
import Layout from '../components/Layout'
import Lightbox from '../components/Lightbox'
import ContactService from '../components/Contact/ContactService'
import Particles from 'react-particles-js';
import about from '../img/about-us.png';
import quote from  "../img/quote.png"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Helmet from 'react-helmet'
import ReactModal from 'react-modal'
const settings = {
      dots: false,
	  prevArrow: false,
	  nextArrow: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
	  autoplay: true,
	  autoplaySpeed: 2000,
	  mobileFirst: true,
      
    };


class Singleservice extends Component {
	 constructor(props) {
      super(props);
      this.state = {
        isModalOpen: false,
        testimonial_img: "",
        testimonial_name: "",
        testimonial_designation: "",
        testimonial_text: "",
        show: "d-block",
      }
    }
	 handleModalOpen = (img,name,des,desc) => {
        this.setState({ isModalOpen: true,testimonial_img:img,testimonial_name:name,testimonial_designation:des,testimonial_text:desc })
		
    }

    handleModalClose = event => {
		this.setState({ isModalOpen: false })
    }
	
  render() {
    const service = this.props.data.allWordpressWpServices
    const subservice = this.props.data.allWordpressWpSubservices
	const works = this.props.data.allWordpressWpWorks
	const faq = service.edges[0].node.acf.faq;
	var flag = 0;
	faq.map(function(item){
		if(item.question == ""){
			flag = 1;
		}
	}, this)
	
	
	
	
    return (
      <Layout>
	  <Helmet>
			<title>{service.edges[0].node.yoast.title} - QL Tech</title>
			<meta name="title" content={service.edges[0].node.yoast.title}></meta>
			<meta name="description" content={service.edges[0].node.yoast.metadesc}></meta>
			 <meta name="keywords" content={service.edges[0].node.yoast.metakeywords}></meta>
			<meta property="og:type" content="website"></meta>
			<meta property="og:title" content={service.edges[0].node.yoast.opengraph_title}></meta>
			<meta property="og:description" content={service.edges[0].node.yoast.opengraph_description}></meta>
			<meta property="twitter:card" content="summary_large_image"></meta>
			<meta property="twitter:title" content={service.edges[0].node.yoast.title}></meta>
			<meta property="twitter:description" content={service.edges[0].node.yoast.twitter_description}></meta>
			</Helmet>
			<div className="bg">
					<div className="area-bg">
						 <Particles params={{"particles": {"number": {"value": 80,"density": {"enable": true,"value_area": 1600}},"color": {"value": ["#fd8788", "#f1aea6", "#21a6df", "#75d3ff"]},"shape": {"type": "circle","stroke": {"width": 0,"color": "#000000",},"polygon": {"nb_sides": 5,},"image": {"src": "img/github.svg","width": 100,"height": 100}},"opacity": {"value": 0.4489553770423464,"random": false,"anim": {"enable": false,"speed": 40,"opacity_min": 0.1,"sync": false}},"size": {"value": 5,"random": true,"anim": {"enable": false,"speed": 40,"size_min": 0.1,"sync": false}},"line_linked": {"enable": true,"distance": 150,"color": "#ffffff","opacity": 0.4,"width": 1},"move": {"enable": true,"speed": 6,"direction": "none","random": false,"straight": false,"out_mode": "out","bounce": false,"attract": {"enable": false,"rotateX": 600,"rotateY": 1200}}},"interactivity": {"detect_on": "canvas","events": {"onhover": {"enable": true,"mode": "grab"},"onclick": {"enable": true,"mode": "push"},"resize": true},"modes": {"grab": {"distance": 140,"line_linked": {"opacity": 1}},"bubble": {"distance": 400,"size": 40,"duration": 2,"opacity": 8,"speed": 3},"repulse": {"distance": 200,"duration": 0.4},"push": {"particles_nb": 4},"remove": {"particles_nb": 2}}},"retina_detect": true}} />
					</div>
				</div>
				<section className="breadcumbs-and-title-section">
					 
					<div className="container text-center">
						
						<span className="section-subheading-heading">Services</span>
						<h1 className="section-heading" dangerouslySetInnerHTML={{ __html: service.edges[0].node.title}} >
						
						</h1>
						<ul className="breadcrumbs">
							<li> <Link to="/">Home</Link> \</li>
							<li> Services</li>
						</ul>
					</div>
			</section>
			<section className="home-services-section service-section-1 ">
        
        <div className="container bg-white">
            <div className="main-panel">
                <div className="row justify-content-center">
                    <div className="col-xl-9 col-lg-10">
						<div className="event-section-1">
							<div className="blank-section" >
                        		<div dangerouslySetInnerHTML={{ __html: service.edges[0].node.content}}  ></div>
							</div>
						</div>
                    </div>
                </div>
				
				<div className="row justify-content-center mt-4">
                    <div className="col-xl-11">
                        <div className="row text-left">
							{subservice &&
								subservice.edges.map(
									(prop,i) => {
									return (
										<div key={i} className="col-md-6 services-block ">
											<div className="thumbnail">
												<div className="thumbnial-icon text-secondary">
												   
												   
												   {(prop.node.acf.icon != null) ? (<img src={prop.node.acf.icon.source_url} className="img-fluid" alt=""/>) : ('')}
												   
												   
												</div>
												
												<h3 className="thumbnial-title" dangerouslySetInnerHTML={{ __html: prop.node.title}}/>
												<div className="label-text stext"  dangerouslySetInnerHTML={{ __html: prop.node.acf.short_description}} >
												   
												</div>
												
												{(prop.node.acf.service_slider.length >= 4) ? (<Slider {...settings} className="trusted-by-slider" >
													{
														prop.node.acf.service_slider &&
														prop.node.acf.service_slider.map(
														propd => {
															return (
																<>
																{(propd.slider_title != null) ? (<>
																{(propd.slider_image != null) ? (<Link to={"/services/"+propd.slider_url+"/"}  title={propd.slider_title}><img src={propd.slider_image.source_url} className="img-fluid" alt="" /></Link>) : ('')}
																</>) : ('')}
																
																</>
																
																
																)
															}
														)}
												</Slider>) : (<div className="trusted-by-slider-1">{
														prop.node.acf.service_slider &&
														prop.node.acf.service_slider.map(
														propd => {
															return (
																<>
																{(propd.slider_title != null) ? (<>
																{(propd.slider_image != null) ? (<Link to={"/services/"+propd.slider_url+"/"}  title={propd.slider_title}><img src={propd.slider_image.source_url} className="img-fluid" alt="" /></Link>) : ('')}
																</>) : ('')}
																
																</>
																
																
																)
															}
														)}</div>)}
												
												
												
												     
												
												
												
												
												<div className="clear-fix py-4">
													<Link to="/schedule-a-call/" className="btn btn-secondary-link  float-left">Schedule a call <i className="fa fa-long-arrow-right ml-1"></i></Link>
													
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
    </section>
	{(service.edges[0].node.acf.about_image != null) ? (<section className="home-about-section home-about-section-1 bg-white"  >
        <div className="container">
           
            <div className="row justify-content-end">
			<div className="col-md-5 col-lg-6 col-sm-12 text-center">
				<img src={(service.edges[0].node.acf.about_image != null) ? service.edges[0].node.acf.about_image.source_url : ''} className="img-fluid d-inline" alt=""/>
			</div>
                <div className="col-md-7 col-lg-6 col-sm-12 ">
                    <div className="about-content xs-center sm-center wow fadeInUp">
                       
                        <h3 className="section-heading" dangerouslySetInnerHTML={{ __html: service.edges[0].node.acf.title}} ></h3>
                        <div className="label-text" dangerouslySetInnerHTML={{ __html: service.edges[0].node.acf.description}} ></div>
                        
                    </div>
                </div>
            </div>
        </div>
       
    </section>):('')}
	
	
	{(service.edges[0].node.acf.image != null) ? (<section className="home-testimonial-section">
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
                                <img src={(service.edges[0].node.acf.image != null) ? service.edges[0].node.acf.image.source_url : ''} className="img-fluid" alt=""/>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-8 col-sm-8">
                            <div className="author-content">
                                <div className="quote">
                                    <img src={quote} className="img-fluid" alt=""/>
                                </div>
                                
								
										<span>{(service.edges[0].node.acf.testimonial_).substring(0, 400)}</span>
                                              {(service.edges[0].node.acf.testimonial_.length  > 400 ? (<span>...<a href="javascript:;" className="readmore" onClick={() => this.handleModalOpen(service.edges[0].node.acf.image.source_url,service.edges[0].node.acf.client_name,service.edges[0].node.acf.designationcompany,service.edges[0].node.acf.testimonial_)}>Read More</a></span>):(''))}
								
								
								
                                <div className="author-info">
                                    <h4 dangerouslySetInnerHTML={{ __html: service.edges[0].node.acf.client_name}} ></h4>
                                    <p dangerouslySetInnerHTML={{ __html: service.edges[0].node.acf.designationcompany}} ></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>):('')}
	 <section className="home-work-section home-work-section-details pt-4  ">
        
        <div className="container bg-white">
               
            <div className="row">
                <div className="col-md-12">
                    
                        <span className="section-subheading-heading">Our Success</span> 
                        <h2 className="section-heading text-center wow fadeIn" >
                            See it in Action
                        </h2>
                    <div className=" pt-0">
                        <div className="home-portfolio-slider-1 wow  animated" >
                            <div className="row">
							{
							works &&
							works.edges.map(
							prop => {
								return (
                                <div className="col-md-4">
                                   <div className="work-thumbnial">
                                       <div className="work-thumbnail-image">
                                           <img src={prop.node.acf.main_image.source_url} className="img-fluid" alt=""/>
                                       </div>
                                       <div className="work-thumbnail-details">
                                           <p className="work-title" dangerouslySetInnerHTML={{ __html: prop.node.acf.title }}  ></p>
                                           <p className="label-text">{prop.node.acf.short_descprition}</p>
                                           <Link to={"/work/"+prop.node.slug+"/"} className="btn btn-secondary-link">Read More <i className="fa fa-long-arrow-right ml-1"></i></Link>
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
	{(service.edges[0].node.acf.faq != null) ? (<section className={(flag == 1) ? ('home-about-section pt-4 pb-4 bg-white d-none') : ('home-about-section pt-4 pb-4 bg-white')}  >
        <div className="container">
           
            <div className="row justify-content-start">
                <div className="col-md-12">
                    <div className="about-content xs-center sm-center wow fadeInUp">
                        <span className="sub-heading text-center d-block mb-0">FAQs</span>
                       
                        <div id="accordion" className="faq-section mt-4">
                                
								{service.edges[0].node.acf.faq &&
									service.edges[0].node.acf.faq.map(
									(prop,i) => {
									return (
										<>
										{(prop.question != "") ? (<div key={i} className="card">
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
									</div>) : ('')}
										</>
										
									)
								}
								)}
								
								
								
								
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        
    </section>) : ('')}
	 
	
	<section className="form-section mt-4 ">
            <div className="container  bg-white">
                <div className="row justify-content-center">
                    <div className="col-md-10">
					<span className=" sub-heading d-block mb-2 text-center mb-2" >Contact Us</span>
                        <h2 className="section-heading text-center wow fadeIn mb-2">
                            Let us know how we can help
                        </h2>

                    </div>
                </div>
                <div className="main-panel">
					<ContactService url={"services/"+service.edges[0].node.slug} />
                </div>
            </div>
    </section>
	<ReactModal  
          isOpen={this.state.isModalOpen}
          onRequestClose={this.handleModalClose}
            className="modal d-block fade testimonial-view show"
        >
            <div class="modal-dialog modal-dialog-centered modal-lg " tabindex="-1" role="dialog">
          <div class="modal-content " >
              <button type="button" class="close btn-default" onClick={this.handleModalClose} data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
        
            <div class="modal-body p-4">
                <div class="row justify-content-center">
                    
                    <div class="col-xl-12">
                        <div class="author-content">
                            <div class="quote">
                                <img src={quote} class="img-fluid" alt=""/>
                            </div>
                            <p class="label-text testimonialDetail"></p>
                            <div class="author-info">
                                <div className="author-content">
                                         
                                          <p className="label-text">
                                              <span>{this.state.testimonial_text}</span>
                                          </p>
										  <div className="author-details-block">
											<div className="author-image text-center">
												<img src={this.state.testimonial_img} className="img-fluid d-inline" alt={this.state.testimonial_name} />
											</div>
											 <div className="author-info">

												
                                              <h4>{this.state.testimonial_name}</h4>
                                              <p>{this.state.testimonial_designation}</p>
                                          </div>
										  
										  </div>
                                         
                                      </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          
          </div>
        </div>
       
          
      
      
        </ReactModal>
		</Layout>
		
    )
  }
}

Singleservice.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default Singleservice

export const pageQuery = graphql`
  query($id: String!,$catslug: String!,$casestudyids_new: [Int]) {
    allWordpressWpServices(filter: {id: { eq: $id }}) {
		edges {
      node {
        id
        title
        content
		slug
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
		yoast {
				focuskw
				linkdex
				meta_robots_adv
				meta_robots_nofollow
				meta_robots_noindex
				metadesc
				metakeywords
				opengraph_description
				opengraph_image
				opengraph_title
				redirect
				title
				twitter_description
				twitter_image
			  }
      }
    }
    }
	allWordpressWpSubservices(filter: {categories: {elemMatch: {slug: {regex: $catslug}}}}){
		edges {
			node {
				id
				title
				acf{
					icon{
						id
						source_url
					}
				short_description
				service_slider {
            slider_title
            slider_url
            slider_image {
              id
              source_url
            }
          }
				
				}
			}
		}	
	}
	allWordpressWpWorks(filter: {wordpress_id: {in: $casestudyids_new}},sort: {fields: wordpress_id, order: ASC}) {
    edges {
      node {
				title
				slug
				acf{
					title
					short_descprition
					main_image {
                                source_url
                                link
                              }
				}
				
		}
    }
  }
	
  }
  
`