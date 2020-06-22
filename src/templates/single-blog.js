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
import Helmet from 'react-helmet'

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
		<Helmet>
		<title>{blog.edges[0].node.yoast.title} | QL Tech, Australia</title>
		<meta name="title" content={blog.edges[0].node.yoast.title}></meta>
		<meta name="description" content={blog.edges[0].node.yoast.metadesc}></meta>
		 <meta name="keywords" content={blog.edges[0].node.yoast.metakeywords}></meta>
		<meta property="og:type" content="website"></meta>
		<meta property="og:title" content={blog.edges[0].node.yoast.opengraph_title}></meta>
		<meta property="og:description" content={blog.edges[0].node.yoast.opengraph_description}></meta>
		<meta property="twitter:card" content="summary_large_image"></meta>
		<meta property="twitter:title" content={blog.edges[0].node.yoast.title}></meta>
		<meta property="twitter:description" content={blog.edges[0].node.yoast.twitter_description}></meta>
		</Helmet>
			<div className="bg">
					<div className="area-bg">
						 <Particles params={{"particles": {"number": {"value": 80,"density": {"enable": true,"value_area": 1600}},"color": {"value": ["#fd8788", "#f1aea6", "#21a6df", "#75d3ff"]},"shape": {"type": "circle","stroke": {"width": 0,"color": "#000000",},"polygon": {"nb_sides": 5,},"image": {"src": "img/github.svg","width": 100,"height": 100}},"opacity": {"value": 0.4489553770423464,"random": false,"anim": {"enable": false,"speed": 40,"opacity_min": 0.1,"sync": false}},"size": {"value": 5,"random": true,"anim": {"enable": false,"speed": 40,"size_min": 0.1,"sync": false}},"line_linked": {"enable": true,"distance": 150,"color": "#ffffff","opacity": 0.4,"width": 1},"move": {"enable": true,"speed": 6,"direction": "none","random": false,"straight": false,"out_mode": "out","bounce": false,"attract": {"enable": false,"rotateX": 600,"rotateY": 1200}}},"interactivity": {"detect_on": "canvas","events": {"onhover": {"enable": true,"mode": "grab"},"onclick": {"enable": true,"mode": "push"},"resize": true},"modes": {"grab": {"distance": 140,"line_linked": {"opacity": 1}},"bubble": {"distance": 400,"size": 40,"duration": 2,"opacity": 8,"speed": 3},"repulse": {"distance": 200,"duration": 0.4},"push": {"particles_nb": 4},"remove": {"particles_nb": 2}}},"retina_detect": true}} />
					</div>
				</div>
				<section className="events-section-1 article-section-1 blog-section pt-0">
       <div className="container bg-white">
           <div className="main-panel">
                <div className="row justify-content-center">
                    <div className="col-xl-9 col-lg-10">
                        <div className="event-detail-continer ">
                            <h1 className="section-heading mb-2" dangerouslySetInnerHTML={{ __html: blog.edges[0].node.title}} ></h1>
                           
                            
                        </div>
						<div className="event-content-block" dangerouslySetInnerHTML={{ __html: blog.edges[0].node.content}} >
						</div> 
                        
                        
                        <div className="clearfix nav-controls border rounded mb-4">
                            {(blog.edges[0].previous != null) ? (<Link to={"/hub"+blog.edges[0].previous.categories[0].slug+"/"+blog.edges[0].previous.slug+"/"} className="nav-control-left float-left  rounded p-1">
                               <span className="label-text  d-block">Previous Post</span>
                               <span className="section-heading-3  mb-0">{blog.edges[0].previous.title}</span>
                            </Link>) : ('')}
							
							{(blog.edges[0].next != null) ? (<Link to={"/hub"+blog.edges[0].next.categories[0].slug+"/"+blog.edges[0].next.slug+"/"} className="nav-control-left float-right text-right  rounded p-1">
                               <span className="label-text  d-block">Next Post</span>
                               <span className="section-heading-3  mb-0">{blog.edges[0].next.title}</span>
                            </Link>) : ('')}
							
                        </div>
                        <div className="author-details-block border-bottom  pb-4 mb-4">
							<div className="author-image blog-author-image">
							
							{(blog.edges[0].node.author.avatar_urls != '') ? (<img src={blog.edges[0].node.author.avatar_urls.wordpress_96} className="img-fluid"/>) : ('')}
							
							
									
							</div>
							<div className="author-info blog-author-info">
									<span className="sub-heading ">Written By</span>
									<h4 className="section-heading-3 mb-2 mt-0">{blog.edges[0].node.author.name}</h4>
									<p className="mb-0">{blog.edges[0].node.author.description}</p>
							</div>
						</div>
                        </div>
                   
                    
                </div>
            </div>
       </div>
	
	   
	   <div className="container bg-white">
      <Disqus config={disqusConfig} />
	  </div>
    </section>
		
      
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
				categories {
				  slug
				}
			}	
			previous {
				slug
				title
				categories {
				  slug
				}
			}
			node {
				id
				title
				content
				wordpress_id
				slug
				acf {
				  feature_image{
					  source_url
				  }
				  posted_by
				}
				author {   
				  name
				  description
				  avatar_urls {
					wordpress_96
				  }
				}
				yoast {
				focuskw
				linkdex
				meta_robots_adv
				meta_robots_nofollow
				meta_robots_noindex
				metadesc
				metakeywords
				opengraph_description
				opengraph_image
				opengraph_title
				redirect
				title
				twitter_description
				twitter_image
			  }
			}
		}
    }
	
	
  }
  
`