import { Component } from "react";
import { Field, reduxForm, reset } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { createPayment } from "../actions";

class Payment extends Component{

  renderShipInput = ({input,label,placeholder})=>{
        
    return (
        <div className='field'>
            <label>{label}</label>
            <input {...input} placeholder={placeholder}/> 
        </div>
        
    )
}

onSubmit = (formValues,dispatch) => {
  dispatch(reset("payment")); 
  this.props.createPayment(formValues)
}


    render(){
        return(
            <div>
                <form className="ui form" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                  <Field name="name" component={this.renderShipInput} label="*Name" placeholder="Your Name"/>
                <h4 className="ui dividing header">Shipping Information</h4>
                <div className="field">
                  <div class="two fields">
                    <div class="field">
                    <Field name="name" component={this.renderShipInput} label="*Name" placeholder="Your Name"/>
                    </div>
                    <div class="field">
                    <Field name="surname" component={this.renderShipInput} label="*Surname" placeholder="Your Surname"/>
                    </div>
                  </div>
                </div>
                <div class="field">
                  <label>Billing Address</label>
                  <div class="fields">
                    <div class="twelve wide field">
                    <Field name="shipping[address]" component={this.renderShipInput} label="*Shipping Address" placeholder="Your Address"/>
                      
                    </div>
                    <div class="four wide field">
                    <Field name="shipping[address-2]" component={this.renderShipInput} label="*Shipping Address" placeholder="Your Apt #"/>
                    </div>
                  </div>
                </div>
                <h4 class="ui dividing header">Billing Information</h4>
                <div class="field">
                  <label>Card Type</label>
                  <div class="ui selection dropdown">
                  <Field
                    name="card"
                    component="select"
                    >
                    <option value="">Select card type</option>
                    <option value="American Express">American Express</option>
                    <option value="Visa">Visa</option>
                    <option value="Discover">Discover</option>
                    </Field>
                    
                    
                  </div>
                </div>
                <div class="fields">
                  <div class="seven wide field">
                    <label>Card Number</label>
                    <Field name="card[number]" component={this.renderShipInput} label="Card Numbers" placeholder="Card #"/>
                  </div>
                  <div class="three wide field">
                    <label>CVC</label>
                    <Field name="card[cvc]" component={this.renderShipInput} label="CVC" placeholder="CVC"/>
                  </div>
                  <div class="six wide field">
                    <label>Expiration</label>
                    <div class="two fields">
                      <div class="field">
                        <Field
                          name="card"
                          component="select"
                        >
                          <option value="">Select option</option>
                          <option value="$25">$25</option>
                          <option value="$50">$50</option>
                          <option value="$100">$100</option>
                        </Field>
                      </div>
                      <div class="field">
                      <Field name="card[expire-year]" component={this.renderShipInput} label="Year" placeholder="Year"/>
                        
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="ui segment">
                  <div class="field">
                    <div class="ui toggle checkbox">
                    <Field class="hidden" name="gift" component={this.renderShipInput} label="Do not include a receipt in the package" />
                    </div>
                  </div>
                </div>
                <div class="ui button" tabindex="0">Submit Order</div>
              </form>
            </div>
        )
    }
}

const formWrapped = reduxForm ({
  form:'payment'
})(Payment);

export default connect(null,{createPayment})(formWrapped);