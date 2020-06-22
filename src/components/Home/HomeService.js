import React, {Component} from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import {Helmet} from "react-helmet";

const HomeService = () => (
  <StaticQuery
    query={graphql`
      query {
   allWordpressWpHomeservices (limit: 5){
    edges {
      node {
        id
		slug
        acf {
          descprition
          title
		  icon{
			  source_url
		  }
        }
        type
        link
      }
    }
  }
      }
    `}
     render={data => {
      return (
        <div>
       <section className="home-services-section bg-white">
        <div className="container">
            <div className="section-icons">
              
                <div className="icon-one"></div>
              
                <div className="icon-two"></div>
              
                <div className="icon-three"></div>
            </div>

            <div className="auto-container">

                <div className="row">
                    <div className="col-lg-4">
                    <span className="sub-heading d-block mb-0 ">Services</span>
                        <h2 className="section-heading text-left">
                            <span className="text-left mb-2">
                                
                            </span>
                            Solutions to transform your business
                        
                        </h2>
                        
                    </div>
                </div>
                <div className="inner-container">
                    <div className="row clearfix">

                        
                             {data &&
              data.allWordpressWpHomeservices &&
              data.allWordpressWpHomeservices.edges.map(
           
              
        
                prop => {
                  return (
                        <div className="service-block-two col-lg-6 col-md-6 col-sm-12">
                            <div className="inner-box wow fadeInLeft animated" data-wow-delay="0ms"
                                data-wow-duration="1500ms">
                                <div className="shape-one"></div>
                                <div className="shape-two"></div>
                                <div className="shape-three"></div>
                                <div className="icon-box">
								
								{(prop.node.acf.icon != null ) ? (<img className="img-fluid lazyload" data-src={prop.node.acf.icon.source_url} />) : ('')}
								
                                    
                                </div>
                                <h3><Link to={"/services/"+prop.node.slug+"/"}>{prop.node.acf.title}</Link></h3>
                                <div className="text">{prop.node.acf.descprition}</div>
                            </div>
                        </div>
                          )
                }
              )}
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
     )
    }}
  />
)
export default HomeService