import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Particles from 'react-particles-js';
import Helmet from 'react-helmet'
import blog_thumb from '../img/blog/blog-thubnial-1.jpg';
import author from '../img/fevicon.png';


const article = () => (
  <StaticQuery
    query={graphql`
      query {
			allWordpressPost(sort: {fields: wordpress_id, order: DESC}) {
				edges {
				  node {
					id
					title
					slug
					date(formatString: "D MMMM,Y")
					content
					acf{
					feature_image{
						source_url
					}
					
					posted_by
					}
					author {   
				  name
				  description
				  avatar_urls {
					wordpress_48
				  }
				}
					categories{
					  id
					  name
					  slug
					}
				  }
				}
			  }
			  allWordpressCategory(filter: {wordpress_parent: {eq: 24}}) {
				edges {
				  node {
					id
					name
					slug
				  }
				}
			  }
		}
    `}
    render={data => (
		<Layout>
			<div className="bg">
					<div className="area-bg">
						 <Particles params={{"particles": {"number": {"value": 80,"density": {"enable": true,"value_area": 1600}},"color": {"value": ["#fd8788", "#f1aea6", "#21a6df", "#75d3ff"]},"shape": {"type": "circle","stroke": {"width": 0,"color": "#000000",},"polygon": {"nb_sides": 5,},"image": {"src": "img/github.svg","width": 100,"height": 100}},"opacity": {"value": 0.4489553770423464,"random": false,"anim": {"enable": false,"speed": 40,"opacity_min": 0.1,"sync": false}},"size": {"value": 5,"random": true,"anim": {"enable": false,"speed": 40,"size_min": 0.1,"sync": false}},"line_linked": {"enable": true,"distance": 150,"color": "#ffffff","opacity": 0.4,"width": 1},"move": {"enable": true,"speed": 6,"direction": "none","random": false,"straight": false,"out_mode": "out","bounce": false,"attract": {"enable": false,"rotateX": 600,"rotateY": 1200}}},"interactivity": {"detect_on": "canvas","events": {"onhover": {"enable": true,"mode": "grab"},"onclick": {"enable": true,"mode": "push"},"resize": true},"modes": {"grab": {"distance": 140,"line_linked": {"opacity": 1}},"bubble": {"distance": 400,"size": 40,"duration": 2,"opacity": 8,"speed": 3},"repulse": {"distance": 200,"duration": 0.4},"push": {"particles_nb": 4},"remove": {"particles_nb": 2}}},"retina_detect": true}} />
					</div>
				</div>
				<section className="breadcumbs-and-title-section">
					
					<div className="container text-center">
						
						
						<h1 className="section-heading">
						Articles
						</h1>
						<ul className="breadcrumbs">
							<li> <Link to="/">Home</Link> \</li>
							<li> Articles</li>
						</ul>
					</div>
			</section>
			<section className="blog-section pt-0">
        <div className="main-panel">
        <div className="subnavbar ">
                <div className="container bg-white">
                      <div className="row justify-content-center">
                        <div className="col-md-11 justify-content-between row mb-4">
                            <ul className="nav  resource-menu">
                                <li className="nav-item">
                                <Link className="nav-link " to="/hub/">Feature</Link>   
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/article/">Articles</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link " to="/guide/">Guide</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/worksheet/">Worksheet</Link>
                                </li>
                            </ul>
                            <div className="search-box ">
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Search Here..."/>
                                    <div className="input-group-append">
                                        <button className="btn" type="button"><i className="fa fa-search"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
		
       <div className="container bg-white article-div">
                <div className="row justify-content-center">
                        <div className="col-md-11">
						<div className="row justify-content-center">
                            <div className="col-lg-9 col-md-12">
                            <div className=" ">
                                <div className="row">
                                    {data &&
				data.allWordpressPost &&
				data.allWordpressPost.edges &&
				data.allWordpressPost.edges.map(
                prop => {
					return (
					<div className="col-lg-6 col-md-6 wow fadeInLeft article-block">
                                         <div className="thumbnial">
                                            <div className="thumbnial-image">
                                                <Link to={"/hub/"+prop.node.categories[0].slug+"/"+prop.node.slug+"/"}>
												
												{(prop.node.acf.feature_image != null) ? (<img src={prop.node.acf.feature_image.source_url} className="img-fluid w-100"
                                                alt=""/>) : ('')}		
														</Link>
                                            </div>
                                            <div className="thumbnial-content">
                                                <Link to={"/hub/"+prop.node.categories[0].slug+"/"+prop.node.slug+"/"} dangerouslySetInnerHTML={{ __html: prop.node.title}} className="blog-title">
                                                </Link>
                                                <div className="post-date">{prop.node.date}</div>
                                            </div>
                                            <div className="thumbnial-footer">
                                                <div className="author pull-left">
                                                    <div className="image"><img src={prop.node.author.avatar_urls.wordpress_48} alt=""/></div>
                                                    By <b>{prop.node.author.name}</b>  
                                                </div>
                                                <div className="social-links pull-right">
                                                    <ul className="post-info ">
                                                        <li><Link to={"/hub/"+prop.node.categories[0].slug+"/"+prop.node.slug+"/"}><span
                                                            className="icon flaticon-chat-comment-oval-speech-bubble-with-text-lines"></span></Link>
                                                        </li>
                                                        <li><Link to={"/hub/"+prop.node.categories[0].slug+"/"+prop.node.slug+"/"}><span className="icon flaticon-share"></span></Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
				)
                }
                )}	
									
									
                                   
                                    
                                </div>
                               
                            </div>
                        </div>
						<div className="col-lg-3 col-md-12">
                                <div className="sidebar postion-sticky">
                                    <div className="sidebar-widget p-3 bg-light">
                                        <h6 className="sidebar-title">Category</h6>
                                        <ul className="Categary-list">
                                            {data &&
												data.allWordpressCategory &&
												data.allWordpressCategory.edges &&
												data.allWordpressCategory.edges.map(
												(propd,i) => {
													return (
											
											
											<li key={i} ><Link to={"/category/"+propd.node.slug}>{propd.node.name+"/"}</Link></li>
											)
												}
												)}		
										 
                                        </ul>
                                    
                                    </div>
                                </div>
                            </div>
                        
                    </div>
                    </div>
                    </div>
            </div>
           
        </div>
    </section>
		</Layout>
    )}
  />
)

export default article
