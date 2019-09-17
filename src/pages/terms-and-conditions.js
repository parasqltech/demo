import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Particles from 'react-particles-js';
const Tandc = () => (
  <StaticQuery
    query={graphql`
      query {
        allWordpressPage(filter: {wordpress_id: {eq: 322}}) {
			edges {
				node {
					title
					wordpress_id
					content
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
						
						
						<h1 className="section-heading">
						{data.allWordpressPage.edges[0].node.title}
						</h1>
						<ul className="breadcrumbs">
							<li> <Link to="/">Home</Link> \</li>
							<li> {data.allWordpressPage.edges[0].node.title}</li>
						</ul>
					</div>
			</section>
			<section className="about-us-section-1  bg-white">
				<div className="container">
					<div className="main-panel">
						<div className="row">
							<div className="col-lg-12">
								<p className="label-text" dangerouslySetInnerHTML={{ __html: data.allWordpressPage.edges[0].node.content }} />
									
							</div>
						</div>
					</div>
				</div>
			</section>
		</Layout>
    )}
  />
)

export default Tandc
