import React, {Component} from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import {Helmet} from "react-helmet";
import ReactModal from 'react-modal'

import about_top from '../../img/about/about-us-top-image.png'




class AboutFirstSection extends React.Component {
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
  return(
      <>

      <section className="about-us-section-1  bg-white">
            <div className="container">
                <div className="main-panel">
                    <div className="row">
                        <div className="col-lg-5 mb-4">
                            <div className="play-video-thumbnial">
                                <img src={about_top} className="img-fluid " alt=""/>
                                <div className="play-button" onClick={() => this.handleModalOpen()}>
                                    <span className="video-area-popup">
                                        <i className="fa fa-play"></i>
                                    </span>
                                </div>
                            
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <p className="mb-0 sub-heading">How we work</p>
                            <h2 className="section-heading">We help transform and grow businesses for the next </h2>
                            <p className="label-text">
                                    We offer end-to-end solutions to help transform businesses - strategise, develop, automate &amp; grow the brand’s online. In collaboration with our clients, we’ve successfully managed to help businesses increase productivity, reduce costs, enhance agility & performance.

                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
<ReactModal  
        isOpen={this.state.isModalOpen}
        onRequestClose={this.handleModalClose}
          className="modal d-block fade testimonial-view show"
      >
          <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div class="modal-content ">
            <button type="button" class="close btn-default" onClick={this.handleModalClose} data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
      
          <div class="modal-body p-0">
          <div class="embed-responsive embed-responsive-16by9">
                <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/pozK-668Ams?rel=0" allowfullscreen></iframe>
            </div>
              
          </div>
        
        </div>
      </div>
     
        
    
    
      </ReactModal>
        </>
)

}
}


export default AboutFirstSection
