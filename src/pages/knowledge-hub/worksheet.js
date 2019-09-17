import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import Layout from '../../components/Layout'
import Particles from 'react-particles-js';
import event_thumb from '../../img/events/event-thumbnial.jpg';
import blog from '../../img/blog/dummy-image-1.jpg';
import blog2 from '../../img/blog/dummy-image.jpg';


const worksheet = () => (
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
						Worksheet
						</h1>
						<ul className="breadcrumbs">
							<li> <Link to="/">Home</Link> \</li>
							<li> Worksheet</li>
						</ul>
					</div>
			</section>
			<section className="worksheet-section pt-0">
        <div className="main-panel">
        <div className="subnavbar ">
                <div className="container bg-white">
                      <div className="row justify-content-center">
                        <div className="col-md-11 justify-content-between row mb-4">
                            <ul className="nav  resource-menu">
                                <li className="nav-item">
                                <Link className="nav-link " to="/knowledge-hub">Feature</Link>   
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link " to="/knowledge-hub/article">Articles</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link " to="/knowledge-hub/guide">Guide</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/knowledge-hub/worksheet">Worksheet</Link>
                                </li>
                            </ul>
                            <div className="search-box ">
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Search Here..."/>
                                    <div className="input-group-append">
                                        <button className="btn" type="button"><i className="fa fa-search"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
		<div className="container bg-white">
                <div className="row no-gutters">
                    <div className="col-xl-6 col-lg-8 col-sm-6">
                        <div className="thumbnail">
                            <div className="thumbnial-image">
                                <img src={blog} className="img-fluid w-100" alt=""/>
                            </div>
                             <a href="brochures.html" className="worksheet-text">
                                Space for title Here
                            </a>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                        <div className="thumbnail">
                            <div className="thumbnial-image">
                                <img src={blog2} className="img-fluid w-100" alt=""/>
                            </div>
                             <a href="brochures.html" className="worksheet-text">
                                Space for title Here
                            </a>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                        <div className="thumbnail">
                            <div className="thumbnial-image">
                                <img src={blog} className="img-fluid w-100" alt=""/>
                            </div>
                             <a href="brochures.html" className="worksheet-text">
                                Space for title Here
                            </a>
                        </div>
                    </div>
                     <div className="col-xl-3 col-lg-4 col-sm-6">
                        <div className="thumbnail">
                            <div className="thumbnial-image">
                                <img src={blog2} className="img-fluid w-100" alt=""/>
                            </div>
                             <a href="brochures.html" className="worksheet-text">
                                Space for title Here
                            </a>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4  col-sm-6">
                        <div className="thumbnail">
                            <div className="thumbnial-image">
                                <img src={blog2} className="img-fluid w-100" alt=""/>
                            </div>
                             <a href="brochures.html" className="worksheet-text">
                                Space for title Here
                            </a>
                        </div>
                    </div>
                     <div className="col-xl-6 col-lg-4  col-sm-6">
                        <div className="thumbnail">
                            <div className="thumbnial-image">
                                <img src={blog} className="img-fluid w-100" alt=""/>
                            </div>
                             <a href="brochures.html" className="worksheet-text">
                                Space for title Here
                            </a>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-8  col-sm-6">
                        <div className="thumbnail">
                            <div className="thumbnial-image">
                                <img src={blog2} className="img-fluid w-100" alt=""/>
                            </div>
                             <a href="brochures.html" className="worksheet-text">
                                Space for title Here
                            </a>
                        </div>
                    </div>
                     <div className="col-xl-3 col-lg-4  col-sm-6">
                        <div className="thumbnail">
                            <div className="thumbnial-image">
                                <img src={blog} className="img-fluid w-100" alt=""/>
                            </div>
                             <a href="brochures.html" className="worksheet-text">
                                Space for title Here
                            </a>
                        </div>
                    </div>
                     <div className="col-xl-3 col-lg-4  col-sm-6">
                        <div className="thumbnail">
                            <div className="thumbnial-image">
                                <img src={blog2} className="img-fluid w-100" alt=""/>
                            </div>
                             <a href="brochures.html" className="worksheet-text">
                                Space for title Here
                            </a>
                        </div>
                    </div>
                     <div className="col-xl-3 col-lg-4  col-sm-6">
                        <div className="thumbnail">
                            <div className="thumbnial-image">
                                <img src={blog2} className="img-fluid w-100" alt=""/>
                            </div>
                             <a href="brochures.html" className="worksheet-text">
                                Space for title Here
                            </a>
                        </div>
                    </div>

                    <div className="col-md-12 text-center">
                        <div className="loading  text-center"> 
                            <div className="spinner-border  "></div> <span>
                                    Loading... 
                            </span>
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

export default worksheet
