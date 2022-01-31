import { Component } from "react";
import '../css/Sub.css';
import { fetchPlants,fetchSubs } from '../actions'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Sub extends Component{
    componentDidMount(){
        this.props.fetchPlants();
        this.props.fetchSubs();
    }

    renderSubList(){
        return(
            this.props.plants.map(plant=>{
                if(plant.discount === "15% Off with SUB15"){
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
                    
                } else if(plant.discount === "gift"){
                    return (<div className="card" key={plant.id}> 
                    <Link to="/gift">
                    <div className=" ui fluid image">
                        <img src={plant.image} alt={plant.name}/>
                    </div>
                    <div className="extra content">
                        <span className="left floated text"><strong>{plant.name}</strong></span>
                        <span className="right floated text">{plant.price}</span>
                    </div>
                    </Link>
                </div>)
                } else {
                    return null;
                }
            })
        )
    }

    renderPerkList(){
        return(
            this.props.subs.map(sub=>{
                if(sub){
                    return(
                        <div className="ui comments">
                             <div className="comment">
                                <a href='' className="avatar">
                                <img src={sub.image} alt={sub.name}/>
                                </a>
                                <div className="content" >
                                    <h2 className="ui header" style={{fontFamily:'Times New Roman, Times, serif'}}>{sub.name}</h2>
                                    <p className="text" >
                                    {sub.details}
                                    </p>
                                </div>
                            </div>
                        </div> 
                    )
                }else{
                    return null;
                }
            })
        )
    }

    render() {
        return (
        <div className="ui container">
            <div className="ui vertical segment" >
                <div className="subImg">
                    <img src="../assets/subs.jpg" alt="subs" style={{width:'100%'}}/>
                    <div >
                        <p className="text-left"> Our<br/>Subscriptions</p>
                        <p className="subText">Bring the outdoors in and instantly elevate your space and mood <br/> with our monthly houseplant subscription box.
                        <br/>
                        <br/>
                            <Link to="/gift"className="ui positive button" style={{backgroundColor:'#00ab84',color:'white'}}>Gift</Link>
                        </p>
                    </div>
                </div>
            </div>
            <div className="ui three stackable cards">
                    {this.renderSubList()}
                    
                </div>
                <div className="ui vertical segment" style={{marginTop:'50px'}}>
                    <div className="ui left aligned grid" style={{backgroundColor:"rgb(237, 253, 251)",fontFamily:'Times New Roman, Times, serif'}}>
                        <div className="left aligned two column row">
                            <div className="column">
                                <div className="ui left aligned header" >
                                    <h1 style={{fontSize:'3em',fontFamily:'Times New Roman, Times, serif'}}>Subscriber<br/> perk</h1>
                                </div>
                                <img src="../assets/cover.jpg" alt="cover"/>
                            </div>
                            <div className="column" >
                                {this.renderPerkList()}
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ui vertical segment" style={{marginTop:'50px'}}>
                    <div className="ui left aligned grid" style={{fontFamily:'Times New Roman, Times, serif'}}>
                        <div className="left aligned two column row">
                            <div className="column">
                                <img src="../assets/freeship.jpg" alt="cover"/>
                            </div>
                            <div className="column" >
                                <div className="ui left aligned header" >
                                    <h1 style={{fontSize:'4em',fontFamily:'Times New Roman, Times, serif',}}>Add-Ons Ship<br/> Free</h1>
                                </div>
                                <p style={{fontSize:'1.5em',fontFamily:'Times New Roman, Times, serif',}}>Add plant care supplies and accessories to your monthly box and they’ll ship free! Once you’ve signed up for a subscription, log into your account to pick supplies from potting mix to fertilizer. Pick as many add-ons as you’d like each month and enjoy free shipping with your box. There’s something in the simple act of caring for plants that boosts our spirits and reduces our stress.</p>
                            </div>
                        </div>
                    </div>
                </div>
                
        </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        plants:Object.values(state.plants),
        subs:Object.values(state.subs)
    }
}

export default connect(mapStateToProps,{fetchPlants,fetchSubs})(Sub);