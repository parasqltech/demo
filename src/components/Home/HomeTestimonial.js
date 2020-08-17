import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link, StaticQuery, graphql } from 'gatsby'
import quote from '../../img/quote.png';
import ReactModal from 'react-modal'

const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      arrows : false,
      slidesToShow: 1,
      slidesToScroll: 1
};

class HomeTestimonialData extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isModalOpen: false,
        testimonial_img: "",
        testimonial_name: "",
        testimonial_designation: "",
        testimonial_text: "",
      }
    }
    handleModalOpen = (img,name,des,desc) => {
        this.setState({ isModalOpen: true,testimonial_img:img,testimonial_name:name,testimonial_designation:des,testimonial_text:desc })
		
    }

    handleModalClose = event => {
    // console.log('handleModalOpen: ', event);
    this.setState({ isModalOpen: false })
    }

render() {
    //const posts = this.props.data.allMarkdownRemark.node
	 const Testimonials = this.props.data.allWordpressWpTestimonial;
    return(
        <>
      <section className="home-testimonial-section bg-white">
		
      <div className="container">
          <div className="row justify-content-center">
              <div className="col-md-8 ">
                
                  <span className="sub-heading d-block mb-0 text-center">Testimonials</span>
                  <h2 className="section-heading text-center wow fadeIn">
                      Hear from our loved customers</h2>
              </div>
          </div>
      </div>
      <Slider {...settings} className="testiomonial-slider" >
                {Testimonials && Testimonials && Testimonials.edges.map(
       
                  
                      
                  
                      prop => {
                      return ( 
                          
                      <div className="customer-testimonial-block">
                          <div className="container">
                              <div className="row justify-content-center">
                                  <div className="col-xl-6 col-lg-6 col-md-4 col-sm-4 col-6">
                                      <div className="author-image">
                                          
											  {(prop.node.acf.image != null) ? (<img data-src={prop.node.acf.image.source_url} className="img-fluid lazyload" alt=""/>) : ('')}
                                      </div>
                                  </div>
                                  <div className="col-xl-6 col-lg-6 col-md-8 col-sm-8">
                                      <div className="author-content">
                                          <div className="quote">
                                              <img src={quote} className="img-fluid" alt=""/>
                                          </div>
                                          <p className="label-text">
                                              <span>{(prop.node.acf.descprition).substring(0, 400)}</span>
                                              {(prop.node.acf.descprition.length  > 400 ? (<span>...<a href="javascript:;" className="readmore" onClick={() => this.handleModalOpen(prop.node.acf.image.source_url,prop.node.acf.name,prop.node.acf.desgination,prop.node.acf.descprition)}>Read More</a></span>):(''))}
                                              
                                              
                                              
                                          </p>
                                          <div className="author-info">
                                              <h4>{prop.node.acf.name}</h4>
                                              <p>{prop.node.acf.desgination}</p>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      
              
                      
                      
                        )
                      }
                  )}  
          </Slider>
          
  </section>        
  <ReactModal  
          isOpen={this.state.isModalOpen}
          onRequestClose={this.handleModalClose}
            className="modal d-block fade testimonial-view show"
        >
            <div class="modal-dialog modal-dialog-centered modal-lg " tabindex="-1" role="dialog">
          <div class="modal-content " >
              <button type="button" class="close btn-default" onClick={this.handleModalClose} data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
        
            <div class="modal-body p-4">
                <div class="row justify-content-center">
                    
                    <div class="col-xl-12">
                        <div class="author-content">
                            <div class="quote">
                                <img src={quote} class="img-fluid" alt=""/>
                            </div>
                            <p class="label-text testimonialDetail"></p>
                            <div class="author-info">
                                <div className="author-content">
                                         
                                          <p className="label-text">
                                              <span>{this.state.testimonial_text}</span>
                                          </p>
										  <div className="author-details-block">
											<div className="author-image text-center">
												<img src={this.state.testimonial_img} className="img-fluid d-inline" alt={this.state.testimonial_name} />
											</div>
											 <div className="author-info">

												
                                              <h4>{this.state.testimonial_name}</h4>
                                              <p>{this.state.testimonial_designation}</p>
                                          </div>
										  
										  </div>
                                         
                                      </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          
          </div>
        </div>
       
          
      
      
        </ReactModal>
        </>
        
)
	
  }
}

const HomeTestimonial = () => (
  <StaticQuery
    query={graphql`
      query {
            allWordpressWpTestimonial {
                edges {
                  node {
                    id
                    acf {
                      desgination
                      descprition
                      name
                      image{
						  source_url
					  } 
                    }
                  }
                }
              }
            
        }
    `}
    render={(data) => <HomeTestimonialData data={data} />}
  
	/>
)

export default HomeTestimonial
