import React, {Component} from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import Layout from '../components/Layout'
import Lightbox from '../components/Lightbox'
import Particles from 'react-particles-js';


class SingleProject extends Component {
  render() {
    const event = this.props.data.allWordpressWpEvents
	console.log(event);
    return (
      <Layout>
			<div className="bg">
			<div className="area-bg">
				<Particles params={{"particles": {"number": {"value": 50,"density": {"enable": true,"value_area": 800}},"color": {"value": ["#FE395F", "#54DBF0", "#ad7cff", "#48d6ee"]},"shape": {"type": "polygon","stroke": {"width": 0,"color": "#000000",},"polygon": {"nb_sides": 10,},"image": {"src": "img/github.svg","width": 100,"height": 100}},"opacity": {"value": 0.2,"random": false,"anim": {"enable": false,"speed": 1,"opacity_min": 0.1,"sync": false}},"size": {"value": 5,"random": true,"anim": {"enable": false,"speed": 40,"size_min": 0.1,"sync": false}},"line_linked": {"enable": true,"distance": 150,"color": "#ffffff","opacity": 0.4,"width": 1},"move": {"enable": true,"speed": 6,"direction": "none","random": false,"straight": false,"out_mode": "out","bounce": false,"attract": {"enable": false,"rotateX": 600,"rotateY": 1200}}},"interactivity": {"detect_on": "canvas","events": {"onhover": {"enable": true,"mode": "grab"},"onclick": {"enable": true,"mode": "push"},"resize": true},"modes": {"grab": {"distance": 140,"line_linked": {"opacity": 1}},"bubble": {"distance": 400,"size": 40,"duration": 2,"opacity": 8,"speed": 3},"repulse": {"distance": 200,"duration": 0.4},"push": {"particles_nb": 4},"remove": {"particles_nb": 2}}},"retina_detect": true}} />
			</div>
		</div>	
		<section className="events-section-1  pt-0" >
       <div className="container">
           <div className="main-panel">
                <div className="row justify-content-center">
                   
                    <div className="col-xl-9 col-lg-10 bg-white">
                        <h1 className="section-heading ">
                            {event.edges[0].node.title}
                        </h1>
                         
                        <div className="event-detail-continer ">
                            <div className="event-image ">
                                <img src={event.edges[0].node.acf.image} className="img-fluid w-100" alt=""/>
                            </div>
                            <div className="event-date-and-place">
                                <ul className="date-and-place justify-content-start">
                                    <li><i className="fa fa-calendar"></i> <span>Date : {event.edges[0].node.acf.date} </span></li>
                                    <li><i className="fa fa fa-clock-o"></i> <span>Time : 9PM - 11PM</span></li>
                                    <li><i className="fa fa-map-marker"></i> <span>Location : Ahmedabad</span></li>
                                </ul>
                            </div>
                            <div className="event-content-block">
                                <p dangerouslySetInnerHTML={{ __html: event.edges[0].node.acf.long_desc}} />
                            <h1>Gallery :</h1>    
                               <Lightbox images={event.edges[0].node.acf.gallery} />
                             </div>
                        </div>
                    </div>
                    
                </div>
            </div>
       </div>
    </section>
		
		
		
		
		
			 
		</Layout>
    )
  }
}

SingleProject.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default SingleProject

export const pageQuery = graphql`
  query($id: String!) {
    allWordpressWpEvents(filter: {id: { eq: $id }}) {
		edges {
			node {
				title
				acf{
					date
					image
					long_desc
					short_desc
					gallery
				}
		}}
    }
  }
`