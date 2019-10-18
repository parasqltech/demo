import React from 'react'
import Layout from '../components/Layout'
import Particles from 'react-particles-js';
import thankyouimg from '../img/thank-You.png';
const thankyou = () => (
  <Layout>
   
	 
    <section className="thank-you-section">
        <div className="container">
            <div className="pt-2 text-center">
                <div className="row justify-content-center">
                    <div className="col-md-5">
                        <img src={thankyouimg} className="img-fluid text-center" alt=""/>
                        <h1 className="section-heading text-subheading font-weight-bold mt-0 mb-0"> Thank You</h1>
                        <p className="section-heading-3 text-subheading mt-0"> for reaching out to us</p>
                    </div>
                </div>
               
            </div>
        </div>
    </section>	
  </Layout>
)

export default thankyou
