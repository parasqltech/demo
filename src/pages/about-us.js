import React from "react"
import { Link } from "gatsby"
import Layout from '../components/Layout'
import Particles from 'react-particles-js';
import about_top from '../img/about/about-us-top-image.png'
import team from  "../img/team/member-1.png"
import testmonial from  "../img/testmonial-author.png"
import quote from  "../img/quote.png"
import team_member from  "../img/team/vishal-suthar.png"
import clients_1 from '../img/clients/google-partners.png';
import clients_2 from '../img/clients/zoho-authorise-partners.png';
import clients_3 from '../img/clients/hubspot-partners.png';
import clients_4 from '../img/clients/keep-certified-partner.png';

import Expereince from '../components/AboutUs/Expereince'
import Whatwedo from '../components/AboutUs/Whatwedo'
import Team from '../components/AboutUs/Team'


const AboutPage = () => (
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
				
				<span className="section-subheading-heading">Our Story</span>
				<h1 className="section-heading">
					Helping millions grow better.
				</h1>
				<ul className="breadcrumbs">
					<li> <Link to="/">Home</Link> \</li>
					<li>About</li>
				</ul>
			</div>
		</section>
		<section className="about-us-section-1  bg-white">
        <div className="container">
            <div className="main-panel">
                <div className="row">
                    <div className="col-lg-5 mb-4">
                        <div className="play-video-thumbnial">
                            <img src={about_top} className="img-fluid " alt=""/>
                            <div className="play-button">
                                <a href="" className="video-area-popup">
                                    <i className="fa fa-play"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <p className="mb-0 sub-heading">Our Story</p>
                        
                        <h2 className="section-heading-2">One Linear Here </h2>
                        <p className="label-text">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
	<Expereince />
	<Whatwedo />
   
    <section className="about-history-section timeline mb-4 pb-4" >
        <div className="container">
                <span className="section-subheading-heading">Our History</span>
                <h3 className="section-heading text-center">
                    We Grow Your Business
                </h3>
                <div className="row justify-content-center">
                    <div className=" col-lg-10">
                            <div className="history-block ">
                                    <div className="row middle-line position-relative">
                                           <div className="col-md-6 history-block-single">
                                               <div className="thumbnial p-3">
                                                   <div className="thumbnial-body ">
                                                       <p className="h5">Title Here</p>
                                                       <p className="details">
                                                            LStop tearing your hair out over seemingly analytics reports. We'll set them up for you the way.
                                                       </p>
                                                   </div>
                                                   <div className="year-and-month">
                                                       March
                                                       2013
                                                   </div>
                                               </div>
                                           </div>
                                           <div className="col-md-6  history-block-single">
                                                <div className="thumbnial p-3">
                                                   <div className="thumbnial-body ">
                                                       <p className="h5">Title Here</p>
                                                       <p className="details">
                                                            LStop tearing your hair out over seemingly analytics reports. We'll set them up for you the way.
                                                       </p>
                                                   </div>
                                                   <div className="year-and-month">
                                                       March
                                                       2013
                                                   </div>
                                               </div>
                                           </div>
                                            <div className="col-md-6  history-block-single">
                                                <div className="thumbnial p-3">
                                                   <div className="thumbnial-body ">
                                                       <p className="h5">Title Here</p>
                                                       <p className="details">
                                                            LStop tearing your hair out over seemingly analytics reports. We'll set them up for you the way.
                                                       </p>
                                                   </div>
                                                   <div className="year-and-month">
                                                       March
                                                       2013
                                                   </div>
                                               </div>
                                           </div>
                                            <div className="col-md-6  history-block-single">
                                                <div className="thumbnial p-3">
                                                   <div className="thumbnial-body ">
                                                       <p className="h5">Title Here</p>
                                                       <p className="details">
                                                            LStop tearing your hair out over seemingly analytics reports. We'll set them up for you the way.
                                                       </p>
                                                   </div>
                                                   <div className="year-and-month">
                                                       March
                                                       2013
                                                   </div>
                                               </div>
                                           </div>
                                            <div className="col-md-6  history-block-single">
                                                <div className="thumbnial p-3">
                                                   <div className="thumbnial-body ">
                                                       <p className="h5">Title Here</p>
                                                       <p className="details">
                                                            LStop tearing your hair out over seemingly analytics reports. We'll set them up for you the way.
                                                       </p>
                                                   </div>
                                                   <div className="year-and-month">
                                                       March
                                                       2013
                                                   </div>
                                               </div>
                                           </div>
                                            <div className="col-md-6  history-block-single">
                                                <div className="thumbnial p-3">
                                                   <div className="thumbnial-body ">
                                                       <p className="h5">Title Here</p>
                                                       <p className="details">
                                                            LStop tearing your hair out over seemingly analytics reports. We'll set them up for you the way.
                                                       </p>
                                                   </div>
                                                   <div className="year-and-month">
                                                       March
                                                       2013
                                                   </div>
                                               </div>
                                           </div>
                                            <div className="col-md-6  history-block-single">
                                                <div className="thumbnial p-3">
                                                   <div className="thumbnial-body ">
                                                       <p className="h5">Title Here</p>
                                                       <p className="details">
                                                            LStop tearing your hair out over seemingly analytics reports. We'll set them up for you the way.
                                                       </p>
                                                   </div>
                                                   <div className="year-and-month">
                                                       March
                                                       2013
                                                   </div>
                                               </div>
                                           </div>
                                            <div className="col-md-6  history-block-single">
                                                <div className="thumbnial p-3">
                                                   <div className="thumbnial-body ">
                                                       <p className="h5">Title Here</p>
                                                       <p className="details">
                                                            LStop tearing your hair out over seemingly analytics reports. We'll set them up for you the way.
                                                       </p>
                                                   </div>
                                                   <div className="year-and-month">
                                                       March
                                                       2013
                                                   </div>
                                               </div>
                                           </div>
                                          
                                       </div>
                               </div>
                    </div>
                </div>
               
           

        </div>
    </section>
   <Team />
    <section className="about-history-section pt-0">
        <div className="container">
            <div className="main-panel pb-0">
                <div className="ceo-message-block">
                    <div className="row justify-content-center">
                        <div className=" col-lg-8 col-md-10">
                            <div className="ceo-message">
                                <p>Success is making those who believed in you look brilliant.
                                </p> 
                            </div>
                            <div className="text-right">
                                <span className="d-block h5">Raj</span> 
                                <span>Founder of QL Tech</span> 
                            </div>
                        </div>
                    </div>
                        
                </div>
            </div>
        </div>
    </section>
	</Layout>
)

export default AboutPage