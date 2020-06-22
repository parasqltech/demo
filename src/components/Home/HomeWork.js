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
      arrows : false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 2,
	  variableWidth: true,
	  autoplay: false,
	  autoplaySpeed: 2000,
	  cssEase: "linear",
	  mobileFirst: true,
	    responsive: [
    
    {
    breakpoint: 1199,
      settings:{
        variableWidth: true,
        slidesToShow: 3,
        slidesToScroll: 2,
		
      }
    },
    {
    breakpoint: 991,
    settings:{
      variableWidth: true,
      slidesToShow: 2,
      slidesToScroll: 1,
    }
  },
    
    
	{
      breakpoint: 768,
      settings:{
        slidesToShow: 1,
        slidesToScroll: 1,
		
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    };


const HomeWork = () => (
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
                      allWordpressWpWorks(limit: 10) {
                        edges {
                          node {
                            id
							slug
                            acf {
                              main_image {
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
		<section className="home-work-section bg-white">
        
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
                            <img data-src={work} className="img-fluid lazyload" alt=""/>
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
                                <div className="inner-column">
                                    
                                    <span className="section-subheading-heading text-left mb-2">Our Success</span> 
                                    <h2 className="section-heading text-left mb-4">{prop.node.acf.title}</h2>
                                    <p className="label-text mb-4">{prop.node.acf.descprtiton}</p>

                                    <Link to="/work/" className="btn btn-secondary-link"><span>View More Work <i className="fa fa-long-arrow-right ml-1"></i></span></Link>
                                </div>
                                </div>
                                      )
                                    }
                                )}
                </div>

            </div>
            <div className="row">
                <div className="col-md-12">
                    <span className="sub-heading  text-center d-block mb-0">Our Work</span>
					<h2 className="section-heading text-center d-block">Customer Stories</h2>
                    <div className="work-portfolio-module pt-0">
                        
						<Slider {...settings} className="home-portfolio-slider" >
                            {data &&
                                    data.allWordpressWpWorks &&
                                    data.allWordpressWpWorks.edges.map(
                                
                                    
                                
                                    prop => {
                                    return (    
                                        <div className="work-thumbnial" >
                                            <div className="work-thumbnail-image">
                                                {(prop.node.acf.main_image != null) ? (<img data-src={prop.node.acf.main_image.source_url} className="img-fluid lazyload" alt=""/>) : ('')}
                                            </div>
                                            <div className="work-thumbnail-details">
                                                <p className="work-title">{prop.node.acf.title}</p>
                                                <p className="label-text">{prop.node.acf.short_descprition}</p>
                                                <Link to={"/work/"+prop.node.slug+"/"} className="btn btn-secondary-link">Read More <i className="fa fa-long-arrow-right ml-1"></i></Link>
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

export default HomeWork
