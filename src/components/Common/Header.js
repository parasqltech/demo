import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import logo from '../../img/logo.png'
import ServiceHeader from './ServiceHeader'
import IndustriesHeader from './IndustriesHeader'
import PlatformHeader from './PlatformHeader'
import ProcessHeader from './ProcessHeader'

const Navbar = () => (
  <StaticQuery
    query={graphql`
      query {
        allWordpressWpApiMenusMenusItems(filter: {name: {eq: "main menu"}}){
            edges{
                node{
                    id
                    name
                    items{
                        title
                        url
						object_slug
						wordpress_children {
							object_id,
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
		<div>
		
      <header>
        <div className="social-header">
            <div className="container d-flex justify-content-between">
                <p className="key-message "> <span className="mr-2 d-none d-sm-inline">Best Practices</span>
                    <span className="mr-2 d-none  d-sm-inline">Robust Processes</span>
                    <span className="mr-2 d-none  d-sm-inline">Measurable Results</span>
                </p>
                <ul  className="social-list justify-content-end ">
                    <li>
                        <a href="tel:+61 8 6262 3559" ><i className="fa fa-phone mr-2"></i><span className="d-inline d-sm-none  d-md-inline">+61 8 6262 3559</span></a>
                    </li>
                     <li>
                        <a target="_blank" href="mailto:support@qltech.com.au"><i className="fa fa-envelope  mr-2"></i><span className="d-none d-md-inline">Send Email</span></a>
                    </li>
                    <li>
                        <a target="_blank" href="https://www.facebook.com/QLTechAU/" className=""><i className="fa fa-facebook"></i></a>
                    </li>
                    <li>
                        <a target="_blank" href="https://www.linkedin.com/company/qltechau" className=""><i className="fa fa-linkedin"></i></a>
                    </li>
                   
                </ul>
            </div>
        </div>
        <div className="container">
            <nav className="navbar navbar-expand-md navbar-light bg-none">   
				<Link className="navbar-brand" to="/" >
					<img src={logo} className="img-fluid" alt="" width="120px"/>
				</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent">
                    <span className="navbar-toggler-icon"></span>
                </button>
				
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav ">
						{data &&
              data.allWordpressWpApiMenusMenusItems &&
              data.allWordpressWpApiMenusMenusItems.edges &&
              data.allWordpressWpApiMenusMenusItems.edges[0] &&
              data.allWordpressWpApiMenusMenusItems.edges[0].node &&
              data.allWordpressWpApiMenusMenusItems.edges[0].node.items &&
              data.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(
                (prop,i) => {
					
					return (
						
						<div key={i} >
						{(prop.wordpress_children ? (
						
							<>
								{(prop.object_slug == 'services' ? (
									<li className="nav-item dropdown position-static">
									<a className="nav-link dropdown-toggle" href="javascript:void(0)" id="navbarDropdown" role="button"
									   data-toggle="dropdown">
									   Services
								   </a>
                           <ul className="dropdown-menu ">
                               <li className="service-menu">
                                   <ServiceHeader />
                               </li>
                               <li className="other-menu border-right">
                                   <span className="services-heading ">Industries</span>
                                   <span className="services-description mb-2">Discover how we're helping transform myriad industries to win tomorrow’s customer</span>
                                   <IndustriesHeader />
                               </li>
                               <li className="other-menu">
                                   <span className="services-heading ">Platforms</span>
                                   <span className="services-description mb-2">Explore possibilities and get the most from your technology stack</span>
									<PlatformHeader />
                               </li>
                           </ul>
                       </li>
								
								):(
								<>
									{(prop.object_slug == 'process' ? (<li className="nav-item dropdown position-static processMenu">
                           <a className="nav-link dropdown-toggle" href="javascript:void(0)" id="navbarDropdown" role="button"
                               data-toggle="dropdown">
                               Process
                           </a>
                           <ul className="dropdown-menu ">
                               <li className="service-menu service-menu-full">
                                    <ProcessHeader />
                                </li>
                              
                              
                           </ul>
                       </li>) : (<li className="nav-item dropdown">
								<a className="nav-link dropdown-toggle" data-toggle="dropdown" href="jacasvript:;">About</a>
								<ul className="dropdown-menu row">
								{prop && prop.wordpress_children && prop.wordpress_children.map((child, i) => {
								return (<li key={i} ><Link className="dropdown-item"   to={"/"+child.object_slug+"/"}>{child.title}</Link></li> )
							  })}</ul></li>))}	
								
								</>
								
								
								
								
								
								))}
							</>
						
							) : (<li className="nav-item">
							<Link className="nav-link" key={prop.id} to={"/"+prop.object_slug+"/"}>
								{prop.title}
							</Link>
                        </li>))}
						</div>
					
					)
                }
              )}		<li className="nav-item d-md-none d-inline">
                            <Link className="nav-link" to="/contact-us" >
								Contact Us
							</Link>
                        </li>
                        <li className="nav-item d-none  d-md-inline">
                            <Link className="nav-link btn-default" to="/contact-us/" >
								Contact Us
							</Link>
                        </li>
                        
                    </ul>
                </div>
            </nav>
        </div>
    </header>
	<span className="top-space"></span>	
	</div>
    )}
  />
)

export default Navbar
