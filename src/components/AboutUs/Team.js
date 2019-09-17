import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'





const Team = () => (
  <StaticQuery
    query={graphql`
      query {
    allWordpressWpTeam {
                        edges {
                        node {
                            id
                            acf {
                            title
                            desgination
                            image {
                                source_url
                            }
                            }
                        }
                        }
                    }
            
        }
    `}
    render={data => (
		<section className="about-us-section-4 bg-white">
                        <div className="container">
                            <div className="main-panel">
                                <span className="section-subheading-heading">Team Memeber</span>
                                <h2 className="section-heading text-center">
                                    We Have Some Awesome People
                                </h2>
                               
                                       
                                            <ul className="team-list">
                                                {data &&
                                                    data.allWordpressWpTeam &&
                                                    data.allWordpressWpTeam.edges.map(
                                                
                                                    
                                                
                                                    prop => {
                                                    return (   
                                                    <li className="team-person">
                                                        <p className="team-member-name">
                                                        {prop.node.acf.title}
                                                        </p>
                                                        <img src={prop.node.acf.image.source_url} className="img-fluid"/>
                                                        <p className="team-member-position">
                                                            {prop.node.acf.desgination}
                                                        </p>
                                                    </li>
                                                      )
                                                    }
                                                )}  
                                            </ul>
                                          
                          
                          
                          </div>
                        </div>
                </section>
    )}
	/>
)

export default Team
