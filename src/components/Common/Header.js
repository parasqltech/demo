import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import logo from '../../img/logo.png'
import ServiceHeader from './ServiceHeader'

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
                        <a href="#" className="tel:+61 (0)862623559"><i className="fa fa-phone mr-2"></i><span className="d-inline d-sm-none  d-md-inline">+61 (0)862623559</span></a>
                    </li>
                     <li>
                        <a href="mailto:support@qltech.com.au"><i className="fa fa-envelope  mr-2"></i><span className="d-none d-md-inline">Send Email</span></a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/QLTechAU/" className=""><i className="fa fa-facebook"></i></a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/company/qltechau" className=""><i className="fa fa-linkedin"></i></a>
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
                prop => {
					
					return (
						
						<div  >
						{(prop.wordpress_children ? (
						
							<div>
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
                                   <span className="services-description">Guiding clients with content strategy and helping them create content that converts</span>
                                   <ul className="dropdown-menu-ul-list">
                                       <li>
                                           <a href="" className="dropdown-item mt-3">
                                               <span className="dropdown-menu-li-list">list Item</span>
                                           </a>
                                       </li>
                                       <li>
                                           <a href="" className="dropdown-item">
                                           <span className="dropdown-menu-li-list">list Item</span>
                                           </a>
                                       </li>
                                       <li>
                                           <a href="" className="dropdown-item">
                                               <span className="dropdown-menu-li-list">list Item</span>
                                           </a>
                                       </li>
                                       <li>
                                           <a href="" className="dropdown-item">
                                               <span className="dropdown-menu-li-list">list Item</span>
                                           </a>
                                       </li>
                                       <li>
                                           <a href="" className="dropdown-item">
                                               <span className="dropdown-menu-li-list">list Item</span>
                                           </a>
                                       </li>
                                   </ul>
                               </li>
                               <li className="other-menu">
                                   <span className="services-heading ">Platforms</span>
                                   <span className="services-description">Guiding clients with content strategy and helping them create content that converts</span>
                                   <ul className="dropdown-menu-ul-list">
                                       <li>
                                           <a href="" className="dropdown-item mt-3">
                                               <span className="dropdown-menu-li-list">list Item</span>
                                           </a>
                                       </li>
                                       <li>
                                           <a href="" className="dropdown-item">
                                           <span className="dropdown-menu-li-list">list Item</span>
                                           </a>
                                       </li>
                                       <li>
                                           <a href="" className="dropdown-item">
                                               <span className="dropdown-menu-li-list">list Item</span>
                                           </a>
                                       </li>
                                       <li>
                                           <a href="" className="dropdown-item">
                                               <span className="dropdown-menu-li-list">list Item</span>
                                           </a>
                                       </li>
                                       <li>
                                           <a href="" className="dropdown-item">
                                               <span className="dropdown-menu-li-list">list Item</span>
                                           </a>
                                       </li>
                                   </ul>
                               </li>
                           </ul>
                       </li>
								
								):(
								<div>
									{(prop.object_slug == 'process' ? (<li className="nav-item dropdown position-static">
                           <a className="nav-link dropdown-toggle" href="javascript:void(0)" id="navbarDropdown" role="button"
                               data-toggle="dropdown">
                               Process
                           </a>
                           <ul className="dropdown-menu ">
                               <li class="service-menu service-menu-full">
                                    <ul class="">
                                        <li class="">
                                            <a href="services-main-page.html" class="dropdown-item">
                                                <span class="services-subheading">Space for title</span>
                                                <span class="services-heading">Strategy &amp; Consulting</span>
                                                <span class="services-description">Deep-dive into a structured framework to plan and execute your business objectives</span>
                                            </a>
                                        </li>
                                        <li class="">
                                            <a href="services-main-page.html" class="dropdown-item">
                                                <span class="services-subheading">Space for title</span>
                                                <span class="services-heading">Agile-focused Development</span>
                                                <span class="services-description">Respond to new challenges and expectations in a flexible and swift manner. Build strong digital assets.</span>
                                            </a>
                                        </li>
                                         <li class="">
                                            <a href="services-main-page.html" class="dropdown-item">
                                                <span class="services-subheading">Space for title</span>
                                                <span class="services-heading">Strategy &amp; Consulting</span>
                                                <span class="services-description">Deep-dive into a structured framework to plan and execute your business objectives</span>
                                            </a>
                                        </li>
                                        <li class="">
                                           <a href="services-main-page.html" class="dropdown-item">
                                                <span class="services-subheading">Space for title</span>
                                                <span class="services-heading">Strategy &amp; Consulting</span>
                                                <span class="services-description">Deep-dive into a structured framework to plan and execute your business objectives</span>
                                           </a>
                                       </li>
                                    </ul>
                                </li>
                              
                              
                           </ul>
                       </li>) : (<li className="nav-item dropdown">
								<a className="nav-link dropdown-toggle" data-toggle="dropdown" href="jacasvript:;">About</a>
								<ul className="dropdown-menu row">
								{prop && prop.wordpress_children && prop.wordpress_children.map((child, i) => {
								return (<li key={i} ><Link className="dropdown-item"   to={child.object_slug}>{child.title}</Link></li> )
							  })}</ul></li>))}	
								
								</div>
								
								
								
								
								
								))}
							</div>
						
							) : (<li className="nav-item">
							<Link className="nav-link" key={prop.id} to={prop.object_slug} >
								{prop.title}
							</Link>
                        </li>))}
						</div>
					
					)
                }
              )}
			   

                        <li className="nav-item d-none  d-md-inline">
                            <Link className="nav-link btn-default" to="contact-us" >
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
