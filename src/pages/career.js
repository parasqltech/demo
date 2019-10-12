import React from "react"
import { Link } from "gatsby"
import Layout from '../components/Layout'
import JobPost from '../components/Career/JobPost'
import CareerSlider from '../components/Career/CareerSlider'
import Helmet from 'react-helmet'

import Whyqltech from '../components/Career/Whyqltech'
import Particles from 'react-particles-js';
import $ from 'jquery';

import glassdoor from '../img/glassdoor-logo.png'
import Ambitious from '../img/career/Ambitious.png'
import SkillTuning from '../img/career/Skill-Tuning.png'
import Values from '../img/career/Values.png'
import Vision from '../img/career/Vision.png'
import WorkCulture from '../img/career/Work-Culture.png'

const CareerPage = () => (
	<Layout>
		<Helmet>
		<title>Careers | Web Design & Development Company Perth, Australia- QL Tech</title>
		<meta name="title" content="Careers | Web Design & Development Company Perth, Australia- QL Tech"></meta>
		<meta name="description" content="Join and explore your skills with 100% employee satisfaction. If you think you fit, fill the form and be the most talented web and mobile app developers of QL Tech, Perth."></meta>
		 <meta name="keywords" content="Looking for career opportunities, career goals, career job, ql tech job, dream job, web design job, mobile app job, digital marketing agency, job at ql tech"></meta>
		<meta property="og:type" content="website"></meta>
		<meta property="og:title" content="Careers | Web Design & Development Company Perth, Australia- QL Tech"></meta>
		<meta property="og:description" content="Join and explore your skills with 100% employee satisfaction. If you think you fit, fill the form and be the most talented web and mobile app developers of QL Tech, Perth."></meta>
		<meta property="twitter:card" content="summary_large_image"></meta>
		<meta property="twitter:title" content="Careers | Web Design & Development Company Perth, Australia- QL Tech"></meta>
		<meta property="twitter:description" content="Join and explore your skills with 100% employee satisfaction. If you think you fit, fill the form and be the most talented web and mobile app developers of QL Tech, Perth."></meta>
		</Helmet>
		<div className="bg">
         <div className="area-bg">
            <Particles params={{"particles": {"number": {"value": 80,"density": {"enable": true,"value_area": 1600}},"color": {"value": ["#fd8788", "#f1aea6", "#21a6df", "#75d3ff"]},"shape": {"type": "circle","stroke": {"width": 0,"color": "#000000",},"polygon": {"nb_sides": 5,},"image": {"src": "img/github.svg","width": 100,"height": 100}},"opacity": {"value": 0.4489553770423464,"random": false,"anim": {"enable": false,"speed": 40,"opacity_min": 0.1,"sync": false}},"size": {"value": 5,"random": true,"anim": {"enable": false,"speed": 40,"size_min": 0.1,"sync": false}},"line_linked": {"enable": true,"distance": 150,"color": "#ffffff","opacity": 0.4,"width": 1},"move": {"enable": true,"speed": 6,"direction": "none","random": false,"straight": false,"out_mode": "out","bounce": false,"attract": {"enable": false,"rotateX": 600,"rotateY": 1200}}},"interactivity": {"detect_on": "canvas","events": {"onhover": {"enable": true,"mode": "grab"},"onclick": {"enable": true,"mode": "push"},"resize": true},"modes": {"grab": {"distance": 140,"line_linked": {"opacity": 1}},"bubble": {"distance": 400,"size": 40,"duration": 2,"opacity": 8,"speed": 3},"repulse": {"distance": 200,"duration": 0.4},"push": {"particles_nb": 4},"remove": {"particles_nb": 2}}},"retina_detect": true}} />
            </div>
        </div>
		<section className="breadcumbs-and-title-section">
            
           <div className="container text-center">
               
            <span className="section-subheading-heading">Career</span>
               <h1 className="section-heading">
               Exciting opportunity awaits!
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
                                Learn what it's like to work here on  <a href="https://www.glassdoor.co.in/Reviews/QL-Tech-Reviews-E1394850.htm" target="_blank" class="nav-link text-success">Glassdoor.</a> 
                            </p>
                            
                            <div className="rating-block mb-4">
                                <span className="rating-number">4.2</span>
                                <ul className="rating">
                                    <li className="r10"><span className="fa fa-star "></span></li>
                                    <li className="r10"><span className="fa fa-star "></span></li>
                                    <li className="r10"><span className="fa fa-star "></span></li>
                                    <li className="r10"><span className="fa fa-star"></span></li>
                                    <li className="r10 r2"><span className="fa fa-star"></span></li>
                                </ul>
                            </div>
                            <a href="https://www.glassdoor.co.in/Reviews/QL-Tech-Reviews-E1394850.htm" target="_blank" className=" mb-4 d-block">
                                <img src={glassdoor} className="img-fluid" alt="" width="220"/>
                            </a>
                        </div>
                       
                    </div>
                </div>
                 
             </div>
        </div>
	</section>
    <CareerSlider/>
	<Whyqltech />	
		
     
    <section className="career-section-03 bg-light">
            <div className="container">
                <div className="main-panel">
                    <div className="row justify-content-center text-center">
                        <div className="col-md-12 mt-4">
                            <h2 className="section-heading mb-0">Why us? </h2>
                                <span className="sub-heading pb-4 d-block">People-first focus &amp; bringing together diverse ideas, perspectives &amp; experience</span>
                           
                            <div className="row ">
                                <div className="col-xl-4 col-lg-4 col-md-6">
                                    <div className="thumbnail wow fadeInLeft bg-white">
                                        <span className="benifits-icon">
                                            <img src={WorkCulture} className="img-fluid" alt=""/>
                                        </span>

                                        

                                        <p className="h4">Work Culture</p>
										<p className="label-text">An open &amp; transparent work environment</p>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-8 col-md-6">
                                    <div className="thumbnail wow fadeInUp bg-white">
                                        <span className="benifits-icon">
                                            <img src={SkillTuning} className="img-fluid" alt=""/>
                                        </span>
                                        <p className="h4">Skill Tuning</p>
										<p className="label-text">Continuous learning and development opportunities.</p>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-6 col-md-6">
                                    
                                     <div className="thumbnail wow fadeInLeft bg-white">
                                        <span className="benifits-icon">
                                        <img src={Vision} className="img-fluid" alt=""/>
                                        </span>
                                         <p className="h4">Vision</p>
										 <p className="label-text">A place where everyone is inspired to innovate.</p>
                                    </div>
                                </div>
                                <div className="col-xl-5 col-lg-6 col-md-6">
                                <div className="thumbnail wow fadeInRight bg-white">
                                        <span className="benifits-icon">
                                            <img src={Values} className="img-fluid" alt=""/>
                                        </span>
                                         <p className="h4">Values</p>
										 <p className="label-text">Our core values drive everything we do.</p>
                                    </div>
                                </div>
                                      
                                <div className="col-xl-7 col-lg-12 col-md-12">
                                    <div className="thumbnail wow fadeInDown bg-white ">
                                        <span className="benifits-icon">
                                            <img src={Ambitious} className="img-fluid" alt=""/>
                                        </span>
                                          <p className="h4">Ambitious</p>
										  <p className="label-text">Each day brings new &amp; exciting challenges.</p>
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