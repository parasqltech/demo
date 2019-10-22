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
import ContactProcess from '../components/Contact/ContactProcess'

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


class Singleprocess extends Component {
  render() {
    const service = this.props.data.allWordpressWpProcess
    const subservice = this.props.data.allWordpressWpSubprocess
	
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
						<span className="section-subheading-heading">Process</span>
						
						<h1 className="section-heading" dangerouslySetInnerHTML={{ __html: service.edges[0].node.title}} >
						
						</h1>
						<ul className="breadcrumbs">
							<li> <Link to="/">Home</Link> \</li>
							<li> Process</li>
						</ul>
					</div>
			</section>
			<section className="home-services-section service-section-1 ">
        
        <div className="container bg-white">
            <div className="main-panel">
                <div className="row justify-content-center">
                    <div className="col-xl-9 col-lg-10">
						<div className="blank-section">
						<div  dangerouslySetInnerHTML={{ __html: service.edges[0].node.content}}  ></div>
                    
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
						<span className=" sub-heading d-block mb-2 text-center mb-2">Contact Us</span>
                        <h2 className="section-heading text-center wow fadeIn mb-2">
                            Let us know how we can help
                        </h2>

                    </div>
                </div>
                <div className="main-panel">
                  <ContactProcess url={"process/"+service.edges[0].node.slug} />
                </div>
            </div>
    </section>
	
		</Layout>
    )
  }
}

Singleprocess.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default Singleprocess

export const pageQuery = graphql`
  query($id: String!) {
    allWordpressWpProcess(filter: {id: { eq: $id }}) {
		edges {
      node {
        id
        title
        content
		slug
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