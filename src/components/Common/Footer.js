import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import FooterM1 from './FooterMenu_1'
import FooterM2 from './FooterMenu_2'
import FooterM3 from './FooterMenu_3'
import FooterM4 from './FooterMenu_4'
import FooterSocial from './FooterSocial'

const Footer = () => (
  <StaticQuery
    query={graphql`
      query {
        allWordpressWpApiMenusMenusItems{
            edges{
                node{
                    id
                    name
                    items{
                        title
                        url
						object_slug
						wordpress_children {
							title,
							url,
							object_slug
						  }
                    }
                }
            }
        }
      }
    `}
    render={data => (
       <div><footer className="footer-area sky-gray-bg relative white padding-top" id="contact">
        <div className="area-bg"></div>
        <div className="footer-contant-us-area">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h3 className="section-heading"><span>Contact Us</span>
                            Lets create something awesome together
                        </h3>
                        
                        <div className="input-group mb-3 subcribe-form">
                            <input type="text" className="form-control" placeholder="Email address" />
                            <div className="input-group-prepend">
                                <button className="btn btn-outline-secondary" type="button">Subcribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="footer-separator"></div>
        <div className="main-footer">
            <div className="container">

                <div className="row">
                    

                    <div className="col-xl-12">
                        <div className="row ">
                            <div className="col-lg-3 col-md-6  col-sm-6 mb-4">
                                <div className="footer-widget wow fadeIn">
                                    <p className="footer-widget-title">
                                        Our Services
                                    </p>
                                    <FooterM1 />
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6  col-sm-6 mb-4">
                                <div className="footer-widget wow fadeIn">
                                    <p className="footer-widget-title">
                                        Our Quick
                                    </p>
                                    <FooterM2 />
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6  col-sm-6 mb-4">
                                <div className="footer-widget wow fadeIn">
                                    <p className="footer-widget-title">
                                        Our Quick
                                    </p>
                                    <FooterM3 />
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6  col-sm-6 mb-4">
                                <div className="footer-widget wow fadeIn">
                                    <p className="footer-widget-title">
                                        Our Quick
                                    </p>
                                    <FooterM4 />
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                             <h6 className="text-white h4 mb-3">Follow us on</h6>
                                <FooterSocial />
                        </div>
                    </div>
            </div>
           
            

        </div>
        <div className="footer-last">
            <div className="container">
                <div className="row mx-0 justify-content-between">
                    <p className="mb-0 pull-left company-copyright"> ©Copyright 2019 All rights reserved by
                        <Link to="/">Quarter Lane Pty. Ltd.</Link>
                    </p>
                    <ul className="pull-right mb-0 footer other-links">
                        <li><Link to="/privacy-policy">Privacy Policy</Link> |</li>
                        <li><Link to="/terms-and-conditions">Terms and Conditions</Link> |</li>
                        <li><Link to="/disclaimer">Disclaimer</Link> |</li>
                        <li><Link to="/personal-information-request">Personal Information Request</Link></li>
                    </ul>
                </div>

            </div>
        </div>
    </footer>
    </div>
    )}
  />
)

export default Footer
