import { Component } from 'react'
import { Field, reduxForm } from 'redux-form';
import Dropdown from "./Dropdown";


class ContactInfo extends Component{
    
    renderInput({input,label,placeholder}){

        return (
            <div className='field'>
                <label>{label}</label>
                <input {...input} placeholder={placeholder}/> 
            </div>
            
        )
    }

    renderTextarea = ({textarea,placeholder}) =>{
        return(
            <div>
            <textarea {...textarea} placeholder={placeholder}/>
            </div>
        )
    };

    
    
    render(){
            return(
                <div >
                    <form className="ui form error">
                        <div className="two fields">
                            <Field name="name" component={this.renderInput} label="*Name" placeholder="Your Name"/>
                            <Field name="surname" component={this.renderInput} label="*Surname" placeholder="Your Surname" />
                        </div>
                        <div className="two fields">
                            <Field name="address" component={this.renderInput}label="*Email" placeholder="Your Email"/>

                            <Field name="phone" component={this.renderInput} label="*Phone Number" placeholder="Your Phone"/>
                                 
                            
                        </div>
                        <div className="two fields" >
                            <div className='field'>
                            <label>*Reason for contact</label>
                            <Dropdown /> 
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


export default reduxForm ({
    form:"feedback"
})(ContactInfo);


