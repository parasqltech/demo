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
      infinite: false,
      speed: 500,
      slidesToShow: 4,
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
			allWordpressPost(limit: 10, sort: {fields: wordpress_id, order: DESC}) {	
                edges {
                  node {
                    slug
					title
					date(formatString: "D MMMM,Y")
                    acf {
         
				  feature_image{
					  source_url
				  }
				  posted_by
				}
                  }
                }
              }
            
        }
    `}
    render={data => (
		<section className="home-blog-section wow fadeIn bg-white">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8 ">
                    <h2 className="section-heading text-center wow fadeIn">
                        <span>Latest Articles</span>
                        Knowledge Hub
                    </h2>
                </div>
            </div>
            
            <div className="row">
                <div className="col-md-12">
					<Slider {...settings} className="home-blog-slider" >
                       {data &&
                        data.allWordpressPost &&
                        data.allWordpressPost.edges.map(
                    
                        
                    
                        prop => {
                        return (    
                                <div className="thumbnial">
                                    <div className="thumbnial-image">
                                        <Link to={"hub/"+prop.node.slug}>
										{(prop.node.acf.feature_image != null) ? (<img src={prop.node.acf.feature_image.source_url} className="img-fluid"
                                                alt=""/>) : ('')}
										</Link>
										
									</div>
									
                                    <div className="thumbnial-content">
                                        <Link to={"hub/"+prop.node.slug} className="blog-title">{prop.node.title}
                                        </Link>
                                        <div className="post-date">{prop.node.date}</div>
                                    </div>
                                    <div className="thumbnial-footer">
                                        <div className="author pull-left">
                                            <div className="image"><img src={BlogAuthor} alt=""/></div>
                                            by {prop.node.acf.posted_by}
                                        </div>
                                        <div className="social-links pull-right">
                                            <ul className="post-info ">
                                                <li><a href=""><span
                                                    className="icon flaticon-chat-comment-oval-speech-bubble-with-text-lines"></span></a>
                                                </li>
                                                <li><Link to={"hub/"+prop.node.slug}><span className="icon flaticon-share"></span></Link>
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
                    <Link to="article" className="btn-default">View All</Link>
                </div>
            </div>
        </div>
       
    </section>                    	
    )}
	/>
)

export default HomeBlog
