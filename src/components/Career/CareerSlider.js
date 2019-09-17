import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link, StaticQuery, graphql } from 'gatsby'
import thumbnial from '../../img/career/thumbnial.jpg'


const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };


const CareerSlider = () => (
  <StaticQuery
    query={graphql`
      query {
        allWordpressWpWorkpage {
                    edges {
                      node {
                        acf {
                          button_link
                          button_name
                          short_descrpition
                          title
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
		<Slider {...settings} className="career-slider-1" >
			  {data &&
                            data.allWordpressWpWorkpage &&
                            data.allWordpressWpWorkpage.edges.map(
                            prop => {
                            return (   
                                <div className="slide">
                                    <div className="row justify-content-center">
                                        <div className="col-md-5">
                                            <h1 className="section-heading mb-3">{prop.node.acf.title}</h1>
                                            <p className="label-text">
                                            {prop.node.acf.short_descrpition}
                                            </p>
                                            <a href={prop.node.acf.button_link} className="btn btn-default">
                                                {prop.node.acf.button_name}
                                            </a>
                                        </div>
                                        <div className="col-md-5">
                                            <img src={prop.node.acf.image.source_url} className="img-fluid" alt=""/>
                                        </div>
                                    </div>
                                </div>
                                   )
                                }
                            )} 
		</Slider>                    	
    )}
	/>
)

export default CareerSlider
