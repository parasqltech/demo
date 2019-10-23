import React,{Component} from 'react'
import Layout from '../components/Layout'

class Calendly extends React.Component {
  componentDidMount() {
    const head = document.querySelector('head');
    const script = document.createElement('script');
    script.setAttribute('src',  'https://assets.calendly.com/assets/external/widget.js');
    head.appendChild(script);
  }

  componentWillUnmount() {
    // whatever you need to cleanup the widgets code
  }

  render(){
    return (
      <Layout>
        <div id="schedule_form">
          <div 
            className="calendly-inline-widget"
            data-url="https://calendly.com/ql-tech/discovery-meeting"
            style={{ minWidth: '320px', height: '650px' }} />
        </div>
      </Layout>
    );
  }
}

export default Calendly