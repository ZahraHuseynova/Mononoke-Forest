import { connect } from "react-redux";
import { Component } from "react";
import { fetchContact} from '../../actions'
import { fetchCard } from '../../actions';

class DeletePage extends Component{
    componentDidMount(){
        this.props.fetchContact(this.props.match.params.id)
        this.props.fetchCard(this.props.match.params.id)
    }

    renderContactDelete(){
        if(this.props.contact){
            return(<div>
                <div className="content">{this.props.contact.name}</div>
                <div className="right floated content">
                <button className="ui button negative">Delete</button>
            </div>
            </div>)
        }
        return(
            <div>
                Loading ...
            </div>
        )
    }

    renderCardDelete(){
        if(this.props.card){
            return(<div>
                <div className="content">{this.props.card.card}</div>
                <div className="right floated content">
                <button className="ui button negative">Delete</button>
            </div>
            </div>)
        }
        return(
            <div>
                Loading ...
            </div>
        )
    }
    render(){
        return (
            <div className="ui container"> 
                <h2>Contacts</h2>
                <div className="ui celled list">{this.renderContactDelete()}</div>
                <h2>Cards</h2>
                <div className="ui celled list">{this.renderCardDelete()}</div>
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

export default connect(mapStateToProps,{fetchContact,fetchCard})(DeletePage);