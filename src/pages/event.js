import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import Isotope from "isotope-layout/js/isotope";
import PropTypes from 'prop-types';
import Particles from 'react-particles-js';
import Layout from '../components/Layout'
import port_1 from '../img/portfolio/1.jpg'
import port_2 from '../img/portfolio/2.jpg'
import port_3 from '../img/portfolio/3.jpg'
import port_4 from '../img/portfolio/4.jpg'
import port_5 from '../img/portfolio/5.jpg'
import port_6 from '../img/portfolio/6.jpg'
import port_7 from '../img/portfolio/7.jpg'
import port_8 from '../img/portfolio/8.jpg'

class FilterGrid extends React.Component {
  constructor(props) {
    super(props);
    this.onFilterChange = this.onFilterChange.bind(this);
  }
  
  componentDidMount() {
    var link = document.getElementById('Allcss');
    link.click();
	
	document.querySelectorAll('.work-thumbnial').forEach(function(button) {
		var classList = button.className.split(/\s+/);
		for (var i = 0; i < classList.length; i++) {
			if(classList[i].indexOf(",") != -1){
				classList[i].split(",").forEach(function(item){
				   button.classList.add(item);
				});
			}
		}
	});
	
  }

  // Click Function
  onFilterChange = (newFilter) => {
    if (this.iso === undefined) {
      this.iso = new Isotope('#grid-container', {
        itemSelector: '.grid-item',
        layoutMode: "fitRows",
        percentPosition: true,
        fitRows: {
          gutter: '.gutter-sizer'
        }
      });
    }
    if(newFilter === '*') {
      this.iso.arrange({ filter: `*` });
    } else {
      this.iso.arrange({ filter: `.${newFilter}` });
    }
  }

  render() {
    //const posts = this.props.data.allMarkdownRemark.node
	 const posts = this.props.data.allWordpressWpEvents;
    const category = this.props.data.allWordpressCategory;
    return(
      // Filter Buttons
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
				<span className="section-subheading-heading">Our Story</span> 
				<h1 className="section-heading">
					Events
				</h1>
				<ul className="breadcrumbs">
					<li> <Link to="/">Home</Link> \</li>
					<li>Events</li>
				</ul>
			</div>
		</section>
		<section className="events-section-1">
        <div className="container text-center">
            <ul id="filters" className="isotop-sorting-menu ">
                <li><a href="javascript:void(0)" id="Allcss" onClick={() => {this.onFilterChange("*")}} className="menu-active Allcss" >All</a></li>
               {category && category.edges.map(
                        cats => {
				 return ( 
					 <li><a href="javascript:void(0)" onClick={() => {this.onFilterChange(cats.node.name)}} className="" >{cats.node.name}</a></li>

				 )})}   
            </ul>
        </div>
		<div className="main-panel">
              <div className="container">
                <div className="grid" id="grid-container">
					<div className="grid-sizer"></div>
					<div className="gutter-sizer"></div>
                    
					
					{posts && posts && posts.edges.map(
                        prop => {
                            return (    
                                    <div>
								<div className={ 'grid-item wow fadeInLeft  work-thumbnial '+ prop.node.categories.map(item => { return ( item.name ) }) } >
                        <div className="work-thumbnail-image">
                            <img src={prop.node.acf.image} className="img-fluid" alt=""/>
                            <p className="event-date"><span>24</span>Dec</p>
                        </div>
                        <div className="work-thumbnail-details">
                            <a href="event-details.html" className="work-title">{prop.node.title}</a>
                           
                          
                        </div>
                    </div>
                    </div>
								
								
                                      )
                                    }
                                )}
					
					
					
                </div>
            </div>
        </div>		
		<div className="loading  text-center"> 
            <div className="spinner-border  "></div> <span >
                    Loading... 
            </span>
        </div>	
        </section>
	</Layout>
    )
	
  }
}

FilterGrid.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

const Event = () => (
	<StaticQuery
    query = {graphql`
      query{
        allWordpressWpEvents {
		edges {
		  node {
			id
			title
			acf {
			  date
			  image
			}
			 categories{
				name
			}
		  }
		}	
	  }
		allWordpressCategory(filter: {slug: {regex: "/event/"}}) {
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
  render={(data, count) => <FilterGrid data={data} count={count} />}
  />
)

export default Event





/*export default () => (
  <StaticQuery
    query = {graphql`
      query FilterGridQuery {
        allMarkdownRemark (
          sort: { fields: [frontmatter___date], order: DESC}
          filter: { frontmatter: {templateKey: {eq: "recipe"}}}
          ) {
        edges{
          node{
            id
            frontmatter {
               title
               date
               description
               image {
                 childImageSharp {
                   resize(width: 1500, height: 1500) {
                     src
                   }
                   fluid(maxWidth: 786) {
                     ...GatsbyImageSharpFluid
                   }
                 }
               }
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `}
  render={(data, count) => <FilterGrid data={data} count={count} />}
  />

)*/