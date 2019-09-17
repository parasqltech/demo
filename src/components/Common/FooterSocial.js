import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'

const FooterSocial = () => (
  <StaticQuery
    query={graphql`
      query {
        allWordpressWpSocial{
		edges{
		  node{
			title
			acf{
			  font_aswome_icons
			  link
			}
		  }
		}
	  }
		}
    `}
    render={data => (
			 <ul className="footer-social-links social-bookmark">
				{data &&
				data.allWordpressWpSocial &&
				data.allWordpressWpSocial.edges &&
				data.allWordpressWpSocial.edges.map(
                prop => {
					return (
					<li><a href={prop.node.acf.link} target="_blank"><i
                                                className={prop.node.acf.font_aswome_icons}></i></a></li>
					)
                }
                )}
			</ul>
    )}
	/>
)

export default FooterSocial
