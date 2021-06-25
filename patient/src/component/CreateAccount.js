import React, { Component } from 'react';
import {Container} from 'react-bootstrap';

export class CreateAccount extends Component {

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };



  render() {
    const { values, handleChange } = this.props;
    return (
     <Container className = "App-container">
        <form>
            <h1 className = "App-welcome">Create an Account</h1>
            <br/>
            <div className="form-group">
                <label className = "App-label">First Name</label>
                <input className="form-control"
                        id = "firstName"
                        placeholder="Enter Your First Name" 
                        onChange={handleChange('firstName')} 
                        defaultValue={values.firstName}
                        required/>
            </div>
            <br/>
            <div className="form-group">
                <label className = "App-label">Last Name</label>
                <input className="form-control"
                        id = "lastName"
                        placeholder="Enter Your Last Name" 
                        onChange={handleChange('lastName')} 
                        defaultValue={values.lastName}
                        required/>
            </div>
            <br/>
            <div className="form-group">
                <label className = "App-label">Email</label>
                <input className="form-control"
                        id = "email"
                        placeholder="Enter Your Email Address" 
                        type = "email"
                        onChange={handleChange('email')} 
                        defaultValue={values.email}

                        required/>
            </div>
            <br/>
            <div className="form-group">
                <label className = "App-label">Date of Birth</label>
                <input className="form-control"
                        id = "birthDate"
                        type = "date"
                        onChange={handleChange('birthDate')} 
                        defaultValue={values.firstName}
                        required/>
            </div>
            <br/>
            <div className="form-group">
                <label className = "App-label">Address</label>
                <input className="form-control"
                        id = "address"
                        type = "address"
                        placeholder="Enter Your Complete Address"
                        onChange={handleChange('address')} 
                        defaultValue={values.address}
                        required/>
            </div>
            <br/>
            <div className="form-group">
                <label className = "App-label">Contact Number</label>
                <input className="form-control"
                        placeholder="Enter Your Contact Number"
                        id = "contactNumber"
                        htmlSize = "11"
                        onChange={handleChange('contactNumber')} 
                        defaultValue={values.contactNumber}
                        required/>
            </div>
            <br/>
            <div className="form-group">
                <label className = "App-label">Password</label>
                <input className="form-control"
                        placeholder="Enter your Password"
                        id = "passWord"
                        type = "password"
                        onChange={handleChange('passWord')} 
                        defaultValue={values.passWord}
                        required/>
            </div>
            <br/>
            <div className="form-group">
                <label className = "App-label">Confirm Password</label>
                <input className="form-control"
                        placeholder="Re-Enter your Password"
                        type = "password"
                        id = "confirmPassword"
                        onChange={handleChange('confirmPassword')}
                        defaultValue={values.confirmPassword}
                        required/>
            </div>
            <br/>
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
              <button type="button" className="btn btn-success btn-lg" onClick  = {this.back}>Cancel</button>

              <button type="submit" className="btn btn-success btn-lg" onClick  = {this.continue}>Continue</button>
            </div>
          </form>
     </Container>
    );
  }
}

export default CreateAccount;