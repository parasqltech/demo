import React from "react"
import SimpleReactValidator from 'simple-react-validator';

class ContactIndustries extends React.Component{
	
	constructor(props) {
		super(props);
		this.validator = new SimpleReactValidator();
  
		this.state = {
          first_name: '',
          last_name: '',
          email: '',
          number: '',
          goal: '',
		  shown: "d-none",
		  shown_new: "d-none",
        
		}
	  this.submitForm = this.submitForm.bind(this);
	  this.setTitle = this.setTitle.bind(this);
	  this.setln = this.setln.bind(this);
	  this.email = this.email.bind(this);
	  this.number = this.number.bind(this);
	  this.goal = this.goal.bind(this);
	}
	
	setTitle(e) {
		this.setState({
			first_name: e.target.value
		});
	}
	setln(e) {
		this.setState({
			last_name: e.target.value
		});
	}
	email(e) {
		this.setState({
			email: e.target.value
		});
	}

	number(e) {
		this.setState({
			number: e.target.value
		});
	}
	goal(e) {
		this.setState({
			goal: e.target.value
		});
	}
	
	
	submitForm() {
	  if (this.validator.allValid()) {
		  
		var fnew = this.state.first_name.slice(0, 5);  
		var lnew = this.state.last_name.slice(0, 5);  
		
		if(fnew == lnew){
			this.setState({shown_new: "d-block"});
			setTimeout(
				function() {
					this.setState({shown_new: "d-none"});
				}
			.bind(this),
				2000
			);
			return false;
		}  
		
		var myarr = ["free", "downloads", "offers", "DA", "PA", "affordable price", "clients", "Some example", "services", "giveaways", "goal", "example", "test", "Marketing", "traffic", "offers","Bitcoin", "ervaringen", "review", "Capsules", "Amoxicillin", "blogger", "supplier", "SEO", "backlinks", "Digital", "Marketing", "link builder", "domain authority", "Off–Page",  "Title Tag Optimization", "Meta Tag Optimization", "keyword", "SERPs"];
		
		var flag = 0;
		for(let i = 0; i < myarr.length; i++){
			if(new RegExp('\\b'+ myarr[i] +'\\b','gi').test(this.state.goal) == true){
				flag = 1;
			}
		}	
		if(flag == 1){
			this.setState({shown: "d-block"});
			setTimeout(
				function() {
					this.setState({shown: "d-none"});
				}
			.bind(this),
				2000
			);
		}
		else{
			document.getElementById('form').submit();	
		}	
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
      <form method="POST" id="form" action="https://script.google.com/macros/s/AKfycbwCKMtCjCKbULTmpSNqkWQNgu5FfIw-U387iryVlXsOIxPpjYyO/exec"  >
							<div className="row justify-content-center">
								<div className="col-lg-8 col-md-10">
									 <div className="row">
										<div className="col-md-6 mb-4">
											<label className="label-text">First Name</label>
											<input type="text" className="form-control" placeholder=""  name="first_name" value={this.state.first_name} onChange={this.setTitle}  required/>
											{this.validator.message('First Name', this.state.first_name, 'required|alpha')}
										</div>
										<div className="col-md-6 mb-4">
											<label className="label-text">Last Name</label>
											<input type="text" className="form-control" placeholder=""  name="last_name" value={this.state.last_name} onChange={this.setln} required/>
											{this.validator.message('Last Name', this.state.last_name, 'required|alpha')}
										</div>
										<div className="col-md-12 mb-4">
											<label className="label-text">Email</label>
											<input type="email" className="form-control" value={this.state.email} onChange={this.email} placeholder="" name="email" required/>
											{this.validator.message('Email', this.state.email, 'required|email')}
										</div>
										<div className="col-md-12 mb-4">
											<label className="label-text">Contact Number</label>
											<input type="text"  value={this.state.number} onChange={this.number} className="form-control" placeholder="" name="number" required/>
											{this.validator.message('Contact Number', this.state.number, 'required|numeric|min:10|max:10')}
										</div>
										<div className="col-md-12">
											<label className="label-text">Your Goal</label>
											<textarea rows="3" onChange={this.goal} className="form-control" placeholder="" name="message" required>{this.state.goal}</textarea>
										</div>
										<input type="hidden" required className="form-control" name="url" value={this.props.url} />
										<input type="hidden" required className="form-control" name="form_name" value="Contact-us" />
										<p  className={"text-danger er-msg "+this.state.shown} >Invalid Message.</p>
										<p  className={"text-danger er-msg "+this.state.shown_new} >First name last name are must be different.</p>
										<div className="col-md-12  mb-4 ">
										<button type="button" onClick={this.submitForm} className="btn-default border-0 btn-sub" value="Submit">Submit</button>
											
										</div>
									</div>
								</div>
							</div>
						   
						</form>
    </>
    )
  }
}

export default ContactIndustries