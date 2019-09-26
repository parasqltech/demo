import React, {Component} from "react"
import { graphql,Link } from "gatsby"
import PropTypes from "prop-types"
import Layout from '../components/Layout'
import Lightbox from '../components/Lightbox'
import Particles from 'react-particles-js';
import about from '../img/about-us.png';
import quote from  "../img/quote.png"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Moment from 'react-moment';
import 'moment-timezone';
import { Disqus, CommentCount } from 'gatsby-plugin-disqus'

const settings = {
      dots: false,
	  prevArrow: false,
	  nextArrow: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
	  autoplay: true,
	  autoplaySpeed: 2000,
      
    };


class Singleblog extends Component {
  render() {
    const blog = this.props.data.allWordpressPost
	const id = this.props.data.allWordpressPost.edges[0].node.wordpress_id
	const title = this.props.data.allWordpressPost.edges[0].node.title
	let disqusConfig = {
    url: "",
    identifier: id,
    title: title,
  }
   
   
    return (
      <Layout>
			<div className="bg">
					<div className="area-bg">
						 <Particles params={{"particles": {"number": {"value": 50,"density": {"enable": true,"value_area": 800}},"color": {"value": ["#FE395F", "#54DBF0", "#ad7cff", "#48d6ee"]},"shape": {"type": "polygon","stroke": {"width": 0,"color": "#000000",},"polygon": {"nb_sides": 10,},"image": {"src": "img/github.svg","width": 100,"height": 100}},"opacity": {"value": 0.2,"random": false,"anim": {"enable": false,"speed": 1,"opacity_min": 0.1,"sync": false}},"size": {"value": 5,"random": true,"anim": {"enable": false,"speed": 40,"size_min": 0.1,"sync": false}},"line_linked": {"enable": true,"distance": 150,"color": "#ffffff","opacity": 0.4,"width": 1},"move": {"enable": true,"speed": 6,"direction": "none","random": false,"straight": false,"out_mode": "out","bounce": false,"attract": {"enable": false,"rotateX": 600,"rotateY": 1200}}},"interactivity": {"detect_on": "canvas","events": {"onhover": {"enable": true,"mode": "grab"},"onclick": {"enable": true,"mode": "push"},"resize": true},"modes": {"grab": {"distance": 140,"line_linked": {"opacity": 1}},"bubble": {"distance": 400,"size": 40,"duration": 2,"opacity": 8,"speed": 3},"repulse": {"distance": 200,"duration": 0.4},"push": {"particles_nb": 4},"remove": {"particles_nb": 2}}},"retina_detect": true}} />
					</div>
				</div>
				<section className="events-section-1 article-section-1 blog-section pt-0">
       <div className="container bg-white">
           <div className="main-panel">
                <div className="row justify-content-center">
                    <div className="col-xl-9 col-lg-10">
                        <div className="event-detail-continer ">
                            <h1 className="section-heading mb-2">{blog.edges[0].node.title}</h1>
                           
                            <div className="event-image">
                                <img src={blog.edges[0].node.acf.feature_image} className="img-fluid w-100" alt=""/>
                            </div>
                            <div className="event-date-and-place">
                                <ul className="date-and-place justify-content-between">
                                    <li><i className="fa fa-calendar"></i> <span>Date : <Moment format="DD MMM Y">
												{blog.edges[0].node.date}
											</Moment> </span></li>
                                    <li><i className="fa fa-user"></i> <span>Posted by : {blog.edges[0].node.acf.posted_by}</span></li>
                                </ul>
                            </div>
                            
                        </div>
						<div className="event-content-block" dangerouslySetInnerHTML={{ __html: blog.edges[0].node.content}} >
						</div> 
                        
                        
                        <div className="clearfix nav-controls border rounded mb-4">
                            {(blog.edges[0].node.previous) ? (<Link to={blog.edges[0].node.previous.slug} className="nav-control-left float-left  rounded p-1">
                               <span className="label-text  d-block">Previous Post</span>
                               <span className="section-heading-3  mb-0">{blog.edges[0].node.previous.title}</span>
                            </Link>) : ('')}
							
							{(blog.edges[0].node.next) ? (<Link to={blog.edges[0].node.next.slug} className="nav-control-left float-right text-right  rounded p-1">
                               <span className="label-text  d-block">Next Post</span>
                               <span className="section-heading-3  mb-0">{blog.edges[0].node.next.title}</span>
                            </Link>) : ('')}
							
                        </div>
                        
                        </div>
                   
                    
                </div>
            </div>
       </div>
	   
    </section>
		
      
      <Disqus config={disqusConfig} />
		</Layout>
    )
  }
}

Singleblog.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default Singleblog

export const pageQuery = graphql`
  query($id: String!) {
    allWordpressPost(filter: {id: { eq: $id }}) {
		edges {
			next {
				slug
				title
			}	
			previous {
				slug
				title
			}
			node {
				id
				title
				content
				wordpress_id
				slug
				acf {
				  feature_image
				  posted_by
				}
			}
		}
    }
	
	
  }
  
`