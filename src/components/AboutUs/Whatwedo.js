import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'





const Whatwedo = () => (
  <StaticQuery
    query={graphql`
      query {
    allWordpressWpWhatwedo {
                edges {
                  node {
                    acf {
                      descp
                      icon
                      title
                    }
                  }
                }
              }
            
        }
    `}
    render={data => (
		<section className="about-us-section-3  bg-white">
        <div className="container">
            <div className="main-panel">
                
                <span className="section-subheading-heading">What we do</span>
                <h2 className="section-heading text-center">
                    We Grow Your Business
                </h2>
                <div className="row">
                {data &&
                    data.allWordpressWpWhatwedo &&
                    data.allWordpressWpWhatwedo.edges.map(
                
                    
                
                    prop => {
                    return (   
                        <div className="col-md-4">
                            <div className="thumbnial">
                                <div className="thumbnial-bg"></div>
                                <i className={prop.node.acf.icon}></i>
                                <h3 className="thumbnial-heading">{prop.node.acf.title}</h3>
                                <p className="label-text">{prop.node.acf.descp}</p>
                                <a href="" className="btn btn-secondary-link">Learn More</a>
                            </div>
                        </div>
                        )
                        }
                    )}  
                    
                </div>
            </div>
        </div>
    </section>
    )}
	/>
)

export default Whatwedo
