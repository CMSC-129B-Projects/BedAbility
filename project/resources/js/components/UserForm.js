import React, { useState, Component } from 'react';
import Login from './Login'; //  login
import CreateAccount from './CreateAccount'; // register
import ConfirmRegistration from "./ConfirmRegistration"; //confirm registration
import SuccessfulRegistration from './SuccessfulRegistration'; //  successful Registration
import DataSharingAgreement from './DataSharingAgreement';
import ForgetPassword from './ForgetPassword';
import ReactDOM from 'react-dom';


export class UserForm extends Component {
  state = {
    step: 1,
    userName:'',
    passWord:'',
    fullName: '',
    address: '',
    position: '',
    contactNumber: null,
    age: null,
    code: null,
    confirmPassword: '',
  };

  //skip the next step
  skipStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 2
    });
  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  handleSubmit = input => e => {
    e.preventDefault();

    if(this.validate()){
      console.log(this.state);

      let input = {}
      input["passWord"] = "";
      input["confirmPassword"] = "";
      this.setState({input:input});
    }
  }
  validate(){
    let input = this.state.input;
    let errors = {}
    let isValid = true;

    if(typeof input["passWord "] != "undefined" && typeof input["confirmPassword"] != "undefined"){
      if (input["passWord"] != input["confirmPassword"]) {
        isValid = false;
        errors["passWord"] = "Passwords don't match.";
      }
    }
    this.setState({
      errors: errors
    });

    return isValid;
  }

  render() {
    const {step} = this.state;
    const { userName, passWord, fullName, address, position, age, contactNumber, code, confirmPassword} = this.state;
    const values = {userName, passWord, fullName, address, position, age, contactNumber, code, confirmPassword};

    switch (step) {
      case 1:
        return (
          <Login
            nextStep = {this.nextStep}
            skipStep={this.skipStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
          if(this.passWord != this.confirmPassword){

          }
        return (
          <ForgetPassword
            prevStep = {this.prevStep}
            handleChange={this.handleChange}
            values = {values}
          />
        );
      case 3:
        return (
          <DataSharingAgreement
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 4:
        return (
          <CreateAccount
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 5:
        return (
          <ConfirmRegistration
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 6:
        return (
        <SuccessfulRegistration
            nextStep={this.nextStep}
            values={values}
          />
        );
      case 7:
        return <UserForm/>;

      default:
        (console.log('This is a multi-step form built with React.'))
    }
  }
}

export default UserForm;

if (document.getElementById('form')) {
    ReactDOM.render(<UserForm />, document.getElementById('form'));
}
