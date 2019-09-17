import React, {Component} from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import {Helmet} from "react-helmet";

const HomeService = () => (
  <StaticQuery
    query={graphql`
      query {
   allWordpressWpHomeservices {
    edges {
      node {
        id
        acf {
          descprition
          title
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
       <section className="home-services-section">
        <div className="container">
            <div className="section-icons">
              
                <div className="icon-one"></div>
              
                <div className="icon-two"></div>
              
                <div className="icon-three"></div>
            </div>

            <div className="auto-container">

                <div className="row">
                    <div className="col-lg-4">
                        <h2 className="section-heading text-left">
                            <span className="text-left mb-2">
                                Our Services
                            </span>
                            We Are Providing Digital Services
                        </h2>
                        
                    </div>
                </div>
                <div className="inner-container">
                    <div className="row clearfix">

                        <div className="service-block-two col-xl-4 col-lg-4 d-lg-flex d-none">
                            <div className="inner-box wow fadeInLeft animated" data-wow-delay="0ms"
                                data-wow-duration="1500ms">
                                <div className="shape-one"></div>
                                <div className="shape-two"></div>
                                <div className="shape-three"></div>
                                <div className="icon-box">
                                    <span className="icon flaticon-web-design-1"></span>
                                </div>
                                <h3><a href="services.html">Web Develpment</a></h3>
                                <div className="text">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                                    consectetur, adipisci velit, sed quia non.</div>
                            </div>
                        </div>
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
                                    <span className="icon flaticon-profits"></span>
                                </div>
                                <h3><a href={prop.node.link}>{prop.node.acf.title}</a></h3>
                                <div className="text">{prop.node.acf.descprition}</div>
                            </div>
                        </div>
                          )
                }
              )}
                        <div className="service-block-two col-xl-4 col-lg-4 col-md-6 col-sm-12 d-lg-none d-flex">
                            <div className="inner-box wow fadeInLeft animated" data-wow-delay="0ms"
                                data-wow-duration="1500ms">
                                <div className="shape-one"></div>
                                <div className="shape-two"></div>
                                <div className="shape-three"></div>
                                <div className="icon-box">
                                    <span className="icon flaticon-web-design-1"></span>
                                </div>
                                <h3><a href="services.html">Web Develpment</a></h3>
                                <div className="text">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                                    consectetur, adipisci velit, sed quia non.</div>
                            </div>
                        </div>
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