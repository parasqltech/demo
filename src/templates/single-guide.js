import React, {Component} from "react"
import { graphql,Link } from "gatsby"
import PropTypes from "prop-types"
import Layout from '../components/Layout'
import Lightbox from '../components/Lightbox'
import ContactGuide from '../components/Contact/ContactGuide'
import Particles from 'react-particles-js';
import about from '../img/about-us.png';
import quote from  "../img/quote.png"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Tilt from 'react-tilt'
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


class Singleguide extends Component {
  render() {
    const blog = this.props.data.allWordpressWpGuide
	
   
   
    return (
      <Layout>
		<Helmet>
			<title>{blog.edges[0].node.yoast.title} - QL Tech</title>
			<meta name="title" content={blog.edges[0].node.yoast.title}></meta>
			<meta name="description" content={blog.edges[0].node.yoast.metadesc}></meta>
			 <meta name="keywords" content={blog.edges[0].node.yoast.metakeywords}></meta>
			<meta property="og:type" content="website"></meta>
			<meta property="og:title" content={blog.edges[0].node.yoast.opengraph_title}></meta>
			<meta property="og:description" content={blog.edges[0].node.yoast.opengraph_description}></meta>
			<meta property="twitter:card" content="summary_large_image"></meta>
			<meta property="twitter:title" content={blog.edges[0].node.yoast.title}></meta>
			<meta property="twitter:description" content={blog.edges[0].node.yoast.twitter_description}></meta>
			</Helmet>
			<div className="bg">
					<div className="area-bg">
						 <Particles params={{"particles": {"number": {"value": 80,"density": {"enable": true,"value_area": 1600}},"color": {"value": ["#fd8788", "#f1aea6", "#21a6df", "#75d3ff"]},"shape": {"type": "circle","stroke": {"width": 0,"color": "#000000",},"polygon": {"nb_sides": 5,},"image": {"src": "img/github.svg","width": 100,"height": 100}},"opacity": {"value": 0.4489553770423464,"random": false,"anim": {"enable": false,"speed": 40,"opacity_min": 0.1,"sync": false}},"size": {"value": 5,"random": true,"anim": {"enable": false,"speed": 40,"size_min": 0.1,"sync": false}},"line_linked": {"enable": true,"distance": 150,"color": "#ffffff","opacity": 0.4,"width": 1},"move": {"enable": true,"speed": 6,"direction": "none","random": false,"straight": false,"out_mode": "out","bounce": false,"attract": {"enable": false,"rotateX": 600,"rotateY": 1200}}},"interactivity": {"detect_on": "canvas","events": {"onhover": {"enable": true,"mode": "grab"},"onclick": {"enable": true,"mode": "push"},"resize": true},"modes": {"grab": {"distance": 140,"line_linked": {"opacity": 1}},"bubble": {"distance": 400,"size": 40,"duration": 2,"opacity": 8,"speed": 3},"repulse": {"distance": 200,"duration": 0.4},"push": {"particles_nb": 4},"remove": {"particles_nb": 2}}},"retina_detect": true}} />
					</div>
				</div>
				<section className="events-section-1 article-section-1 blog-section pt-0">
       <div className="container bg-white">
           <div className="main-panel">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="event-detail-continer ">
                            <h1 className="section-heading mb-2"dangerouslySetInnerHTML={{ __html: blog.edges[0].node.title}} ></h1>
                           
                            <div className="event-image">
                              {(blog.edges[0].node.acf.feature_image != null) ? ( <img src={blog.edges[0].node.acf.feature_image.source_url} className="img-fluid w-100" alt=""/>) : ('')}
                            </div>
                           
                            
                        </div>
						<div className="event-content-block" dangerouslySetInnerHTML={{ __html: blog.edges[0].node.content}} >
						</div> 
                        
                        
                        
                        
                        </div>
                   <div className="col-md-4">
							<div className="sidebar bg-light">
                            <div className="sidebar-widget guideform">
                                <p className="section-heading-2 text-center">Download now</p>
                                 
								 <ContactGuide url={"guide/"+blog.edges[0].node.slug} />
								 
								 
								 
								 
                            </div>
                           
                        </div>
                        </div>
                    
                </div>
            </div>
       </div>
	   
    </section>
		<section className="what-you-get ">
        <div className="container bg-white">
             <h2 className="section-heading text-center mb-1">{blog.edges[0].node.acf.guide_offer_title}</h2>
            <p className="sub-heading text-center pb-4" >{blog.edges[0].node.acf.guide_offer_subtitle}</p>
            <div className="row">
                {
				blog.edges[0].node.acf.what_this_guide_has_to_offfer &&
				blog.edges[0].node.acf.what_this_guide_has_to_offfer.map(
                propd => {
					return (
						<Tilt options={{ max : 10,scale:1 }} className="Tilt col-lg-4 col-md-6 customer-benifil">
						<div className="thumbnial text-center Tilt-inner"  data-wow-delay="0.4s" >
							<div className="thumbnial-icon">
								{(propd.offer_icon != null ) ? (<img src={propd.offer_icon.source_url} className="img-fluid" alt=""/>) : ("") }
							</div>
							<h4 className="section-heading-2"> {propd.offer_title}</h4>
							<p className="label-text">{propd.offer_desc} </p>
						</div>
					</Tilt>
					)
                }
                )}
				
				
				
                
            </div> 
            
            
            
        </div>  
    </section>	
     <section className="guide-last-section">
        <div className="container">
            <div className="row justify-content-end">
                <div className="col-xl-5 col-md-6  col-sm-7">
                    <h2 className="section-heading mb-1"> {blog.edges[0].node.acf.section_title}</h2>
                   
                    <p className="label-text">
                            {blog.edges[0].node.acf.section_desc}
                    </p>
                    <a href="javascript:;" className="btn btn-default btn-dnwld float-right"> SEND ME MY PDF!</a>
                </div>
            </div>
        </div>
    </section> 
      
		</Layout>
    )
  }
}

Singleguide.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default Singleguide

export const pageQuery = graphql`
  query($id: String!) {
    allWordpressWpGuide(filter: {id: { eq: $id }}) {
		edges {
			node {
				id
				title
				content
				wordpress_id
				slug
				acf {
				  feature_image{
            source_url
          }
				  posted_by
				  section_desc
				  section_title
				  guide_offer_subtitle
				  guide_offer_title
				  what_this_guide_has_to_offfer {
					offer_desc
					offer_title
					offer_icon {
					  source_url
					}
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
	
	
  }
  
`