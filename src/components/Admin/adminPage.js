import { Component } from "react";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { fetchCards, fetchContacts} from '../../actions'

class ContactAdmin extends Component{
    componentDidMount(){
        this.props.fetchCards();
        this.props.fetchContacts();
    }

    renderRecords(contacts){
        if(this.props.currentUserId){
            return(
                <div className="right floated content">
                    <Link to={`/deletepage/${contacts.id}`} className="ui button green">Done</Link>
                </div>
            ) 
        } else {
            return null;
        }
        
    }

    // renderCard(){
    //     return(
    //         <div>
    //             <button className="ui button negative">Delete</button>
    //         </div>
    //     )
    // }

    renderContactList(){
        return this.props.contact.map((contacts)=>{
            return (
                <div className="item" key={contacts.id}>
                    {this.renderRecords(contacts)}
                    <i className="large middle aligned icon chat"/>
                    <div className="content">
                        {contacts.name}&nbsp;
                        {contacts.surname}
                    </div>
                    <div className="description">
                        {contacts.email} 
                    </div>
                    <div className="description">
                        {contacts.phone}
                    </div>
                    <div className="description">
                        {contacts.order}
                    </div>
                    <div className="description">
                        {contacts.comment}
                    </div>
                    
                </div>
            )
        })
    }

    renderCardList(){
        return this.props.card.map(cards=>{
            return (
                <div className="item" key={cards.id}>
                    <i className="large middle aligned icon gift"/>
                    <div className="content">
                        {cards.card}
                    </div>
                    {this.renderRecords(cards)}
                </div>
            )
        })
    }
    render(){
        return (
            <div className="ui container"> 
                <h2>Contacts</h2>
                <div className="ui celled list">{this.renderContactList()}</div>
                <h2>Card orders</h2>
                <div className="ui celled list">{this.renderCardList()}</div>
            </div>
        )
    }
    
}

const mapStateToProps = (state)=>{
    return {
        contact: Object.values(state.contact),
        card: Object.values(state.card),
        currentUserId:state.auth.userId
    }
}

export default connect(mapStateToProps,{fetchCards,fetchContacts})(ContactAdmin);