import React from 'react'
import Layout from '../components/Layout'
import Particles from 'react-particles-js';
import thankyouimg from '../img/thank-You.png';
const thankyou = () => (
  <Layout>
   <div className="bg">
			<div className="area-bg">
				<Particles params={{"particles": {"number": {"value": 80,"density": {"enable": true,"value_area": 1600}},"color": {"value": ["#fd8788", "#f1aea6", "#21a6df", "#75d3ff"]},"shape": {"type": "circle","stroke": {"width": 0,"color": "#000000",},"polygon": {"nb_sides": 5,},"image": {"src": "img/github.svg","width": 100,"height": 100}},"opacity": {"value": 0.4489553770423464,"random": false,"anim": {"enable": false,"speed": 40,"opacity_min": 0.1,"sync": false}},"size": {"value": 5,"random": true,"anim": {"enable": false,"speed": 40,"size_min": 0.1,"sync": false}},"line_linked": {"enable": true,"distance": 150,"color": "#ffffff","opacity": 0.4,"width": 1},"move": {"enable": true,"speed": 6,"direction": "none","random": false,"straight": false,"out_mode": "out","bounce": false,"attract": {"enable": false,"rotateX": 600,"rotateY": 1200}}},"interactivity": {"detect_on": "canvas","events": {"onhover": {"enable": true,"mode": "grab"},"onclick": {"enable": true,"mode": "push"},"resize": true},"modes": {"grab": {"distance": 140,"line_linked": {"opacity": 1}},"bubble": {"distance": 400,"size": 40,"duration": 2,"opacity": 8,"speed": 3},"repulse": {"distance": 200,"duration": 0.4},"push": {"particles_nb": 4},"remove": {"particles_nb": 2}}},"retina_detect": true}} />
			</div>
		</div>
	 <span class="top-space"></span>
    <section class="thank-you-section">
        <div class="container">
            <div class="main-panel text-center">
                <div class="row justify-content-center">
                    <div class="col-md-6">
                        <img src={thankyouimg} class="img-fluid text-center" alt=""/>
                        <h1 class="section-heading text-subheading font-weight-bold mt-4 mb-0"> Thank You</h1>
                        <p class="section-heading-3 text-subheading mt-0"> for reaching out to us</p>
                    </div>
                </div>
               
            </div>
        </div>
    </section>	
  </Layout>
)

export default thankyou
