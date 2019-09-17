import React, {Component} from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import {Helmet} from "react-helmet";
import img from '../../img/about-us.png';

const HomeAboutUs = () => (
  <StaticQuery
    query={graphql`
      query {
allWordpressWpHomeaboutus {
    edges {
      node {
        id
        acf {
          title
          short_descprition
          boldcontent
        }
      }
    }
  }
      }
    `}
     render={data => {
      return (
        <div>
        <section class="home-about-section">
        <div class="container">
            <div class="about-mockup-bg  wow fadeIn">
                <img src={img} class="img-fluid about-us-image" alt="" />
            </div>

            <div class="row justify-content-end">
                <div class="col-md-7 col-lg-6 col-sm-12 ">
                    <div class="about-content xs-center sm-center wow fadeInUp">
                        <h4 class="sub-heading ">About us</h4>
                         {data &&
              data.allWordpressWpHomeaboutus &&
              data.allWordpressWpHomeaboutus.edges.map(
           
              
        
                prop => {
                  return (
                  <div>
                        <h3 class="section-heading">{prop.node.acf.title}</h3>
                        <p class="label-text">{prop.node.acf.short_descprition}</p>
                        <p class="text-primary font-weight-bold">{prop.node.acf.boldcontent}</p>
                        <div class="play-button">
                            <span data-video-id="" class="video-area-popup">

                                <i class="fa fa-play"></i></span>
                            <span>Check How we work together</span>
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
export default HomeAboutUs