const Footer =()=>{
    return(
        <div className="ui vertical segment">
            <div className="ui container">
                <div className="ui center aligned grid">
                        <div className="center aligned three column row">
                            <div className="column">
                                <div className="ui vertical text menu">
                                    <div className="active item">FAQ</div>
                                    <div className="item">Shipping nfo</div>
                                    <div className="item">Contact Us</div>
                                    <div className="item">About Us</div>
                                </div>
                            </div>
                            <div className="column">
                                <div className="header item"><h1>Get the dirt</h1></div>
                                <br/>
                                <i className="thumbs up outline icon" style={{fontSize:'2em'}}></i>
                                <i className="twitter icon"style={{fontSize:'2em'}}></i>
                                <i className="linkedin icon"style={{fontSize:'2em'}}></i>
                                <i className="instagram icon"style={{fontSize:'2em'}}></i>
                                <i className="pinterest icon"style={{fontSize:'2em'}}></i>
                                <i className="youtube icon"style={{fontSize:'2em'}}></i>
                                <i className="tik-tok icon"style={{fontSize:'2em'}}></i>
                                <br/>
                                <br/>
                                <div>
                                    <p>Copyright 2021 Mononoke forest,Inc.</p>
                                    <span>Terms of Use</span>
                                    <span>Privacy Policy</span>
                                    <span>Accessibility Statement</span>
                                    <p>Do Not Sell My Information</p>
                                </div>
                            </div>
                            <div className="column">
                            <div className="ui vertical text menu">
                                    <div className="active item">Our Stores</div>
                                    <div className="item">Gift Cards</div>
                                    <div className="item">Workshops</div>
                                    <div className="item">Plant Care Lbrary</div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Footer;