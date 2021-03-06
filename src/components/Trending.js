import { Component } from "react";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { fetchPlants } from '../actions';

class Trending extends Component{
    componentDidMount(){
        this.props.fetchPlants();
    }

    

    renderTrendingList(){
        return(
            this.props.plants.map(plant=>{
                if(plant.status === "Limited Time Only"){
                    return(
                    <div className="card" key={plant.id}> 
                    {/* {this.renderPlants(plant)} */}
                    <Link to={`/showpage/${plant.id}`}>
                        <div className=" ui fluid image">
                            
                            <div className="ui red ribbon label">
                                <i className="star icon">{plant.status}</i>
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
                }else {
                    return null;
                }
            })
        )
    }
    render(){
        return( 
        <div className="ui container" style={{ padding:'30px'}}>
            <div className="ui vertical segment">
                <div className="ui header" style={{ fontSize:'4em'}}>Trending now ...</div>
                <div className="ui four stackable cards">
                    {this.renderTrendingList()}
                    {/* <div className="card">
                        <div className=" ui fluid image">
                            <div className="ui teal ribbon label">
                                <i className="star icon">Limited Time Only</i>
                            </div>
                            <img src="../assets/trending1.jpg" alt="trendig"/>
                        </div>
                        <div className="extra content">
                            <span className="left floated text"><strong>Aglaonema Siam</strong></span>
                            <span className="right floated text">$33-$53</span>
                        </div>
                    </div>
                    <div className="card">
                        <div className="ui fluid image">
                            <div className="ui teal ribbon label">
                                <i className="star icon">50% Off</i>
                            </div>
                            <img src="../assets/trending4.jpg" alt="trendig"/>
                        </div>
                        <div className="extra content">
                            <span className="left floated text"><strong>String of Pearls</strong></span>
                            <span className="right floated text">
                                <s>$45</s> &nbsp;
                                <span style={{color:'red'}}>$21+</span>
                            </span>
                        </div>
                    </div>
                    <div className="card">
                        <div className="ui fluid image">
                            <div className="ui teal ribbon label">
                                <i className="star icon">40% Off</i>
                            </div>
                            <img src="../assets/trending3.jpg" alt="trendig"/>
                        </div>
                        <div className="extra content">
                            <span className="left floated text"><strong>Pet-Friendly Plant <br/> Parent Set</strong></span>
                            <span className="right floated text">
                                <s>$63</s> &nbsp;
                                <span style={{color:'red'}}>$31+</span>
                            </span>
                        </div>
                    </div>
                    <div className="card">
                        <div className="ui fluid image">
                            <div className="ui teal ribbon label">
                                <i className="star icon">Limited Time Only</i>
                            </div>
                            <img src="../assets/trending2.jpg" alt="trendig"/>
                        </div>
                        <div className="extra content">
                            <span className="left floated text"><strong>Arrowhead Plant</strong></span>
                            <span className="right floated text">$31-$55</span>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>)
    }
}

const mapStateToProps =(state)=>{
    return{
        plants:Object.values(state.plants),
        currentUserId:state.auth.userId
    }
}
export default connect(mapStateToProps,{fetchPlants})(Trending);