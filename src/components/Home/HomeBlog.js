import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link, StaticQuery, graphql } from 'gatsby'
import blog_thubnail from '../../img/blog/blog-thubnial-1.jpg';
import author_image from '../../img/blog/author-image.png';
import BlogAuthor from '../../img/blog/author-image.png'

const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
	  variableWidth: true,
	  autoplay: true,
	  autoplaySpeed: 4000,
	  cssEase: "linear"
    };


const HomeBlog = () => (
  <StaticQuery
    query={graphql`
     query {
            allWordpressWpBlogarticles(limit: 10) {
                edges {
                  node {
                    link
                    acf {
                      date
                      title
                      written_by
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
		<section className="home-blog-section wow fadeIn">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8 ">
                    <h2 className="section-heading text-center wow fadeIn">
                        <span>Latest News</span>
                        Media Information
                    </h2>
                </div>
            </div>
            
            <div className="row">
                <div className="col-md-12">
					<Slider {...settings} className="home-blog-slider" >
                       {data &&
                        data.allWordpressWpBlogarticles &&
                        data.allWordpressWpBlogarticles.edges.map(
                    
                        
                    
                        prop => {
                        return (    
                                <div className="thumbnial">
                                    <div className="thumbnial-image">
                                        <a href="blog-single.html"><img src={prop.node.acf.image.source_url} className="img-fluid"
                                                alt=""/></a>
                                    </div>
                                    <div className="thumbnial-content">
                                        <a href={prop.node.link} className="blog-title">{prop.node.acf.title}
                                        </a>
                                        <div className="post-date">{prop.node.acf.date}</div>
                                    </div>
                                    <div className="thumbnial-footer">
                                        <div className="author pull-left">
                                            <div className="image"><img src={BlogAuthor} alt=""/></div>
                                            by {prop.node.acf.written_by}
                                        </div>
                                        <div className="social-links pull-right">
                                            <ul className="post-info ">
                                                <li><a href=""><span
                                                    className="icon flaticon-chat-comment-oval-speech-bubble-with-text-lines"></span></a>
                                                </li>
                                                <li><a href="blog-single.html"><span className="icon flaticon-share"></span></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                )
                                }
                            )}  
                        
                    </Slider>
                </div>
                <div className="col-md-12 text-center">
                    <a href="" className="btn-default">View All</a>
                </div>
            </div>
        </div>
       
    </section>                    	
    )}
	/>
)

export default HomeBlog
