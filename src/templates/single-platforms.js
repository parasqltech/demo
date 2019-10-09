import React, {Component} from "react"
import { graphql,Link } from "gatsby"
import PropTypes from "prop-types"
import Layout from '../components/Layout'
import Lightbox from '../components/Lightbox'
import Particles from 'react-particles-js';
import Helmet from 'react-helmet'
import quote from  "../img/quote.png"


class Singleplatform extends Component {
  render() {
    const platform = this.props.data.allWordpressWpPlatform
	console.log(platform);
    return (
      <Layout>
			<Helmet>
			<title>{platform.edges[0].node.yoast.title} - QL Tech</title>
			<meta name="title" content={platform.edges[0].node.yoast.title}></meta>
			<meta name="description" content={platform.edges[0].node.yoast.metadesc}></meta>
			 <meta name="keywords" content={platform.edges[0].node.yoast.metakeywords}></meta>
			<meta property="og:type" content="website"></meta>
			<meta property="og:title" content={platform.edges[0].node.yoast.opengraph_title}></meta>
			<meta property="og:description" content={platform.edges[0].node.yoast.opengraph_description}></meta>
			<meta property="twitter:card" content="summary_large_image"></meta>
			<meta property="twitter:title" content={platform.edges[0].node.yoast.title}></meta>
			<meta property="twitter:description" content={platform.edges[0].node.yoast.twitter_description}></meta>
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
							<div className="col-xl-9 col-lg-10">
								<div className="event-content-block">
										<h1 className="section-heading mb-2">{platform.edges[0].node.title}</h1>
										<div className="label-text" dangerouslySetInnerHTML={{ __html: platform.edges[0].node.content }}>
										</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="home-about-section pt-4 pb-4 bg-white">
        <div className="container">
           
            <div className="row justify-content-start">
                <div className="col-md-12">
                    <div className="about-content xs-center sm-center wow fadeInUp">
                        <span className="sub-heading text-center d-block mb-0">FAQ</span>
                        <h3 className="section-heading text-center"></h3>
                         <div id="accordion" className="faq-section">
                                
								{platform.edges[0].node.acf.faq &&
									platform.edges[0].node.acf.faq.map(
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
			 
		</Layout>
    )
  }
}

Singleplatform.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default Singleplatform

export const pageQuery = graphql`
  query($id: String!) {
    allWordpressWpPlatform(filter: {id: { eq: $id }}) {
		edges {
			node {
				title
				content
				acf{
					faq {
					answer
					question
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
				
		}}
    }
  }
`