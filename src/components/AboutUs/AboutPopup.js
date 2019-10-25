import React, {Component} from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import {Helmet} from "react-helmet";
import img from '../../img/about-us.png';
import ReactModal from 'react-modal'





class HomeAboutUsData extends React.Component {
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
	handleModalOpen = () => {
		this.setState({ isModalOpen: true})
	
	}
  
	handleModalClose = event => {
	this.setState({ isModalOpen: false })
	}


render() {
  //const posts = this.props.data.allMarkdownRemark.node
 const AboutUsData = this.props.data.allWordpressWpHomeaboutus;
  return(
      <>

         
		<div  className="play-button mt-2" onClick={() => this.handleModalOpen()}>
                            <span data-video-id="" className="video-area-popup">
                                <i className="fa fa-play"></i></span>
                            <span>Check out what Jeremiah from Keap has to say</span>
                        </div>
<ReactModal  
        isOpen={this.state.isModalOpen}
        onRequestClose={this.handleModalClose}
          className="modal d-block fade testimonial-view show"
      >
          <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div className="modal-content ">
            <button type="button" className="close btn-default" onClick={this.handleModalClose} data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
      
          <div className="modal-body p-0">
          <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/4E1fbMrAFMY" allowfullscreen></iframe>
            </div>
              
          </div>
        
        </div>
      </div>
     
        
    
    
      </ReactModal>
        </>
)

}
}






const AboutPopup = () => (
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
    render={(data) => <HomeAboutUsData data={data} />}
  
	/>
)

export default AboutPopup
