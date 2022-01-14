import { Component } from "react";
import { connect } from 'react-redux';
import { fetchCards, fetchContacts} from '../../actions'

class ContactAdmin extends Component{
    componentDidMount(){
        this.props.fetchCards();
        this.props.fetchContacts();
    }

    renderContactList(){
        return this.props.contact.map(contact=>{
            return (
                <div className="item" key={contact.id}>
                    <i className="large middle aligned icon chat"/>
                    <div className="content">
                        {contact.name}&nbsp;
                        {contact.surname}
                    </div>
                    <div className="description">
                        {contact.email} 
                    </div>
                    <div className="description">
                        {contact.phone}
                    </div>
                    <div className="description">
                        {contact.order}
                    </div>
                    <div className="description">
                        {contact.comment}
                    </div>

                </div>
            )
        })
    }

    renderCardList(){
        return this.props.card.map(card=>{
            return (
                <div className="item" key={card.id}>
                    <i className="large middle aligned icon gift"/>
                    <div className="content">
                        {card.card}
                    </div>

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
        card: Object.values(state.card)
    }
}

export default connect(mapStateToProps,{fetchCards,fetchContacts})(ContactAdmin);