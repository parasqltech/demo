import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link, StaticQuery, graphql } from 'gatsby'
import work from '../../img/work.png';
import portfolio from '../../img/portfolio/1.jpg';
import homeTestimonialimage from '../../img/work.png'
const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 3,
	  variableWidth: true,
	  autoplay: true,
	  autoplaySpeed: 4000,
    };


const ClientSlider = () => (
  <StaticQuery
    query={graphql`
      query {
                   
                    allWordpressWpHomeprocess {
                        edges {
                          node {
                            id
                            acf {
                              title
                              descprtiton
                            }
                          }
                        }
                      }
                      allWordpressWpWorks(limit: 8) {
                        edges {
                          node {
                            id
                            acf {
                              image {
                                source_url
                                link
                              }
                              title
                              short_descprition
                            }
                          }
                        }
                      }
                    
                }
    `}
    render={data => (
		<section className="home-work-section">
        
        <div className="section-icons">
            
            <div className="icon-one" ></div>
            
            <div className="icon-two" ></div>
            
            <div className="icon-three" ></div>
        </div>
       
        <div className="container">
            <div className="row clearfix">

               
                <div className="image-column col-lg-6 col-md-6 col-sm-12">
                    <div className="inner-column wow fadeInLeft animated" data-wow-delay="0ms" data-wow-duration="1500ms"
                        >
                        <div className="image">
                            <img src={work} className="img-fluid" alt=""/>
                        </div>
                    </div>
                </div>

                
                <div className="content-column col-lg-6 col-md-6 col-sm-12">
                    {data &&
                                    data.allWordpressWpHomeprocess &&
                                    data.allWordpressWpHomeprocess.edges.map(
                                
                                    
                                
                                    prop => {
                                    return (    
                                        <div>
                                <div class="inner-column">
                                    
                                    <span class="section-subheading-heading text-left mb-2">Our Processes</span> 
                                    <h2 class="section-heading text-left mb-4">{prop.node.acf.title}</h2>
                                    <p class="label-text mb-4">{prop.node.acf.descprtiton}</p>

                                    <a href="#" class="btn btn-secondary-link"><span>View More Work <i class="fa fa-long-arrow-right ml-1"></i></span></a>
                                </div>
                                </div>
                                      )
                                    }
                                )}
                </div>

            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="work-portfolio-module">
                        
						<Slider {...settings} className="home-portfolio-slider" >
                            {data &&
                                    data.allWordpressWpWorks &&
                                    data.allWordpressWpWorks.edges.map(
                                
                                    
                                
                                    prop => {
                                    return (    
                                        <div class="work-thumbnial" >
                                            <div class="work-thumbnail-image">
                                                <img src={prop.node.acf.image.source_url} class="img-fluid" alt=""/>
                                            </div>
                                            <div class="work-thumbnail-details">
                                                <p class="work-title">{prop.node.acf.title}</p>
                                                <p class="label-text">{prop.node.acf.short_descprition}</p>
                                                <a href={prop.node.acf.image.link} class="btn btn-secondary-link">Read More <i class="fa fa-long-arrow-right ml-1"></i></a>
                                            </div>
                                        </div>
                                         )
                                        }
                                    )}   
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    </section>                    	
    )}
	/>
)

export default ClientSlider
