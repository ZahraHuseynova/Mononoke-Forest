import { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPlant } from '../actions';


class ShowPage extends Component{

    componentDidMount(){
        this.props.fetchPlant(this.props.match.params.id);
    }

    renderPlants(){
        if(!this.props.plants){
            return(
                <div>
                    Loading...
                </div>
            )
        } 
        
        else {
            return (
                
            <div className='ui vertical segment'>
               
            <div className="ui left aligned grid">
                
                <div className="left aligned two column row">
                    <div className="column">
                        
                        <div className='ui grid'>
                            <div className='three wide column'>
                                <img className='ui tiny image' src={this.props.plants.image} alt={this.props.plants.name}/><br/>
                                <img className='ui tiny image' src={this.props.plants.image} alt={this.props.plants.name}/><br/>
                                <img className='ui tiny image' src={this.props.plants.image} alt={this.props.plants.name}/><br/>
                                <img className='ui tiny image' src={this.props.plants.image} alt={this.props.plants.name}/>
                            </div>
                            <div className='twelve wide column'>
                                <img  className='ui massive image' src={this.props.plants.image} alt={this.props.plants.name}/>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="ui left aligned header" >
                            <h1 style={{fontSize:'3em',fontFamily:'Times New Roman, Times, serif'}}>{this.props.plants.name} <br/>{this.props.plants.price}</h1>
                        </div>
                        <div className='ui left aligned grid'>
                            <div className='left aligned two column row'>
                                <div className='column'>
                                    <h3>Quantity</h3>
                                </div>
                                <div className='column'>
                                    <button class="ui compact icon button"><i class="plus icon"></i></button>
                                        <button class="compact ui button">
                                            1
                                        </button>
                                    <button class="ui compact icon button"><i class="minus icon"></i></button>
                                </div>
                            </div>
                        </div>
                        <Link to={`/payment/${this.props.plants.id}`}>
                        <button className='ui fluid button' style={{backgroundColor:'#00ab84',color:'white'}}>
                        <s style={{color:'black'}}>$45</s> {this.props.plants.price}- Add to Cart
                        </button>
                        </Link>
                        <br/>
                        <div className='ui grid'>
                            <div className='three wide column'>
                                <h3>Details</h3>
                            </div>
                            <div className='twelve wide column'>
                                <p>{this.props.plants.details}</p>
                            </div>
                        </div>
                        <div className='ui grid'>
                            <div className='three wide column'>
                                <h4>Plant care</h4>
                            </div>
                            <div className='twelve wide column'>
                                <i className='sun icon'></i> <span>{this.props.plants.light}</span><br/>
                                <i className='tint icon'></i>
                                <span>{this.props.plants.water}</span><br/>
                                <i className='paw icon'></i><span>{this.props.plants.category}</span>
                            </div>
                        </div>
                    </div>
                    
                </div>
                
            </div>
            
        </div>
        
        )
        }
    }





    render(){
        return(
            <div className='ui container'>
                {this.renderPlants()}
                <div style={{backgroundColor:'rgb(233, 229, 229)',padding:'15px'}}> 
                <div className="ui header" style={{ fontSize:'3em'}}>You Might Like</div>
                    <div className="ui four stackable cards" >
                        <div className="card">
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
                        </div>
                </div>
                </div>
                <br/>
                <div className='ui vertical segment'>
                    <div className='ui left aligned grid'>
                        <div className='left aligned two column row'>
                            <div className='column'>
                                <img className='ui large image' src="../assets/classic.jpg" alt='classic'/>
                            </div>
                            <div className='column'>
                                <div className="ui left aligned header" style={{ fontSize:'3em'}}>Become a Subscriber</div>
                                <p>Take the guesswork out of plant shopping and enjoy the element of surprise with our plant subscription boxes! Choose between our Classic or Pet Friendly subscription – and receive a houseplant in 6" diameter grow pot and 7" wide ceramic planter to display it in delivered to your door every month. All you have to do is water and enjoy.</p>
                                <p>→ Includes easy-care plant & chic ceramic pot</p>
                                <p>→ Plant variety changes month to month</p>
                                <p> → Pause or cancel anytime after the first 3 plant deliveries</p>
                                <Link to="/subscription" className='ui positive basic button'>Learn more</Link>
                            </div>
                        </div>
                    </div>
                </div>
                
                
            </div>
        )
    }
}

const mapStateToProps =(state,ownProps)=>{
    return{
        plants: state.plants[ownProps.match.params.id]
    }
}
export default connect(mapStateToProps,{fetchPlant})(ShowPage);