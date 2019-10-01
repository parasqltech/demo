import React, {Component} from "react"
import { graphql,Link } from "gatsby"
import PropTypes from "prop-types"
import Layout from '../components/Layout'
import Lightbox from '../components/Lightbox'
import Particles from 'react-particles-js';
import about from '../img/about-us.png';
import quote from  "../img/quote.png"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Helmet from 'react-helmet'

const settings = {
      dots: false,
	  prevArrow: false,
	  nextArrow: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
	  autoplay: true,
	  autoplaySpeed: 2000,
      
    };


class Singleservice extends Component {
  render() {
    const service = this.props.data.allWordpressWpServices
    const subservice = this.props.data.allWordpressWpSubservices
	console.log(subservice);
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
            <div className="main-panel text-center">
                <div className="row justify-content-center">
                    <div className="col-xl-9 col-lg-10">
						<div className="event-section-1">
							<div className="blank-section">
                        		<p className="label-text" dangerouslySetInnerHTML={{ __html: service.edges[0].node.content}}  ></p>
							</div>
						</div>
                    </div>
                </div>
				
				<div className="row justify-content-center">
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
												<h3 className="thumbnial-title">{prop.node.title} </h3>
												<p className="label-text">
												   {prop.node.acf.short_description}
												</p>
												
												<Slider {...settings} className="sub-service" >
													{
												prop.node.acf.service_slider &&
												prop.node.acf.service_slider.map(
												propd => {
													return (
														<Link to={"services/"+propd.slider_url} class="thumbnial-icon d-inline"  title={propd.slider_title}>
															{(propd.slider_image != null) ? (<img src={propd.slider_image.source_url} class="img-fluid" alt=""/>) : ('') }
														
														</Link>
													)
												}
												)}
													
													
													
												</Slider>
												
												
												
												
												
												<div className="clear-fix py-4">
													<a href="#" className="btn btn-secondary-link  float-left">Schedule a call <i className="fa fa-long-arrow-right ml-1"></i></a>
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
	{(service.edges[0].node.acf.about_image != null) ? (<section className="home-about-section bg-white">
        <div className="container">
            <div className="about-mockup-bg  wow fadeIn">
                <img src={(service.edges[0].node.acf.about_image != null) ? service.edges[0].node.acf.about_image.source_url : ''} className="img-fluid about-us-image" alt=""/>
            </div>
			
            <div className="row justify-content-end">
                <div className="col-md-7 col-lg-6 col-sm-12 ">
                    <div className="about-content xs-center sm-center wow fadeInUp">
                        <h4 className="sub-heading ">About us</h4>
                        <h3 className="section-heading" dangerouslySetInnerHTML={{ __html: service.edges[0].node.acf.title}} ></h3>
                        <p className="label-text" dangerouslySetInnerHTML={{ __html: service.edges[0].node.acf.description}} ></p>
                        <div className="play-button">
                            <span data-video-id="" className="video-area-popup">

                                <i className="fa fa-play"></i></span>
                            <span>Check How we work together</span>
                        </div>
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
                                <p className="label-text" dangerouslySetInnerHTML={{ __html: service.edges[0].node.acf.testimonial_}} ></p>
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
	 
	
	 <section className="home-about-section pt-4 pb-4 bg-white">
        <div className="container">
           
            <div className="row justify-content-start">
                <div className="col-md-12">
                    <div className="about-content xs-center sm-center wow fadeInUp">
                        <span className="sub-heading text-center d-block mb-0">FAQ</span>
                        <h3 className="section-heading text-center">We develop digital strategies products and services.</h3>
                         <div id="accordion" className="faq-section">
                                
								{service.edges[0].node.acf.faq &&
									service.edges[0].node.acf.faq.map(
									(prop,i) => {
									return (
										<div key={i} className="card">
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
                    <form method="POST" action="https://script.google.com/macros/s/AKfycby6PzAC31YbZItcHbE2EK-YbdyR_L9uTNEBGgSo1EgR4YIltUZX/exec" >
							<div className="row justify-content-center">
								<div className="col-lg-8 col-md-10">
									 <div className="row">
										<div className="col-md-6 mb-4">
											<label className="label-text">First Name :</label>
											<input type="text" className="form-control" placeholder="first name" name="first_name" required/>
										</div>
										<div className="col-md-6 mb-4">
											<label className="label-text">Last Name :</label>
											<input type="text" className="form-control" placeholder="last name" name="last_name" required/>
										</div>
										<div className="col-md-12 mb-4">
											<label className="label-text">Email :</label>
											<input type="email" className="form-control" placeholder="email" name="email" required/>
										</div>
										<div className="col-md-12 mb-4">
											<label className="label-text">Number :</label>
											<input type="number" className="form-control" placeholder="Number" name="number" required/>
										</div>
										<div className="col-md-12">
											<label className="label-text">Message:</label>
											<textarea rows="3" className="form-control" placeholder="Message" name="message" required></textarea>
										</div>
										<input type="hidden" required className="form-control" name="url" value={service.edges[0].node.slug} />
										<input type="hidden" required className="form-control" name="form_name" value="Contact-us" />
										<div className="col-md-12  mb-4 ">
										<button type="submit" className="btn-default border-0" value="Submit">Submit</button>
											
										</div>
									</div>
								</div>
							</div>
						   
						</form>
                </div>
            </div>
    </section>
	
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
  query($id: String!,$catslug: String!) {
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
					source_url
				}
				short_description
				service_slider {
					slider_image{
						source_url
					}
					slider_title
					slider_url
				}
				}
			}
		}	
	}
	
  }
  
`