import { Component } from 'react';
import { reduxForm,Field ,reset } from 'redux-form';
import { connect } from 'react-redux';
import { createCard } from '../actions/index';
import { Link } from 'react-router-dom';


class GiftCard extends Component{

    onSubmit=(formValues, dispatch)=>{
        dispatch(reset('giftcard'))
        this.props.createCard(formValues)
    }

    renderAdmin(){
        if(this.props.isAdminIn === "109232611272471206484"){
            return(
                <div>
                    <Link to="/contactadmin" className="ui button primary">List of Cards</Link>
                </div>
            )
        } 
        else {
            return null;
        }
        
        
    }

    renderButton(){
        if(this.props.isSignedIn) {
            return (
                <div>
                    <button className="ui fluid teal button">Gift</button>
                </div>
            )
        }

        else {
            return null;
        }
    }

    render(){
        return (
            <div className="ui container">
                <div className="ui vertical segment" >
                    <div className="ui left aligned grid">
                        <div className="left aligned two column row">
                            <div className="column">
                                <img className="ui big image" src="../assets/card.jpg" alt="gift"/>
                            </div>
                            <div className="column">
                                <h1 style={{fontSize:'5em',fontFamily:'Times New Roman, Times, serif'}}>Gift Card</h1>   
                                <h3 style={{fontSize:'3em',fontFamily:'Times New Roman, Times, serif'}}>$25</h3>
                                <div>
                                    <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                                        <div>
                                            <Field
                                                name="card"
                                                component="select"
                                            >
                                                <option value="">Select option</option>
                                                <option value="$25">$25</option>
                                                <option value="$50">$50</option>
                                                <option value="$100">$100</option>
                                            </Field>
                                            <div className="ui divided items">
                                                <div className="item">
                                                    <div className="ui tiny image">
                                                    <strong>Details</strong>
                                                    </div>
                                                    <div className="center aligned content">
                                                        Give the gift of their choosing with a Digital Gift Card. You determine how the new plant parent receives their gift: delivered directly to their email inbox, a link for you to share with them or as a print out. All methods include instructions on how to redeem. No additional processing or shipping fees
                                                    </div>
                                                </div>
                                                {this.renderButton()}
                                            </div>
                                        </div>
                                        
                                    </form>
                                    <br/>
                                    {this.renderAdmin()}
                                </div>              
                            </div>
                                
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
}


const formWrapped = reduxForm ({
    form:'giftcard'
})(GiftCard);

const mapStateToProps =(state)=>{
    return{
        isAdminIn:state.auth.userId,
        isSignedIn:state.auth.isSignedIn
    }
}

export default connect(mapStateToProps,{createCard})(formWrapped);