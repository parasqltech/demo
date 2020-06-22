import React from "react"
import { Link } from "gatsby"
import Particles from 'react-particles-js';
import Layout from '../components/Layout'
import Contact from '../components/Contact/Contact'
import expert from '../img/expert.png';
import career from '../img/career-b.png';
import Helmet from 'react-helmet'


const IndexPage = () => (
	<Layout>
		<Helmet>
		<title>Contact Us | Web design & Marketing agency Perth, Australia- QL Tech</title>
		<meta name="title" content="Contact Us | Web design & Marketing agency Perth, Australia- QL Tech"></meta>
		<meta name="description" content="Join hands with QL Tech helpdesk support for long term association and If you have any query, Please fills below contact us form or drop us an email. We promise to get back to you in a few hours."></meta>
		 <meta name="keywords" content="contact ql tech, ql tech contact page, contact ql perth, web design contact company, perth marketing agency, social media marketing agency, crm business consultant, help desk ql tech"></meta>
		<meta property="og:type" content="website"></meta>
		<meta property="og:title" content="Contact Us | Web design & Marketing agency Perth, Australia- QL Tech"></meta>
		<meta property="og:description" content="Join hands with QL Tech helpdesk support for long term association and If you have any query, Please fills below contact us form or drop us an email. We promise to get back to you in a few hours."></meta>
		<meta property="twitter:card" content="summary_large_image"></meta>
		<meta property="twitter:title" content="Contact Us | Web design & Marketing agency Perth, Australia- QL Tech"></meta>
		<meta property="twitter:description" content="Join hands with QL Tech helpdesk support for long term association and If you have any query, Please fills below contact us form or drop us an email. We promise to get back to you in a few hours."></meta>
		</Helmet>
		<div className="bg">
			<div className="area-bg">
				<Particles params={{"particles": {"number": {"value": 80,"density": {"enable": true,"value_area": 1600}},"color": {"value": ["#fd8788", "#f1aea6", "#21a6df", "#75d3ff"]},"shape": {"type": "circle","stroke": {"width": 0,"color": "#000000",},"polygon": {"nb_sides": 5,},"image": {"src": "img/github.svg","width": 100,"height": 100}},"opacity": {"value": 0.4489553770423464,"random": false,"anim": {"enable": false,"speed": 40,"opacity_min": 0.1,"sync": false}},"size": {"value": 5,"random": true,"anim": {"enable": false,"speed": 40,"size_min": 0.1,"sync": false}},"line_linked": {"enable": true,"distance": 150,"color": "#ffffff","opacity": 0.4,"width": 1},"move": {"enable": true,"speed": 6,"direction": "none","random": false,"straight": false,"out_mode": "out","bounce": false,"attract": {"enable": false,"rotateX": 600,"rotateY": 1200}}},"interactivity": {"detect_on": "canvas","events": {"onhover": {"enable": true,"mode": "grab"},"onclick": {"enable": true,"mode": "push"},"resize": true},"modes": {"grab": {"distance": 140,"line_linked": {"opacity": 1}},"bubble": {"distance": 400,"size": 40,"duration": 2,"opacity": 8,"speed": 3},"repulse": {"distance": 200,"duration": 0.4},"push": {"particles_nb": 4},"remove": {"particles_nb": 2}}},"retina_detect": true}} />
			</div>
		</div>
		<section className="breadcumbs-and-title-section">
            
           <div className="container text-center">
			   <span className="sub-heading">Connect With Us</span>
               <h1 className="section-heading">
                   We'd love to hear from you! 
               </h1>
               <ul className="breadcrumbs">
                   <li> <Link to="/">Home</Link> \</li>
                   <li>Contact Us</li>
               </ul>
           </div>
		</section>
		<section className="contact-us-section-2">
			<div className="container">
				<div className="row">
					<div className="col-lg-6  mb-4">
						<div className="card text-center">
							<div className="card-body">
								<span className="card-icon   ">
									
									<img src={expert} className="img-fluid" />
								</span>
								<h6 className="card-title  mb-4">Talk to our experts</h6>
								<p className="label-text mb-4">Need assistance? You are just an e-mail away. Drop a line at  
										<a href="mailto:support@qltech.com.au" className="nav-link m-0 p-0">support@qltech.com.au</a>

								</p>
								<div className="row justify-content-center">
									<div className="col-md-5">
										<p className="section-heading-3  mb-0">Australia</p>
										<a href="tel:+61 8 6262 3559" className="nav-link d-block pl-0 pb-0">
												+61 8 6262 3559
											</a>
										
									</div>
									<div className="col-md-5">
										<p className="section-heading-3 mb-0">India</p>
										<a href="tel:+91 79 4006 1419"  className="nav-link">+91 79 4006 1419</a>
										
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-6 mb-4">
							<div className="card text-center pb-4">
								<div className="card-body">
									<span className="card-icon   ">
										<img src={career} className="img-fluid" />
										
									</span>
									<h6 className="card-title  mb-4">Career</h6>
									<p className="label-text  mb-4">Ready to take on the challenge?  </p>

								   <Link to="/career/" className="btn btn-default mt-0 mb-4"> Go to career section</Link>
								</div>
							</div>
					</div>
				</div>
			</div>
		</section>
		<section className="contact-us-section-3">
			<div className="container">
				<div className="main-panel">
					<h2 className="section-heading-2 mb-4  pb-4 text-center">Our Offices</h2>
					<div className="row justify-content-center">
						<div className="col-md-5 mb-4 d-flex">
							<div className="card">
								<div className="row ">
									<div className="col-lg-12 mb-4">
											
											
											<iframe className="map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13540.757186424815!2d115.8591542!3d-31.9557609!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4c57bca413365250!2sQL%20Tech!5e0!3m2!1sen!2sau!4v1573473327100!5m2!1sen!2sau" width="600" height="450" frameborder="0"  allowfullscreen=""></iframe>
									</div>
									<div className="col-lg-12 text-left">
										<div className="card-body">
											<p className="card-title mb-1">Australia Office (Headquarters)</p>
											<p className="label-text">45 St Georges Terrace, Ground Floor, Perth, 6000</p>
											
										</div>
									</div>
								</div>
							</div>
						</div>
						
						<div className="col-md-5 mb-4  d-flex">
								<div className="card">
									<div className="row">
										<div className="col-lg-12 mb-4">
											<iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.9942814275378!2d72.5655622145081!3d23.023982184952448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84fcf0805947%3A0x5a6d3c9ec65ad9b8!2sQL%20Tech%20%C2%BB%20Web%20Design%20%26%20SEO%20Marketing%20Company!5e0!3m2!1sen!2sin!4v1570855705668!5m2!1sen!2sin" width="600" height="450" frameborder="0"  allowfullscreen=""></iframe>
										</div>
										<div className="col-lg-12 text-left">
											<div className="card-body">
												<p className="card-title mb-1">India Office</p>
												<p className="label-text">301/A, Wallstreet Annexe, Near Gujarat College, Kavi Nanalal Marg, Ellisbridge, Ahmedabad, Gujarat 380006</p>
											</div>
										</div>
									</div>
								</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section className="form-section ">
				<div className="container">
					<div className="main-panel">
						<h2 className="section-heading-2 text-center mb-4"><span className=" sub-heading d-block mb-2" >Contact Us</span> How Can We Help You?</h2>
						<Contact />
					</div>
				</div>
		</section>
	</Layout>
)

export default IndexPage