import React from 'react'
import Layout from '../components/Layout'
import { Link, StaticQuery, graphql } from 'gatsby'

const NotFoundPage = () => (
  <Layout>
	<section className="error-page bg-light text-center">
        <div className="container">
            <div className="main-panel">
				<div className="row justify-content-center">
					<div className="col-lg-10">
						<span className="error-number">404</span>
						<h1 className="heading-main">PAGE CAN NOT BE FOUND.</h1>
						<p className="label-text">The page you are looking for does not exist.</p>
						<Link to="/" className="btn-default">BACK TO HOME</Link>
					</div>
				</div>
			</div>
		</div>
	</section>
    
  </Layout>
)
export default NotFoundPage
