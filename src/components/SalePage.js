import { Component } from "react";
import { fetchCards } from "../actions";
import { connect } from 'react-redux' 
import Accordion from "./Accordion";
import { Link } from "react-router-dom";

const items =[
    {
        title:"1.What if I've never had a plant before?",
        content:"This is a plant parent judgement-free zone. Every plant from The Mononoke comes with direct access to digital Care Library and our team of houseplant experts to answer any questions you might have. From where to put your plant,to how to care for it, we're here to help."
    },
    {
        title:"2. Where do you ship?",
        content:"We currently ship plants and plant supplies within the the contiguous US to all 48 states."
    },
    {
        title:"3.What if my order is a gift?",
        content:"You can also let your recipient know something is on the way with our new gift email!"
    }
];
class Sale extends Component{
    componentDidMount(){
        this.props.fetchCards();
    }

    renderSaleplants(){
        return(
            this.props.plants.map(plant=>{
                if(plant.discount==="15% Off with SUB15"){
                    return(
                        <div className="card" key={plant.id}> 
                        <Link to={`/showpage/${plant.id}`}>
                        <div className=" ui fluid image">
                            
                            <div className="ui teal ribbon label">
                                <i className="star icon">{plant.discount}</i>
                            </div>
                            <img src={plant.image} alt={plant.name}/>
                        </div>
                        <div className="extra content">
                            <span className="left floated text"><strong>{plant.name}</strong></span>
                            <span className="right floated text">{plant.price}</span>
                        </div>
                        </Link>
                    </div>
                    )
                } else if (plant.discount === "50% Off"){
                    return (<div className="card" key={plant.id}> 
                    <Link to={`/showpage/${plant.id}`}>
                    <div className=" ui fluid image">
                        <div className="ui red ribbon label">
                            <i className="star icon">{plant.discount}</i>
                        </div>
                        <img src={plant.image} alt={plant.name}/>
                    </div>
                    <div className="extra content">
                        <span className="left floated text"><strong>{plant.name}</strong></span>
                        <span className="right floated text">{plant.price}</span>
                    </div>
                    </Link>
                </div>)
                } else {
                    return null
                }
            })
        )
    }
    render(){
        return(
            <div className="ui container">
                <div className="ui vertical segment">
                    <div className="ui header" style={{color:'#00ab84', fontSize:'4em',padding:'25px'}}>Sale</div>
                    <p style={{color:'#00ab84',fontSize:'1.5em'}}>Shop up to 50% off top-selling plants, planers,holiday bundles,and so much more. Items are limited!</p>
                    <div className="ui three stackable cards">
                        {this.renderSaleplants()}
                </div>
    
                <div className="ui left aligned grid">
                    <div className="left aligned two column row">
                        <div className="column">
                            <div className="ui left aligned header" >
                                <h1 style={{fontSize:'3em', color:'#00ab84'}}>Frequently Asked Questions</h1>
                            </div>
                        </div>
                        <div className="column">
                            <Accordion items={items}/>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
    

}

const mapStateToProps =(state)=>{
    return{
        plants:Object.values(state.plants)
    }
}

export default connect (mapStateToProps,{fetchCards})(Sale);