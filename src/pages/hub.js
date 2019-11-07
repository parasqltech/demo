import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Particles from 'react-particles-js';
import event_thumb from '../img/events/event-thumbnial.jpg';
import Helmet from 'react-helmet'
import SingleArticle from '../components/hub/SingleArticle';
import SingleGuide from '../components/hub/SingleGuide';
import SingleWorksheet from '../components/hub/SingleWorksheet';





const kh = () => (
  <StaticQuery
    query={graphql`
      query {
        allWordpressPage(filter: {wordpress_id: {eq: 324}}) {
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
			<Helmet>
				<title>Knowledge Hub | Discover the knowledge Insights - QL Tech</title>
				<meta name="title" content="Knowledge Hub | Discover the knowledge Insights - QL Tech"></meta>
			</Helmet>
			<div className="bg">
					<div className="area-bg">
						 <Particles params={{"particles": {"number": {"value": 80,"density": {"enable": true,"value_area": 1600}},"color": {"value": ["#fd8788", "#f1aea6", "#21a6df", "#75d3ff"]},"shape": {"type": "circle","stroke": {"width": 0,"color": "#000000",},"polygon": {"nb_sides": 5,},"image": {"src": "img/github.svg","width": 100,"height": 100}},"opacity": {"value": 0.4489553770423464,"random": false,"anim": {"enable": false,"speed": 40,"opacity_min": 0.1,"sync": false}},"size": {"value": 5,"random": true,"anim": {"enable": false,"speed": 40,"size_min": 0.1,"sync": false}},"line_linked": {"enable": true,"distance": 150,"color": "#ffffff","opacity": 0.4,"width": 1},"move": {"enable": true,"speed": 6,"direction": "none","random": false,"straight": false,"out_mode": "out","bounce": false,"attract": {"enable": false,"rotateX": 600,"rotateY": 1200}}},"interactivity": {"detect_on": "canvas","events": {"onhover": {"enable": true,"mode": "grab"},"onclick": {"enable": true,"mode": "push"},"resize": true},"modes": {"grab": {"distance": 140,"line_linked": {"opacity": 1}},"bubble": {"distance": 400,"size": 40,"duration": 2,"opacity": 8,"speed": 3},"repulse": {"distance": 200,"duration": 0.4},"push": {"particles_nb": 4},"remove": {"particles_nb": 2}}},"retina_detect": true}} />
					</div>
				</div>
				
				<section className="breadcumbs-and-title-section">
					
					<div className="container text-center">
						<span className="sub-heading">Knowledge Hub</span>
						<h1 className="section-heading">
						    Discover insights
						</h1>
						<ul className="breadcrumbs">
							<li> <Link to="/">Home</Link> \</li>
							<li> Knowledge Hub</li>
						</ul>
					</div>
			</section>
			<section className="resource-section-1">
        <div className="main-panel">
        <div className="subnavbar ">
                <div className="container bg-white">
                      <div className="row justify-content-center">
                        <div className="col-md-11 justify-content-between row mb-4">
                            <ul className="nav  resource-menu">
                                <li className="nav-item">
                                <Link className="nav-link active" to="/hub/">Featured</Link>   
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link " to="/article/">Articles</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link " to="/guide/">Guides</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/worksheet/">Worksheets</Link>
                                </li>
                            </ul>
                            
                        </div>
                    </div>
                </div>
        </div>
      
            <div className="container bg-white">
                <div className="row justify-content-center">
                    <div className="col-md-11   ">
                        <div className="row">
                            <SingleArticle />
							</div>
                            <SingleGuide />
							
                            <SingleWorksheet />
                        
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
		</Layout>
    )}
  />
)

export default kh
