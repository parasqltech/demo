import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Particles from 'react-particles-js';
const EventPage = () => (
  <StaticQuery
    query={graphql`
      query EventPostByID($pathSlug: String){
       allWordpressWpEvents(filter: {slug: { eq: $pathSlug }}){
			 edges {
			  node {
				title
				acf{
					date
					image
					long_desc
					short_desc
				}
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
		<section class="events-section-1  pt-0" >
       <div class="container">
           <div class="main-panel">
                <div class="row justify-content-center">
                   
                    <div class="col-xl-9 col-lg-10 bg-white">
                        <h1 class="section-heading ">
                            {data.allWordpressWpEvents.edges[0].node.title}
                        </h1>
                         
                        <div class="event-detail-continer ">
                            <div class="event-image ">
                                <img src={data.allWordpressWpEvents.edges[0].node.acf.image} class="img-fluid w-100" alt=""/>
                            </div>
                            <div class="event-date-and-place">
                                <ul class="date-and-place justify-content-start">
                                    <li><i class="fa fa-calendar"></i> <span>Date : {data.allWordpressWpEvents.edges[0].node.acf.date} </span></li>
                                    <li><i class="fa fa fa-clock-o"></i> <span>Time : 9PM - 11PM</span></li>
                                    <li><i class="fa fa-map-marker"></i> <span>Location : Ahmedabad</span></li>
                                </ul>
                            </div>
                            <div class="event-content-block">
                                <p dangerouslySetInnerHTML={{ __html: data.allWordpressWpEvents.edges[0].node.acf.long_desc}} />
                            <h1>Gallery :</h1>    
                               
                             </div>
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

export default EventPage
