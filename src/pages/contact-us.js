import React from "react"
import { Link } from "gatsby"
import Particles from 'react-particles-js';
import Layout from '../components/Layout'
import GoogleMap from '../components/Contact/GoogleMap'
import GoogleMapAus from '../components/Contact/GoogleMapAus'

const IndexPage = () => (
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
               <h1 className="section-heading"><span>Get connected</span>
                    We'll love to hear from you!
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
						<div className="card text-center  pb-4">
							<div className="card-body">
								<span className="card-icon   ">
									<i className="fa fa-phone"></i>
								</span>
								<h6 className="card-title  mb-4">Talk to Sales</h6>
								<p className="label-text mb-4">Interested in HubSpot's software? Just pick up the phone to chat with a 
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
									<h6 className="card-title  mb-4">Contact Customer Support</h6>
									<p className="label-text  mb-4">Interested in HubSpot's software? Just pick up the phone to chat with a  <a href="mailto:career@qltech.com.au" className="nav-link    m-0 p-0">
											career@qltech.com.au
										</a></p>

								   <a href="career.html" className="btn btn-default mt-0 mb-4"> Go to career section</a>
								</div>
							</div>
					</div>
				</div>
			</div>
		</section>
		<section className="contact-us-section-3">
			<div className="container">
				<div className="main-panel">
					<h2 className="section-heading-2 mb-4  pb-4 text-center">Connect with one of our global offices</h2>
					<div className="row justify-content-center">
						<div className="col-md-5 d-flex">
							<div className="card">
								<div className="row ">
									<div className="col-lg-12">
											<GoogleMap />
									</div>
									<div className="col-lg-12 text-left">
										<div className="card-body">
											<p className="card-title mb-1">Headquarters</p>
											<p className="label-text">45 St Georges Terrace, Ground Floor, Perth, 6000</p>
											
										</div>
									</div>
								</div>
							</div>
						</div>
						
						<div className="col-md-5  d-flex">
								<div className="card">
									<div className="row">
										<div className="col-lg-12">
											<GoogleMapAus />
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
						<h2 className="section-heading-2 text-center mb-4"><span className=" sub-heading d-block">contact Us</span> &lt; Space For one linear &gt;</h2>
						<form method="POST" action="">
							<div className="row justify-content-center">
								<div className="col-lg-8 col-md-10">
									 <div className="row">
										<div className="col-md-6 mb-4">
											<label className="label-text">What's your name:</label>
											<input type="text" className="form-control" placeholder="Enter your name"/>
										</div>
										<div className="col-md-6 mb-4">
											<label className="label-text">What's your email address:</label>
											<input type="text" className="form-control" placeholder="Enter your name"/>
										</div>
										<div className="col-md-6 mb-4">
											<label className="label-text">Select Service:</label>
											<select className="form-control">
												<option> Option 1</option>
												<option> Option 1</option>
												<option> Option 1</option>
												<option> Option 1</option>
												<option> Option 1</option>
											</select>
										</div>
										<div className="col-md-6 mb-4">
											<label className="label-text">City:</label>
											<select className="form-control">
												<option> Option 1</option>
												<option> Option 1</option>
												<option> Option 1</option>
												<option> Option 1</option>
												<option> Option 1</option>
											</select>
										</div>
										<div className="col-md-12">
											<label className="label-text">Message:</label>
											<textarea rows="2" className="form-control" placeholder="Message"></textarea>
										</div>
									
										<div className="col-md-12  mb-4 ">
											<button className="btn btn-default border-0">Submit</button>
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