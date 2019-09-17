import React from 'react'
import Helmet from 'react-helmet'
import { withPrefix, Link } from "gatsby"
import {CircleArrow as ScrollUpButton} from "react-scroll-up-button";
import Header from './Common/Header'
import Footer from './Common/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/style.css";
import $ from "jquery";
import favicon from "../img/fevicon.png";
const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Home | QL Tech"  link={[{ rel: "shortcut icon", type: "image/png", href: `${favicon}` }]}  />
	<Helmet>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
		<script src={withPrefix("js/jquery.min.js")}></script>
		<script src={withPrefix("js/bootstrap.min.js")}></script>
		
		<script src={withPrefix("js/main.js")}></script>
		<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBfTkf7ZJoHR9hN3KeNdpOGX9hj4XDO7sA">
    </script>
	</Helmet>
    <Header />
    <div>{children}</div>
	<Footer />
	<ScrollUpButton />
  </div>
)

export default TemplateWrapper
