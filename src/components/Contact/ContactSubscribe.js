import React,{Component} from "react"
import SimpleReactValidator from 'simple-react-validator';
import PropTypes from "prop-types"
class ContactSubscribe extends Component{
	
	constructor(props) {
		super(props);
		this.validator = new SimpleReactValidator();
  
		this.state = {
         
          email: '',
		  shown: "d-none",
       
        
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
		request.open('POST', 'https://script.google.com/macros/s/AKfycbycfOFmDih98LQhuWITY_JhLYmM_PXpARj0enCNY9cPaCL3xLs/exec', true);
		
		var formData = new FormData();
		
		formData.append("first_name", "Friend");
		formData.append("last_name", "Friend");
		formData.append("form_name", "Email");
		formData.append("email", this.state.email);
		formData.append("url",  "footer"+window.location.pathname);
		request.send(formData);
		
		this.setState({shown: "d-block"});
		
		this.setState({email: " "});
		setTimeout(
			function() {
				this.setState({shown: "d-none"});
				
			}
			.bind(this),
			3000
		);
		
		
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
							<input type="hidden" name="url" id="url" />
							
                            <div className="input-group-prepend">
                                <button className="btn btn-outline-secondary" onClick={this.submitForm} type="button">Subscribe Now</button>
                            </div>
							{this.validator.message('Email', this.state.email, 'required|email')}
							
                        </div>
						<p  className={"text-success "+this.state.shown} >Thank you for your subscription.</p>
    </>
    )
  }
}

export default ContactSubscribe