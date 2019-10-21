import React from "react"
import SimpleReactValidator from 'simple-react-validator';

class ContactSubscribe extends React.Component{
	
	constructor(props) {
		super(props);
		this.validator = new SimpleReactValidator();
  
		this.state = {
         
          email: '',
       
        
		}
	  this.submitForm = this.submitForm.bind(this);
	  this.email = this.email.bind(this);
	}
	
	
	email(e) {
		this.setState({
			email: e.target.value
		});
	}

	
	
	
	submitForm() {
	  if (this.validator.allValid()) {
		var request = new XMLHttpRequest();
		request.open('POST', 'https://script.google.com/a/qltech.com.au/macros/s/AKfycbzM-2tkpmhvcjNAJZvPNAObtmjJiyh4Ldudva7NnoS70P3r2Z4/exec', true);
		var formData = new FormData();
		formData.append("email", this.state.email);
		request.send(formData);
		
	  } else {
		this.validator.showMessages();
		// rerender to show messages for the first time
		// you can use the autoForceUpdate option to do this automatically`
		this.forceUpdate();
	  }
	}
	
  render (){
    return(
      <>
     <div className="input-group mb-3 subcribe-form">
                            <input type="email" className="form-control" value={this.state.email} onChange={this.email} placeholder="Email address" required/>
							
                            <div className="input-group-prepend">
                                <button className="btn btn-outline-secondary" onClick={this.submitForm} type="button">Subscribe Now</button>
                            </div>
							{this.validator.message('Email', this.state.email, 'required|email')}
                        </div>
    </>
    )
  }
}

export default ContactSubscribe