import { Component } from "react";
import '../css/Sub.css';

class Sub extends Component{
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
                            <button className="ui button" style={{backgroundColor:'#00ab84',color:'white'}}>Subscribe</button>
                            <button className="ui positive button" style={{backgroundColor:'#00ab84',color:'white'}}>Gift</button>
                        </p>
                    </div>
                </div>
            </div>
            <div className="ui three stackable cards">
                    
                    <div className="card">
                        <div className="ui fluid image">
                            <div className="ui red ribbon label">
                                <i className="star icon">15% Off with SUB15</i>
                            </div>
                            <img src="../assets/trending3.jpg" alt="trendig"/>
                        </div>
                        <div className="extra content">
                            <span className="left floated text"><strong>Pet-Friendly Plant <br/> Parent Set</strong></span>
                            <span className="right floated text">
                            <span className="right floated text">$50-$60</span>
                            </span>
                        </div>
                    </div>
                    <div className="card">
                        <div className="ui fluid image">
                            <div className="ui red ribbon label">
                                <i className="star icon">15% Off with SUB15</i>
                            </div>
                            <img src="../assets/monstera.jpg" alt="trendig"/>
                        </div>
                        <div className="extra content">
                            <span className="left floated text"><strong>Monstera</strong></span>
                            <span className="right floated text">$31-$55</span>
                        </div>
                    </div>
                    <div className="card">
                        <div className="ui fluid image">
                            <img src="../assets/month.jpg" alt="trendig"/>
                        </div>
                        <div className="extra content">
                            <span className="left floated text"><strong>Give as a Gift</strong></span>
                            <span className="right floated text">$150-$390</span>
                        </div>
                    </div>
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
                                <div className="ui comments">
                                    <div className="comment">
                                        <a className="avatar">
                                        <img src="../assets/unbox.jpg"/>
                                        </a>
                                        <div className="content" >
                                            <h2 className="ui header" style={{fontFamily:'Times New Roman, Times, serif'}}>Unbox Happiness</h2>
                                            <p className="text" >
                                            Every month, a plant and planter will be shipped to your door to enjoy. Rest assured your box will not repeat the same plant within a 6 month period.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="ui comments">
                                    <div className="comment">
                                        <a className="avatar">
                                        <img src="../assets/pet.jpg" alt="pet"/>
                                        </a>
                                        <div className="content" >
                                            <h2 className="ui header" style={{fontFamily:'Times New Roman, Times, serif'}}>Choose Your Plan</h2>
                                            <p className="text" >
                                            Classic or Pet Friendly. We'll do the work, curating easy-care and non-toxic plants from our local growers--a mix of our top picks and exclusive plants just for subscribers.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="ui comments">
                                    <div className="comment">
                                        <a className="avatar">
                                        <img src="../assets/pick.jpg" alt="pick"/>
                                        </a>
                                        <div className="content" >
                                            <h2 className="ui header" style={{fontFamily:'Times New Roman, Times, serif'}}>Pick Your Planter</h2>
                                            <p className="text" >
                                            Cream or Black. Our chic ceramic planters are designed by our team and manufactured by a women-owned pottery company.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="ui comments">
                                    <div className="comment">
                                        <a className="avatar">
                                        <img src="../assets/learn.jpg"/>
                                        </a>
                                        <div className="content" >
                                            <h2 className="ui header" style={{fontFamily:'Times New Roman, Times, serif'}}>Learn About Plants</h2>
                                            <p className="text" >
                                            Learn about your new plant by visiting our digital Care Library, or check your email inbox for a monthly video on your plant of the month from our in-house expert.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="ui comments">
                                    <div className="comment">
                                        <a className="avatar">
                                        <img src="../assets/unbox.jpg"  alt="sups"/>
                                        </a>
                                        <div className="content" >
                                            <h2 className="ui header" style={{fontFamily:'Times New Roman, Times, serif'}}>Enjoy Monthly,Guaranteed</h2>
                                            <p className="text" >
                                            Our subscription sets you up for plant parenthood success. We guarantee our plants arrive in happy, healthy condition, or we replace them for free.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="ui comments">
                                    <div className="comment">
                                        <a className="avatar">
                                        <img src="../assets/gift.jpg" alt="gift"/>
                                        </a>
                                        <div className="content" >
                                            <h2 className="ui header" style={{fontFamily:'Times New Roman, Times, serif'}}>Gift a Subscription</h2>
                                            <p className="text" >
                                            Master the art of gift giving with a plant subscription box. We offer digital subscription gift cards that cover the cost of 3-month and 6-month subscription plans.
                                            </p>
                                        </div>
                                    </div>
                                </div>
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

export default Sub;