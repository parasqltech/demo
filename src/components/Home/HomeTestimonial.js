import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link, StaticQuery, graphql } from 'gatsby'
import quote from '../../img/quote.png';

const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };


const HomeTestimonial = () => (
  <StaticQuery
    query={graphql`
      query {
            allWordpressWpTestimonial {
                edges {
                  node {
                    id
                    acf {
                      desgination
                      descprition
                      name
                      image {
                        source_url
                      }
                    }
                  }
                }
              }
            
        }
    `}
    render={data => (
		<section className="home-testimonial-section bg-white">
		
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8 ">
                    <h2 className="section-heading text-center wow fadeIn">
                        <span>Testimonials</span>
                        Hear from our loved customers</h2>
                </div>
            </div>
        </div>
		<Slider {...settings} className="testiomonial-slider" >
            {data &&
                        data.allWordpressWpTestimonial &&
                        data.allWordpressWpTestimonial.edges.map(
                    
                        
                    
                        prop => {
                        return ( 
							
                        <div className="customer-testimonial-block">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-xl-6 col-lg-6 col-md-4 col-sm-4 col-6">
                                        <div className="author-image">
                                            <img src={prop.node.acf.image.source_url} className="img-fluid" alt=""/>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-8 col-sm-8">
                                        <div className="author-content">
                                            <div className="quote">
                                                <img src={quote} className="img-fluid" alt=""/>
                                            </div>
                                            <p className="label-text">
                                                <span>{(prop.node.acf.descprition).substring(0, 400)}</span>
												{(prop.node.acf.descprition.length  > 400 ? (<span>...<a href="javascript:;" className="readmore" >Read More</a></span>):(''))}
												
												
												
                                            </p>
                                            <div className="author-info">
                                                <h4>{prop.node.acf.name}</h4>
                                                <p>{prop.node.acf.desgination}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
						
				
						
						
                          )
                        }
                    )}  
			</Slider>
        
    </section>          	
    )}
	/>
)

export default HomeTestimonial
