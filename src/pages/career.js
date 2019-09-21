import React from "react"
import { Link } from "gatsby"
import Layout from '../components/Layout'
import JobPost from '../components/Career/JobPost'
import Whyqltech from '../components/Career/Whyqltech'
import Particles from 'react-particles-js';
import $ from 'jquery';

import glassdoor from '../img/glassdoor-logo.png'

const CareerPage = () => (
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
               
            <span className="section-subheading-heading">Career</span>
               <h1 className="section-heading">
                   Career
               </h1>
               <ul className="breadcrumbs">
                   <li> <Link to="/">Home</Link> \</li>
                   <li>Career</li>
               </ul>
           </div>
		</section>
		
		<section className="career-section-03 bg-light">
        <div className="container">
            <div className="main-panel">
               
                <div className="thumbnail bg-white">
                <div className="row justify-content-center">
                    <div className="col-md-9 text-sub-heading text-center">
                             <p className="label-text text-subheading font-weight-regular">
                                Over 400 current and former employees have written reviews of their experience at HubSpot.
                                Learn what it's like to work here on <a href="#" target="_blank" class="nav-link text-success">Glassdoor.</a> 
                            </p>
                            
                            <div className="rating-block mb-4">
                                <span className="rating-number">4.1</span>
                                <ul className="rating">
                                    <li className="r10"><span className="fa fa-star "></span></li>
                                    <li className="r10"><span className="fa fa-star "></span></li>
                                    <li className="r10"><span className="fa fa-star "></span></li>
                                    <li className="r10"><span className="fa fa-star"></span></li>
                                    <li className="r10 r1"><span className="fa fa-star"></span></li>
                                </ul>
                            </div>
                            <a href="#" target="_blank" className=" mb-4 d-block">
                                <img src={glassdoor} className="img-fluid" alt="" width="220"/>
                            </a>
                        </div>
                       
                    </div>
                </div>
                 
             </div>
        </div>
	</section>
	<Whyqltech />	
		
     
    <section className="career-section-03 bg-light">
            <div className="container">
                <div className="main-panel">
                    <div className="row justify-content-center text-center">
                        <div className="col-md-12 mt-4">
                            <h2 className="section-heading ">Why us? 
                                <span>Growth, purpose, and people. For starters.</span>
                            </h2>
                            <div className="row ">
                                <div className="col-xl-4 col-lg-4 col-md-6">
                                    <div className="thumbnail wow fadeInLeft bg-white">
                                        <span className="benifits-icon text-danger"><i className="fa fa-home"></i></span>
                                        <p className="h4">Career Growth</p>
										<p className="label-text">Training for improving skill sets.</p>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-8 col-md-6">
                                    <div className="thumbnail wow fadeInUp bg-white">
                                        <span className="benifits-icon   text-warning"><i className="fa fa-home"></i></span>
                                        <p className="h4">Compensation</p>
										<p className="label-text">Referrals are most welcome.</p>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-6 col-md-6">
                                    <div className="thumbnail wow fadeInRight bg-white">
                                       <span className="benifits-icon    text-primary"><i className="fa fa-home"></i></span>
                                         <p className="h4">CSR Activity</p>
										 <p className="label-text">Employee engagement activities.</p>
                                    </div>
                                </div>
                                <div className="col-xl-5 col-lg-6 col-md-6">
                                    <div className="thumbnail wow fadeInLeft bg-white">
                                        <span className="benifits-icon  text-success"><i className="fa fa-home"></i></span>
                                         <p className="h4">Office Space</p>
										 <p className="label-text">Working environment with premium amenities.</p>
                                    </div>
                                </div>
                                <div className="col-xl-7 col-lg-12 col-md-12">
                                    <div className="thumbnail wow fadeInDown bg-white">
                                      <span className="benifits-icon text-dark"><i className="fa fa-home"></i></span>
                                          <p className="h4">Work Culture</p>
										  <p className="label-text">Complete transparency with least pressure & deadlines.</p>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    
                     
                 </div>
            </div>
    </section>
    <JobPost />
	</Layout>
)

export default CareerPage