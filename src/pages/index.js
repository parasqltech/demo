import React from "react"
import { withPrefix, Link } from "gatsby"
import Helmet from 'react-helmet'
import Particles from 'react-particles-js';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-tilt'
import $ from "jquery";
import Layout from '../components/Layout'
import ClientSlider from '../components/Home/ClientSlider'
import HomeAboutUs from '../components/Home/HomeAboutUs'
import HomeService from '../components/Home/HomeService'
import HomeTestimonial from '../components/Home/HomeTestimonial'
import HomeBlog from '../components/Home/HomeBlog'
import HomePartner from '../components/Home/HomePartner'
import HomeWork from '../components/Home/HomeWork'
import home_section from '../img/home/home-section-1-img.png';
import home_section_bg from '../img/home/home-section-1-img-background.png';
import about_us from '../img/about-us.png';
import pro_1 from '../img/process-1.png';
import pro_2 from '../img/process-2.png';
import pro_3 from '../img/process-3.png';
import pro_4 from '../img/process-4.png';
import ico_4 from '../img/icon-4.png';
import ico_3 from '../img/icon-3.png';
import ico_2 from '../img/icon-2.png';

const IndexPage = () => (
	<Layout>
		
		<div className="bg">
        <div className="area-bg">
           <Particles params={{"particles": {"number": {"value": 50,"density": {"enable": true,"value_area": 800}},"color": {"value": ["#FE395F", "#54DBF0", "#ad7cff", "#48d6ee"]},"shape": {"type": "polygon","stroke": {"width": 0,"color": "#000000",},"polygon": {"nb_sides": 10,},"image": {"src": "img/github.svg","width": 100,"height": 100}},"opacity": {"value": 0.2,"random": false,"anim": {"enable": false,"speed": 1,"opacity_min": 0.1,"sync": false}},"size": {"value": 5,"random": true,"anim": {"enable": false,"speed": 40,"size_min": 0.1,"sync": false}},"line_linked": {"enable": true,"distance": 150,"color": "#ffffff","opacity": 0.4,"width": 1},"move": {"enable": true,"speed": 6,"direction": "none","random": false,"straight": false,"out_mode": "out","bounce": false,"attract": {"enable": false,"rotateX": 600,"rotateY": 1200}}},"interactivity": {"detect_on": "canvas","events": {"onhover": {"enable": true,"mode": "grab"},"onclick": {"enable": true,"mode": "push"},"resize": true},"modes": {"grab": {"distance": 140,"line_linked": {"opacity": 1}},"bubble": {"distance": 400,"size": 40,"duration": 2,"opacity": 8,"speed": 3},"repulse": {"distance": 200,"duration": 0.4},"push": {"particles_nb": 4},"remove": {"particles_nb": 2}}},"retina_detect": true}} />
        </div>
    </div>
    <section className="home-section-1">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xl-8 col-lg-10">
                    <h1 className="wow fadeInUp heading-main text-center" data-wow-delay="0.3s">
                        <span className="d-block">Leading best creative
                        digital </span> 
                       
						<ReactTypingEffect cursor={""} cursorClassName="csr" typingDelay={1000} eraseDelay={1000}
					  text={["Company.", "Team.", "Workplace."]}
					/>
						&nbsp;
                    </h1>
                    <div className=" text-center wow fadeInUp" data-wow-delay="0.6s">
                        <a href="#" className="btn-default">Get an Estimate</a>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-8 col-md-10 col-md-offset-1 col-xs-12">
                    <div className="home-parallax-layers" id="home-parallax-layers">
                        <Tilt  className="welcome-mockup text-center wow fadInUp Tilt" options={{ max : 10,scale:1 }} data-wow-delay="0.2s" >
                            <img src={home_section} className="img-fluid d-inline Tilt-inner" alt="" />
                        </Tilt>
                        <div className="welcome-mockup-bg wow fadeInUp"  data-wow-delay="0.1s" 
                            data-wow-delay="0.9s">
                            <img src={home_section_bg}  className="img-fluid d-inline" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
	<section className="home-trust-list-section">
        <div className="container">
            <div className="main-panel">
                <div className="row justify-content-center">
                    <div className="col-xl-8 col-lg-8 col-md-10  col-sm-10">
                         <h6 className="section-heading-2 text-center mb-0">
                            Clientle
                        </h6>
                        <p className="sub-heading text-center">Some of the clients we have worked with</p>
                        
                            <ClientSlider />
                       
						
                    </div>
                </div>
            </div>
        </div>
    </section>
	<HomeService />
	<HomeAboutUs />
	 <section className="home-process-section wow fadeIn">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8 mb-4">
                    <h2 className="section-heading text-center wow fadeIn">
                        <span>Steps For Done</span>
                        Our Working Process</h2>
                </div>
            </div>

            <div className="row clearfix wow fadeIn">
                <div className="process-block one col-lg-3 col-md-6 col-sm-6">
                    <div className="inner-box">
                        <div className="icon-box">
                            <span className="icon"><img src={pro_1} className="img-fluid" alt=""/></span>
                        </div>
                        <h3>Date Exchange</h3>
                        <div className="number">01</div>
                    </div>
                </div>
                <div className="process-block-two two col-lg-3 col-md-6 col-sm-6">
                    <div className="inner-box">
                        <div className="icon-box d-lg-none d-block">
                            <span className="icon"><img src={pro_2} className="img-fluid" alt=""/></span>
                        </div>
                        <div className="number">02</div>
                        <h3>Content Managment</h3>
                        <div className="icon-box d-lg-block d-none">
                            <span className="icon"><img src={pro_2} className="img-fluid" alt=""/></span>
                        </div>
                    </div>
                </div>
                <div className="process-block three col-lg-3 col-md-6 col-sm-6">
                    <div className="inner-box">
                        <div className="icon-box">
                            <span className="icon"><img src={pro_3} className="img-fluid" alt=""/></span>
                        </div>
                        <h3>Workflow</h3>
                        <div className="number">03</div>
                    </div>
                </div>
                <div className="process-block-two four col-lg-3 col-md-6 col-sm-6">
                    <div className="inner-box">
                        <div className="icon-box  d-lg-none d-block">
                            <span className="icon"><img src={pro_4} className="img-fluid" alt=""/></span>
                        </div>
                        <div className="number">04</div>
                        <h3>Business Digital</h3>
                        <div className="icon-box  d-lg-block d-none">
                            <span className="icon"><img src={pro_4} className="img-fluid" alt=""/></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
    </section>
	
	<HomeWork />
	<HomeTestimonial />
	<HomeBlog />
	<HomePartner />
	</Layout>
)

export default IndexPage