import React, { Component } from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import {Form, Button, Container} from 'react-bootstrap';

export class ConfirmRegistration extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  handleSubmit(){

    const packets = this.props;
    console.log(packets);
    axios.post('/patient/sendrequest', packets)
        .then(
            response => alert(JSON.stringify(response.data))

            )
        .catch(error => {
            console.log("ERROR:: ",error.response.data);

            });
}

  render() {
    const {values: { firstName, lastName, email, birthDate, address, contactNumber}}= this.props;
    return (
     <Container className = "App-container">
        <form>
          <h3 className = "App-title">Please confirm your registration</h3>
          <br/>
          <div className = "App-text">
            <dl class="row">
              <dt class="col-sm-3">FULL NAME:</dt>
              <dd class="col-sm-9">{firstName + " " + lastName}</dd>

              <dt class="col-sm-3">EMAIL ADDRESS:</dt>
              <dd class="col-sm-9">{email}</dd>

              <dt class="col-sm-3">BIRTH DATE:</dt>
              <dd class="col-sm-9">{birthDate}</dd>

              <dt class="col-sm-3">ADDRESS:</dt>
              <dd class="col-sm-9">{address}</dd>

              <dt class="col-sm-3">CONTACT NUMBER:</dt>
              <dd class="col-sm-9">{contactNumber}</dd>
            </dl>
          </div>
          <div class="d-grid gap-2 d-md-flex justify-content-md-end">
            <button type="submit" className="btn btn-success btn-lg" onClick  = {this.back}>Cancel</button>
            <button type="submit" className="btn btn-success btn-lg mx-2" onClick  = {(e) => {this.handleSubmit(); this.continue(e);}}>Register</button>
          </div>
        </form>
     </Container>
    );
  }
}

export default ConfirmRegistration;
