import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link, StaticQuery, graphql } from 'gatsby'



const settings = {
      dots: false,
	   prevArrow: false,
		nextArrow: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 2
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
            media_details {
              dummy
              width
              height
              file
            }
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
