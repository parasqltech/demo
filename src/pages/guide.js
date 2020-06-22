import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Particles from 'react-particles-js';
import event_thumb from '../img/events/event-thumbnial.jpg';
import Helmet from 'react-helmet'
import Main from '../components/Guide/Main';
const guide = () => (
  <StaticQuery
    query={graphql`
      query {
        allWordpressWpGuide{
				edges {
				  node {
					id
					title
					slug
					content
					acf {
            feature_image{
						  source_url
					  }
					  posted_by
					}
					date(formatString: "D MMMM,Y")
				  }
				}
			}
			allWordpressCategory(filter: {wordpress_parent: {eq: 25}}) {
				edges {
				  node {
					id
					name
					slug
				  }
				}
			}
      }
    `}
    render={data => (
		<Layout>
			<Helmet>
				<title>Guide | Handy Resources Guides - QL Tech</title>
				<meta name="title" content="Guide | Handy Resources Guides - QL Tech"></meta>
			</Helmet>
			<div className="bg">
					<div className="area-bg">
						 <Particles params={{"particles": {"number": {"value": 80,"density": {"enable": true,"value_area": 1600}},"color": {"value": ["#fd8788", "#f1aea6", "#21a6df", "#75d3ff"]},"shape": {"type": "circle","stroke": {"width": 0,"color": "#000000",},"polygon": {"nb_sides": 5,},"image": {"src": "img/github.svg","width": 100,"height": 100}},"opacity": {"value": 0.4489553770423464,"random": false,"anim": {"enable": false,"speed": 40,"opacity_min": 0.1,"sync": false}},"size": {"value": 5,"random": true,"anim": {"enable": false,"speed": 40,"size_min": 0.1,"sync": false}},"line_linked": {"enable": true,"distance": 150,"color": "#ffffff","opacity": 0.4,"width": 1},"move": {"enable": true,"speed": 6,"direction": "none","random": false,"straight": false,"out_mode": "out","bounce": false,"attract": {"enable": false,"rotateX": 600,"rotateY": 1200}}},"interactivity": {"detect_on": "canvas","events": {"onhover": {"enable": true,"mode": "grab"},"onclick": {"enable": true,"mode": "push"},"resize": true},"modes": {"grab": {"distance": 140,"line_linked": {"opacity": 1}},"bubble": {"distance": 400,"size": 40,"duration": 2,"opacity": 8,"speed": 3},"repulse": {"distance": 200,"duration": 0.4},"push": {"particles_nb": 4},"remove": {"particles_nb": 2}}},"retina_detect": true}} />
					</div>
				</div>
				<section className="breadcumbs-and-title-section">
					
					<div className="container text-center">
						
						<span className="section-subheading-heading">Guides</span>
						<h1 className="section-heading">
						Handy Resources
						</h1>
						<ul className="breadcrumbs">
							<li> <Link to="/">Home</Link> \</li>
							<li> Guides</li>
						</ul>
					</div>
			</section>
			<section className="guide-section pt-0">
        <div className="main-panel">
        <div className="subnavbar ">
                <div className="container bg-white">
                      <div className="row justify-content-center">
                        <div className="col-md-11 justify-content-between row mb-4">
                            <ul className="nav  resource-menu">
                                <li className="nav-item">
                                <Link className="nav-link " to="/hub/">Featured</Link>   
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link " to="/article/">Articles</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/guide/">Guides</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/worksheet/">Worksheets</Link>
                                </li>
                            </ul>
                            <div className="search-box ">
                                <div className="input-group">
                                    <Main />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
				 <div className="container bg-white">
                <div className="row justify-content-center">
                        <div className="col-md-11 ">
                     <div className="row  justify-content-center">
                        <div className="col-lg-12 col-md-12">
                        <div className="row">
						              {data &&
				data.allWordpressWpGuide &&
				data.allWordpressWpGuide.edges &&
				data.allWordpressWpGuide.edges.map(
                prop => {
					return (
						
						<div className="col-md-6 col-sm-6 wow fadeInLeft">
                            <div className="grid">
                                <div className=" guide-thumbnial">
                                    <div className="guide-image" style={{"background-image":"url("+  prop.node.acf.feature_image.source_url +")"}}>
								
                                    </div>
                                   
                                    <Link to={"/guide/"+prop.node.slug+"/"} dangerouslySetInnerHTML={{ __html: prop.node.title+' <i class="fa fa-long-arrow-right ml-1"></i>'}} className="guide-text">
									 
                                    </Link>
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
        </div>
       
           
        </div>
    </section>
		</Layout>
    )}
  />
)

export default guide
