import { Link } from "react-router-dom";

const Footer =()=>{
    return(
        <div className="ui vertical segment">
            <hr/>
            <div className="ui container">
                <div className="ui center aligned grid">
                        <div className="center aligned three column row">
                            <div className="column">
                                <div className="ui vertical text menu">
                                    <Link to="/shipping"className="active item">Shipping info</Link>
                                    <Link to="/contact" className="item">Contact Us</Link>
                                    <Link to="/about" className="item">About Us</Link>
                                </div>
                            </div>
                            <div className="column">
                                <div className="header item"><h1>Get the dirt</h1></div>
                                <br/>
                                <div style={{fontSize:'2em'}}>
                                    <a href="https://www.facebook.com/"><i className="thumbs up outline icon"></i></a>
                                    <a href="https://www.twitter.com/"><i className="twitter icon"></i></a>
                                    <a href="https://www.linkedin.com/"><i className="linkedin icon"></i></a>
                                    <a href="https://www.instagram.com/"><i className="instagram icon"></i></a>
                                    <a href="https://www.pinterest.com/"><i className="pinterest icon"></i></a>
                                    <a href="https://www.youtube.com/"><i className="youtube icon"></i></a>
                                </div>
                                
                                <br/>
                                <br/>
                                <div>
                                    <p>Copyright 2021 Mononoke forest,Inc.</p>
                                    <span> Terms of Use&nbsp;</span>
                                    <span> Privacy Policy &nbsp;</span>
                                    <span>Accessibility &nbsp; Statement</span>
                                    <p>Do Not Sell My Information</p>
                                </div>
                            </div>
                            <div className="column">
                            <div className="ui vertical text menu">
                                    <Link to="/stores" className="active item">Our Stores</Link>
                                    <Link to="/gift" className="item">Gift Cards</Link>
                                    <Link to='/stores' className="item">Workshops</Link>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Footer;