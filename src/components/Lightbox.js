import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Img from 'gatsby-image'

class Lightbox extends Component {
  state = {
    showLightbox: false,
    selectedImage: 0,
  }

  componentDidMount = () => {
    window.addEventListener('keyup', this.handleKeyUp, false)
  }

  componentWillUnmount = () => {
    window.removeEventListener('keyup', this.handleKeyUp, false)
  }

  handleClick = (e, index) => {
    e.preventDefault()
    this.setState({ showLightbox: !this.state.showLightbox, selectedImage: index })
  }

  closeModal = () => {
    this.setState({ showLightbox: false })
  }

  goBack = () => {
    this.setState({ selectedImage: this.state.selectedImage - 1 })
  }

  goForward = () => {
    this.setState({ selectedImage: this.state.selectedImage + 1 })
  }

  handleKeyUp = e => {
    e.preventDefault()
    const { keyCode } = e
    if (this.state.showLightbox) {
      if (keyCode === 37) {
        // Left Arrow Key
        if (this.state.selectedImage > 0) {
          this.setState({ selectedImage: this.state.selectedImage - 1 })
        }
      }
      if (keyCode === 39) {
        // Right Arrow Key
        if (this.state.selectedImage < this.props.images.length - 1) {
          this.setState({ selectedImage: this.state.selectedImage + 1 })
        }
      }
      if (keyCode === 27) {
        // Escape key
        this.setState({ showLightbox: false })
      }
    }
  }

  render() {
	  console.log(this.props);
    const { images } = this.props
    const { showLightbox, selectedImage } = this.state
    return (
      <Fragment>
        <div class="row">
          {images.map((img, i) => (
            <div class="col-lg-4 mb-sm-4 mb-4">
              <a href={img} alt=""  onClick={e => this.handleClick(e, i)}>
                <img src={img} class="img-fluid" />
              </a>
			      </div> 
            
          ))}
        </div>
          <div className="Demo" onKeyUp={e => this.handleKeyDown(e)}>
		<LightboxModal visible={showLightbox} >
          <LightboxContent>
            
			<img src={images[selectedImage]} class="img-fluid" />
            <Controls>
              <Button className="CloseGalleryButton" onClick={this.closeModal}><i className="fa fa-close"></i></Button>
              <LeftRight>
                <Button className="LeftBtn" onClick={this.goBack} disabled={selectedImage === 0}>
                  <i className="fa fa-arrow-left"></i>
                </Button>
                <Button className="RightBtn" onClick={this.goForward} disabled={selectedImage === images.length - 1}>
                <i className="fa fa-arrow-right"></i>
                </Button>
              </LeftRight>
            </Controls>
          </LightboxContent>
        </LightboxModal>
        </div>
        </Fragment>
    )
  }
}

const StyledImg = styled(Img)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
  height: 100%; // or whatever
  & > img {
    object-fit: cover !important; // or whatever
    object-position: 0% 0% !important; // or whatever
  }
`

const Gallery = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  @media (min-width: 700px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 900px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (min-width: 1100px) {
    grid-template-columns: repeat(5, 1fr);
  }
  grid-gap: 15px;
  .gatsby-image-outer-wrapper {
    height: 100%;
  }
`

const GalleryItem = styled.div`
  position: relative;
`

const Button = styled.button``

const LightboxModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width:100%;
  height:100%;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2099 !important;
  background: rgba(0, 0, 0, 0.5);
  opacity: ${props => (props.visible ? '1' : '0')};
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};
`
const LightboxContent = styled.div`
  margin: 15px;
  max-width: 700px;
  width: 100%;
`

const Controls = styled.div`
  display: flex;
  justify-content: space-between;
`

const LeftRight = styled.div`
  button:first-child {
    margin-right: 10px;
  }
`

Lightbox.propTypes = {
  images: PropTypes.array.isRequired,
}

export default Lightbox