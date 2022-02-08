import { Component } from "react";
import { Field, reduxForm, reset } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { createPayment,fetchPlant } from "../actions";

class Payment extends Component{

  componentDidMount (){
    this.props.fetchPlant(this.props.match.params.id);
  }

  renderPlant(){
    if(!this.props.plants){
      return(
          <div>
              Loading...
          </div>
      )
    } else {
      return(
        <div className="item">
          <div className=" ui small image">
            <img src={this.props.plants.image} alt={this.props.plants.name}/>
          </div>
          <div className="content">
            <a className="header">{this.props.plants.name}</a>
            <div className="meta">
              <span>{this.props.plants.price}</span>
            </div>
            <div className="description">
              <p>{this.props.plants.details}</p>
            </div>
            <div className="extra">
              Additional Details
            </div>
          </div>
        </div>
      )
      
    }
  }

  renderShipInput = ({input,label,placeholder,meta})=>{
        
    return (
        <div className='field'>
            <label>{label}</label>
            <input {...input} placeholder={placeholder}/> 
            {this.renderError(meta)}
        </div>
        
    )
  }

  renderError=({error , touched})=>{
    if(error && touched){
        return(
            <div className='ui error message'>
                <div className='header'>{error}</div>
            </div>
        )
    }
  }

  onSubmit = (formValues,dispatch) => {
    
    dispatch(reset("payment")); 
    this.props.createPayment(formValues)
  }


    render(){
        return(
            <div className="ui container">
              <div className="ui vertical segment ">
                <div className="ui left aligned grid">
                  <div className="left aligned two column row">
                    <div className="column">
                        <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                          <h4 className="ui dividing header">Shipping Information</h4>
                          <div className="field">
                            <div className="two fields">
                              <div className="field">
                              <Field name="name" component={this.renderShipInput} label="*Name" placeholder="Your Name"/>
                              </div>
                              <div className="field">
                              <Field name="surname" component={this.renderShipInput} label="*Surname" placeholder="Your Surname"/>
                              </div>
                            </div>
                          </div>
                          <div className="fields">
                        <div className="twelve wide field">
                        <Field name="shippingAddress" component={this.renderShipInput} label="*Billing Address" placeholder="Your Address"/>
                          
                        </div>
                        <div className="four wide field">
                        <Field name="shippingAddress2" component={this.renderShipInput} label="*Shipping Address" placeholder="Your Apt #"/>
                        </div>
                      </div>
                        <h4 className="ui dividing header">Billing Information</h4>
                        <div className="field">
                          <label>Card Type</label>
                          <div className="field">
                              <Field
                                  name="cardType"
                                  component="select"
                                >
                                  <option value="">Type</option>
                                  <option value="amex">American Express</option>
                                  <option value="visa">Visa</option>
                                  <option value="disco">Discover</option>
                                </Field>
                          </div>
                        </div>
                        <div className="fields">
                          <div className="seven wide field">
                            
                            <Field name="cardNumber" component={this.renderShipInput} label="Card Numbers" placeholder="Card #"/>
                          </div>
                          <div className="three wide field">
                            
                            <Field name="cardCvc" component={this.renderShipInput} label="CVC" placeholder="CVC"/>
                          </div>
                          <div className="six wide field">
                            <label>Expiration</label>
                            <div className="two fields">
                              <div className="field">
                                <Field
                                  name="month"
                                  component="select"
                                >
                                  <option value="">Month</option>
                                  <option value="1">January</option>
                                  <option value="2">February</option>
                                  <option value="3">March</option>
                                  <option value="4">April</option>
                                  <option value="5">May</option>
                                  <option value="6">June</option>
                                  <option value="7">July</option>
                                  <option value="8">August</option>
                                  <option value="9">September</option>
                                  <option value="10">October</option>
                                  <option value="11">November</option>
                                  <option value="12">December</option>

                                </Field>
                                
                              </div>
                              <div className="field">
                              <Field name="cardYear" component={this.renderShipInput} label="Year" placeholder="Year"/>
                                
                              </div>
                            </div>
                          </div>
                        </div>
                        <button className="ui button" >Submit Order</button>
                      </form>
                    </div>
                    <div className="column">
                      <div className="ui item">
                          {this.renderPlant( )}
                        </div>
                      </div>
                  </div>
                </div>
              </div>
            </div>
        )
    }
}

const validate = (formValue)=>{
  const errors = {}
  if(!formValue.name){
      errors.name = 'You must enter your name'
  }
  if (!formValue.surname){
      errors.surname = 'You must enter your surname'
  }
  if (!formValue.month){
      errors.month = "You should enter month"
  }
  if (!formValue.cardYear){
    errors.cardYear = "You should enter year"
  }
  if (!formValue.shippingAddress){
    errors.shippingAddress = "You should enter your address"
  }
  if (!formValue.shippingAddress2){
    errors.shippingAddress2 = "You should enter your address"
  }
  
  return errors;
}


const formWrapped = reduxForm ({
  form:'payment',
  validate,
})(Payment);

const mapStateToProps =(state,ownProps)=>{
  return{
      plants: state.plants[ownProps.match.params.id]
  }
}

export default connect(mapStateToProps,{createPayment,fetchPlant})(formWrapped);