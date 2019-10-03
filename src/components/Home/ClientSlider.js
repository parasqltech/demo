import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link, StaticQuery, graphql } from 'gatsby'



const settings = {
      dots: false,
      arrows : false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 2,
	    mobileFirst: true,
      responsive: [
        {
        breakpoint: 767,
        settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        dots: true
        }
    },
    {
        breakpoint: 400,
        settings: {
        slidesToShow: 3,
        slidesToScroll: 2
        }
    },
    {
        breakpoint:320,
        settings: {
        slidesToShow: 2,
        slidesToScroll: 1
        }
    }
    ]
    };



const ClientSlider = () => (
  <StaticQuery
    query={graphql`
      query {
        allWordpressWpClients {
    edges {
      node {
        id
        title
        type
        acf {
          img {
            source_url
            
          }
        }
      }
    }
  }
		}
    `}
    render={data => (
		<Slider {...settings} className="trusted-by-slider" >
			{data &&
				data.allWordpressWpClients &&
				data.allWordpressWpClients.edges.map(
				prop => {
					return (
                        <img src={prop.node.acf.img.source_url} className="img-fluid" alt="" />
                        )
					}
				)}
		</Slider>                    	
    )}
	/>
)

export default ClientSlider
