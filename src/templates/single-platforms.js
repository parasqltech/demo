import React, {Component} from "react"
import { graphql,Link } from "gatsby"
import PropTypes from "prop-types"
import Layout from '../components/Layout'
import Lightbox from '../components/Lightbox'
import Particles from 'react-particles-js';

import quote from  "../img/quote.png"


class Singleplatform extends Component {
  render() {
    const platform = this.props.data.allWordpressWpPlatform
	console.log(platform);
    return (
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
						
						
						<h1 className="section-heading">
						{platform.edges[0].node.title}
						</h1>
						<ul className="breadcrumbs">
							<li> <Link to="/">Home</Link> \</li>
							<li> {platform.edges[0].node.title}</li>
						</ul>
					</div>
			</section>
			<section className="about-us-section-1  bg-white">
				<div className="container">
					<div className="main-panel">
						<div className="row">
							<div className="col-lg-12">
								<p className="label-text" dangerouslySetInnerHTML={{ __html: platform.edges[0].node.content }} />
									
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
				
		}}
    }
  }
`