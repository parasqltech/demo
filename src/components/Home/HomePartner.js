import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link, StaticQuery, graphql } from 'gatsby'
import clients_1 from '../../img/clients/google-partners.png';
import clients_2 from '../../img/clients/zoho-authorise-partners.png';
import clients_3 from '../../img/clients/hubspot-partners.png';
import clients_4 from '../../img/clients/keep-certified-partner.png';


const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 2
    };


const HomePartner = () => (
  <StaticQuery
    query={graphql`
      query {
           allWordpressWpPartners {
    edges {
      node {
        id
        acf {
          icon {
            source_url
          }
        }
      }
    }
  }
            
        }
    `}
    render={data => (
		<section className="client-and-partners">
        <div className="container">
            
			<Slider {...settings} className="client-and-partners-slider" >
                {data &&
                        data.allWordpressWpPartners &&
                        data.allWordpressWpPartners.edges.map(
                    
                        
                    
                        prop => {
                        return ( 
                <div class="client-logo">
                    <img src={prop.node.acf.icon.source_url} class="img-fluid" alt=""/>
                </div>
                 )
                        }
                    )}   
            </Slider>
        </div>
    </section>                    	
    )}
	/>
)

export default HomePartner
