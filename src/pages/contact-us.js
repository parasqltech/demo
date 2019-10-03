import React from "react"
import { Link } from "gatsby"
import Particles from 'react-particles-js';
import Layout from '../components/Layout'
import GoogleMap from '../components/Contact/GoogleMap'
import GoogleMapAus from '../components/Contact/GoogleMapAus'
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
               <h1 className="section-heading"><span>Connect With Us</span>
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
									<i className="fa fa-phone"></i>
								</span>
								<h6 className="card-title  mb-4">Talk to our experts</h6>
								<p className="label-text mb-4">Need assistance? You are just an e-mail away. Drop a line at  
										<a href="mailto:support@qltech.com.au" className="nav-link m-0 p-0">support@qltech.com.au</a>

								</p>
								<div className="row justify-content-center">
									<div className="col-md-5">
										<p className="section-heading-3  mb-0">Australia</p>
										<a href="tel:+61 410 881 616" className="nav-link d-block pl-0 pb-0">
												+61 410 881 616
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
										<i className="fa fa-comments"></i>
									</span>
									<h6 className="card-title  mb-4">Career</h6>
									<p className="label-text  mb-4">Ready to take on the challenge?  </p>

								   <Link to="career" className="btn btn-default mt-0 mb-4"> Go to career section</Link>
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
						<div className="col-md-5 d-flex">
							<div className="card">
								<div className="row ">
									<div className="col-lg-12 mb-4">
											
											<GoogleMapAus />
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
						
						<div className="col-md-5  d-flex">
								<div className="card">
									<div className="row">
										<div className="col-lg-12 mb-4">
											<GoogleMap />
										</div>
										<div className="col-lg-12 text-left">
											<div className="card-body">
												<p className="card-title mb-1">India Office</p>
												<p className="label-text">301/C, Wallstreet Annexe, Near Gujarat College, Kavi Nanalal Marg, Ellisbridge, Ahmedabad, Gujarat 380006</p>
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
						<form method="POST" action="https://script.google.com/macros/s/AKfycby6PzAC31YbZItcHbE2EK-YbdyR_L9uTNEBGgSo1EgR4YIltUZX/exec" >
							<div className="row justify-content-center">
								<div className="col-lg-8 col-md-10">
									 <div className="row">
										<div className="col-md-6 mb-4">
											<label className="label-text">First Name</label>
											<input type="text" className="form-control" placeholder="" name="first_name" required/>
										</div>
										<div className="col-md-6 mb-4">
											<label className="label-text">Last Name</label>
											<input type="text" className="form-control" placeholder="" name="last_name" required/>
										</div>
										<div className="col-md-12 mb-4">
											<label className="label-text">Email</label>
											<input type="email" className="form-control" placeholder="" name="email" required/>
										</div>
										<div className="col-md-12 mb-4">
											<label className="label-text">Contact Number</label>
											<input type="number" className="form-control" placeholder="" name="number" required/>
										</div>
										<div className="col-md-12">
											<label className="label-text">Message</label>
											<textarea rows="3" className="form-control" placeholder="" name="message" required></textarea>
										</div>
										<input type="hidden" required className="form-control" name="url" value="/contact-us" />
										<input type="hidden" required className="form-control" name="form_name" value="Contact-us" />
										<div className="col-md-12  mb-4 ">
										<button type="submit" className="btn-default border-0" value="Submit">Submit</button>
											
										</div>
									</div>
								</div>
							</div>
						   
						</form>
					</div>
				</div>
		</section>
	</Layout>
)

export default IndexPage