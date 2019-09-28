import React, {Component} from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import Layout from '../components/Layout'
import Lightbox from '../components/Lightbox'
import Particles from 'react-particles-js';
import Helmet from 'react-helmet'
import quote from  "../img/quote.png"


class SingleWork extends Component {
  render() {
    const work = this.props.data.allWordpressWpWorks
	console.log(work);
    return (
      <Layout>
	  <Helmet>
			<title>{work.edges[0].node.yoast.title} - QL Tech</title>
			<meta name="title" content={work.edges[0].node.yoast.title}></meta>
			<meta name="description" content={work.edges[0].node.yoast.metadesc}></meta>
			 <meta name="keywords" content={work.edges[0].node.yoast.metakeywords}></meta>
			<meta property="og:type" content="website"></meta>
			<meta property="og:title" content={work.edges[0].node.yoast.opengraph_title}></meta>
			<meta property="og:description" content={work.edges[0].node.yoast.opengraph_description}></meta>
			<meta property="twitter:card" content="summary_large_image"></meta>
			<meta property="twitter:title" content={work.edges[0].node.yoast.title}></meta>
			<meta property="twitter:description" content={work.edges[0].node.yoast.twitter_description}></meta>
			</Helmet>
			<div className="bg">
			<div className="area-bg">
				<Particles params={{"particles": {"number": {"value": 80,"density": {"enable": true,"value_area": 1600}},"color": {"value": ["#fd8788", "#f1aea6", "#21a6df", "#75d3ff"]},"shape": {"type": "circle","stroke": {"width": 0,"color": "#000000",},"polygon": {"nb_sides": 5,},"image": {"src": "img/github.svg","width": 100,"height": 100}},"opacity": {"value": 0.4489553770423464,"random": false,"anim": {"enable": false,"speed": 40,"opacity_min": 0.1,"sync": false}},"size": {"value": 5,"random": true,"anim": {"enable": false,"speed": 40,"size_min": 0.1,"sync": false}},"line_linked": {"enable": true,"distance": 150,"color": "#ffffff","opacity": 0.4,"width": 1},"move": {"enable": true,"speed": 6,"direction": "none","random": false,"straight": false,"out_mode": "out","bounce": false,"attract": {"enable": false,"rotateX": 600,"rotateY": 1200}}},"interactivity": {"detect_on": "canvas","events": {"onhover": {"enable": true,"mode": "grab"},"onclick": {"enable": true,"mode": "push"},"resize": true},"modes": {"grab": {"distance": 140,"line_linked": {"opacity": 1}},"bubble": {"distance": 400,"size": 40,"duration": 2,"opacity": 8,"speed": 3},"repulse": {"distance": 200,"duration": 0.4},"push": {"particles_nb": 4},"remove": {"particles_nb": 2}}},"retina_detect": true}} />
			</div>
		</div>	
		<section className="work-details-section-1  blank-section">
        <div className="main-panel">
            <div className="container bg-white">
                <h1 className="section-heading text-left mb-1">
                    {work.edges[0].node.acf.title_main}
                </h1>
                <p className="sub-heading">{work.edges[0].node.acf.sub_title}</p>

                <div className="breif-info main-panel">
                    <div className="row justify-content-center">
                        <div className="col-md-4 col-sm-6 text-center">
                            <p className="breif-text">
                                <span className="percentage">{work.edges[0].node.acf.revenue_1} %</span> 
                                <span>increase in revenue</span>
                            </p>
                        </div>
                        <div className="col-md-4 col-sm-6 text-center">
                            <p className="breif-text">
                                <span className="percentage">{work.edges[0].node.acf.revenue_2} %</span> 
                                <span>increase in revenue</span>
                            </p>
                        </div>
                        <div className="col-md-4 col-sm-6 text-center">
                            <p className="breif-text">
                                <span className="percentage">{work.edges[0].node.acf.revenue_3} %</span> 
                                <span>increase in revenue</span>
                            </p>
                        </div>
                    </div>
                </div>
               
                
                <div className="main-panel">
                    <div className="row justify-content-between ">
                        <div className="col-xl-8 col-lg-8">
                            
                            <p className="label-text mb-4" dangerouslySetInnerHTML={{ __html: work.edges[0].node.content }}  ></p>
                            <h2 className="section-heading-2 mb-2">Problem Statement</h2>
                            <p className="label-text mb-4" dangerouslySetInnerHTML={{ __html: work.edges[0].node.acf.problem_statement }} ></p>
                            <div className="text-center">
							<iframe width="560" height="315" src={work.edges[0].node.acf.youtube_video_url} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
							</div>
                             <div className="text-center">
                                <span className="custom-break-line">
                                    <span className="custom-break-line-one"></span>
                                    <span  className="custom-break-line-two"></span>
                                </span>
                            </div>
                            <h2 className="section-heading-2 mb-2">The QL Approach To The Business</h2>
                            <p className="label-text mb-4" dangerouslySetInnerHTML={{ __html: work.edges[0].node.acf.the_ql_approach_to_the_business }} ></p>
                           
                            <div className="text-center">
                                    <span className="custom-break-line">
                                       <span className="custom-break-line-one"></span>
                                       <span  className="custom-break-line-two"></span>
                                   </span>
                               </div>
                            <h2 className="section-heading-2 mb-2"> How The Client's Business Transformed</h2>
                            <p className="label-text mb-4" dangerouslySetInnerHTML={{ __html: work.edges[0].node.acf.how_the_clients_business_transformed }} ></p>    
                        </div>
                        
                        <div className="col-xl-3 col-lg-4">
                            <h5 className="section-heading-3">About us</h5>
                            <p className="label-text" dangerouslySetInnerHTML={{ __html: work.edges[0].node.acf.about_company }} ></p>
                            <p className="label-text mb-0"><b>Company Name: </b><a href="" className="nav-link">{work.edges[0].node.acf.company_name}</a></p>
                            <p className="label-text mb-0"><b>Company Size: </b><a href="" className="nav-link">{work.edges[0].node.acf.company_size}</a></p>
                            <p className="label-text mb-4"><b>Location: </b><a href="" className="nav-link">{work.edges[0].node.acf.location}</a></p>
                           
                            
                            <div className="form-section postion-sticky">
                                <form method="POST" action="">
                                        <div className="bg-light p-3">
                                            <h2 className="section-heading-3 text-center text-primary"> Contact Us</h2>
                                            <form method="POST" action="">
                                                <div className="row ">
                                                    <div className="col-md-12 mb-2">
                                                        <label className="label-text">First Name:</label>
                                                        <input type="text" className="form-control" placeholder=""/>
                                                    </div>
                                                    <div className="col-md-12 mb-2">
                                                        <label className="label-text">Last Name:</label>
                                                        <input type="text" className="form-control" placeholder=""/>
                                                    </div>
                                                    <div className="col-md-12 mb-2">
                                                        <label className="label-text">Email:</label>
                                                        <input type="text" className="form-control" placeholder=""/>
                                                    </div>
                                                    <div className="col-md-12 mb-2">
                                                        <label className="label-text">Phone Number:</label>
                                                        <input type="text" className="form-control" placeholder=""/>
                                                    </div>
                                                    <div className="col-md-12 mb-3">
                                                        <label className="label-text">Your Goal:</label>
                                                        <textarea type="text"  className="form-control resize" placeholder=""></textarea>
                                                    </div>
                                                    <div className="col-md-12  mb-0 ">
                                                        <button className="btn btn-default border-0 btn-block mt-0">Submit</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>   
        </div>
    </section>
	<section className="home-testimonial-section">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8 ">
                    <span className="section-subheading-heading">Testimonial</span> 
                    <h2 className="section-heading text-center wow fadeIn">
                        Our customers loves us
                    </h2>
                </div>
            </div>
        </div>
        <div className="testiomonial-slider ">
            <div className="customer-testimonial-block">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-6 col-md-4 col-sm-4 col-6">
                            <div className="author-image">
                                <img src={work.edges[0].node.acf.image.source_url} className="img-fluid" alt=""/>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-8 col-sm-8">
                            <div className="author-content">
                                <div className="quote">
                                    <img src={quote} className="img-fluid" alt=""/>
                                </div>
                                <p className="label-text">{work.edges[0].node.acf.testimonial_}</p>
                                <div className="author-info">
                                    <h4>{work.edges[0].node.acf.client_name}</h4>
                                    <p>{work.edges[0].node.acf.designationcompany}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
	<section className="what-you-get ">
        <div className="container bg-white">
            <h2 className="section-heading text-center mb-1">What this guide has to offfer?</h2>
            <p className="sub-heading text-center pb-4" >Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <div className="row">
                {
				work.edges[0].node.acf.what_this_guide_has_to_offfer &&
				work.edges[0].node.acf.what_this_guide_has_to_offfer.map(
                (prop,i) => {
					return (
						<div key={i} className=" col-lg-4 col-md-6 customer-benifil">
						<div className="thumbnial text-center"  data-wow-delay="0.4s" data-tilt=""
						data-tilt-max="10" data-tilt-scale="1">
							<div className="thumbnial-icon"><i className="fa fa-home"></i> </div>
							<h4 className="section-heading-2"> {prop.offer_title}</h4>
							<p className="label-text">{prop.offer_short_desc}</p>
						</div>
					</div>
					)
                }
                )}
				
				
				
                
                
            </div> 
            
            
            
        </div>  
    </section>	
		
		
		
		
			 
		</Layout>
    )
  }
}

SingleWork.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default SingleWork

export const pageQuery = graphql`
  query($id: String!) {
    allWordpressWpWorks(filter: {id: { eq: $id }}) {
		edges {
			node {
				title
				content
				acf {
			youtube_video_url		
          about_company
          client_name
          company_name
          company_size
          designationcompany
          how_the_clients_business_transformed
          image {
            source_url
          }
          location
          long_descprition
          problem_statement
          revenue_1
          revenue_2
          revenue_3
          short_descprition
          sub_title
          testimonial_
          the_ql_approach_to_the_business
          title
          title_main
          what_this_guide_has_to_offfer {
            offer_short_desc
            offer_title
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
		}}
    }
  }
`