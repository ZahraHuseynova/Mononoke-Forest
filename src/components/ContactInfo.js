import { Component } from 'react'
import { Field, reduxForm, reset } from 'redux-form';
import { connect } from 'react-redux';
import { createContact} from '../actions/index';


class ContactInfo extends Component{
    
    renderInput = ({input,label,placeholder,meta})=>{
        
        return (
            <div className='field'>
                <label>{label}</label>
                <input {...input} placeholder={placeholder}/> 
                {this.renderError(meta)}
            </div>
            
        )
    }

    renderTextarea = ({input,placeholder,meta}) =>{
        return(
            <div>
            <textarea {...input} placeholder={placeholder}/>
            {this.renderError(meta)}
            </div>
        )
    };

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
        dispatch(reset("contact")); 
        this.props.createContact(formValues)
    }

    
    
    render(){
            return(
                <div >
                    <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                        <div className="two fields">
                            <Field name="name" component={this.renderInput} label="*Name" placeholder="Your Name"/>
                            <Field name="surname" component={this.renderInput} label="*Surname" placeholder="Your Surname" />
                        </div>
                        <div className="two fields">
                            <Field name="email" component={this.renderInput}label="*Email" placeholder="Your Email"/>

                            <Field name="phone" component={this.renderInput} label="*Phone Number" placeholder="Your Phone"/>
                                 
                            
                        </div>
                        <div className="two fields" >
                            <div className='field'>
                            <label>*Reason for contact</label>
                            <div>
                                <Field
                                    name="contactReason"
                                    component="select"
                                >
                                    <option value="">Select option</option>
                                    <option value="change">I need to change my order</option>
                                    <option value="status">What's my order status</option>
                                    <option value="subscription">I need help with my subscription</option>
                                </Field>
                            </div>
                            
                            </div>
                                                              
                            <Field name="order" component={this.renderInput} label="Order number" placeholder="Order number"/>
                        </div>
                        <h1 style={{fontSize:"2em"}}>Additional Details</h1>
                        <Field name="comment" component={this.renderTextarea}  placeholder="Add details"/> 
                        <br/>
                        <br/>
                        <button className="fluid ui positive button">Send</button>
                    </form>
                    
                </div>)
                
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
    if (!formValue.email){
        errors.email = "You should enter your email"
    }
    
    if (isNaN(Number(formValue.phone))){
        errors.phone = "Must be a number"
    }
    return errors;
}



const formWrapped = reduxForm ({
    form:"contact",
    validate,
})(ContactInfo);


export default connect(null,{ createContact})(formWrapped)