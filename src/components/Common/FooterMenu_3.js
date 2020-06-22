import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'

const FooterM3 = () => (
  <StaticQuery
    query={graphql`
      query {
        allWordpressWpApiMenusMenusItems(filter: {name: {eq: "footer 3"}}){
			edges{
				node{
					id
					name
					items{
						title
						url
						object_slug
					}
				}
			}
		}
		}
    `}
    render={data => (
			<ul className="footer-link-list">
				{data &&
				data.allWordpressWpApiMenusMenusItems &&
				data.allWordpressWpApiMenusMenusItems.edges &&
				data.allWordpressWpApiMenusMenusItems.edges[0] &&
				data.allWordpressWpApiMenusMenusItems.edges[0].node &&
				data.allWordpressWpApiMenusMenusItems.edges[0].node.items &&
				data.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(
                prop => {
					return (
						<li><Link to={"/industries/"+prop.object_slug+"/"} dangerouslySetInnerHTML={{ __html: prop.title}}></Link></li>
					)
                }
                )}
			</ul>
    )}
	/>
)

export default FooterM3
