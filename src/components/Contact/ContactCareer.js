import React from "react"
import SimpleReactValidator from 'simple-react-validator';

class ContactCareer extends React.Component{
	
	constructor(props) {
		super(props);
		this.validator = new SimpleReactValidator();
  
		this.state = {
          first_name: '',
          last_name: '',
          email: '',
          number: '',
          goal: '',
          position: '',
          cctc: '',
          ectc: '',
          resume: '',
        
		}
	  this.submitForm = this.submitForm.bind(this);
	  this.setTitle = this.setTitle.bind(this);
	  this.setln = this.setln.bind(this);
	  this.email = this.email.bind(this);
	  this.number = this.number.bind(this);
	  this.position = this.position.bind(this);
	  this.cctc = this.cctc.bind(this);
	  this.ectc = this.ectc.bind(this);
	  this.resume = this.resume.bind(this);
	  
	  
	  
	  
	}
	
	position(e) {
		this.setState({
			position: e.target.value
		});
	}
	cctc(e) {
		this.setState({
			cctc: e.target.value
		});
	}
	ectc(e) {
		this.setState({
			ectc: e.target.value
		});
	}
	resume(e) {
		var v = e.target.value.toLowerCase();
		const possibleStrings = ['pdf', 'doc', 'docx'];
		var flag = 0;
		possibleStrings.map(item =>{
			if(v.includes(item)){
				
				flag = 1;
			}
		});
		console.log(flag);
		
		if(flag == 1){
			this.setState({
				resume: e.target.value
			});
		}
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
	
	
	
	submitForm() {
	  if (this.validator.allValid()) {
		
		document.getElementById('form').submit()
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
	  <form method="post" id="form" action="https://script.google.com/macros/s/AKfycbyyA4XBhMbE6a0uptpdVPl5IdRbI9Y2rkLX0kLEgd__YBiYjo0/exec" enctype="multipart/form-data">
	  
                                            <div className="row ">
                                                <div className="col-md-6 mb-4">
                                            <label className="label-text">First Name</label>
                                            <input type="text" className="form-control" name="first_name" value={this.state.first_name} onChange={this.setTitle}  required/>
											{this.validator.message('First Name', this.state.first_name, 'required|alpha')}
                                        </div>
                                        <div className="col-md-6 mb-4">
                                            <label className="label-text">Last Name</label>
                                            <input type="text" className="form-control" name="last_name" value={this.state.last_name} onChange={this.setln} required/>
											
											{this.validator.message('Last Name', this.state.last_name, 'required|alpha')}
                                        </div>
										<div className="col-md-6 mb-4">
										<label className="label-text">Email</label>
                                                    <input type="email" name="email"  className="form-control" value={this.state.email} onChange={this.email} placeholder="" name="email" required />
											{this.validator.message('Email', this.state.email, 'required|email')}		
                                        </div>
										<div className="col-md-6 mb-4">
                                        <label className="label-text">Contact Number</label>
                                                    <input type="text" value={this.state.number} onChange={this.number} name="number" required="" className="form-control" placeholder="" required />
													{this.validator.message('Contact Number', this.state.number, 'required|numeric|min:10|max:10')}
										</div>
                                                <div className="col-md-12 mb-3">
                                                    <label className="label-text">Select Position</label>
                                                    <select value={this.state.position} id="des" onChange={this.position} className="form-control" name="position" required>
                                                        <option value="">Please Select</option>
                                                        <option value="Front End Developer">Front End Developer</option>
                                                        <option value="PHP Developer">PHP Developer</option>
                                                        <option value="UI/UX Designer">UI/UX Designer</option>
                                                        <option value="HR Executive">HR Executive</option>
                                                        <option value="SEO Executive">SEO Executive</option> 
                                                        <option value="Content Writer">Content Writer</option>
                                                        <option value="Graphic Designer">Graphic Designer</option>
                                                        <option value="Junior WordPress Developer">Junior WordPress Developer</option>
                                                        <option value="IOS Developer">IOS Developer</option>
                                                        <option value="Android Developer">Android Developer</option>
                                                        <option value="Programmer / Developer">Programmer / Developer</option>
                                                        <option value="Customer Service Representative">Customer Service Representative</option>
                                                        <option value="Strategic Account Manager">Strategic Account Manager</option>
                                                    </select>
													{this.validator.message('Position', this.state.position, 'required')}
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="row">
                                                        <div className="col-xl-6 col-lg-12 col-md-6  col-sm-6 mb-4">
                                                            <label className="label-text">Current CTC</label>
                                                            <input type="number" value={this.state.cctc} onChange={this.cctc} name="CCTC" required className="form-control" placeholder=""/>
															{this.validator.message('Current ctc', this.state.cctc, 'required|numeric|min:0|max:10')}
                                                        </div>
                                                        <div className="col-xl-6 col-lg-12 col-md-6  col-sm-6 mb-4">
                                                            <label className="label-text">Expected CTC</label>
                                                            <input type="number" value={this.state.ectc} onChange={this.ectc} name="ECTC" required className="form-control" placeholder=""/>
															{this.validator.message('Expected ctc', this.state.ectc, 'required|numeric|min:0|max:10')}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-12  mb-4">
                                                    <label className="label-text">Resume Upload</label>
                                                    <div className="input-group ">
                                                        <input type="text"  className="form-control" placeholder="Upload only pdf, docx, doc and Max file size: up to 3 MB" readOnly=""/>
                                                             <label className="input-group-btn">
                                                            <span className="btn btn-outline-secondary uploadBtn">
                                                                Browse<input type="file" value={this.state.resume} onChange={this.resume} accept="application/pdf, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document" className="d-none" required name="resume"/>  
																{this.validator.message('Resume', this.state.resume, 'required')}		
                                                            </span>
                                                        </label>
                                                    </div>
                                                </div>
                                                <input type="hidden" className="form-control" placeholder="Enter your name" name="url" value="/career" />
                                        <input type="hidden" className="form-control" name="form_name" value="Career" />
                                                <div className="col-md-12  mb-3 ">
                                                    <button type="button" onClick={this.submitForm} className="btn-default border-0" value="Submit">Submit</button>
                                                </div>
                                            </div>
                                        </form>
      
    </>
    )
  }
}

export default ContactCareer