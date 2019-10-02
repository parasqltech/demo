import React from "react"
import { Link } from "gatsby"
import Layout from '../components/Layout'
import Particles from 'react-particles-js';
import team from  "../img/team/member-1.png"
import testmonial from  "../img/testmonial-author.png"
import quote from  "../img/quote.png"
import Helmet from 'react-helmet'
import Expereince from '../components/AboutUs/Expereince'
import Whatwedo from '../components/AboutUs/Whatwedo'
import Team from '../components/AboutUs/Team'
import AboutFirstSection from '../components/AboutUs/AboutFirstSection'


const AboutPage = () => (
	<Layout>
		<Helmet>
		<title>About US | Web development &amp; marketing agency Perth, Australia- QL Tech</title>
		<meta name="title" content="About US | Web development &amp; marketing agency Perth, Australia- QL Tech"></meta>
		<meta name="description" content="QL Tech is Australia's leading web development company, specialized in offering custom web development, CRM Services, digital marketing solutions. To know more, contact us @ +61 (0)8 6262 3559"></meta>
		 <meta name="keywords" content="QL Tech about us, about us, Mobile App Development, hubspot crm, marketing agency, Zoho crm service, content agency Perth"></meta>
		<meta property="og:type" content="website"></meta>
		<meta property="og:title" content="About US | Web development &amp; marketing agency Perth, Australia- QL Tech"></meta>
		<meta property="og:description" content="QL Tech is Australia's leading web development company, specialized in offering custom web development, CRM Services, digital marketing solutions. To know more, contact us @ +61 (0)8 6262 3559"></meta>
		<meta property="twitter:card" content="summary_large_image"></meta>
		<meta property="twitter:title" content="About US | Web development &amp; marketing agency Perth, Australia- QL Tech"></meta>
		<meta property="twitter:description" content="QL Tech is Australia's leading web development company, specialized in offering custom web development, CRM Services, digital marketing solutions. To know more, contact us @ +61 (0)8 6262 3559"></meta>
		</Helmet>
		<div className="bg">
            <div className="area-bg">
            <Particles params={{"particles": {"number": {"value": 80,"density": {"enable": true,"value_area": 1600}},"color": {"value": ["#fd8788", "#f1aea6", "#21a6df", "#75d3ff"]},"shape": {"type": "circle","stroke": {"width": 0,"color": "#000000",},"polygon": {"nb_sides": 5,},"image": {"src": "img/github.svg","width": 100,"height": 100}},"opacity": {"value": 0.4489553770423464,"random": false,"anim": {"enable": false,"speed": 40,"opacity_min": 0.1,"sync": false}},"size": {"value": 5,"random": true,"anim": {"enable": false,"speed": 40,"size_min": 0.1,"sync": false}},"line_linked": {"enable": true,"distance": 150,"color": "#ffffff","opacity": 0.4,"width": 1},"move": {"enable": true,"speed": 6,"direction": "none","random": false,"straight": false,"out_mode": "out","bounce": false,"attract": {"enable": false,"rotateX": 600,"rotateY": 1200}}},"interactivity": {"detect_on": "canvas","events": {"onhover": {"enable": true,"mode": "grab"},"onclick": {"enable": true,"mode": "push"},"resize": true},"modes": {"grab": {"distance": 140,"line_linked": {"opacity": 1}},"bubble": {"distance": 400,"size": 40,"duration": 2,"opacity": 8,"speed": 3},"repulse": {"distance": 200,"duration": 0.4},"push": {"particles_nb": 4},"remove": {"particles_nb": 2}}},"retina_detect": true}} />
            </div>
        </div>
		<section className="breadcumbs-and-title-section">
			 
			<div className="container text-center">
				
				<span className="section-subheading-heading">Our Story</span>
				<h1 className="section-heading">
					Helping businesses grow online
				</h1>
				<ul className="breadcrumbs">
					<li> <Link to="/">Home</Link> \</li>
					<li>About</li>
				</ul>
			</div>
		</section>
		
	<AboutFirstSection/>
	<Whatwedo />
   
    <section className="about-history-section timeline mb-4 pb-4" >
        <div className="container">
                <span className="section-subheading-heading">Our History</span>
                <h3 className="section-heading text-center">
                    Milestones we are proud of 
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
    <section className="about-history-section pt-0 bg-white">
        <div className="container">
            <div className="main-panel pb-0">
                <div className="ceo-message-block">
                    <div className="row justify-content-center">
                        <div className=" col-lg-8 col-md-10">
                            <div className="ceo-message">
                                <p>Enjoy the consistent pursuit of your potential
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
	<Expereince />
	</Layout>
)

export default AboutPage