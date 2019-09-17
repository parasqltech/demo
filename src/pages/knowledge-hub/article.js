import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import Layout from '../../components/Layout'
import Particles from 'react-particles-js';

import blog_thumb from '../../img/blog/blog-thubnial-1.jpg';
import author from '../../img/blog/author-image.png';


const article = () => (
  <StaticQuery
    query={graphql`
      query {
        allWordpressPage(filter: {wordpress_id: {eq: 324}}) {
			edges {
				node {
					title
					wordpress_id
					content
				}
			}
		}
      }
    `}
    render={data => (
		<Layout>
			<div className="bg">
					<div className="area-bg">
						 <Particles params={{"particles": {"number": {"value": 50,"density": {"enable": true,"value_area": 800}},"color": {"value": ["#FE395F", "#54DBF0", "#ad7cff", "#48d6ee"]},"shape": {"type": "polygon","stroke": {"width": 0,"color": "#000000",},"polygon": {"nb_sides": 10,},"image": {"src": "img/github.svg","width": 100,"height": 100}},"opacity": {"value": 0.2,"random": false,"anim": {"enable": false,"speed": 1,"opacity_min": 0.1,"sync": false}},"size": {"value": 5,"random": true,"anim": {"enable": false,"speed": 40,"size_min": 0.1,"sync": false}},"line_linked": {"enable": true,"distance": 150,"color": "#ffffff","opacity": 0.4,"width": 1},"move": {"enable": true,"speed": 6,"direction": "none","random": false,"straight": false,"out_mode": "out","bounce": false,"attract": {"enable": false,"rotateX": 600,"rotateY": 1200}}},"interactivity": {"detect_on": "canvas","events": {"onhover": {"enable": true,"mode": "grab"},"onclick": {"enable": true,"mode": "push"},"resize": true},"modes": {"grab": {"distance": 140,"line_linked": {"opacity": 1}},"bubble": {"distance": 400,"size": 40,"duration": 2,"opacity": 8,"speed": 3},"repulse": {"distance": 200,"duration": 0.4},"push": {"particles_nb": 4},"remove": {"particles_nb": 2}}},"retina_detect": true}} />
					</div>
				</div>
				<section className="breadcumbs-and-title-section">
					 <div className="container">
						<div className="breadcumbs-icon">
							<span className="icon-collection-1"></span>
							<span className="icon-collection-2"></span>
							<span className="icon-collection-3"></span>
						</div>
					</div>
					<div className="container text-center">
						
						
						<h1 className="section-heading">
						Article
						</h1>
						<ul className="breadcrumbs">
							<li> <Link to="/">Home</Link> \</li>
							<li> Article</li>
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
                                <Link className="nav-link " to="/knowledge-hub">Feature</Link>   
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/knowledge-hub/article">Articles</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link " to="/knowledge-hub/guide">Guide</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/knowledge-hub/worksheet">Worksheet</Link>
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
       <div className="container bg-white">
                <div className="row">
                        <div className="col-md-12">
                            <div className=" ">
                                <div className="row">
                                    <div className="col-lg-4 col-md-6 wow fadeInLeft article-block">
                                         <div className="thumbnial">
                                            <div className="thumbnial-image">
                                                <a href="article-details.html"><img src={blog_thumb} className="img-fluid w-100"
                                                        alt=""/></a>
                                            </div>
                                            <div className="thumbnial-content">
                                                <a href="article-details.html" className="blog-title">Top aide possible contender forced to resign over creepy.
                                                </a>
                                                <div className="post-date">20 March, 2018</div>
                                            </div>
                                            <div className="thumbnial-footer">
                                                <div className="author pull-left">
                                                    <div className="image"><img src={author} alt=""/></div>
                                                    by Jhon Kenedy
                                                </div>
                                                <div className="social-links pull-right">
                                                    <ul className="post-info ">
                                                        <li><a href="article-details.html"><span
                                                            className="icon flaticon-chat-comment-oval-speech-bubble-with-text-lines"></span></a>
                                                        </li>
                                                        <li><a href="article-details.html"><span className="icon flaticon-share"></span></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 wow fadeInUp article-block">
                                         <div className="thumbnial">
                                            <div className="thumbnial-image">
                                                <a href="article-details.html"><img src={blog_thumb} className="img-fluid w-100"
                                                        alt=""/></a>
                                            </div>
                                            <div className="thumbnial-content">
                                                <a href="" className="blog-title">Top aide possible contender forced to resign over creepy.
                                                </a>
                                                <div className="post-date">20 March, 2018</div>
                                            </div>
                                            <div className="thumbnial-footer">
                                                <div className="author pull-left">
                                                    <div className="image"><img src={author} alt=""/></div>
                                                    by Jhon Kenedy
                                                </div>
                                                <div className="social-links pull-right">
                                                    <ul className="post-info ">
                                                        <li><a href="article-details.html"><span
                                                                    className="icon flaticon-chat-comment-oval-speech-bubble-with-text-lines"></span></a>
                                                        </li>
                                                        <li><a href="article-details.html"><span className="icon flaticon-share"></span></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6  wow fadeInRight article-block">
                                        <div className="thumbnial">
                                           <div className="thumbnial-image">
                                               <a href="article-details.html"><img src={blog_thumb} className="img-fluid w-100"
                                                       alt=""/></a>
                                           </div>
                                           <div className="thumbnial-content">
                                               <a href="" className="blog-title">Top aide possible contender forced to resign over creepy.
                                               </a>
                                               <div className="post-date">20 March, 2018</div>
                                           </div>
                                           <div className="thumbnial-footer">
                                               <div className="author pull-left">
                                                   <div className="image"><img src={author} alt=""/></div>
                                                   by Jhon Kenedy
                                               </div>
                                               <div className="social-links pull-right">
                                                   <ul className="post-info ">
                                                       <li><a href="article-details.html"><span
                                                                   className="icon flaticon-chat-comment-oval-speech-bubble-with-text-lines"></span></a>
                                                       </li>
                                                       <li><a href="article-details.html"><span className="icon flaticon-share"></span></a>
                                                       </li>
                                                   </ul>
                                               </div>
                                           </div>
                                       </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6  wow fadeInDown article-block">
                                         <div className="thumbnial">
                                            <div className="thumbnial-image">
                                                <a href="article-details.html"><img src={blog_thumb} className="img-fluid w-100"
                                                        alt=""/></a>
                                            </div>
                                            <div className="thumbnial-content">
                                                <a href="" className="blog-title">Top aide possible contender forced to resign over creepy.
                                                </a>
                                                <div className="post-date">20 March, 2018</div>
                                            </div>
                                            <div className="thumbnial-footer">
                                                <div className="author pull-left">
                                                    <div className="image"><img src={author} alt=""/></div>
                                                    by Jhon Kenedy
                                                </div>
                                                <div className="social-links pull-right">
                                                    <ul className="post-info ">
                                                        <li><a href="article-details.html"><span
                                                                    className="icon flaticon-chat-comment-oval-speech-bubble-with-text-lines"></span></a>
                                                        </li>
                                                        <li><a href="article-details.html"><span className="icon flaticon-share"></span></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6   wow fadeInDown article-block">
                                         <div className="thumbnial">
                                            <div className="thumbnial-image">
                                                <a href="article-details.html"><img src={blog_thumb} className="img-fluid w-100"
                                                        alt=""/></a>
                                            </div>
                                            <div className="thumbnial-content">
                                                <a href="" className="blog-title">Top aide possible contender forced to resign over creepy.
                                                </a>
                                                <div className="post-date">20 March, 2018</div>
                                            </div>
                                            <div className="thumbnial-footer">
                                                <div className="author pull-left">
                                                    <div className="image"><img src={author} alt=""/></div>
                                                    by Jhon Kenedy
                                                </div>
                                                <div className="social-links pull-right">
                                                    <ul className="post-info ">
                                                        <li><a href="article-details.html"><span
                                                                    className="icon flaticon-chat-comment-oval-speech-bubble-with-text-lines"></span></a>
                                                        </li>
                                                        <li><a href="article-details.html"><span className="icon flaticon-share"></span></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 wow fadeInLeft article-block">
                                        <div className="thumbnial">
                                           <div className="thumbnial-image">
                                               <a href="article-details.html"><img src={blog_thumb} className="img-fluid w-100"
                                                       alt=""/></a>
                                           </div>
                                           <div className="thumbnial-content">
                                               <a href="" className="blog-title">Top aide possible contender forced to resign over creepy.
                                               </a>
                                               <div className="post-date">20 March, 2018</div>
                                           </div>
                                           <div className="thumbnial-footer">
                                               <div className="author pull-left">
                                                   <div className="image"><img src={author} alt=""/></div>
                                                   by Jhon Kenedy
                                               </div>
                                               <div className="social-links pull-right">
                                                   <ul className="post-info ">
                                                       <li><a href="article-details.html"><span
                                                                   className="icon flaticon-chat-comment-oval-speech-bubble-with-text-lines"></span></a>
                                                       </li>
                                                       <li><a href="article-details.html"><span className="icon flaticon-share"></span></a>
                                                       </li>
                                                   </ul>
                                               </div>
                                           </div>
                                       </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 wow fadeInUp article-block">
                                         <div className="thumbnial">
                                            <div className="thumbnial-image">
                                                <a href="article-details.html"><img src={blog_thumb} className="img-fluid w-100"
                                                        alt=""/></a>
                                            </div>
                                            <div className="thumbnial-content">
                                                <a href="" className="blog-title">Top aide possible contender forced to resign over creepy.
                                                </a>
                                                <div className="post-date">20 March, 2018</div>
                                            </div>
                                            <div className="thumbnial-footer">
                                                <div className="author pull-left">
                                                    <div className="image"><img src={author} alt=""/></div>
                                                    by Jhon Kenedy
                                                </div>
                                                <div className="social-links pull-right">
                                                    <ul className="post-info ">
                                                        <li><a href="article-details.html"><span
                                                                    className="icon flaticon-chat-comment-oval-speech-bubble-with-text-lines"></span></a>
                                                        </li>
                                                        <li><a href="article-details.html"><span className="icon flaticon-share"></span></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6  wow fadeInRight article-block">
                                        <div className="thumbnial">
                                           <div className="thumbnial-image">
                                               <a href="article-details.html"><img src={blog_thumb} className="img-fluid w-100"
                                                       alt=""/></a>
                                           </div>
                                           <div className="thumbnial-content">
                                               <a href="" className="blog-title">Top aide possible contender forced to resign over creepy.
                                               </a>
                                               <div className="post-date">20 March, 2018</div>
                                           </div>
                                           <div className="thumbnial-footer">
                                               <div className="author pull-left">
                                                   <div className="image"><img src={author} alt=""/></div>
                                                   by Jhon Kenedy
                                               </div>
                                               <div className="social-links pull-right">
                                                   <ul className="post-info ">
                                                       <li><a href="article-details.html"><span
                                                                   className="icon flaticon-chat-comment-oval-speech-bubble-with-text-lines"></span></a>
                                                       </li>
                                                       <li><a href="article-details.html"><span className="icon flaticon-share"></span></a>
                                                       </li>
                                                   </ul>
                                               </div>
                                           </div>
                                       </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6  wow fadeInDown article-block">
                                         <div className="thumbnial">
                                            <div className="thumbnial-image">
                                                <a href="article-details.html"><img src={blog_thumb} className="img-fluid w-100"
                                                        alt=""/></a>
                                            </div>
                                            <div className="thumbnial-content">
                                                <a href="" className="blog-title">Top aide possible contender forced to resign over creepy.
                                                </a>
                                                <div className="post-date">20 March, 2018</div>
                                            </div>
                                            <div className="thumbnial-footer">
                                                <div className="author pull-left">
                                                    <div className="image"><img src={author} alt=""/></div>
                                                    by Jhon Kenedy
                                                </div>
                                                <div className="social-links pull-right">
                                                    <ul className="post-info ">
                                                        <li><a href="article-details.html"><span
                                                                    className="icon flaticon-chat-comment-oval-speech-bubble-with-text-lines"></span></a>
                                                        </li>
                                                        <li><a href="article-details.html"><span className="icon flaticon-share"></span></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6   wow fadeInDown article-block">
                                         <div className="thumbnial">
                                            <div className="thumbnial-image">
                                                <a href="article-details.html"><img src={blog_thumb} className="img-fluid w-100"
                                                        alt=""/></a>
                                            </div>
                                            <div className="thumbnial-content">
                                                <a href="" className="blog-title">Top aide possible contender forced to resign over creepy.
                                                </a>
                                                <div className="post-date">20 March, 2018</div>
                                            </div>
                                            <div className="thumbnial-footer">
                                                <div className="author pull-left">
                                                    <div className="image"><img src={author} alt=""/></div>
                                                    by Jhon Kenedy
                                                </div>
                                                <div className="social-links pull-right">
                                                    <ul className="post-info ">
                                                        <li><a href="article-details.html"><span
                                                                    className="icon flaticon-chat-comment-oval-speech-bubble-with-text-lines"></span></a>
                                                        </li>
                                                        <li><a href="article-details.html"><span className="icon flaticon-share"></span></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 wow fadeInLeft article-block">
                                        <div className="thumbnial">
                                           <div className="thumbnial-image">
                                               <a href="article-details.html"><img src={blog_thumb} className="img-fluid w-100"
                                                       alt=""/></a>
                                           </div>
                                           <div className="thumbnial-content">
                                               <a href="" className="blog-title">Top aide possible contender forced to resign over creepy.
                                               </a>
                                               <div className="post-date">20 March, 2018</div>
                                           </div>
                                           <div className="thumbnial-footer">
                                               <div className="author pull-left">
                                                   <div className="image"><img src={author} alt=""/></div>
                                                   by Jhon Kenedy
                                               </div>
                                               <div className="social-links pull-right">
                                                   <ul className="post-info ">
                                                       <li><a href="article-details.html"><span
                                                                   className="icon flaticon-chat-comment-oval-speech-bubble-with-text-lines"></span></a>
                                                       </li>
                                                       <li><a href="article-details.html"><span className="icon flaticon-share"></span></a>
                                                       </li>
                                                   </ul>
                                               </div>
                                           </div>
                                       </div>
                                    </div>
                                </div>
                               
                            </div>
                        </div>
                        <div className="col-md-12 text-center">
                            <div className="loading  text-center"> 
                                <div className="spinner-border  "></div> <span >
                                        Loading... 
                                </span>
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
