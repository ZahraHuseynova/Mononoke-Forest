import { connect } from "react-redux";
import { Component } from "react";
import { fetchContact, fetchCard, deleteCard,deleteContact} from '../../actions'
import { Link } from 'react-router-dom';

class DeletePage extends Component{
    componentDidMount(){
        this.props.fetchContact(this.props.match.params.id)
        this.props.fetchCard(this.props.match.params.id)
    }

    renderContactDelete(){
        if(this.props.contact){
            return(<div>
                <div className="content">{this.props.contact.name}{this.props.contact.surname}</div>
                <div className="content">{this.props.contact.email}</div>
                <div className="content">{this.props.contact.phone}</div>
                <div className="content">{this.props.contact.order}</div>
                <div className="right floated content">
                <button onClick = {()=>{this.props.deleteContact(this.props.match.params.id)}}className="ui button negative">Delete</button>
                </div>
            </div>)
        }
        return null;
    }

    renderCardDelete(){
        if(this.props.card){
            return(<div>
                <div className="content">{this.props.card.card}</div>
                <div className="right floated content">
                <button  onClick = {()=>{this.props.deleteCard(this.props.match.params.id)}}className="ui button negative">Delete</button>
            </div>
            </div>)
        }
        return null;
    }

    renderButtonToAdmin(){
        return(
            <Link to="/contactadmin" className="ui button primary"> Go to Admin Page</Link>
        )
    }

    render(){
        return (
            <div className="ui container">
                <div className="ui segment">
                <h2>Contacts</h2>
                <div className="ui celled list">{this.renderContactDelete()} </div>
                <h2>Cards</h2>
                <div className="ui celled list">{this.renderCardDelete()}</div>
                </div> 
                
                <div className="ui segment">{this.renderButtonToAdmin()}</div>
                <button>Hello</button>
            </div>
        )
    }
    
}

const mapStateToProps = (state,ownProps)=>{
    return{
        contact:state.contact[ownProps.match.params.id],
        card:state.card[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps,{deleteCard, deleteContact,fetchContact,fetchCard})(DeletePage);