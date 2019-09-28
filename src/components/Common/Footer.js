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
                        <h3 className="section-heading"><span>Stay in the Know </span>
                            Discover Ideas & Insights right in your inbox.
                        </h3>
                        
                        <div className="input-group mb-3 subcribe-form">
                            <input type="text" className="form-control" placeholder="Email address" />
                            <div className="input-group-prepend">
                                <button className="btn btn-outline-secondary" type="button">Subscribe Now</button>
                            </div>
                        </div>
						<h3 className="section-heading mt-4"><span>Explore our Knowledge Hub.</span></h3>
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
                                        About
                                    </p>
                                    <FooterM1 />
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6  col-sm-6 mb-4">
                                <div className="footer-widget wow fadeIn">
                                    <p className="footer-widget-title">
                                        Services
                                    </p>
                                    <FooterM2 />
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6  col-sm-6 mb-4">
                                <div className="footer-widget wow fadeIn">
                                    <p className="footer-widget-title">
                                        Industries
                                    </p>
                                    <FooterM3 />
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6  col-sm-6 mb-4">
                                <div className="footer-widget wow fadeIn">
                                    <p className="footer-widget-title">
                                        Platforms
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
                    <p className="mb-0 pull-left company-copyright"> © 2019 QL Tech. All Rights Reserved.
                        
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
