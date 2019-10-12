import React, {Component} from "react";
import { StaticQuery, graphql, navigate } from "gatsby";
import styled from "styled-components";
import Search from "gatsby-wordpress-search";
 
 
 
class SingleSearch extends Component {
	render() {
		const event = this.props.data.allWordpressWpSearchResults
		console.log(event);
		return (
			<></>
		)
	}
}	

export default SingleSearch
 
export const pageQuery = graphql`
  query {
    allWordpressWpSearchResults {
          edges {
            node {
              id
              post_title
              searchData
              pathname
            }
          }
        }
  }
`
 
