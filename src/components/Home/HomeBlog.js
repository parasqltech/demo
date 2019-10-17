import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link, StaticQuery, graphql } from 'gatsby'
import BlogAuthor from '../../img/fevicon.png';
import qlimg from '../../img/Thumbnail-4.png';
import other from '../../img/Thumbnail-3-01.png';



const settings = {
      dots: false,
      infinite: true,
      arrows : false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 2,
	  variableWidth: true,
	  autoplay: true,
	  autoplaySpeed: 2000,
	  cssEase: "linear",
	  mobileFirst: true,
	     responsive: [
    {
      breakpoint: 1024,
      settings: "unslick"
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
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
				categories{
					  id
					  name
					  slug
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
                  
                <span className="sub-heading d-block text-center mb-2">Latest Articles</span>
                    <h2 className="section-heading text-center wow fadeIn">
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
                                        <Link to={"hub/"+prop.node.categories[0].slug+"/"+prop.node.slug}>
										{(prop.node.acf.feature_image != null) ? (<img src={prop.node.acf.feature_image.source_url} className="img-fluid w-100"
                                                alt=""/>) : ('')}
										</Link>
										
									</div>
									
                                    <div className="thumbnial-content">
                                        <Link to={"hub/"+prop.node.categories[0].slug+"/"+prop.node.slug} className="blog-title" dangerouslySetInnerHTML={{ __html: prop.node.title}}>	
                                        </Link>
                                        <div className="post-date">{prop.node.date}</div>
                                    </div>
                                    <div className="thumbnial-footer">
                                        <div className="author pull-left">
                                            <div className="image">
											
											
											{(prop.node.acf.posted_by == "QL Tech") ? (<img src={qlimg} className="img-fluid" alt=""/>) : (<img src={other} className="img-fluid" alt=""/>)}
											
											</div>
                                            by {prop.node.acf.posted_by}
                                        </div>
                                        <div className="social-links pull-right">
                                            <ul className="post-info ">
                                               
                                                <li><Link to={"hub/"+prop.node.categories[0].slug+"/"+prop.node.slug}><span className="icon flaticon-chat-comment-oval-speech-bubble-with-text-lines"></span></Link>
                                                </li>
                                                <li><Link to={"hub/"+prop.node.categories[0].slug+"/"+prop.node.slug}><span className="icon flaticon-share"></span></Link>
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
